#!/usr/bin/env python3

import argparse
import hashlib
import json
import shlex
import shutil
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple


HEADER_RE = (
    r"^(?P<ts>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3}):"
    r"\[(?P<level>[^\]]+)\]"
    r"\[(?P<entity>[^\]]+)\]\s+(?P<message>.*)$"
)
MI_PREFIX = "MI: "
RAW_TS_FORMAT = "%Y-%m-%d %H:%M:%S,%f"
BUBLIK_TS_FORMAT = "%Y.%m.%d %H:%M:%S.%f"
FORMAT_VERSION = "2"
RESULT_STATUSES = {
    "PASSED",
    "FAILED",
    "KILLED",
    "CORED",
    "SKIPPED",
    "FAKED",
    "INCOMPLETE",
}
DEFAULT_UNEXPECTED_ERR = "Unexpected test result(s)"
KNOWN_LEVELS = {"ERROR", "WARN", "INFO", "VERB", "PACKET", "RING"}


@dataclass
class LogMessage:
    line_number: int
    raw_ts: str
    level: str
    entity: str
    message: str

    @property
    def bublik_ts(self) -> str:
        return raw_ts_to_bublik(self.raw_ts)

    @property
    def timestamp_seconds(self) -> float:
        return raw_ts_to_datetime(self.raw_ts).timestamp()


@dataclass
class LogEvent:
    raw_ts: str
    level: str
    entity: str
    user_name: str
    content_type: str
    content: Any
    use_main_entity: bool = True

    @property
    def bublik_ts(self) -> str:
        return raw_ts_to_bublik(self.raw_ts)

    @property
    def timestamp_seconds(self) -> float:
        return raw_ts_to_datetime(self.raw_ts).timestamp()


@dataclass
class Node:
    name: str
    type: str
    start_ts: str
    objective: str = ""
    parent: Optional["Node"] = None
    tin: int = -1
    params: Dict[str, str] = field(default_factory=dict)
    reqs: List[str] = field(default_factory=list)
    children: List["Node"] = field(default_factory=list)
    events: List[LogEvent] = field(default_factory=list)
    artifacts: List[str] = field(default_factory=list)
    verdicts: List[str] = field(default_factory=list)
    measurements: List[dict] = field(default_factory=list)
    expected_status: str = "PASSED"
    err: str = ""
    explicit_status: Optional[str] = None
    end_ts: Optional[str] = None
    hash: str = ""
    test_id: int = 0
    plan_id: int = 0
    path: List[str] = field(default_factory=list)
    path_str: str = ""
    def add_child(self, child: "Node") -> None:
        child.parent = self
        self.children.append(child)

    def status(self) -> str:
        if self.explicit_status:
            return self.explicit_status
        if not self.children:
            return "INCOMPLETE"
        child_statuses = [child.status() for child in self.children]
        if any(status in {"FAILED", "KILLED", "CORED"} for status in child_statuses):
            return "FAILED"
        if any(status == "INCOMPLETE" for status in child_statuses):
            return "INCOMPLETE"
        if any(status == "FAKED" for status in child_statuses):
            return "FAKED"
        if any(status == "SKIPPED" for status in child_statuses):
            return "SKIPPED"
        return "PASSED"


def local_timezone() -> timezone:
    return datetime.now().astimezone().tzinfo or timezone.utc


def raw_ts_to_datetime(ts: str) -> datetime:
    return datetime.strptime(ts, RAW_TS_FORMAT).replace(tzinfo=local_timezone())


def raw_ts_to_bublik(ts: str) -> str:
    return raw_ts_to_datetime(ts).strftime(BUBLIK_TS_FORMAT)[:-3]


def raw_ts_to_iso(ts: str) -> str:
    return raw_ts_to_datetime(ts).isoformat(timespec="milliseconds")


def bublik_ts_to_datetime(ts: str) -> datetime:
    return datetime.strptime(ts, BUBLIK_TS_FORMAT)


def bublik_ts_to_iso(ts: str) -> str:
    return bublik_ts_to_datetime(ts).replace(tzinfo=local_timezone()).isoformat(timespec="milliseconds")


