---
title: Build Documentation
---

# Build Documentation

<!--toc:start-->

  - [Prerequisites](#prerequisites)
  - [Verify Installation](#verify-installation)
  - [Local Development](#local-development)
  - [Build](#build)
  - [Parameter Descriptions](#parameter-descriptions)

  <!--toc:end-->

## Prerequisites

Before starting, ensure your environment is properly set up:

1. **Install Node.js**  
   Use tools like [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm) for Node.js version management.

2. **Install pnpm**  
   Follow the instructions at [pnpm.io](https://pnpm.io/).

---

## Verify Installation

Run the following commands to confirm the setup:

1. **Check Node.js Version**  
   `node -v`  
   Ensure the installed Node.js version matches the one in `.nvmrc`.

2. **Check pnpm Version**  
   `pnpm -v`  
   Verify that pnpm is installed and accessible.

---

## Local Development

1. `pnpm install` - to install dependencies
2. `pnpm start` - to start development server

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

1. `pnpm install` - to install dependencies for building
2. `BASE_URL="/prefix/docs/" URL="http://localhost" pnpm build`

### Parameter Descriptions

- **`BASE_URL`**  
  Specifies the base path for the application (e.g., `/prefix/v2`).

  - Ensure the path starts with a `/`.
  - Do not include a trailing `/`.

- **`URL`**  
   The directory where static files will be output.
  This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Example Command

```bash
BASE_URL="/prefix/docs/" URL="http://example.com" pnpm build
```

For documentation hosted at `http://example.com/prefix/docs`
