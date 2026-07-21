---
title: AI Chat
---

# AI Chat Deployment

Docker deployments include the runtime components required by Bublik AI chat:

- Django served as an ASGI application for streaming responses
- Redis for live run state and model-discovery caching
- PostgreSQL for thread and transcript persistence
- SeaweedFS for S3-compatible generated-file storage
- Nginx configuration that does not buffer chat streams

The standalone `mcp` service is not required by the built-in assistant. Chat
calls Bublik's shared tools in the Django process.

## Enable the Chat Sidebar

The Chat sidebar item is disabled by default. Add this setting to `.env` and
recreate the Docker services to expose it:

```dotenv
CHAT_ENABLED=true
```

## Before Updating

1. Back up the PostgreSQL database.
2. Back up generated AI files if the deployment already uses object storage.
3. Compare the new `.env.example` with the deployment `.env` file.
4. Confirm outbound HTTPS access to every configured model provider and remote
   MCP server.

The standard database backup does not include the `seaweedfs_data` Docker
volume or an external S3 bucket. Back up that storage separately.

## Provider Credentials

Add only the keys required by the active `ai` configuration to `.env`:

```dotenv
AI_OPENAI_API_KEY=replace-me
AI_ANTHROPIC_API_KEY=replace-me
```

Reference them from the configuration rather than storing keys directly:

```json
"api_key": "${env:AI_OPENAI_API_KEY}"
```

The example environment file also names Gemini, DeepSeek, Groq, and Mistral
variables. The variable name is not provider-specific, but it must start with
`AI_` and use uppercase letters, numbers, or underscores.

Docker Compose loads `.env` into several application services. Protect the file
with restrictive permissions and do not commit it.

## Generated-File Storage

The default deployment starts SeaweedFS on the host loopback interface and uses
its S3 API. Configure these values in `.env`:

| Variable | Default | Description |
| --- | --- | --- |
| `S3_ENDPOINT_URL` | `http://127.0.0.1:8333` | Internal S3-compatible endpoint used by Django. |
| `S3_PUBLIC_ENDPOINT_URL` | Empty | Optional browser-reachable endpoint used for presigned redirects. |
| `S3_ACCESS_KEY` | `bublik` | Object-storage access key. |
| `S3_SECRET_KEY` | `bublik-secret-key` | Object-storage secret key. |
| `S3_BUCKET` | `bublik-chat-files` | Bucket for generated files. |
| `S3_REGION` | `us-east-1` | S3 signing and bucket region. |
| `S3_PRESIGN_EXPIRY` | `300` | Presigned download lifetime in seconds. |
| `CHAT_FILE_MAX_SIZE` | `20971520` | Maximum generated-file size in bytes. |
| `BUBLIK_DOCKER_SEAWEEDFS_S3_PORT` | `8333` | Bundled SeaweedFS S3 port. |

Change the default storage credentials for any deployment where the endpoint
can be reached by other users or hosts.

### Bundled SeaweedFS

The `seaweedfs` service:

- uses `chrislusf/seaweedfs:4.40`;
- binds to `127.0.0.1` with host networking;
- disables WebDAV and the admin UI;
- persists data in the `seaweedfs_data` named volume; and
- exposes a health endpoint at `http://127.0.0.1:8333/status`.

The volume is separate from `BUBLIK_DOCKER_DATA_DIR`. Include it in host backup,
migration, and disaster-recovery procedures.

For restricted-network installations, download and transfer the SeaweedFS
image together with the other deployment images:

```bash
docker pull chrislusf/seaweedfs:4.40
```

### External S3-Compatible Storage

To use AWS S3 or another service, set `S3_ENDPOINT_URL`, credentials, bucket,
and region to values supplied by the service.

Leave `S3_PUBLIC_ENDPOINT_URL` empty when the endpoint is not directly reachable
from browsers. Django then proxies authenticated downloads. Set it only to a
browser-reachable endpoint; downloads will use short-lived presigned redirects.

Apply a lifecycle policy to the bucket's `chat/` prefix. Bublik attempts to
delete objects when a thread is deleted, but cleanup is best-effort.

## ASGI and Streaming

Production runs:

```text
gunicorn bublik.asgi:application
--worker-class uvicorn_worker.UvicornWorker
```

Development runs Uvicorn directly with reload enabled. Do not switch the
deployment back to the WSGI application; chat routes are mounted in the ASGI
application.

The Nginx templates provide a dedicated `/api/v2/chat` location with HTTP/1.1,
buffering and caching disabled, and long read/send timeouts. Preserve these
settings in custom reverse-proxy configurations.

`BUBLIK_FQDN` should contain the externally reachable base URL. Bublik uses it
when the assistant creates links to runs and results. Deployments on a nonstandard
proxy port include that port automatically.

## Deploy

After updating `.env`, update and recreate the deployment using the normal
Docker workflow:

```bash
task pull
task up
```

The Django entrypoint automatically runs database migrations before starting
the application. The AI chat migrations create thread, generated-file, and
context-compaction storage.

After the services start:

1. Open `<BUBLIK_FQDN>/v2/admin/config` as an administrator.
2. Create the global `ai` configuration under **No Project (Default)**.
3. Add providers, models, and secret references.
4. Activate the configuration.
5. Open `<BUBLIK_FQDN>/v2/chat`.

See [AI Chat Configuration](/configuration/ai-chat) for the configuration
schema, examples, and runtime behavior.

## Verify

Check service health and logs:

```bash
docker compose ps
docker compose logs django seaweedfs nginx
```

Then perform this smoke test:

1. Confirm the model selector lists the configured provider and models.
2. Ask a question that invokes a Bublik tool, such as listing recent runs.
3. Navigate away during generation and return to confirm the background run is
   shown.
4. Cancel a second request and confirm the composer becomes available again.
5. Ask the assistant to generate a small text or CSV file.
6. Download the generated file and then delete its thread.

## Troubleshooting

### SeaweedFS is unhealthy

Confirm port `8333` is free, inspect the `seaweedfs` logs, and verify ownership
and free space for the Docker volume. A custom port must be reflected in both
`BUBLIK_DOCKER_SEAWEEDFS_S3_PORT` and `S3_ENDPOINT_URL`.

### Provider authentication fails

Confirm the secret is present in `.env`, the configuration uses an `${env:...}`
reference with the exact same name, and Django was restarted after secret
rotation.

### Chat works but generated files fail

Verify the S3 endpoint, credentials, bucket, region, and object-storage health.
For external storage, ensure the credentials permit bucket inspection, object
creation, download, listing, and deletion.

### Responses arrive only after completion

Confirm the request is reaching the dedicated Nginx chat location and that no
additional load balancer or proxy buffers the response. All intermediate
proxies must permit long-lived streaming HTTP responses.
