# `bublik.json`

`bublik.json` is the main database import payload. <br />
It contains the execution plan and the full iteration tree (packages/tests) with
results, parameters, and optional measurements/artifacts.

This page describes the generic `bublik.json` contract.

## Key ideas

- **Plan** (`plan`): the intended structure (packages/tests) used for navigation and aggregation.
- **Iterations** (`iters`): the executed tree with timestamps, results, and per-node data.
- Use `pkg` for non-leaf containers such as the suite root, packages, subpackages, or logical test groups.
- Use `test` for executable leaf nodes (single test executions / iterations).

## Data Contract

Validate this file against [**JSON schema**](./assets/bublik-json-schema.json).

:::warning
TODO: Add link to properly maintained schema once it's ready <br />

This schema might be incomplete and contain errors but generally should be correct. <br />
Use this as a starting point.
:::

## Timestamp format

`start_ts` / `end_ts` are strings in the format:

```text
YYYY.MM.DD HH:MM:SS.mmm
```

## Minimal shape (skeleton)

This is a minimal *shape* example (real files typically have more nodes/fields):

```json
{
  "start_ts": "2026.04.21 12:00:00.000",
  "end_ts": "2026.04.21 12:00:24.000",
  "plan": {
    "name": "example-ci",
    "type": "pkg",
    "children": [
      { "name": "prologue", "type": "test" },
      { "name": "throughput", "type": "test" }
    ]
  },
  "iters": [
    {
      "name": "example-ci",
      "type": "pkg",
      "params": {},
      "hash": "",
      "start_ts": "2026.04.21 12:00:00.000",
      "end_ts": "2026.04.21 12:00:24.000",
      "tin": -1,
      "test_id": 1,
      "plan_id": 0,
      "objective": "",
      "reqs": [],
      "err": "",
      "obtained": { "result": { "status": "FAILED" } },
      "iters": [
        {
          "name": "throughput",
          "type": "test",
          "params": { "block_size": "128k", "duration_sec": "10" },
          "hash": "md5-of-stable-node-identity",
          "start_ts": "2026.04.21 12:00:02.000",
          "end_ts": "2026.04.21 12:00:12.200",
          "tin": 0,
          "test_id": 2,
          "plan_id": 1,
          "objective": "",
          "reqs": [],
          "err": "Unexpected test result(s)",
          "obtained": {
            "result": {
              "status": "FAILED",
              "verdicts": ["Bandwidth below threshold"],
              "artifacts": ["report_json: artifacts/throughput_iter0.json"]
            }
          },
          "expected": { "results": [{ "status": "PASSED" }] },
          "iters": [],
          "path": ["example-ci", "throughput"],
          "path_str": "example-ci/throughput",
          "measurements": [
            {
              "type": "measurement",
              "version": 1,
              "tool": "example",
              "keys": { "Stage": "throughput", "Side": "READ" },
              "comments": { "Run msec": 10000 },
              "results": []
            }
          ]
        }
      ],
      "path": ["example-ci"],
      "path_str": "example-ci"
    }
  ],
  "tags": {
    "tester": "example-ci",
    "device": "lab-host-01",
    "source_log": "example_raw.log"
  }
}
```

## Mapping nested hierarchies

Raw logs often contain nested structures such as `package -> package -> package
-> iteration`. In `bublik.json`, map that as nested `pkg` nodes ending in leaf
`test` nodes.

Example shape:

```text
example-ci (pkg)
└── io (pkg)
    └── throughput (pkg)
        └── rw (pkg)
            ├── throughput (test, tin=0)
            └── throughput (test, tin=1)
```

Recommended rules:

- `plan` describes the intended hierarchy once.
- `iters` describes the executed hierarchy with timestamps, results, and params on each node.
- If one logical test has multiple iterations, prefer a parent grouping node for the logical test and one leaf `test` node per iteration.
- Package nodes typically use `tin: -1`; executable leaf tests use `tin >= 0`.
- `path` and `path_str` should reflect the full ancestry from root to the current node.

## Prologue node

`prologue` is commonly represented as an ordinary root child `test` node.

Recommended rules:

- Use it for setup or smoke checks that happen before the main package hierarchy.
- Keep it as the first `test` entry under the root node in both `plan.children` and the root iteration tree.
- Keep prologue-specific params, objective, verdicts, artifacts, and result data on that prologue node.
- If the prologue is a single one-off setup test, it may use `tin: -1`.

## Parameter scope

Use `params` on the node whose scope matches the data:

- **Package params:** values shared by every descendant in that package subtree.
- **Logical-test params:** values shared by all iterations of one logical test. If the logical test is modeled as a parent `pkg`, store shared params on that parent node.
- **Iteration params:** values specific to one concrete execution of the test.

Recommended mapping from raw logs:

- `MI: PACKAGE_PARAM key=<name> value=<value>` → current open `pkg.params`.
- `MI: TEST_PARAM key=<name> value=<value>` → current logical test node `params`.
- `MI: ITERATION_PARAM key=<name> value=<value>` → current leaf `test.params`.
- `MI: PROLOGUE_PARAM key=<name> value=<value>` → dedicated prologue node `params`.

## Objective field

`objective` is a short human-readable description of what the node is checking or
why that package or test exists. The UI can show it in node metadata and detail
views.

Recommended usage:

- **Package objective:** describe the purpose of the package or test group.
- **Logical-test objective:** describe the common intent shared by all its iterations.
- **Iteration objective:** usually keep the same objective as the logical test unless one iteration has a materially different purpose.

Recommended mapping from raw logs:

- `MI: PACKAGE_OBJECTIVE text="<...>"` → current open package node `objective`.
- `MI: TEST_OBJECTIVE text="<...>"` → current logical test node `objective`.
- `MI: ITERATION_OBJECTIVE text="<...>"` → current leaf test node `objective`.
- `MI: PROLOGUE_OBJECTIVE text="<...>"` → dedicated prologue node `objective`.

If raw logs do not provide an explicit objective, use an empty string or a
stable adapter-defined fallback. Do not derive `objective` from transient
runtime values that should instead live in `params`.

## Tags field

Top-level `tags` are optional run-level tags.

Use them for lightweight run descriptors such as:

- `tester`
- `device`
- `source_log`
- `log_dir`

Recommended rules:

- Keep `tags` at the top level of `bublik.json`, not on individual iteration nodes.
- Use `tags` for convenient run labeling and filtering, not for run identity.
- Keep project selection, run status, and run-key metas in `meta_data.json`.
- Prefer short stable string values.

## Common node fields

Every iteration-tree node typically carries:

- `name`, `type`, `params`, `objective`, `start_ts`, `end_ts`
- `tin`, `test_id`, `plan_id`, `path`, `path_str`
- `obtained`, `err`, `iters`
- optionally `expected`, `measurements`, `reqs`, `hash`

## Results fields (per node)

- `obtained.result.status`: one of `PASSED`, `FAILED`, `KILLED`, `CORED`, `SKIPPED`, `FAKED`, `INCOMPLETE`.
- `obtained.result.verdicts` (optional): list of strings.
- `obtained.result.artifacts` (optional): list of strings.
- `expected.results` (optional): list of expected statuses/verdicts (used to mark results as expected/unexpected).
