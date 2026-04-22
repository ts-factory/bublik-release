# MCP Setup

Use Bublik's MCP (Model Context Protocol) server to connect AI agents and assistants to your Bublik instance.

<!--toc:start-->

- [What You Need](#what-you-need)
- [Endpoint](#endpoint)
- [Client Configuration](#client-configuration)
  - [OpenCode](#opencode)
  - [Claude](#claude)
  - [Codex](#codex)
- [Server Enablement](#server-enablement)
  - [Docker .env Options](#docker-env-options)
- [Verify the Setup](#verify-the-setup)
<!--toc:end-->

## What You Need

Before connecting a client:

- Your Bublik instance should be updated to `v2.10.4` or newer.
- The MCP endpoint must be reachable from the machine where your AI client runs.
- Replace `<bublik_url>` in the examples below with your public Bublik URL.

## Endpoint

Bublik exposes the MCP server at:

```text
https://<bublik_url>/mcp
```

## Client Configuration

### OpenCode

Add this server definition to your OpenCode MCP configuration:

```json
{
  "bublik-mcp": {
    "type": "remote",
    "url": "https://<bublik_url>/mcp"
  }
}
```

Official docs: [OpenCode MCP servers](https://opencode.ai/docs/mcp-servers/)

### Claude

Add this server definition to your Claude MCP configuration:

```json
{
  "bublik-mcp": {
    "type": "http",
    "url": "https://<bublik_url>/mcp"
  }
}
```

Official docs: [Claude Code MCP](https://code.claude.com/docs/en/mcp)

### Codex

Codex supports MCP in both the CLI and the IDE extension. Add the server to `~/.codex/config.toml` or to a project-scoped `.codex/config.toml` in a trusted project:

```toml
[mcp_servers.bublik-mcp]
url = "https://<bublik_url>/mcp"
```

Official docs: [Codex MCP](https://developers.openai.com/codex/mcp)

## Server Enablement

If you manage your own Bublik deployment, use the initial MCP rollout instructions from the [v2.10.4 release notes](/blog/release-v2.10.4#admin-section) to enable the server on backend or Docker installations.

### Docker .env Options

For Docker deployments, MCP-related settings can be added to your `.env` file:

```dotenv
BUBLIK_DOCKER_MCP_HOST=127.0.0.1
BUBLIK_DOCKER_MCP_PORT=8001
```

Options:

- `BUBLIK_DOCKER_MCP_HOST`: Host interface used by the MCP service inside the Docker deployment. The initial setup uses `127.0.0.1`.
- `BUBLIK_DOCKER_MCP_PORT`: Port used by the MCP service inside the Docker deployment. The initial setup uses `8001`.

If these variables are missing, add them before running your Docker update steps from the release notes.

## Verify the Setup

After configuration:

- Restart or reload your AI client if needed.
- Confirm the client can connect to `https://<bublik_url>/mcp`.
- Ask a simple Bublik-related question from the client to verify that the MCP server responds.

For an early example of usage, see the shared [conversation](https://opncd.ai/share/u17o7d4z).