def time_part(ts: str) -> str:
    return ts.split(" ", 1)[1]


def duration_str(start_ts: str, end_ts: str) -> str:
    start = bublik_ts_to_datetime(start_ts)
    end = bublik_ts_to_datetime(end_ts)
    total_ms = max(0, int((end - start).total_seconds() * 1000))
    total_seconds, ms = divmod(total_ms, 1000)
    minutes, seconds = divmod(total_seconds, 60)
    hours, minutes = divmod(minutes, 60)
    return f"{hours}:{minutes}:{seconds}.{ms:03}"


def status_level(status: str) -> str:
    if status == "PASSED":
        return "RING"
    if status in {"FAILED", "KILLED", "CORED"}:
        return "ERROR"
    if status in {"SKIPPED", "FAKED", "INCOMPLETE"}:
        return "WARN"
    return "INFO"


def stable_hash(name: str, params: Dict[str, str]) -> str:
    payload = json.dumps({"name": name, "params": params}, sort_keys=True, separators=(",", ":"))
    return hashlib.md5(payload.encode("utf-8")).hexdigest()


def parse_messages(log_path: Path) -> List[LogMessage]:
    import re

    header_re = re.compile(HEADER_RE)
    messages: List[LogMessage] = []
    with log_path.open("r", encoding="utf-8") as stream:
        for line_number, raw_line in enumerate(stream, start=1):
            line = raw_line.rstrip("\n")
            match = header_re.match(line)
            if not match:
                continue
            messages.append(
                LogMessage(
                    line_number=line_number,
                    raw_ts=match.group("ts"),
                    level=match.group("level").strip(),
                    entity=match.group("entity").strip(),
                    message=match.group("message"),
                )
            )
    return messages


def parse_mi_record(text: str) -> Optional[Tuple[str, Dict[str, str]]]:
    if not text.startswith(MI_PREFIX):
        return None
    payload = text[len(MI_PREFIX) :].strip()
    if payload == "":
        raise ValueError("Empty MI record")

    tokens = shlex.split(payload)
    if not tokens:
        raise ValueError("Empty MI record")

    event = tokens[0]
    fields: Dict[str, str] = {}
    for token in tokens[1:]:
        if "=" not in token:
            raise ValueError(f"Invalid MI token without '=': {token}")
        key, value = token.split("=", 1)
        fields[key] = value
    return event, fields


def require_fields(event: str, fields: Dict[str, str], required: List[str]) -> None:
    missing = [name for name in required if name not in fields]
    if missing:
        raise ValueError(f"{event} is missing required field(s): {', '.join(missing)}")


def ensure_status(value: str) -> str:
    if value not in RESULT_STATUSES:
        raise ValueError(f"Unsupported status: {value}")
    return value


def upsert_meta(metas: List[dict], item: dict) -> None:
    for index, existing in enumerate(metas):
        if existing["name"] == item["name"]:
            metas[index] = item
            return
    metas.append(item)


def add_text_event(
    node: Node,
    message: LogMessage,
    user_name: str,
    content: str,
    *,
    use_main_entity: bool = True,
    entity: Optional[str] = None,
    level: Optional[str] = None,
) -> None:
    node.events.append(
        LogEvent(
            raw_ts=message.raw_ts,
            level=level or message.level,
            entity=entity or node.name,
            user_name=user_name,
            content_type="text",
            content=content,
            use_main_entity=use_main_entity,
        )
    )


def add_measurement_event(node: Node, message: LogMessage, payload: dict) -> None:
    node.measurements.append(payload)
    node.events.append(
        LogEvent(
            raw_ts=message.raw_ts,
            level="MI",
            entity=node.name,
            user_name="Artifact",
            content_type="mi",
            content=payload,
            use_main_entity=True,
        )
    )


def format_result_content(fields: Dict[str, str]) -> str:
    parts = [f"status={fields['status']}"]
    if "expected" in fields:
        parts.append(f"expected={fields['expected']}")
    if "err" in fields:
        parts.append(f"err={fields['err']}")
    return "RESULT " + " ".join(parts)


