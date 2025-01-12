---
title: Build UI
---

# Build UI

## Prerequisites

Before starting, ensure your environment is properly set up:

1. **Install Node.js**  
   Use tools like [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm) for Node.js version management.

2. **Install pnpm**  
   Follow the instructions at [pnpm.io](https://pnpm.io/).

3. **Install nx**  
   Globally install [nx](https://nx.dev/getting-started/installation#installing-nx-globally) for workspace management.

---

## Verify Installation

Run the following commands to confirm the setup:

1. **Check Node.js Version**  
   `node -v`  
   Ensure the installed Node.js version matches the one in `.nvmrc`.

2. **Check pnpm Version**  
   `pnpm -v`  
   Verify that pnpm is installed and accessible.

3. **Check nx Version**  
   `nx --version`  
   Confirm that nx is properly installed.

---

## Building the Frontend

Use the following command to build the frontend:

`BASE_URL="$BASE_URL" nx run bublik:build --base="$BASE_URL" --outputPath=../dist/"$OUTPUT_FOLDER" --sourcemap="true"`

### Parameter Descriptions:

- **`BASE_URL`**  
  Specifies the base path for the application (e.g., `/prefix/v2`).

  - Ensure the path starts with a `/`.
  - Do not include a trailing `/`.

- **`OUTPUT_FOLDER`**  
  The directory where static files will be output.

---

## Running Locally with Docker

To run the UI locally using Docker:

1. **Set Up Environment**  
   Create a `.env.local` file in `apps/bublik/`. Use the example file `apps/bublik/.env.local.example` as a guide.

2. **Build the Docker Image**

   - Using pnpm:  
     `pnpm run docker:build`
   - Using Docker CLI:  
     `docker build -f apps/bublik/Dockerfile.dev . -t bublik-ui`

3. **Start the Docker Container**
   - Using pnpm:  
     `pnpm run docker:start`
   - Using Docker CLI:
     ```
     docker run -it --rm -p 4200:4200 -v $(pwd):/app -v /app/node_modules --env-file apps/bublik/.env.local bublik-ui
     ```

---

## Notes and Caveats

1. **Connecting to the Django Backend**  
   If the Django backend is hosted locally, add the `--network host` flag to the `docker run` command.
   ```
   docker run --network host -it --rm -p 4200:4200 -v $(pwd):/app -v /app/node_modules --env-file apps/bublik/.env.local bublik-ui
   ```
2. **Rebuilding the Image**  
   If you add new dependencies to `package.json`, rebuild the Docker image to apply changes.

   ```
   pnpm run docker:build
   ```

3. **Accessing the UI**  
   Once the container is running, access the UI at `http://localhost:4200`.
