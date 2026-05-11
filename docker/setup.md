# Setup Guide

:::warning
This deployment method is intended for development and testing environments only. <br />
For production deployments, please refer to the official installation guides.
:::

## Prerequisites

- Ubuntu 24.04 LTS
- A non-root user with `sudo` access created before starting the setup

### Required Software

- jq (JSON processor)
- curl
- [Task (taskfile)](https://taskfile.dev/installation/)

### Create a user before setup

If you are provisioning a fresh VM or server, create the user you plan to use for the installation before continuing.

```bash
# Create a new user
sudo adduser bublik

# Add the user to sudo group
sudo usermod -aG sudo bublik
```

Then switch to that user and continue the setup from that account:

```bash
su - bublik
```

:::warning
Do not run the whole setup as `root`.
:::

:::danger
Do not install Docker via `snap`.

Snap-based Docker installations are not supported for this setup and commonly cause permission, socket, and service-management issues.
If Docker is required on this machine, install it using Docker's official APT repository or another standard package-based installation method instead.
:::

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

### Verify host user/group settings in `.env`

After `task setup` generates the `.env` file, check these values:

```dotenv
# Host user/group settings for container permissions
UMASK=022
HOST_UID=501
HOST_GID=70
```

`HOST_UID` must match the user account you are using to run Bublik, and `HOST_GID` must match the `www-data` group on the host.

Use these commands to verify the correct values:

```bash
# Current user UID
id -u

# www-data group GID
getent group www-data
```

If the values in `.env` do not match your system, update them before continuing.

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

### Setup Proxy Port

Bublik's web interface is accessible through a configurable proxy port that determines how you'll connect to the application.

### Default Configuration

By default, Bublik listens on port `80`. This means you can access the application at:

- `http://localhost` (if running locally)
- `http://your-server-ip` (if running on a remote server)

### Customizing the Port

To change the default port, modify the `BUBLIK_DOCKER_PROXY_PORT` variable in your `.env` file:

```bash
# Example: Change to port 8080
BUBLIK_DOCKER_PROXY_PORT=8080
```

After changing the port, you'll access Bublik at:

- `http://localhost:8080` (if running locally)
- `http://your-server-ip:8080` (if running on a remote server)

### Important Notes

- **References Config** If you update this port on already deployed instance you should also update references config at `<bublik_instance_url>/v2/admin/config`
- **Port conflicts**: Ensure the chosen port is not already in use by other services
- **SSH tunneling**: If using SSH tunnels, the tunnel port must match `BUBLIK_DOCKER_PROXY_PORT`
- **Restart required**: Changes to the proxy port require restarting the Docker containers

### Applying Changes

After modifying the `.env` file, restart the services:

```bash
task down
task up
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

## 5. Accessing Instance

To access your Bublik instance, you need to set up an SSH tunnel that matches your configuration:

### SSH Tunnel Setup

Use the following command to create an SSH tunnel:

```bash
ssh -fNL 80:localhost:80 bublik-vm
```

:::important
The port number in the SSH tunnel command (`80` in this example) must match the `BUBLIK_DOCKER_PROXY_PORT` value in your `.env` file.
:::

### Port Configuration

:::caution
Do not use different ports for the SSH tunnel and Docker proxy configuration, as this will prevent proper access to the Bublik interface and log files
:::

- **SSH tunnel port**: The first `80` in `-fNL 80:localhost:80`
- **Environment variable**: `BUBLIK_DOCKER_PROXY_PORT=80` in `.env`

### Troubleshooting

If you encounter connection issues:

1. **Verify port matching**: Ensure the SSH tunnel port matches `BUBLIK_DOCKER_PROXY_PORT`
2. **Check .env file**: Confirm the environment variable is set correctly
3. **Test connection**: Try accessing `http://localhost:80` in your browser