def apply_result(node: Node, message: LogMessage, fields: Dict[str, str]) -> None:
    require_fields("RESULT", fields, ["status"])
    status = ensure_status(fields["status"])
    expected = fields.get("expected")
    if expected is not None:
        expected = ensure_status(expected)
        node.expected_status = expected
    node.explicit_status = status
    err = fields.get("err", "")
    if expected is not None and expected != status and err == "":
        err = DEFAULT_UNEXPECTED_ERR
    node.err = err
    row_fields = dict(fields)
    if err != "":
        row_fields["err"] = err
    add_text_event(node, message, "Self", format_result_content(row_fields), use_main_entity=True)


def build_measurement(fields: Dict[str, str], node_name: str) -> dict:
    require_fields("MEASUREMENT", fields, ["name", "value"])
    try:
        value = float(fields["value"])
    except ValueError as exc:
        raise ValueError(f"MEASUREMENT value must be numeric: {fields['value']}") from exc

    name = fields["name"]
    tool = fields.get("tool", "raw-log-example")
    aggr = fields.get("aggr", "single")
    units = fields.get("units", "")
    keys: Dict[str, str] = {"Stage": fields.get("stage", node_name)}
    if "side" in fields:
        keys["Side"] = fields["side"]

    measurement = {
        "type": "measurement",
        "version": 1,
        "tool": tool,
        "keys": keys,
        "comments": {},
        "results": [
            {
                "type": "metric",
                "name": name,
                "description": name,
                "entries": [
                    {
                        "aggr": aggr,
                        "value": value,
                        "base_units": units,
                        "multiplier": 1,
                    }
                ],
            }
        ],
        "views": [],
    }
    return measurement


def close_node(node: Node, message: LogMessage, status: str) -> None:
    node.end_ts = message.bublik_ts
    normalized = ensure_status(status)
    if node.explicit_status is not None and node.explicit_status != normalized:
        raise ValueError(f"Status mismatch for {node.name}: {node.explicit_status} != {normalized}")
    node.explicit_status = normalized


def current_text_target(
    root: Optional[Node],
    package_stack: List[Node],
    current_test: Optional[Node],
    current_iteration: Optional[Node],
) -> Optional[Node]:
    if current_iteration is not None:
        return current_iteration
    if current_test is not None:
        return current_test
    if package_stack:
        return package_stack[-1]
    return root


