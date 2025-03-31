---
title: Log Artifacts
---

# Log Artifacts

- [Log Artifacts](#log-artifacts)
  - [Directory structure](#directory-structure)
    - [Artifacts description](#artifacts-description)
      - [Formal description](#formal-description)
      - [Fields Description](#fields-description)
      - [Example Configuration](#example-configuration)
    - [Path Resolution](#path-resolution)
  - [Current Limitations](#current-limitations)


Artefact is an arbitrary "item" associated with the test result. This page describes the canonical way of publishing artefacts.

Bublik displays test artifacts through a dropdown menu on both the log page and
log preview. This feature enables easy access to additional test-related files
and resources.


## Directory structure

In the session folder one should create:

- `artifacts/` folder which will contain all artifacts,
- For each result one should create `artifacts/node_<id>/` folder which in turn
  will contain description for artifacts associated with the result.

`ID` must be similar to the one used for `node_<id>.html` or `node_<id>.json`.

To enable artifacts in your logs, you need to:

- Create an `artifacts.json` file and place it at `/artifacts/node_<id>/artifacts.json` in your log structure
  - Example full path: <br /> `<bublik_url>/logs/dpdk-ethdev-ts/2025/03/03/balin-x710-p0-cbs-speed-stack-03:00:37/artifacts/node_id2/artifacts.json`

### Artifacts description

Key idea is that we have a "source" of the artifact: path or URI. And a way for
UI to present it.

This implies that it can be:

- a file in the results artifact folder, say `.txt` that will be displayed in
  raw format (or just downloaded)
- same `.txt` file that will be processed by UI,
- a file that will be on a completely different server,
- (in the future) a meta-file that will be returned as a result of a REST API
  call.

#### Formal description

The `artifacts.json` file must conform to the following schema: [URL](https://github.com/okt-limonikas/bublik-log-viewer/blob/main/internal/command/schemas/artifact.json)

#### Fields Description

- `version`: Schema version
- `artifacts`: Array of artifact objects with the following properties:
  - `type`: Type of the artifact (currently supports "text")
  - `view_type`: How the artifact should be displayed (currently supports "inline")
  - `name`: Display name for the artifact
  - `description`: Detailed description of the artifact
  - `download_enabled`: Boolean flag to enable/disable download option
  - `path`: Relative path to the artifact file (use this or `uri`)
  - `uri`: Absolute URL to the artifact file (use this or `path`)

#### Example Configuration

Here's an example of a valid `artifacts.json` file:

```json
{
  "version": 1,
  "artifacts": [
    {
      "type": "text",
      "view_type": "inline",
      "name": "Relative artifacts",
      "description": "Relative artifacts",
      "download_enabled": false,
      "path": "./relative.txt"
    },
    {
      "type": "text",
      "view_type": "inline",
      "name": "Relative up folder",
      "description": "Relative up folder",
      "download_enabled": false,
      "path": "../relative.txt"
    },
    {
      "type": "text",
      "view_type": "inline",
      "name": "Absolute artifacts",
      "description": "Absolute artifacts",
      "download_enabled": true,
      "uri": "<bublik_url>/logs/dpdk-ethdev-ts/2025/03/03/balin-x710-p0-cbs-speed-stack-03:00:37/json/node_id2/absolute.txt"
    }
  ]
}
```

### Path Resolution

Artifacts support both relative and absolute paths:

- Relative paths (using `path`):
  - `./file.txt` - File in the current directory
  - `../file.txt` - File in the parent directory
- Absolute paths (using `uri`):
  - Must be a complete URL to the resource
  - Example: `http://your-server.com/path/to/file.txt`

## Current Limitations

- Only text-type artifacts are currently supported
- Artifacts can only be viewed inline in the browser
- Future updates will add support for more artifact types and viewing options
