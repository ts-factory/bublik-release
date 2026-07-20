---
title: AI Chat
---

# AI Chat

Bublik includes an AI assistant for investigating test runs, results, logs,
history, dashboards, projects, reports, and server status. The assistant uses
the same Bublik data services as the built-in MCP server, but it does not
require the standalone MCP service to be running.

The Chat sidebar item is disabled by default. Set `CHAT_ENABLED=true` in the
deployment environment and restart Bublik to show it. The chat page is then
available at `<BUBLIK_FQDN>/v2/chat` after an administrator creates and
activates the global `ai` configuration.

## Architecture

An AI chat request uses these components:

1. The browser sends the conversation to Bublik over a streaming HTTP request.
2. The ASGI application authenticates the user, loads the active `ai`
   configuration, and starts the selected model.
3. The model can call Bublik's built-in tools and any configured remote MCP
   servers.
4. PostgreSQL stores threads, transcripts, generated-file metadata, and
   compaction state.
5. Redis stores live run state, cancellation requests, and streaming events.
6. Generated files are stored in S3-compatible object storage.

Prompts, model responses, tool arguments, and selected tool results may be sent
to the configured model provider. Review the provider's privacy and retention
terms before enabling chat for sensitive test data.

## Create the AI Configuration

Create a global configuration with the name `ai` from the configuration admin
page. AI configuration is installation-wide and can only be assigned to **No
Project (Default)**. It cannot be created separately for individual projects.

The minimum configuration contains one provider:

```json
{
  "providers": [
    {
      "id": "openai",
      "type": "openai",
      "name": "OpenAI",
      "api_key": "${env:AI_OPENAI_API_KEY}",
      "models": [
        {
          "id": "gpt-4.1",
          "name": "GPT-4.1"
        }
      ]
    }
  ],
  "default_model": {
    "provider": "openai",
    "model": "gpt-4.1"
  }
}
```

After saving the configuration, activate it. Users see an empty model list
until an active `ai` configuration provides at least one available model.

### Providers

Each provider has these main fields:

| Field | Required | Description |
| --- | --- | --- |
| `id` | Yes | Stable identifier used by `default_model` and the chat API. |
| `type` | Yes | Provider adapter, such as `openai`, `anthropic`, `google-gla`, `groq`, `ollama`, or `openrouter`. |
| `name` | No | Human-readable name shown in the model selector. |
| `api_url` | No | Custom provider endpoint. Useful for compatible gateways and local models. |
| `api_key` | No | Secret reference. If omitted, the provider adapter may use its standard environment variable. |
| `models` | No | Explicit model list. If omitted, Bublik attempts provider or bundled-catalog discovery. |

Explicit models can include context/output limits, input/output modalities,
tool-call support, and reasoning support. These values control the capabilities
shown by the UI and allow Bublik to calculate context usage.

Model discovery results are cached. Successful results are cached for five
minutes and failures for 30 seconds.

### Secret References

Do not store provider API keys directly in configuration JSON. Use a secret
reference:

```json
"api_key": "${env:AI_OPENAI_API_KEY}"
```

Environment and Django-setting references must use an uppercase name beginning
with `AI_`:

- `${env:AI_NAME}` reads an environment variable available to the Bublik
  process.
- `${settings:AI_NAME}` reads an explicitly defined Django setting.

For Docker, use `${env:AI_NAME}` and add the variable to the deployment `.env`
file. Adding an environment variable does not automatically create a Django
setting, so `${settings:AI_NAME}` is intended for installations that define the
setting themselves.

Changing a secret without changing the configuration does not invalidate an
already cached agent. Restart the Django service after rotating credentials.

## Remote MCP Servers

Remote MCP servers can add tools to the assistant:

```json
{
  "mcp_servers": [
    {
      "id": "github",
      "url": "https://mcp.example.com/mcp/",
      "headers": {
        "Authorization": "Bearer ${env:AI_GITHUB_AUTH_TOKEN}"
      }
    }
  ]
}
```

Remote MCP uses streamable HTTP. The server identifier prefixes its tool names
to avoid collisions. A server with an invalid URL or unresolved secret is
skipped and an error is written to the Bublik log.

Only administrators should manage AI configuration. Literal tokens stored in
MCP headers can be exposed to anyone allowed to read that configuration, so
secret references are strongly recommended.

## Conversations and Background Runs

Threads and generated files belong to the user who created them. Other users
cannot read, modify, cancel, or download them.

The server continues generating after the browser disconnects or navigates
away. Returning to the thread polls its persisted state and displays the final
transcript when the run completes. This is not durable job execution: restarting
the ASGI worker that owns a run stops that run. Redis run state expires after
one hour.

Only one active run is allowed per thread. Users can cancel a run from the chat
composer. Completed transcripts are persisted in PostgreSQL; live partial
output is not guaranteed to survive a worker restart or failed run.

## Context Compaction

Long conversations can be summarized before they reach the selected model's
context limit. Default compaction settings are:

```json
{
  "compaction": {
    "enabled": true,
    "threshold": 0.8,
    "keep_recent": 8
  }
}
```

`threshold` is the fraction of the model context at which compaction starts.
`keep_recent` is the number of recent messages retained verbatim. Bublik stores
the summary separately and does not delete visible conversation history.

Compaction requires a known model context limit. If summarization fails, Bublik
continues with the original history, which can still exceed the provider's
context window.

## Generated Files

The assistant can generate PDF, DOCX, XLSX, Markdown, HTML, CSV, JSON, and text
files. File metadata is stored with the thread and file content is stored in
S3-compatible object storage.

The default maximum generated-file size is 20 MiB. Thread deletion performs
best-effort removal of its stored objects. For external object storage, apply a
lifecycle policy to the `chat/` prefix as a second layer of cleanup.

See [Docker AI Chat Deployment](/docker/ai-chat) for storage settings and the
bundled SeaweedFS service.

## Operational and Security Notes

- All authenticated users can use every configured provider and built-in chat
  tool. Provider-level user or project allowlists are not currently available.
- Provider calls can incur cost. Configure provider-side budgets, quotas, and
  alerts before broad enablement.
- Bublik tool output can contain test logs and metadata. Treat the selected
  provider and every remote MCP server as a data recipient.
- Protect the deployment `.env` file and configuration-read permissions.
- Keep the standalone Bublik MCP endpoint private unless its network access is
  intentionally configured.

## Troubleshooting

### No chat models configured

Confirm that an active global `ai` configuration exists under **No Project
(Default)**, its provider secret resolves, and the provider has an explicit or
discoverable model list.

### The response does not stream

Confirm Bublik is served through ASGI and that the reverse proxy disables
buffering and caching for `/api/v2/chat`. See the Docker deployment page for the
required proxy behavior.

### A run remains active after a restart

The previous worker cannot resume the run. Redis clears stale run state after
its expiry period. Start a new thread if the existing thread remains blocked.

### Generated-file download fails

Check the Django and object-storage logs, credentials, bucket access, configured
endpoint, and file-size limit. For presigned redirects, verify that
`S3_PUBLIC_ENDPOINT_URL` is reachable from the user's browser.