def parse_raw_log(messages: List[LogMessage]) -> Tuple[Node, List[dict], Dict[str, str]]:
    if not messages:
        raise ValueError("Raw log is empty")

    root: Optional[Node] = None
    current_test: Optional[Node] = None
    current_iteration: Optional[Node] = None
    package_stack: List[Node] = []
    run_metas: List[dict] = []
    run_tags: Dict[str, str] = {}
    seen_format_version = False

    for message in messages:
        parsed = parse_mi_record(message.message)
        if parsed is None:
            target = current_text_target(root, package_stack, current_test, current_iteration)
            if target is not None:
                add_text_event(
                    target,
                    message,
                    "Self",
                    message.message,
                    use_main_entity=message.entity == target.name,
                    entity=message.entity,
                )
            continue

        event, fields = parsed

        if event == "FORMAT_VERSION":
            require_fields(event, fields, ["value"])
            if fields["value"] != FORMAT_VERSION:
                raise ValueError(f"Unsupported FORMAT_VERSION: {fields['value']}")
            seen_format_version = True
            continue

        if event == "RUN_START":
            require_fields(event, fields, ["name"])
            if root is not None:
                raise ValueError("RUN_START encountered more than once")
            root = Node(name=fields["name"], type="pkg", start_ts=message.bublik_ts)
            continue

        if root is None:
            raise ValueError(f"Encountered {event} before RUN_START")

        if event == "RUN_META":
            require_fields(event, fields, ["key", "value"])
            item = {"name": fields["key"], "value": fields["value"]}
            if "type" in fields:
                item["type"] = fields["type"]
            upsert_meta(run_metas, item)
            continue

        if event == "RUN_TAG":
            require_fields(event, fields, ["key", "value"])
            run_tags[fields["key"]] = fields["value"]
            continue

        if event == "RUN_OBJECTIVE":
            require_fields(event, fields, ["text"])
            root.objective = fields["text"]
            continue

        if event == "PACKAGE_START":
            require_fields(event, fields, ["name"])
            if current_test or current_iteration:
                raise ValueError("PACKAGE_START requires no open test/iteration")
            package = Node(name=fields["name"], type="pkg", start_ts=message.bublik_ts)
            (package_stack[-1] if package_stack else root).add_child(package)
            package_stack.append(package)
            continue

        if event == "PACKAGE_PARAM":
            require_fields(event, fields, ["key", "value"])
            if not package_stack:
                raise ValueError("PACKAGE_PARAM requires an open package")
            package_stack[-1].params[fields["key"]] = fields["value"]
            continue

        if event == "PACKAGE_OBJECTIVE":
            require_fields(event, fields, ["text"])
            if not package_stack:
                raise ValueError("PACKAGE_OBJECTIVE requires an open package")
            package_stack[-1].objective = fields["text"]
            continue

        if event == "PACKAGE_END":
            require_fields(event, fields, ["name"])
            if not package_stack or package_stack[-1].name != fields["name"]:
                raise ValueError("PACKAGE_END does not match the open package")
            package_stack[-1].end_ts = message.bublik_ts
            package_stack.pop()
            continue

        if event == "TEST_START":
            require_fields(event, fields, ["name"])
            if current_test or current_iteration:
                raise ValueError("TEST_START requires no open test/iteration")
            if package_stack:
                current_test = Node(name=fields["name"], type="pkg", start_ts=message.bublik_ts)
                package_stack[-1].add_child(current_test)
            else:
                current_test = Node(name=fields["name"], type="test", start_ts=message.bublik_ts, tin=-1)
                root.add_child(current_test)
            continue

        if event == "TEST_PARAM":
            require_fields(event, fields, ["key", "value"])
            if current_test is None:
                raise ValueError("TEST_PARAM requires an open test")
            current_test.params[fields["key"]] = fields["value"]
            continue

        if event == "TEST_OBJECTIVE":
            require_fields(event, fields, ["text"])
            if current_test is None:
                raise ValueError("TEST_OBJECTIVE requires an open test")
            current_test.objective = fields["text"]
            continue

        if event == "TEST_END":
            require_fields(event, fields, ["name", "status"])
            if current_test is None or current_iteration is not None or current_test.name != fields["name"]:
                raise ValueError("TEST_END does not match the open test")
            close_node(current_test, message, fields["status"])
            current_test = None
            continue

        if event == "ITERATION_START":
            require_fields(event, fields, ["name", "tin"])
            if current_test is None or current_iteration is not None:
                raise ValueError("ITERATION_START requires an open test and no open iteration")
            current_iteration = Node(
                name=fields["name"],
                type="test",
                start_ts=message.bublik_ts,
                tin=int(fields["tin"]),
            )
            current_test.add_child(current_iteration)
            continue

        if event == "ITERATION_PARAM":
            require_fields(event, fields, ["key", "value"])
            if current_iteration is None:
                raise ValueError("ITERATION_PARAM requires an open iteration")
            current_iteration.params[fields["key"]] = fields["value"]
            continue

        if event == "ITERATION_OBJECTIVE":
            require_fields(event, fields, ["text"])
            if current_iteration is None:
                raise ValueError("ITERATION_OBJECTIVE requires an open iteration")
            current_iteration.objective = fields["text"]
            continue

        if event in {"STEP", "STEP_PUSH", "STEP_POP"}:
            require_fields(event, fields, ["text"])
            target = current_iteration or current_test
            if target is None or (target.type == "pkg" and current_iteration is None):
                raise ValueError(f"{event} requires an open iteration or leaf test")
            user_name = {
                "STEP": "Step",
                "STEP_PUSH": "StepPush",
                "STEP_POP": "StepPop",
            }[event]
            add_text_event(target, message, user_name, fields["text"], use_main_entity=True)
            continue

        if event == "RESULT":
            target = current_iteration or current_test
            if target is None or (target.type == "pkg" and current_iteration is None):
                raise ValueError("RESULT requires an open iteration or leaf test")
            apply_result(target, message, fields)
            continue

        if event == "VERDICT":
            require_fields(event, fields, ["text"])
            target = current_iteration or current_test
            if target is None or (target.type == "pkg" and current_iteration is None):
                raise ValueError("VERDICT requires an open iteration or leaf test")
            target.verdicts.append(fields["text"])
            add_text_event(
                target,
                message,
                "Verdict",
                fields["text"],
                use_main_entity=True,
                level=status_level(target.status()),
            )
            continue

        if event == "ARTIFACT":
            require_fields(event, fields, ["name", "value"])
            target = current_iteration or current_test
            if target is None or (target.type == "pkg" and current_iteration is None):
                raise ValueError("ARTIFACT requires an open iteration or leaf test")
            artifact = f"{fields['name']}: {fields['value']}"
            target.artifacts.append(artifact)
            add_text_event(target, message, "Artifact", artifact, use_main_entity=True)
            continue

        if event == "MEASUREMENT":
            target = current_iteration or current_test
            if target is None or (target.type == "pkg" and current_iteration is None):
                raise ValueError("MEASUREMENT requires an open iteration or leaf test")
            add_measurement_event(target, message, build_measurement(fields, target.name))
            continue

        if event == "ITERATION_END":
            require_fields(event, fields, ["name", "tin", "status"])
            if (
                current_iteration is None
                or current_iteration.name != fields["name"]
                or current_iteration.tin != int(fields["tin"])
            ):
                raise ValueError("ITERATION_END does not match the open iteration")
            close_node(current_iteration, message, fields["status"])
            current_iteration = None
            continue

        if event == "RUN_END":
            require_fields(event, fields, ["name"])
            if fields["name"] != root.name:
                raise ValueError("RUN_END does not match the open run")
            if current_test or current_iteration or package_stack:
                raise ValueError("RUN_END encountered with open scopes")
            root.end_ts = message.bublik_ts
            continue

        raise ValueError(f"Unsupported MI event: {event}")

    if not seen_format_version:
        raise ValueError("FORMAT_VERSION is required")
    if root is None:
        raise ValueError("RUN_START is required")
    if current_test or current_iteration or package_stack:
        raise ValueError("Raw log ended with unclosed scopes")
    if root.end_ts is None:
        root.end_ts = messages[-1].bublik_ts
    return root, run_metas, run_tags


