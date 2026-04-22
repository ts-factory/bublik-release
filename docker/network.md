<!--toc:start-->

- [First Deploy](#first-deploy)
  - [Preparation Machine](#preparation-machine)
    - [Install Dependencies](#install-dependencies)
    - [Prepare Initial Deploy](#prepare-initial-deploy)
    - [Test](#test)
    - [Setup Preparation Machine](#setup-preparation-machine)
    - [Configuration](#configuration)
    - [What You Have Prepared](#what-you-have-prepared)
    - [Transfer To Deployment machine](#transfer-to-deployment-machine)
  - [Deploy Machine](#deploy-machine)
    - [Install docker](#install-docker)
    - [Configuration](#configuration)
    - [Finish Initial Deploy](#finish-initial-deploy)
- [Update](#update)
  - [Pre-Update Checklist](#pre-update-checklist)
  - [Preparation Machine](#preparation-machine)
    - [Step 1: Prepare New Version](#step-1-prepare-new-version)
    - [Step 2: Create Update Package](#step-2-create-update-package)
  - [Deployment Machine](#deployment-machine)
    - [Step 3: Backup Current System (On Deployment Machine)](#step-3-backup-current-system-on-deployment-machine)
    - [Step 4: Apply Update (On Deployment Machine)](#step-4-apply-update-on-deployment-machine)
    - [Step 5: Start Updated Application (On Deployment Machine)](#step-5-start-updated-application-on-deployment-machine)
  - [Update Path Example](#update-path-example)
- [Post-Deployment](#post-deployment)
  - [Access Your Application](#access-your-application)
  - [Database Migration (If Applicable)](#database-migration-if-applicable)
  <!--toc:end-->

This guide walks you through deploying Bublik in an network-restricted environment using two machines:

- **Preparation Machine**: Has internet access, used for downloading and preparing components
- **Deploy Machine**: Air-gapped Ubuntu 24.04 LTS system where Bublik will be deployed

Both machines should be **Ubuntu 24.04 LTS**
We support `arm64` and `amd64`
We assume `amd64` in below instructions

---

## First Deploy

### Preparation Machine

#### Create Bublik User

```bash
# Create bublik user with home directory
sudo useradd -m -s /bin/bash bublik

# Create and set ownership of bublik directory
sudo mkdir -p /opt/bublik-docker
sudo chown -R bublik:bublik /opt/bublik-docker

# Add bublik user to docker group (will be needed after docker installation)
sudo usermod -aG docker bublik
```

#### Install Dependencies

```bash
sudo apt-get update && sudo apt-get install jq git curl

# A restart may or may not be required for the command to be recognized depending on your system.
sudo snap install --classic go

# Add GOBIN to path so task works
echo 'export PATH="$HOME/go/bin:$PATH"' >> ~/.bashrc

# Install task from source
go install github.com/go-task/task/v3/cmd/task@latest

# Install Docker and Docker Compose
sudo curl -fsSL https://get.docker.com | sh

sudo usermod -aG docker $USER
# Apply group changes (allows running docker without sudo)
newgrp docker

source $HOME/.bashrc

# Switch to bublik user for all remaining operations
sudo su - bublik
```

**Verify installation:**

```bash
curl --version
jq --version
go version
task --version
git --version
docker --version
docker compose version
```

**All subsequent commands in this guide should be run as the `bublik` user.**

#### Prepare Initial Deploy

You will now create deploy package to transfer to deployment machine

#### Test

```bash
# 1. Setup directories
mkdir -p /opt/bublik-docker/deps
mkdir -p /opt/bublik-docker/bin
mkdir -p /opt/bublik-docker/images
mkdir -p /opt/bublik-docker/versions
mkdir -p /opt/bublik-docker/config

# 2. Prepare required binaries
cp $(which task) /opt/bublik-docker/bin
# Skip if deployment machine have jq already installed
cp $(which jq) /opt/bublik-docker/bin
# Skip if deployment machine have curl already installed
cp $(which curl) /opt/bublik-docker/bin
# Skip if deployment machine has git already installed
cp $(which git) /opt/bublik-docker/bin

# 3. Download Docker packages
cd /opt/bublik-docker/deps && apt download docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin && cd -
```

#### Setup Preparation Machine

```bash
# Set bublik version (REQUIRED - Set this before proceeding)
export BUBLIK_VERSION=2.1.0

echo "Using Bublik version: $BUBLIK_VERSION"

# 1. Clone repository
git clone --branch "v$BUBLIK_VERSION" --recurse-submodules https://github.com/ts-factory/bublik-docker.git "/opt/bublik-docker/versions/bublik-$BUBLIK_VERSION"

# 2. Setup link to current deploy repo
ln -s "/opt/bublik-docker/versions/bublik-$BUBLIK_VERSION" "/opt/bublik-docker/current"
ls -lha /opt/bublik-docker | grep "current"

# 3. Setup .env file
cp /opt/bublik-docker/current/.env.example /opt/bublik-docker/config/.env
ln -s /opt/bublik-docker/config/.env /opt/bublik-docker/current/.env
ls -lha /opt/bublik-docker/current/.env | grep ".env"

# 4. Setup IDs (needed for correct permissions)
echo "HOST_UID=$(id -u)" >> /opt/bublik-docker/config/.env
echo "HOST_GID=$(id -g)" >> /opt/bublik-docker/config/.env

# 5. Set correct version so it pulls correct image versions
sed -i "s/^IMAGE_TAG=.*/IMAGE_TAG=$BUBLIK_VERSION/" /opt/bublik-docker/config/.env
# Verify correct image tag is set
cat /opt/bublik-docker/current/.env | grep "IMAGE_TAG"

# 6. Pull images
cd /opt/bublik-docker/current && task pull

# 7. Check that images pulled
docker image ls

# 8. Save images
docker save -o "/opt/bublik-docker/images/bublik-$BUBLIK_VERSION.tar" \
  "ghcr.io/ts-factory/bublik-nginx:$BUBLIK_VERSION" \
  "ghcr.io/ts-factory/bublik-log-server:$BUBLIK_VERSION" \
  "ghcr.io/ts-factory/bublik-runner:$BUBLIK_VERSION" \
  redis:8 \
  postgres:17 \
  rabbitmq:4-management
```

#### Configuration

1. Edit the `.env` file: `/opt/bublik-docker/config/.env`
2. Follow the configuration guide: [Bublik Configuration Documentation](https://ts-factory.github.io/bublik-release/docker/setup#4-configure-environment)

#### What You Have Prepared

At this point, you have successfully created a complete deployment package in `/opt/bublik-docker/` containing:

```
/opt/bublik-docker/
├── deps/                      # Docker installation packages (.deb files)
├── bin/                       # Required executables (task, jq, curl, git)
├── images/                    # Docker images saved as .tar files
│   └── bublik-${BUBLIK_VERSION}.tar
├── config/
│   └── .env                   # Your configured environment file
├── versions/
│   └── bublik-${BUBLIK_VERSION}/      # Complete Bublik repository with all components
└── current -> versions/bublik-${BUBLIK_VERSION}/  # Symlink to active version
```

**Key components ready for transfer:**

- ✅ All Docker dependencies and installation packages
- ✅ Required executables (task, jq, curl, git)
- ✅ Pre-pulled Docker images (saved as .tar archive)
- ✅ Complete Bublik application code and configuration
- ✅ Configured environment file with your settings

#### Transfer To Deployment machine

Now we'll package everything and transfer it to your air-gapped deployment machine.

```bash
# 1. Create Archive
tar czf /tmp/bublik-deploy.tar.gz -C /opt bublik-docker

# 2. Transfer everything to deploy machine
scp /tmp/bublik-deploy.tar.gz <deploy_machine>:~
```

---

### Deploy Machine

#### Create Bublik User

```bash
# Create bublik user with home directory
sudo useradd -m -s /bin/bash bublik

# Create and set ownership of bublik directory
sudo mkdir -p /opt/bublik-docker
sudo chown -R bublik:bublik /opt/bublik-docker

# Switch to bublik user for all remaining operations
sudo su - bublik
```

#### Extract Deployment Package

```bash
# 1. Extract initial deploy version
tar xzf ~/bublik-deploy.tar.gz -C /opt

# 2. Add packaged binaries to PATH
echo 'export PATH="/opt/bublik-docker/bin:$PATH"' >> ~/.bashrc

# 3. Remove archive
rm ~/bublik-deploy.tar.gz

# 4. Apply change to bashrc
source ~/.bashrc
```

#### Install docker

:::danger
It's highly recommended to use [official way to install](https://docs.docker.com/engine/install/ubuntu/) <br />
You can skip this step if you follow official guide
:::

```bash
sudo dpkg -i /opt/bublik-docker/deps/*.deb
sudo usermod -aG docker bublik
newgrp docker
```

**Verify installation:**

```bash
curl --version
jq --version
task --version
git --version
docker --version
docker compose version
```

**All subsequent commands in this guide should be run as the `bublik` user.**

#### Configuration

1. Edit the `.env` file: `/opt/bublik-docker/config/.env`
2. Follow the configuration guide: [Bublik Configuration Documentation](https://ts-factory.github.io/bublik-release/docker/setup#4-configure-environment)

#### Finish Initial Deploy

```bash
# Set the same version as used on preparation machine (REQUIRED)
export BUBLIK_VERSION=2.1.0

echo "Using Bublik version: $BUBLIK_VERSION"

# 1. Load images
docker load -i "/opt/bublik-docker/images/bublik-$BUBLIK_VERSION.tar"

# 2. Verify correct images loaded
docker image ls

# 3. Go to currently linked repo version
cd /opt/bublik-docker/current

# 4. Link configuration
ln -sfn /opt/bublik-docker/config/.env /opt/bublik-docker/current/.env
# Verify link
ls -lha /opt/bublik-docker/current/.env | grep ".env"

# 5. Adjust UID and GUID in case it's different from prep machine in case they different
sed -i "s/^HOST_UID=.*/HOST_UID=$(id -u)/" /opt/bublik-docker/config/.env
sed -i "s/^HOST_GID=.*/HOST_GID=$(id -g)/" /opt/bublik-docker/config/.env

# 6. Verify correct image tag is set
cat /opt/bublik-docker/current/.env | grep "IMAGE_TAG"

# 7. To start application
task up
```

---

## Update

:::warning
Sequential updates are mandatory <br />
**Never skip minor versions** during updates to prevent system instability and data corruption
:::

#### Pre-Update Checklist

Before beginning any update process:

- [ ] **Create a full database backup**
- [ ] **Test the update path on a preparation machine first**
- [ ] **Review release notes for ALL intermediate versions**

### Preparation Machine

Actions in this section should be done on preparation machine

#### Step 1: Prepare New Version

```bash
# Set the NEW version you want to update to (REQUIRED)
export BUBLIK_NEW_VERSION=2.2.0

echo "Updating to Bublik version: $BUBLIK_NEW_VERSION"

# 1. Clone new version repository
git clone --branch "v$BUBLIK_NEW_VERSION" --recurse-submodules https://github.com/ts-factory/bublik-docker.git "/opt/bublik-docker/versions/bublik-$BUBLIK_NEW_VERSION"

# 2. Update preparation machine to new version
ln -sfn "/opt/bublik-docker/versions/bublik-$BUBLIK_NEW_VERSION" "/opt/bublik-docker/current"
ls -lha /opt/bublik-docker | grep "current"

# 3. Re-link .env configuration
ln -sfn /opt/bublik-docker/config/.env /opt/bublik-docker/current/.env
ls -lha /opt/bublik-docker/current/.env | grep ".env"

# 4. Set correct `IMAGE_TAG` to new version
sed -i "s/^IMAGE_TAG=.*/IMAGE_TAG=$BUBLIK_NEW_VERSION/" /opt/bublik-docker/config/.env
cat /opt/bublik-docker/current/.env | grep "IMAGE_TAG"

# 5. Pull new images
cd /opt/bublik-docker/current && task pull

# 6. Check that images pulled
docker image ls

# 7. Save new version images
docker save -o "/opt/bublik-docker/images/bublik-$BUBLIK_NEW_VERSION.tar" \
  "ghcr.io/ts-factory/bublik-nginx:$BUBLIK_NEW_VERSION" \
  "ghcr.io/ts-factory/bublik-log-server:$BUBLIK_NEW_VERSION" \
  "ghcr.io/ts-factory/bublik-runner:$BUBLIK_NEW_VERSION" \
  redis:8 \
  postgres:17 \
  rabbitmq:4-management
```

#### Step 2: Create Update Package

At this point, you have successfully created a complete update package in `/opt/bublik-docker` containing:

```
/opt/bublik-docker/
├── images/                                # Docker images saved as .tar files
│   └── bublik-${BUBLIK_NEW_VERSION}.tar
└── versions/
    └── bublik-${BUBLIK_NEW_VERSION}/      # Complete Bublik repository with all components
```

```bash
# 1. Create update archive with new version repository and images
tar czf "/tmp/bublik-update-$BUBLIK_NEW_VERSION.tar.gz" -C /opt/bublik-docker "versions/bublik-$BUBLIK_NEW_VERSION" "images/bublik-$BUBLIK_NEW_VERSION.tar"

# 2. Transfer to deploy machine
scp "/tmp/bublik-update-$BUBLIK_NEW_VERSION.tar.gz" <deploy_machine>:~
```

### Deployment Machine

Actions in this section should be done on deployment machine

#### Step 3: Backup Current System (On Deployment Machine)

```bash
# 1. Go to current deploy
cd /opt/bublik-docker/current

# 2. Create DB backup
task backup:create

# 3. Copy backup to safe location
cp backups/backup_*.sql /tmp/bublik-backup-$(date +%Y%m%d_%H%M%S).sql
```

#### Step 4: Apply Update (On Deployment Machine)

```bash
# Set the NEW version you're updating to (MUST match preparation machine)
export BUBLIK_NEW_VERSION=2.2.0

echo "Applying update to Bublik version: $BUBLIK_NEW_VERSION"

# 1. Extract archive with update
tar xzf ~/bublik-update-$BUBLIK_NEW_VERSION.tar.gz -C /opt/bublik-docker

# 2. Load new images
docker load -i "/opt/bublik-docker/images/bublik-$BUBLIK_NEW_VERSION.tar"

# 3. Verify new images loaded
docker image ls

# 4. Re-link to new version
ln -sfn "/opt/bublik-docker/versions/bublik-$BUBLIK_NEW_VERSION" "/opt/bublik-docker/current"
# Verify link
ls -lha /opt/bublik-docker | grep "current"

# 5. Re-link old configuration
ln -sfn /opt/bublik-docker/config/.env /opt/bublik-docker/current/.env
# Verify link
ls -lha /opt/bublik-docker/current/.env | grep ".env"

# 6. Update IMAGE_TAG in configuration
sed -i "s/^IMAGE_TAG=.*/IMAGE_TAG=$BUBLIK_NEW_VERSION/" /opt/bublik-docker/config/.env
# Verify IMAGE_TAG is correctly set
cat /opt/bublik-docker/config/.env | grep "IMAGE_TAG"
```

#### Step 5: Start Updated Application (On Deployment Machine)

```bash
# 1. Navigate to new current version
cd /opt/bublik-docker/current

# 2. Start updated application
task up

# 3. Monitor logs for successful startup
docker compose logs -f

# 4. Verify application is running correctly
docker compose ps
```

### Update Path Example

**Scenario**: Updating from version 1.7.0 → 1.10.0

**Required Update Sequence**:

```
1.7.0 → 1.8.0 → 1.9.0 → 1.10.0
```

**Execution Steps**:

1. **Update 1.7.0 → 1.8.0**

   ```bash
   export BUBLIK_NEW_VERSION=1.8.0
   # Follow update process
   ```

   - Review 1.8.0 release notes
   - Test functionality before proceeding

2. **Update 1.8.0 → 1.9.0**

   ```bash
   export BUBLIK_NEW_VERSION=1.9.0
   # Follow update process
   ```

   - Review 1.9.0 release notes
   - Test functionality before proceeding

3. **Update 1.9.0 → 1.10.0**

   ```bash
   export BUBLIK_NEW_VERSION=1.10.0
   # Follow update process
   ```

   - Review 1.10.0 release notes
   - Final testing and validation

---

## Post-Deployment

**Startup Information:**

- Initial startup may take up to 30 seconds
- Check logs with `docker compose logs -f` if needed
- By default Bublik **will be served on port 80**, you can adjust this by editing `BUBLIK_DOCKER_PROXY_PORT` in `/opt/bublik-docker/config/.env`

### Access Your Application

- Navigate to `http://<target_machine_ip>` in your browser
- Default ports are defined in your `/opt/bublik-docker/config/.env` file

### Database Migration (If Applicable)

If you're migrating to docker deployment from a bare metal installation:

```bash
# 1. Run these commands on your old database server
pg_dump -h <db_host> -U <username> -d bublik -f backup_$(date +%Y%m%d_%H%M%S).sql

# 2. Transfer backup to deploy machine machine
scp backup_*.sql <deploy_machine>:~/

# 3. On deploy machine - restore database
cd /opt/bublik-docker/current
task backup:restore -- <path_to_backup.sql>

# 4. Restart application
task up
```
