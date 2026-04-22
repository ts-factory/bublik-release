# UI Log JSON (`json/`)

The `json/` directory is the **log viewer contract**. <br />
**Bublik’s UI** loads these files **directly by URL** to render the run log tree and per-node log pages.

## Data Contract

Node JSON files should conform to [the schema maintained in the Test Environment (TE) repository](https://github.com/ts-factory/test-environment/blob/main/doc/drafts/bublik-log-schema.json)

## Files

### `json/tree.json`

- **Purpose:** navigation index for the UI.
- **Key fields:**
  - `main_package`: filename of the root node JSON (commonly `node_1_0.json`).
  - `tree`: mapping of `filename -> entry`, where package entries may include `children` (filenames of child nodes).

### `json/node_*.json`

- **Purpose:** per-node log payload (root package, packages, and tests).
- **File envelope (top-level shape):**

```json
{
  "version": "v1",
  "root": [
    {
      "type": "te-log",
      "content": [
        { "type": "te-log-meta", "entity_model": {}, "meta": {} },
        { "type": "te-log-entity-list", "items": [] },
        { "type": "te-log-table", "data": [] }
      ]
    }
  ]
}
```

- **Blocks:**
  - `te-log-meta`: entity id/name/result/duration and optional params/verdicts/artifacts.
  - `te-log-entity-list`: present when the node has child iterations (nested entities for tree navigation). May be omitted when there are no children.
  - `te-log-table`: hierarchical log rows in `data`.

## Table rows (minimum fields)

Each row in `te-log-table.data` should include:

- `line_number`
- `level`
- `entity_name`
- `user_name`
- `timestamp`
- `log_content`

Rows may contain nested `children` (recursively).

## Levels (common)

Typical levels used by the UI:

- `ERROR`
- `WARN`
- `INFO`
- `VERB`
- `PACKET`
- `RING`

Custom string levels are allowed; `MI` is commonly used for measurement rows (parents with an `MI` descendant are expanded automatically).

## `user_name` conventions (recommended)

Common `user_name` values used in the ecosystem:

- `TAPI Jumps` (main test navigation marker)
- `Step` (scenario action)
- `StepPush` / `StepPop` (step nesting)
- `Artifact` (artifact/measurement summary rows)
- `Verdict` (verdict rows)
- `Self` (ordinary lines for the current entity)
- `Run` (often used together with `entity_name: "Tester"` for run-level summary rows)

## `#Scenario` and `#Test` mapping

The UI detects the main test entity from the first log row where:

```text
user_name == "TAPI Jumps"
```

The `entity_name` of that row becomes the main test entity for the page.

### Raw-log prerequisites

To make `#Scenario` and `#Test` work correctly, raw logs should provide enough
structure for the adapter to derive:

- the main test entity for each test page;
- scenario-action rows (`Step`, `StepPush`, `StepPop`);
- result rows (`Verdict`, `Artifact`, `Self`, `Run`) tied to the correct entity.
- a stable machine-readable stream, commonly carried in `MI: ...` lines, for
  test boundaries, step boundaries, and structured summaries.

Raw logs do not need to contain the literal UI marker `TAPI Jumps`, but they do
need explicit test boundaries and stable test entity names so the adapter can
emit that row correctly in `json/node_*.json`.

### How `#Test` works

`#Test` shows rows where:

```text
entity_name == <main test entity>
```

### How `#Scenario` works

`#Scenario` commonly includes rows such as:

```text
<main test entity>:Step
<main test entity>:Artifact
<main test entity>:Self
<main test entity>:Verdict
Tester:Run
```

### Recommended mapping rules

- Emit at least one row with `user_name: "TAPI Jumps"` for each test page where
  `#Scenario` / `#Test` should work.
- Set that row's `entity_name` to the logical main test entity for the page.
- Keep ordinary test lines under that same entity with `user_name: "Self"`.
- Keep scenario actions under that same entity with `user_name` values such as
  `Step`, `StepPush`, and `StepPop`.
- Keep verdict and artifact rows under that same entity with `user_name`
  values such as `Verdict` and `Artifact`.
- Keep run-level summary rows under `entity_name: "Tester"` and
  `user_name: "Run"` so they are available as `Tester:Run`.
- Keep helper or secondary logs under their real source entities instead of
  moving everything under the main test entity just to satisfy filters.

### Common failure mode

If no `TAPI Jumps` row is present, the UI may not detect the main test entity,
and `#Scenario` / `#Test` can remain disabled or incomplete.
