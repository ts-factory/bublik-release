# AI Chat Reference

The `ai` configuration, the environment variables around it, and what to check
when something does not work. For the setup procedure, see
[Setup](./01-setup.md).

The `ai` configuration is installation-wide: it exists only under **No Project
(Default)** and cannot be created per project.

## Configuration Schema

### Top-level keys

| Key | Required | Description |
| --- | --- | --- |
| `providers` | Yes | The model providers available to chat. |
| `default_model` | No | `{ "provider": ..., "model": ... }`, preselected in the model selector. Both fields required. |
| `mcp_servers` | No | Remote MCP servers that add tools. See [Add remote MCP servers](./01-setup.md#5-add-remote-mcp-servers-optional). |
| `compaction` | No | Automatic history summarization. See [Context compaction](#context-compaction). |

Unknown keys are rejected. A stored configuration that no longer matches the
schema is treated as **zero providers**, not as a partial one.

### Provider fields

| Field | Required | Description |
| --- | --- | --- |
| `id` | Yes | Stable identifier used by `default_model` and the chat API, and the key Bublik looks the model catalogue up under. Use the well-known vendor name (`openai`, `anthropic`, ...) where one applies; any string works for a custom gateway. |
| `type` | Yes | Provider protocol. See [below](#provider-types). |
| `api_url` | Yes | Base URL of the endpoint, `http://` or `https://`. The only source of the endpoint, for every type. |
| `name` | No | Label shown in the model selector. Defaults to `id`. |
| `api_key` | No | A secret reference, never the key. See [Secret references](#secret-references). |
| `models` | No | Explicit model list. Omit to auto-populate — see [Explicit models versus discovery](#explicit-models-versus-discovery). |
| `headers` | No | Extra HTTP headers sent with every request, including model discovery. Applied last, so they override the header derived from `api_key`. |
| `model_settings` | No | Pydantic AI model settings applied to every request to this provider, for example `{"temperature": 0.2}`. |

### Provider types

```text
openai            openai-chat       openai-responses  anthropic
google            google-cloud      groq              mistral
bedrock           huggingface       azure             heroku
alibaba           sambanova         ollama            litellm
gateway/openai    gateway/anthropic gateway/groq      gateway/google
gateway/bedrock
```

Only vendors whose client accepts a custom endpoint get a type of their own.
Everyone else speaks the OpenAI protocol, so:

> **Any OpenAI-protocol vendor or gateway — OpenRouter, DeepSeek, xAI, Together,
> Fireworks, Cerebras, Cohere, LM Studio, your own proxy — uses
> `type: "openai"` with its own `api_url`.** Keep the vendor's name as `id` so
> the model catalogue still resolves.

A gateway speaking the Anthropic Messages API uses `type: "anthropic"` the same
way.

### Model fields

Only `id` is required. Anything you leave out is filled in from the bundled
model catalogue, so an entry doubles as an override for a model the catalogue
gets wrong or has never heard of.

| Field | Description |
| --- | --- |
| `id` | Model identifier sent to the provider. |
| `name` | Label in the selector. |
| `limit` | `{ "context": ..., "output": ... }`. `context` is what lets Bublik report context usage and decide when to compact; `output` caps the response. |
| `modalities` | `{ "input": ["text"], "output": ["text"] }`. |
| `tool_call` | Whether the model supports tool calling. Chat needs it to reach Bublik data. |
| `reasoning` | Whether to offer the reasoning-effort selector. |

## Secret References

Never put an API key in the configuration. Reference it instead:

```json
"api_key": "${env:AI_OPENAI_API_KEY}"
```

The rules are narrow on purpose — without them a configuration author could
point a key at any Django setting and send it to an endpoint they control:

- The name must start with `AI_` and contain only uppercase letters, digits and
  underscores.
- The whole value must be the placeholder. Nothing may surround it.
- It reads an environment variable: the deployment `.env` on Docker, or
  `bublik/secrets.env` on a `scripts/deploy` installation.

Two providers may share one key, and one provider may appear twice with
different keys.

An unresolved reference is a hard failure when the model is built — you get a
configuration error naming the reference, not a confusing 401 from the provider.

Because the environment is read at process start, rotating a secret needs a
**restart**, even though the configuration itself has not changed. Editing the
configuration, by contrast, takes effect immediately.

## Provider Recipes

### Hosted providers

```json
{
  "id": "anthropic",
  "type": "anthropic",
  "name": "Anthropic",
  "api_url": "https://api.anthropic.com",
  "api_key": "${env:AI_ANTHROPIC_API_KEY}"
}
```

The same shape covers the other native types — change `id`, `type`, `api_url`
and the key name:

| Vendor | `type` | `api_url` |
| --- | --- | --- |
| OpenAI | `openai` | `https://api.openai.com/v1` |
| Anthropic | `anthropic` | `https://api.anthropic.com` |
| Google Gemini | `google` | `https://generativelanguage.googleapis.com` |
| Groq | `groq` | `https://api.groq.com` |
| Mistral | `mistral` | `https://api.mistral.ai` |

No `models` list is needed when `id` is a well-known vendor name: the catalogue
fills it in.

### An OpenAI-compatible vendor or gateway

```json
{
  "id": "openrouter",
  "type": "openai",
  "name": "OpenRouter",
  "api_url": "https://openrouter.ai/api/v1",
  "api_key": "${env:AI_OPENROUTER_API_KEY}"
}
```

`id` is free text for a private gateway — it is what `default_model` and the
chat request refer to. A gateway that implements no `/models` endpoint needs an
explicit `models` list.

### Ollama

```json
{
  "id": "ollama",
  "type": "ollama",
  "name": "Ollama (local)",
  "api_url": "http://localhost:11434/v1"
}
```

No key. Ollama serves the OpenAI protocol under `/v1`, so the suffix is part of
the URL. Bublik lists whatever the runtime has pulled; there is no catalogue to
fall back on, so an unreachable runtime simply shows no models. Pick a model
that supports tool calling.

### LM Studio

```json
{
  "id": "lmstudio",
  "type": "openai",
  "name": "LM Studio (local)",
  "api_url": "http://localhost:1234/v1"
}
```

Keep `lmstudio` as the `id` — the catalogue knows it under that name, so
discovered models get their context limits, and the catalogue is what the
selector falls back on when the server is down. Start the server from LM
Studio's Developer tab, or `lms server start`, before opening chat.

### Explicit models versus discovery

Omit `models` and Bublik fills the list in itself:

1. By calling `GET {api_url}/models`, for the discoverable types — `openai`,
   `openai-chat`, `openai-responses`, `anthropic`, `ollama` and `litellm`.
2. Otherwise, or when discovery returns nothing, from the bundled model
   catalogue, looked up by `id`.

Discovery against a vendor's own endpoint lists everything the account can
reach, embedding and speech models included. Prefer an explicit list there, and
leave discovery for gateways and local runtimes, which serve exactly what you
deployed.

Set `limit.context` for any model the catalogue does not know, or Bublik cannot
report context usage or compact the conversation for it.

## Generated File Storage

The assistant can generate PDF, DOCX, XLSX, Markdown, HTML, CSV, JSON and text
files. `AI_CHAT_FILE_STORAGE_BACKEND` decides where the bytes go:

| Value | Where generated files go |
| --- | --- |
| `local` | Local disk, under `AI_CHAT_FILE_STORAGE_DIR` |
| `s3` | S3-compatible object storage at `S3_ENDPOINT_URL` |

Docker defaults to `s3` because compose ships a SeaweedFS service. A
`scripts/deploy` installation defaults to `local`, because SeaweedFS is not
packaged for Debian or Ubuntu and local disk needs nothing installed. Any other
value, or `s3` without an endpoint, is refused rather than quietly falling back.

### Settings

| Variable | Default | Description |
| --- | --- | --- |
| `AI_CHAT_FILE_STORAGE_BACKEND` | `s3` on Docker, `local` otherwise | Which backend stores generated files. |
| `AI_CHAT_FILE_STORAGE_DIR` | `/app/bublik/ai-chat-files` on Docker, `$BUBLIK_HOME/ai-chat-files` otherwise | Where files live on the `local` backend. |
| `S3_ENDPOINT_URL` | `http://127.0.0.1:8333` | S3-compatible endpoint used by Django. |
| `S3_PUBLIC_ENDPOINT_URL` | Empty | Browser-reachable endpoint. See below. |
| `S3_ACCESS_KEY` | `bublik` | Access key. Change it if the endpoint is not loopback-only. |
| `S3_SECRET_KEY` | `bublik-secret-key` | Secret key. Change it if the endpoint is not loopback-only. |
| `S3_BUCKET` | `bublik-ai-chat-files` | Bucket for generated files. Created on first upload. |
| `S3_REGION` | `us-east-1` | Signing and bucket region. |
| `S3_PRESIGN_EXPIRY` | `300` | Presigned download lifetime, in seconds. |
| `AI_CHAT_FILE_MAX_SIZE` | `20971520` | Maximum generated-file size, in bytes. |

The `S3_*` variables are ignored on the `local` backend.

On a `scripts/deploy` installation these live in `bublik/general.conf`. Most are
substituted into `bublik/settings.py` as literals, so changing one needs the
`django_settings` step. Three are read from the environment instead and need
only a restart: `AI_CHAT_FILE_MAX_SIZE`, and the credentials `S3_ACCESS_KEY` and
`S3_SECRET_KEY` — which belong in `bublik/secrets.env`, not `general.conf`,
because that file is world-readable and regenerated from a template.

### Backup

On Docker, both stores are bind mounts under `BUBLIK_DOCKER_DATA_DIR` —
`ai-chat-files/` and `seaweedfs/`. They are covered by a backup of the data
directory, and `docker compose down --volumes` does not remove them.

Either way, the **database dump does not cover them**. It holds each file's
metadata and storage key; the bytes are only in the store. Restoring the
database alone leaves thread history pointing at files that no longer download.

Storage also grows with use: deleting a thread removes its files on a
best-effort basis, but cancelled and failed runs can leave orphans, and
`AI_CHAT_FILE_MAX_SIZE` only bounds a single file. On external object storage, a
lifecycle policy on the `chat/` prefix makes a good second layer of cleanup.

:::warning Switching backends migrates nothing

Nothing moves files between disk and object storage. After a switch, the storage
keys in the database point into a store that no longer holds the bytes, so
previously generated files stop downloading. New files work normally. Move the
contents yourself first if the old ones matter.

:::

### External object storage

To use AWS S3 or another service, set `AI_CHAT_FILE_STORAGE_BACKEND` to `s3` and
fill in `S3_ENDPOINT_URL`, the credentials, bucket and region. The credentials
need to permit bucket inspection, object creation, download, listing and
deletion. The bucket itself is created on the first upload.

On a bare-metal installation, see
[Store generated files in S3](./01-setup.md#6-store-generated-files-in-s3-optional)
for the exact files to edit and the deploy steps to run, including the bundled
SeaweedFS service.

Set `S3_PUBLIC_ENDPOINT_URL` only when the endpoint is reachable from the user's
browser; downloads then use short-lived presigned redirects instead of being
proxied through Bublik. Leave it empty otherwise.

## Context Compaction

Long conversations are summarized before they reach the model's context limit:

```json
{
  "compaction": {
    "enabled": true,
    "threshold": 0.8,
    "keep_recent": 8
  }
}
```

| Key | Default | Description |
| --- | --- | --- |
| `enabled` | `true` | Whether to compact at all. |
| `threshold` | `0.8` | Fraction of the model context at which compaction starts. |
| `keep_recent` | `8` | Number of recent messages kept verbatim. |
| `reserved` | `min(20000, output limit)` | Tokens held back for the response. |

Bublik stores the summary separately and never deletes visible history.
Compaction needs a known context limit, so a model the catalogue does not cover
is never compacted — set `limit.context` explicitly for those. If summarization
fails, the original history is used, which can still overflow the provider's
context window.

## Conversations and Background Runs

Threads and generated files belong to the user who created them; no other user
can read, cancel or download them.

Generation continues after the browser disconnects or navigates away, and
returning to the thread shows the final transcript. This is not durable job
execution: restarting the worker that owns a run stops that run, and live
partial output is not guaranteed to survive it. Completed transcripts are
persisted. Only one active run is allowed per thread, and a run can be cancelled
from the composer.

## Security Notes

- Every authenticated user can use every configured provider and every built-in
  tool. Per-user and per-project provider allowlists are not available.
- Provider calls cost money. Set budgets, quotas and alerts on the provider side
  before enabling chat broadly.
- Tool output contains test logs and metadata. Treat the provider and every
  remote MCP server as a data recipient.
- The configuration is the complete list of endpoints chat can reach, because
  every `api_url` is explicit. On an air-gapped host nothing leaves unless an
  `api_url` says so.
- Protect the deployment `.env` or `bublik/secrets.env`, and keep
  configuration-read permissions to administrators. Keep `secrets.env` at mode
  `600`.

## Troubleshooting

### No models in the selector

Work through, in order:

1. **Is the configuration active?** It must exist under **No Project
   (Default)** and be activated. A *missing* configuration is not the same as an
   empty one — chat reads it back as an empty provider set rather than falling
   back to the generated default.
2. **Does it match the schema?** A provider without `api_url`, or with an
   unsupported `type`, makes Bublik treat the whole configuration as zero
   providers. The log carries `active ai config does not match the current
   schema` and names the field; the admin page's schema check points at the same
   place.
3. **Does the key resolve?** Confirm the variable is present in `.env` or
   `secrets.env`, that the name in the configuration matches exactly, and that
   Bublik was restarted after the file changed.
4. **Does the provider yield models?** A provider with no `models` list and an
   unreachable endpoint, whose `id` is not a known vendor, has nothing to offer.
   Add an explicit `models` list.

On a `scripts/deploy` installation, `python manage.py initialize_configs` only
generates the configuration when `AI_CHAT_ENABLED` is already in the generated
`bublik/settings.py`, so `django_settings` has to run before
`per_project_conf`.

### The wrong model is preselected

`default_model` has to name a provider and model that actually exist in the
resolved list. If it does not, the selector silently falls back to the first
available model.

### Responses arrive all at once

Bublik defends the stream itself: every response sets `X-Accel-Buffering: no`,
and the stream emits a keep-alive comment every 15 seconds so an idle proxy does
not time out while the model is thinking. Nginx honours both.

So suspect something further out — another reverse proxy, a load balancer or a
CDN between the browser and Nginx that buffers responses or strips
`X-Accel-Buffering`. Every intermediate hop has to pass the stream through
unbuffered.

If nothing sits in front, confirm Bublik is served through ASGI: the Gunicorn
command line must name `--worker-class uvicorn_worker.UvicornWorker` and
`bublik.asgi:application`. Under the WSGI entry point the chat routes do not
exist at all.

### A generated file will not download

On the `local` backend, check that `AI_CHAT_FILE_STORAGE_DIR` is set, exists and
is writable by the Bublik service user. On `s3`, check the endpoint,
credentials, bucket and region, and that the object store is healthy — on
Docker, `docker compose ps` and the `seaweedfs` logs. Either way check the file
size against `AI_CHAT_FILE_MAX_SIZE`. If you set `S3_PUBLIC_ENDPOINT_URL`,
verify it is reachable from the user's browser.

### A run stays active after a restart

The previous worker cannot resume it. Stale run state expires after an hour;
start a new thread if the existing one stays blocked.
