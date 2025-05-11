---
title: Setup
---

# Setup Guide

:::warning
This deployment method is intended for development and testing environments only. <br />
For production deployments, please refer to the official installation guides.
:::

## Prerequisites

- Ubuntu 24.04 LTS

### Required Software

- jq (JSON processor)
- curl
- [Task (taskfile)](https://taskfile.dev/installation/)

## 1. Install system dependencies

```bash
# Install system dependencies
sudo apt update && sudo apt install -y curl jq git

# Please review script that you are about to run for security purposes
sudo sh -c "$(curl -L https://taskfile.dev/install.sh)" -- -d -b /usr/local/bin
```

## 2. Clone the Repository

Clone the repository with all required submodules:

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/ts-factory/bublik-docker.git

# Navigate to project directory
cd bublik-docker
```

## 3. Setup Environment

Run the setup task to initialize the environment:

```bash
task setup
```

This command will:

- Check and install required dependencies
- Create necessary configuration files
- Set up environment variables
- Configure data directories

:::warning
If you've just installed Docker. <br />
You **MUST** restart your shell session for group changes to take effect.
:::

### How to restart shell session

1. Log out of your current session

```bash
exit
```

2. Log back in

3. Run setup again

```bash
task setup
```

## 4. Configure Environment

After setup you can customize your installation via editing generated `.env` file at the root of cloned repository

### Setup Admin Credentials

It's **highly recommended** to update the default admin credentials.

**Default Credentials**
:::danger
These defaults are for local development only. <br />
Change them in your .env or environment variables before deploying.
:::

```
DJANGO_SUPERUSER_EMAIL=admin@bublik.com
DJANGO_SUPERUSER_PASSWORD=admin
```

### Generate a Secure `SECRET_KEY`

Django requires a secure, random SECRET_KEY (at least 50 characters long).
:::tip
Avoid using special characters like `/`, `+`, and `=` in your SECRET_KEY to prevent issues with shell parsing or .env file loaders.
:::

You can generate one using `openssl`:

```bash
openssl rand -base64 50 | tr -d '/+=\n'
```

Then set it in your `.env` file:

```
SECRET_KEY=your_generated_secret_key_here
```

### Setup `BUBLIK_FQDN`

:::warning
`BUBLIK_FQDN` must be set to where you expect to access your bublik instance <br />
If you set this incorrectly and publish and import logs to bublik this will cause `Source` button to have incorrect link
:::

:::tip
A simple way to figure out the correct `BUBLIK_FQDN`: <br />
It's the same as the address shown in your browser's address bar.
:::

Examples:

1. If you hosting with domain name: <br />

```
BUBLIK_FQDN=https://bublik.example.com
```

2. If you hosting with local ip: <br />

```
BUBLIK_FQDN=http://192.168.1.122
```

3. If you're expecting to access bublik instance locally and start it in VM: <br />

```
BUBLIK_FQDN=http://192.168.1.122
```

4. If you hosting on localhost:

```
BUBLIK_FQDN=http://localhost
```

### Setup Storage Location

By default, **Bublik** stores all runtime and application data in the `./data` directory, relative to the cloned repository. However, you can store this data anywhere on your system - for example, in `/srv/bublik-data` or any other location of your choice.

You can customize the storage location by setting the `BUBLIK_DOCKER_DATA_DIR` variable in your `.env` file:

```bash
BUBLIK_DOCKER_DATA_DIR=/srv/bublik-data
```

:::note
All necessary permissions will be set up automatically <br />
You don't need to manually assign permissions to `www-data` or any other user.
:::

#### 📁 Directory Structure

The storage location will contain the following structure:

```
<BUBLIK_DOCKER_DATA_DIR>/
├── django-logs/           # Application logs
│   ├── bublik-management-commands/
│   ├── bublik-rest.access.log
│   ├── bublik-rest.log
│   └── debug.log
└── logs/                # Test logs storage
    ├── bad/             # Failed imports
    ├── incoming/        # Temporary storage for logs waiting to be published
    └── logs/            # Put your logs in this folder
        └── ...          # Your test logs
```

:::important
The `<BUBLIK_DOCKER_DATA_DIR>/logs/logs/` directory is where your published test logs will be stored. When configuring your test environment to publish logs:

1. Configure your test system to place logs in this directory
2. If you're migrating from a previous setup, move your existing logs to this location
3. The directory can have any internal structure - Bublik doesn't enforce any specific organization inside it
   :::

##### Example

Let's say you set your `BUBLIK_DOCKER_DATA_DIR` in `.env` file to `/srv/bublik-data`

This will generate following structure

```
/srv/bublik-data/
├── django-logs/           # Application logs
│   ├── bublik-management-commands/
│   ├── bublik-rest.access.log
│   ├── bublik-rest.log
│   └── debug.log
└── logs/                # Test logs storage
    ├── bad/             # Failed imports
    ├── incoming/        # Temporary storage for logs waiting to be published
    └── logs/            # Put your logs in this folder
        └── ...          # Your test logs
```

In this case logs should be put at `/srv/bublik-data/logs/logs` folder

## 5. Bootstrap the Application

:::warning
**Bublik** may take up to **15 seconds** to fully start. <br />
If a command fails with an error, please wait a moment and try again. <br />
:::

Initialize the application with:

```bash
task bootstrap
```

You will be prompted if you want to create initial project configs as a starting point <br />
You can just create initial configs as a starting point

Now you instance should be available at the specified `BUBLIK_FQDN`
