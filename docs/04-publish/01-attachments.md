---
title: Log Attachments
---

# Log Attachments

- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Attachment Types](#attachment-types)
  - [Text Attachments](#text-attachments)
  - [Packet Capture Attachments](#packet-capture-attachments)
- [Path Resolution](#path-resolution)
- [Current Limitations](#current-limitations)

## Overview

Artifact is an arbitrary "item" associated with the test result. This page describes the canonical way of publishing artifacts.

Bublik displays test attachments through a dropdown menu on both the log page and log preview. This feature enables easy access to additional test-related files and resources.

## Directory Structure

In the session folder one should create:

- `attachments/` folder which will contain all attachments,
- For each result one should create `attachments/node_<id>/` folder which in turn will contain description for attachments associated with the result.

`ID` must be similar to the one used for `node_<id>.html` or `node_<id>.json`.

To enable attachments in your logs, you need to:

- Create an `attachments.json` file and place it at `/attachments/node_<id>/attachments.json` in your log structure
  - Example full path: <br /> `<bublik_url>/logs/dpdk-ethdev-ts/2025/03/03/balin-x710-p0-cbs-speed-stack-03:00:37/attachments/node_id2/attachments.json`

The `attachments.json` file must conform to the following schema: [URL](https://github.com/okt-limonikas/bublik-log-viewer/blob/main/internal/command/schemas/artifact.json)

## Attachment Types

### Text Attachments

Text attachments are files that contain plain text content and can be displayed inline in the browser.

**Type Configuration:**

- `type`: `"text"`
- `view_type`: `"inline"` - Opens the content in a new browser tab

**Description:**
Text attachments are used for log files, configuration files, debug output, or any other text-based content that needs to be associated with test results. The inline view type allows users to quickly view the content without downloading the file.

**Required Fields:**

- `type`: Must be `"text"`
- `view_type`: Must be `"inline"`
- `name`: Display name for the attachment

**Optional Fields:**

- `description`: Detailed description of the attachment content
- `download_enabled`: Boolean flag to enable/disable download option (default: false)
- `path`: Relative path to the attachment file
- `uri`: Absolute URL to the attachment file

**Example Configuration:**

```json
{
  "version": 1,
  "attachments": [
    {
      "type": "text",
      "view_type": "inline",
      "name": "Debug Log",
      "description": "Detailed debug output from test execution",
      "download_enabled": true,
      "path": "./debug.log"
    },
    {
      "type": "text",
      "view_type": "inline",
      "name": "Configuration File",
      "description": "Test configuration parameters",
      "download_enabled": false,
      "path": "./config.txt"
    },
    {
      "type": "text",
      "view_type": "inline",
      "name": "External Log",
      "description": "Log file hosted on external server",
      "download_enabled": true,
      "uri": "http://external-server.com/logs/test_output.txt"
    }
  ]
}
```

### Packet Capture Attachments

Packet capture attachments are network traffic capture files that can be analyzed using the built-in network packet analyzer tool.

**Type Configuration:**

- `type`: `"packet-capture"`
- `view_type`: `"bublik-tools/net-packet-analyzer"` - Uses the network packet analyzer tool for viewing

**Description:**
Packet capture attachments are used for network traffic analysis files (such as .pcap, .cap files) that contain captured network packets. These files are displayed using a specialized network packet analyzer tool that allows users to inspect network traffic, protocols, and communication patterns related to the test execution.

**Required Fields:**

- `type`: Must be `"packet-capture"`
- `view_type`: Must be `"bublik-tools/net-packet-analyzer"`
- `name`: Display name for the attachment

**Optional Fields:**

- `description`: Detailed description of the capture content
- `download_enabled`: Boolean flag to enable/disable download option (default: false)
- `path`: Relative path to the capture file
- `uri`: Absolute URL to the capture file

**Example Configuration:**

```json
{
  "version": 1,
  "attachments": [
    {
      "type": "packet-capture",
      "view_type": "bublik-tools/net-packet-analyzer",
      "name": "HTTP Traffic Capture",
      "description": "Network packets captured during HTTP performance test",
      "download_enabled": true,
      "path": "./http_traffic.cap"
    },
    {
      "type": "packet-capture",
      "view_type": "bublik-tools/net-packet-analyzer",
      "name": "TCP Connection Analysis",
      "description": "TCP handshake and data transfer analysis",
      "download_enabled": false,
      "path": "./tcp_analysis.pcap"
    },
    {
      "type": "packet-capture",
      "view_type": "bublik-tools/net-packet-analyzer",
      "name": "External Capture",
      "description": "Packet capture from external monitoring system",
      "download_enabled": true,
      "uri": "http://monitoring-server.com/captures/network_trace.cap"
    }
  ]
}
```

## Path Resolution

Attachments support both relative and absolute paths:

**Relative paths (using `path`):**

- `./file.txt` - File in the current directory (same directory as attachments.json)
- `../file.txt` - File in the parent directory
- `../../logs/output.log` - File in a parent's parent directory

**Absolute paths (using `uri`):**

- Must be a complete URL to the resource
- Example: `http://your-server.com/path/to/file.txt`
- Can point to external servers or different locations within the same domain

**Path Resolution Examples:**

```json
{
  "version": 1,
  "attachments": [
    {
      "type": "text",
      "view_type": "inline",
      "name": "Current Directory File",
      "description": "File in the same directory as attachments.json",
      "path": "./local_file.txt"
    },
    {
      "type": "text",
      "view_type": "inline",
      "name": "Parent Directory File",
      "description": "File in the parent directory",
      "path": "../parent_file.txt"
    },
    {
      "type": "packet-capture",
      "view_type": "bublik-tools/net-packet-analyzer",
      "name": "Absolute URL Capture",
      "description": "Capture file with absolute URL",
      "uri": "http://server.com/captures/traffic.cap"
    }
  ]
}
```

## Current Limitations

- Only two attachment types are currently supported: `text` and `packet-capture`
- Text attachments can only be viewed inline in the browser
