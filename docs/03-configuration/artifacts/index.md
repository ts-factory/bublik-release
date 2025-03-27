---
title: Artifacts
---

# Log Artifacts

Bublik supports displaying test artifacts through a dropdown menu on both the log page and log preview. This feature enables easy access to additional test-related files and resources.

## Configuration

To enable artifacts in your logs, you need to:

1. Create an `artifacts.json` file
2. Place it at `/json/node_<id>/artifacts.json` in your log structure
3. Format it according to the schema specification

### File Location

The `artifacts.json` file must be located at: `/json/node_<id>/artifacts.json`

Where `<id>` is your node identifier.

Example full path: <br /> `<bublik_url>/logs/dpdk-ethdev-ts/2025/03/03/balin-x710-p0-cbs-speed-stack-03:00:37/json/node_id2/artifacts.json`

### Schema

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

### Example Configuration

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

## Path Resolution

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
