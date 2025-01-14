---
title: Deploy From Scratch
---

# Deploy from Scratch

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.
:::

<!--toc:start-->
- [Deploy from Scratch](#deploy-from-scratch)
  - [Prerequisites](#prerequisites)
  - [Building Test Environment](#building-test-environment)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Set Up Python Virtual Environment](#2-set-up-python-virtual-environment)
    - [3. Install Meson Build System](#3-install-meson-build-system)
    - [4. Build the Test Environment](#4-build-the-test-environment)
    - [5. Update System PATH](#5-update-system-path)
  - [Database Setup](#database-setup)
  - [Cache Setup](#cache-setup)
  - [Flower & Celery Setup](#flower-celery-setup)
  - [Kerberos Setup](#kerberos-setup)
  - [UI Setup](#ui-setup)
    - [Prerequisites](#prerequisites)
    - [Build UI](#build-ui)
      - [1. Clone repo](#1-clone-repo)
      - [2. Install Dependencies](#2-install-dependencies)
      - [3. Build UI](#3-build-ui)
      - [4. You can find output at `dist/apps/bublik`](#4-you-can-find-output-at-distappsbublik)
  - [UI Docs Setup](#ui-docs-setup)
    - [Prerequisites](#prerequisites)
    - [Build Docs](#build-docs)
      - [1. Clone repo](#1-clone-repo)
      - [2. Install Dependencies](#2-install-dependencies)
      - [3. Build Docs](#3-build-docs)
      - [4. You can find output at `./build`](#4-you-can-find-output-at-build)
  - [Backend Setup](#backend-setup)
    - [1. Clone the Backend Repository](#1-clone-the-backend-repository)
    - [2. Set Up Python Virtual Environment](#2-set-up-python-virtual-environment)
    - [3. Install Python Dependencies](#3-install-python-dependencies)
    - [4. After Deployment](#4-after-deployment)
  - [Post-Deployment Steps](#post-deployment-steps)
  - [Troubleshooting](#troubleshooting)
  - [Status](#status)
  - [Contributing](#contributing)
<!--toc:end-->


## Prerequisites

Before beginning the deployment process, ensure you have:
- Root/sudo access to your system
- Git installed
- Internet connection for downloading packages
- Basic knowledge of Linux command line

Tested on

```
Distributor ID: Ubuntu
Description:    Ubuntu 24.04.1 LTS
Release:        24.04
Codename:       noble
```

Install system dependencies

```bash
sudo apt-get update \
  && sudo apt-get install -y --no-install-recommends \
  gettext \
  python3-celery \
  rsync \
  flex \
  bison \
  ninja-build \
  libjansson-dev \
  libjansson-doc \
  libjansson4 \
  libpopt-dev \
  libpcre3-dev \
  pixz \
  libxml-parser-perl \
  build-essential \
  curl \
  libkrb5-dev \
  libffi-dev \
  libxml2-dev \
  libyaml-dev \
  libssl-dev \
  libglib2.0-dev \
  git \
  python3.12-venv \
  build-essential \
  python-is-python3 \
  2to3 \
  libkrb5-dev \
  libffi-dev \
  unzip \
  && cpan -T JSON
```

---

## Building Test Environment

### 1. Clone the Repository
```bash
git clone https://github.com/ts-factory/test-environment.git
cd ./test-environment
```

### 2. Set Up Python Virtual Environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Meson Build System

```bash
pip install meson==1.6.1
```

### 4. Build the Test Environment

```bash
./dispatcher.sh -q --conf-builder=builder.conf.tools --no-run
```

### 5. Update System PATH

```bash
echo "export PATH=\"$(pwd)/build/inst/default/bin:\$PATH\"" >> ~/.bashrc
source ~/.bashrc
```

## Database Setup

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.
:::

## Cache Setup

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.
:::

## Flower & Celery Setup

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.
:::

## Kerberos Setup

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.
:::

## UI Setup

### Prerequisites

1. Install [`fnm`](https://github.com/Schniz/fnm)
2. Install node via fnm `fnm install --lts`
3. Install [pnpm](https://pnpm.io/installation#using-npm) `npm install -g pnpm@latest-10`
4. Install `nx` `pnpm install -g nx`

### Build UI

#### 1. Clone repo

```bash
git clone https://github.com/ts-factory/bublik-ui
cd ./bublik-ui
```

#### 2. Install Dependencies
```bash
pnpm install --frozen-lockfile
```

#### 3. Build UI

Refer to [documentation for UI for more information](./05-frontend/01-build-ui.md)

```bash
BASE_URL="/v2" nx run bublik:build --base="/v2" --sourcemap="true"
```

#### 4. You can find output at `dist/apps/bublik`

## UI Docs Setup

### Prerequisites

1. Install [`fnm`](https://github.com/Schniz/fnm)
2. Install node via fnm `fnm install --lts`
3. Install [pnpm](https://pnpm.io/installation#using-npm) `npm install -g pnpm@latest-10`

### Build Docs

#### 1. Clone repo
```bash
git clone https://github.com/ts-factory/bublik-release
cd ./bublik-release
```

#### 2. Install Dependencies
```bash
pnpm install --frozen-lockfile
```

#### 3. Build Docs

Refer to [documentation for UI for more information](./05-frontend/02-build-docs.md)
```bash
BASE_URL="/docs/" URL="http://localhost" pnpm build
```

#### 4. You can find output at `./build`

## Backend Setup

### 1. Clone the Backend Repository
```bash
git clone https://github.com/ts-factory/bublik.git
cd bublik
```

### 2. Set Up Python Virtual Environment
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Python Dependencies
```bash
pip install -r requirements.txt
```


### 4. After Deployment

- Create superuser with `./manage.py createsuperuser`
- Once deployment is successful, you can fine-tune the [configurations](../03-configuration/index.md) to suit your needs.

## Post-Deployment Steps

After successful deployment:

1. Verify the installation by running basic system checks (documentation pending)
2. Configure the system according to your needs by referring to the [Configuration Guide](../03-configuration/index.md)
3. Set up monitoring and logging (documentation pending)
4. Implement backup procedures (documentation pending)

## Troubleshooting

If you encounter issues during deployment:
- Check system logs for errors
- Ensure all prerequisites are properly installed
- Verify system requirements are met
- Contact support if issues persist

## Status

:::warning
This documentation is currently under development. <br />
Please check back regularly for updates and additional information.
:::
## Contributing

We welcome contributions to improve this documentation. Please submit pull requests or open issues in the repository.