def finalize_tree(root: Node) -> None:
    next_plan_id = 0
    next_test_id = 1

    def walk(node: Node, path: List[str]) -> None:
        nonlocal next_plan_id, next_test_id
        node.path = [*path, node.name]
        node.path_str = "/".join(node.path)
        node.plan_id = next_plan_id
        next_plan_id += 1
        node.test_id = next_test_id
        next_test_id += 1
        node.hash = stable_hash(node.name, node.params) if node.type == "test" else ""
        if node.end_ts is None:
            node.end_ts = node.children[-1].end_ts if node.children else node.start_ts
        for child in node.children:
            walk(child, node.path)

    walk(root, [])


def plan_for_node(node: Node) -> dict:
    payload = {"name": node.name, "type": node.type}
    if node.children:
        payload["children"] = [plan_for_node(child) for child in node.children]
    return payload


def build_plan(root: Node) -> dict:
    plan = {"name": root.name, "type": "pkg"}
    if root.children:
        plan["children"] = [plan_for_node(child) for child in root.children]
    return plan


def bublik_node(node: Node) -> dict:
    payload = {
        "name": node.name,
        "type": node.type,
        "params": node.params,
        "hash": node.hash,
        "start_ts": node.start_ts,
        "end_ts": node.end_ts,
        "tin": node.tin,
        "test_id": node.test_id,
        "plan_id": node.plan_id,
        "objective": node.objective,
        "reqs": node.reqs,
        "err": node.err,
        "obtained": {"result": {"status": node.status()}},
        "iters": [bublik_node(child) for child in node.children],
        "path": node.path,
        "path_str": node.path_str,
    }
    if node.verdicts:
        payload["obtained"]["result"]["verdicts"] = node.verdicts
    if node.artifacts:
        payload["obtained"]["result"]["artifacts"] = node.artifacts
    if node.type == "test":
        payload["expected"] = {"results": [{"status": node.expected_status}]}
    if node.measurements:
        payload["measurements"] = node.measurements
    return payload


