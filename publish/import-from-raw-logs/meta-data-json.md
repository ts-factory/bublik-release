# `meta_data.json`

`meta_data.json` describes the run.

Bublik uses it to:

- Identify the run (run key metas).
- Assign the run to a project.
- Populate dashboard columns and filters.

This page describes the generic `meta_data.json` contract.

## Minimal structure

```json
{
  "version": 1,
  "metas": [
    { "name": "TS_NAME", "value": "example-ci" },
    { "name": "PROJECT", "value": "example" },
    { "name": "RUN_STATUS", "value": "DONE" },
    { "name": "START_TIMESTAMP", "value": "2026-04-21T12:00:00.000+03:00" },
    { "name": "CFG", "value": "lab-host-01" }
  ]
}
```

## Fields

- `version`: currently `1`.
- `metas`: non-empty list of items with:
  - `name`: meta key.
  - `value`: meta value (stored as string).
  - `type` (optional): a string hint for the UI (stored as-is).

## Data Contract

:::warning
TODO: Add link to schema from github repository once it's available
:::

There is currently no dedicated schema file for `meta_data.json` in this docs
set. <br />
Treat this page as the contract for the expected structure and required metas.

## Required metas (common setup)

Your instance/project configuration decides what is required, but commonly:

- `PROJECT`: required unless the importer supplies a project explicitly.
- `RUN_STATUS`: required by the default run status configuration (often `RUN_STATUS_META=RUN_STATUS`).
- All configured **run key metas** (often `START_TIMESTAMP` and `CFG`).

:::note
Run key metas must be stable. <br />
If you re-import a run with the same key metas but different essential metas (for example `PROJECT`), <br />
Bublik may report an “essential meta mismatch”.
:::

## Run status

Typical values seen in Bublik:

- `DONE`
- `RUNNING`
- `WARNING`
- `ERROR`
- `STOPPED`
- `BUSY`
- `INTERRUPTED`
- `INCOMPLETE`

`RUN_STATUS` is a **meta**, not the same thing as per-test result statuses in `bublik.json`.

## Common failures

- Missing `PROJECT`: the importer cannot assign the run to a project unless the
  project is supplied separately.
- Missing `RUN_STATUS`: run status resolution fails when the project expects a
  status meta such as `RUN_STATUS`.
- Essential meta mismatch: a re-import with the same run key metas but a
  different essential meta set can be rejected as a mismatch.

## `type` examples (branch/revision/timestamp)

`type` is optional but useful for making metadata more readable and searchable. Common values:

- `branch`
- `revision`
- `timestamp`

Example (abridged):

```json
{
  "version": 1,
  "metas": [
    { "name": "TS_NAME", "value": "dpdk-ethdev-ts" },
    { "name": "CFG", "value": "virtio_virtio:tuor" },
    { "name": "START_TIMESTAMP", "value": "2024-03-24T00:14:19+03:00" },
    { "name": "RUN_STATUS", "value": "DONE" },
    { "name": "RUN_OK", "value": "true" },
    { "name": "DPDK_ETHDEV_TS_BRANCH", "value": "main", "type": "branch" },
    {
      "name": "DPDK_ETHDEV_TS_REV",
      "value": "4ef0ea5b287151b9d2610dbdb8956dbc54a9609f",
      "type": "revision"
    },
    {
      "name": "FINISH_TIMESTAMP",
      "value": "2024-03-24T03:10:00+03:00",
      "type": "timestamp"
    },
    { "name": "PROJECT", "value": "ts-factory" }
  ]
}
```
