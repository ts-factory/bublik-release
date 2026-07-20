---
title: AI Chat
---

# AI Chat

Bublik includes an AI assistant that can investigate test runs, results, logs,
history, dashboards, projects and reports on your behalf. It uses the same data
services as Bublik's MCP server, but runs inside the Bublik process — the
standalone `mcp` service does not need to be running.

Chat is off by default. Turning it on takes three things: an API key for a model
provider, one environment variable, and a few edits to the `ai` configuration
Bublik generates for you.

:::warning Your test data reaches the model provider

Prompts, model responses, tool arguments and tool results — which include test
logs and metadata — are sent to whichever provider you configure, and to any
remote MCP server you add. Review the provider's privacy and retention terms
before enabling chat for sensitive data.

:::

## Where to go next

- **[Setup](./01-setup.md)** — the step-by-step procedure, for both Docker and
  `scripts/deploy` installations.
- **[Reference](./02-reference.md)** — every field of the `ai` configuration,
  provider recipes, file storage, and troubleshooting.