def ensure_meta(metas: List[dict], name: str, value: str, meta_type: Optional[str] = None) -> None:
    item = {"name": name, "value": value}
    if meta_type is not None:
        item["type"] = meta_type
    upsert_meta(metas, item)


def meta_data(root: Node, run_metas: List[dict], project: Optional[str]) -> dict:
    metas = [dict(item) for item in run_metas]
    if project:
        ensure_meta(metas, "PROJECT", project)
    ensure_meta(metas, "TS_NAME", root.name)
    ensure_meta(metas, "START_TIMESTAMP", bublik_ts_to_iso(root.start_ts), "timestamp")
    ensure_meta(metas, "FINISH_TIMESTAMP", bublik_ts_to_iso(root.end_ts), "timestamp")
    ensure_meta(metas, "RUN_STATUS", "DONE")
    ensure_meta(metas, "RUN_OK", "true" if root.status() == "PASSED" else "false")
    return {"version": 1, "metas": metas}


def timestamp_payload_from_bublik(ts: str) -> dict:
    dt = bublik_ts_to_datetime(ts).replace(tzinfo=local_timezone())
    return {"timestamp": dt.timestamp(), "formatted": time_part(ts)}


def text_content(content: str) -> List[dict]:
    return [{"type": "te-log-table-content-text", "content": content}]


def mi_content(content: dict) -> List[dict]:
    return [{"type": "te-log-table-content-mi", "content": content}]


def table_entity_name(node: Node) -> str:
    return node.name


def entity_model_for_node(node: Node) -> dict:
    entity = "Package" if node.type == "pkg" else "Test"
    model = {
        "id": str(node.test_id),
        "name": node.name,
        "entity": entity,
        "result": node.status(),
        "extended_properties": {"path": node.path_str},
    }
    if node.err:
        model["error"] = node.err
    if node.type == "test":
        model["extended_properties"]["tin"] = str(node.tin)
        model["extended_properties"]["hash"] = node.hash
    return model


def meta_for_node(node: Node) -> dict:
    payload = {
        "start": time_part(node.start_ts),
        "end": time_part(node.end_ts),
        "duration": duration_str(node.start_ts, node.end_ts),
    }
    if node.objective:
        payload["objective"] = node.objective
    if node.params:
        payload["params"] = node.params
    if node.verdicts:
        payload["verdicts"] = [{"verdict": verdict, "level": status_level(node.status())} for verdict in node.verdicts]
    if node.artifacts:
        payload["artifacts"] = node.artifacts
    if node.err:
        payload["err"] = node.err
    return payload


def table_rows_for_node(node: Node) -> List[dict]:
    next_line_number = 1

    def next_line() -> int:
        nonlocal next_line_number
        value = next_line_number
        next_line_number += 1
        return value

    def make_text_row(level: str, entity_name: str, user_name: str, ts: str, content: str) -> dict:
        return {
            "line_number": next_line(),
            "level": level,
            "entity_name": entity_name,
            "user_name": user_name,
            "timestamp": timestamp_payload_from_bublik(ts),
            "log_content": text_content(content),
        }

    def make_event_row(event: LogEvent, main_entity_name: str) -> dict:
        entity_name = main_entity_name if event.use_main_entity else event.entity
        level = "MI" if event.content_type == "mi" else event.level.upper().strip()
        if level not in KNOWN_LEVELS and level != "MI":
            level = "INFO"
        if level == "INFO":
            level = "RING"
        content = mi_content(event.content) if event.content_type == "mi" else text_content(str(event.content))
        return {
            "line_number": next_line(),
            "level": level,
            "entity_name": entity_name,
            "user_name": event.user_name,
            "timestamp": {
                "timestamp": event.timestamp_seconds,
                "formatted": time_part(event.bublik_ts),
            },
            "log_content": content,
        }

    if node.children:
        rows = []
        for child in node.children:
            description = f"{child.name} {'test' if child.type == 'test' else 'package'} start"
            if child.objective:
                description = f"{description}\n{child.objective}"
            rows.append(
                make_text_row(
                    status_level(child.status()),
                    table_entity_name(child),
                    "Step",
                    child.start_ts,
                    description,
                )
            )
        return rows

    main_entity_name = table_entity_name(node)
    rows = [
        make_text_row("INFO", main_entity_name, "TAPI Jumps", node.start_ts, "Main test entity"),
        make_text_row(
            status_level(node.status()),
            main_entity_name,
            "Step",
            node.start_ts,
            f"{node.name} start" + (f"\n{node.objective}" if node.objective else ""),
        ),
    ]

    for event in node.events:
        rows.append(make_event_row(event, main_entity_name))

    rows.append(
        make_text_row(
            status_level(node.status()),
            "Tester",
            "Run",
            node.end_ts,
            f"Obtained result is:\n{node.status()}",
        )
    )
    return rows


