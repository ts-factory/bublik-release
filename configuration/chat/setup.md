# Setting Up AI Chat

Chat is working after step 4. Steps 5 and 6 are optional. Everything here is
done by an administrator.

**Steps 1 and 3 depend on how Bublik was installed.** Each has a Docker section
and a bare-metal section — follow the one that matches your installation, not
both. Steps 2 and 4 are identical everywhere.

## 1. Enable chat in your deployment

Two things have to reach the Bublik process: an API key for a model provider,
and the switch that turns chat on. Where they go depends on the installation.

The key's variable name is yours to choose — it only has to start with `AI_` and
use uppercase letters, digits and underscores. You reference it from the
configuration in step 2, and never paste the key itself.

---

### Docker

Both variables go in the deployment `.env`:

```dotenv
AI_OPENAI_API_KEY=sk-...
AI_CHAT_ENABLED=true
```

`AI_CHAT_ENABLED` accepts `1`, `true` or `yes`, in any case.

Docker Compose loads this file into several services, so protect it with
restrictive permissions and keep it out of version control.

Then recreate the deployment:

```bash
task pull
task up
```

Continue with [step 2](#2-edit-the-generated-ai-configuration).

---

### Bare metal (`scripts/deploy`)

Here the two variables go in **different files**: the key is a secret, the
switch is a setting.

#### The API key — `bublik/secrets.env`

This file holds every chat secret: the provider API keys, and the S3
credentials if you change them from their defaults. It does not exist until you
create it, in the Bublik source tree next to `bublik/general.conf`:

```bash
cd "$BUBLIK_SRC"          # the checkout scripts/deploy runs from
cat > bublik/secrets.env << 'EOF'
AI_OPENAI_API_KEY=sk-...
EOF
chmod 600 bublik/secrets.env
```

The path is fixed. `scripts/exports` sources it from beside `general.conf`, and
the service units name it as `EnvironmentFile=-${BUBLIK_SRC}/bublik/secrets.env`,
so there is no setting that moves it.

Two consequences of being a systemd environment file:

- Write plain `KEY=value` lines only — no `export`, no quoting, no shell
  expansion.
- It is read when a service starts, so restart Bublik after editing it.

`scripts/deploy` never creates or rewrites this file, so its contents survive a
redeploy. Keep it at mode `600`. `general.conf`, by contrast, is world-readable
and regenerated from a template, which is why no secret belongs there.

#### The switch — `bublik/general.conf`

```bash
AI_CHAT_ENABLED="true"
```

#### Apply both

```bash
./scripts/deploy --steps django_settings ai_chat_files_dir \
                         per_project_conf run_services
```

| Step | What it does |
| --- | --- |
| `django_settings` | Releases `AI_CHAT_ENABLED` into `bublik/settings.py`. |
| `ai_chat_files_dir` | Creates the directory generated files are written to. |
| `per_project_conf` | Runs `python manage.py initialize_configs`, which generates the `ai` configuration. |
| `run_services` | Restarts Bublik. |

Steps run in the deploy script's own order, not the order you type them.

:::note Upgrading from a version without chat

Streaming needs the `/api/v2/chat` location that `bublik/templates/nginx.bublik.template`
defines. If this installation's Nginx configuration predates chat, add
`nginx_conf` and `run_side_servers` to the steps above. `nginx_conf` only
rewrites the Nginx configuration; `run_side_servers` asks for an action —
answer `restart` so Nginx picks it up (Redis and RabbitMQ restart with it).
Both require root rights, so without root access apply the template by hand
and reload Nginx.

:::

Continue with [step 2](#2-edit-the-generated-ai-configuration).

---

## 2. Edit the generated `ai` configuration

The same on both installations.

:::note Bublik creates this configuration for you

Step 1 already generated the global `ai` configuration and activated it:

| Installation | When it is generated |
| --- | --- |
| Docker | On every container start. |
| Bare metal | By the `per_project_conf` deploy step. Nothing regenerates it when a service restarts. |

If it is missing on a bare-metal installation, run that step again:

```bash
./scripts/deploy --steps per_project_conf
```

:::

Open `<BUBLIK_FQDN>/v2/admin/config`, select **No Project (Default)** and open
the `ai` configuration. It looks like this:

```json
{
  "providers": [
    {
      "id": "openai",
      "type": "openai",
      "name": "OpenAI-compatible gateway",
      "api_url": "http://localhost:4000/v1",
      "api_key": "${env:AI_OPENAI_API_KEY}",
      "models": [{ "id": "gpt-4.1" }]
    },
    {
      "id": "anthropic",
      "type": "anthropic",
      "name": "Anthropic-compatible gateway",
      "api_url": "http://localhost:4000",
      "api_key": "${env:AI_ANTHROPIC_API_KEY}",
      "models": [{ "id": "claude-sonnet-4-6" }]
    },
    {
      "id": "ollama",
      "type": "ollama",
      "name": "Ollama (local)",
      "api_url": "http://localhost:11434/v1"
    },
    {
      "id": "lmstudio",
      "type": "openai",
      "name": "LM Studio (local)",
      "api_url": "http://localhost:1234/v1"
    }
  ],
  "default_model": { "provider": "openai", "model": "gpt-4.1" }
}
```

These four providers are examples, not a working setup — replace them with what
you actually run. For the OpenAI key added in step 1, the whole configuration
becomes:

```json
{
  "providers": [
    {
      "id": "openai",
      "type": "openai",
      "name": "OpenAI",
      "api_url": "https://api.openai.com/v1",
      "api_key": "${env:AI_OPENAI_API_KEY}",
      "models": [{ "id": "gpt-4.1" }]
    }
  ],
  "default_model": { "provider": "openai", "model": "gpt-4.1" }
}
```

Save, then make sure the configuration is **active**.

Three things are worth knowing while you edit:

- **Every endpoint is explicit.** `api_url` is the only place Bublik learns
  where to send a request. It never derives one from `type`, from Pydantic AI's
  built-in defaults, or from variables like `OPENAI_BASE_URL`. The configuration
  is therefore the complete list of endpoints chat can reach.
- **Delete the local entries you do not run.** Ollama and LM Studio are retried
  on every model-list refresh and log a discovery warning each time.
- **Saving takes effect immediately.** Changing a *secret* does not — the
  environment is read at process start, so restart Bublik after editing `.env`
  or `secrets.env`.

See [Reference](./02-reference.md) for the other providers, for pointing at a
local runtime or a gateway, and for every field.

## 3. Set the base URL for generated links

The assistant is told how to build links to Bublik pages. That instruction is
assembled from two settings:

```text
<BUBLIK_FQDN>/<URL_PREFIX>/v2
```

The resulting base URL goes into the system prompt as a **Bublik URL Patterns**
section, listing the shape of each page — `/runs/{run_id}`, `/log/{run_id}`,
`/dashboard`, `/history` and the rest — and instructing the model to include a
clickable link whenever it references a run or a result.

:::warning No FQDN, no links

If `BUBLIK_FQDN` is empty, that whole section is left out of the system prompt.
Chat still works and still answers questions, but the assistant has no link
patterns to follow, so its answers come back without clickable links.

:::

`BUBLIK_FQDN` must include the scheme, and is the externally reachable address —
what a user would paste into a browser, not a container-internal name.

### Docker

In the deployment `.env`:

```dotenv
BUBLIK_FQDN=https://bublik.example.com
URL_PREFIX=
```

It is already set to `http://127.0.0.1` in `.env.example`, so links work out of
the box on a local deployment and only need changing once Bublik is reachable
under a real name.

Write `URL_PREFIX` with a leading slash (`/prefix`), or leave it empty when
Bublik is served from the root.

If `BUBLIK_DOCKER_PROXY_PORT` is anything other than `80` or `443`, that port is
appended to the FQDN for you — do not write it in `BUBLIK_FQDN` yourself, or it
will appear twice.

Apply with `task up`.

### Bare metal

In `bublik/general.conf`:

```bash
BUBLIK_FQDN="https://bublik.example.com"
```

**This one is empty by default**, so an installation that has never set it gets
linkless answers. `URL_PREFIX` defaults to `/bublik` here, which makes the base
URL `https://bublik.example.com/bublik/v2`.

The value is read from the environment when a service starts, so applying it is
just a restart:

```bash
./scripts/deploy --steps run_services
```

## 4. Verify

Check that the feature is on:

```bash
curl <BUBLIK_FQDN><URL_PREFIX>/api/v2/server/features/   # "chat_enabled": true
```

Then that your configuration resolves to at least one model:

```bash
curl <BUBLIK_FQDN><URL_PREFIX>/api/v2/chat/models
```

An empty list here means the configuration did not produce a usable model — see
[No models in the selector](./02-reference.md#no-models-in-the-selector).

Finally, open `<BUBLIK_FQDN>/v2/chat` and:

1. Confirm the model selector lists your provider and models.
2. Ask something that uses Bublik data, such as listing recent runs.
3. Ask for a small CSV or text file, then download it — this exercises the
   whole storage path.

The Chat item appears in the sidebar for logged-in users once at least one
provider resolves to a model.

## 5. Add remote MCP servers (optional)

Chat already reaches Bublik's own data through built-in tools — the standalone
`mcp` service does not need to be running for that. Add an `mcp_servers` block
to the `ai` configuration only to give the assistant tools from *other* systems:

```json
{
  "mcp_servers": [
    {
      "id": "github",
      "url": "https://mcp.example.com/mcp/",
      "headers": { "Authorization": "Bearer ${env:AI_GITHUB_AUTH_TOKEN}" }
    }
  ]
}
```

`mcp_servers` is a top-level key, so it sits alongside `providers` — keep the
providers you configured in step 2.

`id` and `url` are required, and the transport is streamable HTTP. `id` prefixes
the server's tool names so they cannot collide with Bublik's own.

Use a secret reference for the token, as with provider keys — a literal token is
readable by anyone who can open the configuration. Add the variable to the same
file as in step 1 and restart Bublik.

A server whose URL is invalid or whose secret does not resolve is skipped, and
the reason is written to the Bublik log. Treat every MCP server you add as a
recipient of your test data.

## 6. Store generated files in S3 (optional)

Only worth doing on a bare-metal installation, and only if you want it. Local
disk is the default there and needs nothing installed. Reach for object storage
when you already run it, when the files should live on shared storage, or when
you plan to grow beyond one host.

On Docker there is nothing to do — compose already ships SeaweedFS and the
backend is `s3` out of the box.

:::warning Do this before you generate files you care about

Nothing migrates files between disk and object storage. After the switch, the
storage keys already in the database point into a store that does not hold the
bytes, so previously generated files stop downloading.

:::

Bublik does not install an object store for you. Either point it at storage you
already run, or install the bundled SeaweedFS.

### Option A — storage you already run

No binary and no extra service. In `bublik/general.conf`:

```bash
AI_CHAT_FILE_STORAGE_BACKEND="s3"
S3_ENDPOINT_URL="https://s3.eu-west-1.amazonaws.com"
S3_BUCKET="bublik-ai-chat-files"
S3_REGION="eu-west-1"
```

The credentials are secrets, so they go in `bublik/secrets.env` beside the
provider keys:

```dotenv
S3_ACCESS_KEY=...
S3_SECRET_KEY=...
```

Then apply:

```bash
./scripts/deploy --steps django_settings run_services
```

Set `S3_PUBLIC_ENDPOINT_URL` as well, but only when the endpoint is reachable
from the user's browser — downloads then become presigned redirects instead of
being proxied through Bublik. Leave it empty otherwise.

The bucket is created on the first upload, so there is nothing to provision. The
credentials need to permit bucket inspection, object creation, download, listing
and deletion.

### Option B — the bundled SeaweedFS

**1. Install the binary.** SeaweedFS is not packaged for Debian or Ubuntu; it
ships as a single static binary, which Bublik never installs for you. Download
the release matching your architecture, verify it, and place it where the
service expects it:

```bash
VERSION=4.40
ARCH=linux_$(dpkg --print-architecture)   # linux_amd64 or linux_arm64
BASE=https://github.com/seaweedfs/seaweedfs/releases/download/${VERSION}

curl -fsSLO ${BASE}/${ARCH}.tar.gz
curl -fsSL  ${BASE}/${ARCH}.tar.gz.md5
md5sum ${ARCH}.tar.gz          # compare with the value printed above

mkdir -p ~/seaweedfs
tar -xzf ${ARCH}.tar.gz -C ~/seaweedfs weed
chmod 755 ~/seaweedfs/weed
~/seaweedfs/weed version
```

The expected path is `$BUBLIK_HOME/seaweedfs/weed`. Set `SEAWEEDFS_DIR` in
`bublik/general.conf` first to keep it elsewhere. An air-gapped installation
transfers the archive by hand and unpacks it to the same path.

**2. Switch the backend.** In `bublik/general.conf`:

```bash
AI_CHAT_FILE_STORAGE_BACKEND="s3"
```

That is the only line needed — `S3_ENDPOINT_URL` already defaults to the bundled
service on `http://127.0.0.1:8333`.

**3. Create and start the service:**

```bash
./scripts/deploy --steps seaweedfs_service django_settings                          run_services autostart_services
```

| Step | What it does |
| --- | --- |
| `seaweedfs_service` | Creates the `bublik-seaweedfs` user service and its data directory. |
| `django_settings` | Releases the new backend into `bublik/settings.py`. |
| `run_services` | Starts it, before the Bublik web service. |
| `autostart_services` | Enables it at boot. Requires root. |

`seaweedfs_service` does nothing unless chat is enabled and the backend is `s3`,
and it refuses to create the service when the binary is missing, naming the path
it looked at.

**4. Verify:**

```bash
systemctl --user is-active bublik-seaweedfs     # active
systemctl --user is-enabled bublik-seaweedfs    # enabled
curl -f http://127.0.0.1:8333/status            # SeaweedFS S3 API
```

Then ask the assistant to produce a file.

The service binds to loopback only and exposes just its S3 API — change
`S3_ACCESS_KEY` and `S3_SECRET_KEY` in `bublik/secrets.env` if you ever expose
it. They are written into the unit file when it is generated, so rotating them
means re-running `seaweedfs_service` alongside `run_services`. A custom port has
to be set in both `SEAWEEDFS_S3_PORT` and `S3_ENDPOINT_URL`.

Its data lives in `$BUBLIK_HOME/seaweedfs/data` (`SEAWEEDFS_DATA_DIR`), which
the database dump does not cover — back it up alongside the database.

## Where generated files go

If you skipped step 6, this is where the assistant's generated files end up:

| Installation | Default backend | Location |
| --- | --- | --- |
| Docker | `s3` (compose ships SeaweedFS) | `<BUBLIK_DOCKER_DATA_DIR>/seaweedfs` |
| Bare metal | `local` | `$BUBLIK_HOME/ai-chat-files` |

Both sit inside the directory you already back up, so a normal data-directory
backup covers them. Note that the database dump on its own does not: it holds
each file's metadata and storage key, not its bytes.

See [Generated file storage](./02-reference.md#generated-file-storage) for every
storage setting and its default.