def log_json_for_node(node: Node) -> dict:
    content = [
        {
            "type": "te-log-meta",
            "entity_model": entity_model_for_node(node),
            "meta": meta_for_node(node),
        }
    ]
    if node.children:
        content.append(
            {
                "type": "te-log-entity-list",
                "items": [entity_model_for_node(child) for child in node.children],
            }
        )
    content.append({"type": "te-log-table", "data": table_rows_for_node(node)})
    return {"version": "v1", "root": [{"type": "te-log", "content": content}]}


def tree_entry_for_node(node: Node, file_name: str, child_files: List[str]) -> dict:
    entry = {
        "id": file_name,
        "name": node.name,
        "has_error": node.status() not in {"PASSED", "SKIPPED"},
        "skipped": node.status() == "SKIPPED",
        "entity": node.type,
    }
    if child_files:
        entry["children"] = child_files
    return entry


def write_json(path: Path, payload: dict, pretty: bool) -> None:
    with path.open("w", encoding="utf-8") as stream:
        if pretty:
            json.dump(payload, stream, indent=2)
            stream.write("\n")
        else:
            json.dump(payload, stream)


def write_bundle(
    root: Node,
    run_metas: List[dict],
    run_tags: Dict[str, str],
    source_log: Path,
    output_dir: Path,
    project: Optional[str],
    pretty: bool,
) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source_log, output_dir / source_log.name)

    write_json(
        output_dir / "bublik.json",
        {
            "start_ts": root.start_ts,
            "end_ts": root.end_ts,
            "plan": build_plan(root),
            "iters": [bublik_node(root)],
            "tags": run_tags,
        },
        pretty,
    )
    write_json(output_dir / "meta_data.json", meta_data(root, run_metas, project), pretty)

    json_dir = output_dir / "json"
    json_dir.mkdir(exist_ok=True)
    tree: Dict[str, dict] = {}

    def write_node(node: Node, is_root: bool = False) -> str:
        file_name = "node_1_0.json" if is_root else f"node_id{node.test_id}.json"
        child_files = [write_node(child) for child in node.children]
        payload = log_json_for_node(node)
        write_json(json_dir / file_name, payload, pretty)
        if is_root:
            write_json(json_dir / "node_id1.json", payload, pretty)
        tree[file_name] = tree_entry_for_node(node, file_name, child_files)
        return file_name

    write_node(root, is_root=True)
    write_json(json_dir / "tree.json", {"main_package": "node_1_0.json", "tree": tree}, pretty)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Create a Bublik import bundle from the MI v2 raw-log example format."
    )
    parser.add_argument("raw_log", type=Path, help="Path to the raw log file")
    parser.add_argument("-o", "--output-dir", type=Path, required=True, help="Bundle output directory")
    parser.add_argument("--project", default=None, help="Fallback PROJECT meta value if the raw log does not provide one")
    parser.add_argument("--pretty", action="store_true", help="Pretty-print JSON output")
    args = parser.parse_args()

    messages = parse_messages(args.raw_log)
    root, run_metas, run_tags = parse_raw_log(messages)
    finalize_tree(root)
    write_bundle(root, run_metas, run_tags, args.raw_log, args.output_dir, args.project, args.pretty)
    print(args.output_dir)


if __name__ == "__main__":
    main()
