---
title: Development
---

:::caution
This is experimental and subject to change.<br />
Do not use it if you don't know what you are doing
:::

# Docker Setup Guide

This guide explains how to set up and run the project using Docker on **Ubuntu 24.10 aarch64**.

## Install Docker and Docker Compose

1. **Install Docker**  
   Follow the official [Docker installation guide for Ubuntu](https://docs.docker.com/engine/install/ubuntu/).
2. **Post-installation steps**  
   After installing Docker, run the post-installation steps:  
   [Docker Post-installation Setup](https://docs.docker.com/engine/install/linux-postinstall/).

3. **Install Docker Compose**  
   Follow the installation instructions for [Docker Compose](https://docs.docker.com/compose/install/).

4. **Verify Installation**  
   Ensure Docker and Docker Compose are installed by running the following commands:
   - `docker --version`
   - `docker compose version`

## Reset Docker Environment

1. **Stop and remove containers**  
   Run the command:  
   `docker compose -f docker-compose.dev.yml --progress plain --env-file .env down`

2. **Check for remaining containers**  
   Ensure no containers with the prefix "bublik-\*" remain:  
   `docker ps -a`

3. **Remove Docker volumes**  
   Delete all volumes with:  
   `docker volume ls -q | xargs -r docker volume rm`

4. **Check volumes**  
   Ensure volumes with the prefix "bublik\_\*" are removed:  
   `docker volume ls`

5. **Remove Docker images**  
   Delete all images:  
   `docker images -q | xargs -r docker rmi -f`

6. **Clean up Docker system**  
   Remove all unused containers, volumes, images, and networks:  
   `docker system prune -a -f`

## Rebuild Environment

1. **Clone the repository**  
   `git clone <PLACEHOLDER>`

2. **Navigate to the project directory**  
   `cd ./bublik`

3. **Switch to the Docker branch**  
   `git switch docker`

4. **Initialize and update submodules**  
   `git submodule init && git submodule update`

5. **Check if the UI is initialized**  
   Verify the presence of the Dockerfile:  
   `ls ./bublik-ui/apps/bublik/Dockerfile`

6. **Check if Test Environment (TE) is initialized**  
   Verify the dispatcher script:  
   `ls ./test-environment/dispatcher.sh`

7. **Check for config file**  
   Verify the config file exists:  
   `ls ./bublik-conf/xce/dpdk/per_conf.py`

8. **Create a `.env` file**  
   `touch .env`  
   Add the necessary configuration (example below).

9. **Start Docker containers**  
   Run the following command to start the containers:  
   `docker compose -f docker-compose.dev.yml --progress plain --env-file .env up`

10. **Verify the Django container**  
    Check the container ID:  
    `docker ps`

11. **Access the container**  
    `docker exec -it <container_id> bash`

12. **Create a superuser**  
    Inside the container, run:  
    `./manage.py createsuperuser`

13. **Migrate the database**  
    Visit [http://localhost/v2/admin/config](http://localhost/v2/admin/config) and click "Migrate".

## Watch Mode

To automatically update the UI and backend when code changes, start the environment with the `--watch` flag:
`docker compose -f docker-compose.dev.yml --progress plain --env-file .env up --watch`

## Running Commands in the Container

To execute Django management commands, follow these steps:

1. **Find the container ID**  
   `docker ps`

2. **Access the container**  
   `docker exec -it <container_id> bash`

3. **Run the command**  
   Execute the desired Django management command, for example:  
   `./manage.py <command>`

4. **Create a superuser**  
   `./manage.py createsuperuser`

## Ports

Here are the ports exposed to the host for each service:

| **Service**   | **Purpose**                         | **Host Port**   | **Container Port** |
| ------------- | ----------------------------------- | --------------- | ------------------ |
| **Django**    | Django web server                   | `8000`          | `8000`             |
| **Postgres**  | PostgreSQL database                 | `5432`          | `5432`             |
| **Redis**     | Redis cache                         | Not exposed     | Not exposed        |
| **RabbitMQ**  | RabbitMQ message broker             | `5672`, `15672` | `5672`, `15672`    |
| **Flower**    | Celery task monitoring              | `5555`          | `5555`             |
| **Nginx**     | Nginx web server                    | `80`            | `80`               |
| **Bublik UI** | Frontend user interface             | `4200`          | `4200`             |
| **Mailpit**   | Test email (web interface and SMTP) | `8025`, `1025`  | `8025`, `1025`     |

## Example `.env` Configuration

```
BUBLIK_ACCESS_LOG=/app/bublik/logs/bublik-rest.access.log
BUBLIK_BIND_GUNICORN=0.0.0.0:8000
BUBLIK_GRACEFUL_TIMEOUT=1200
BUBLIK_LOG=/app/bublik/logs/bublik-rest.log
BUBLIK_LOGDIR=/app/bublik/logs
BUBLIK_SRC=/app/bublik
BUBLIK_TIMEOUT=1200
BUBLIK_UI_DIR=/app/bublik-ui
BUBLIK_WEB_NAME=Bublik
BUBLIK_WORKERS=8
CELERYD_MAX_TASKS_PER_CHILD=1
CELERY_ACCEPT_CONTENT=application/json
CELERY_APP=bublik.interfaces
CELERY_BROKER_URL=amqp://rabbitmq
CELERY_CREATE_DIRS=1
CELERY_LOG_LEVEL=INFO
CELERY_RESULT_BACKEND=rpc://
CELERY_RESULT_SERIALIZER=json
CELERY_TASK_SERIALIZER=json
DB_HOST=db
DB_NAME=bublik
DB_PASSWORD=bublik
DB_PORT=5432
DB_USER=bublik
DOLLAR=$
EMAIL_ADMINS=admin@bublik.com
EMAIL_FROM=admin@bublik.com
EMAIL_HOST=mailpit
EMAIL_PORT=1025
EMAIL_USE_TLS=False
ENABLE_JSON_LOGS_PROXY=True
FLOWER_PERSISTENT=True
FLOWER_PORT=5555
FLOWER_URL_PREFIX=flower
MANAGEMENT_COMMANDS_LOG=/app/bublik/logs/bublik-management-commands
PER_CONF_DIR=/app/bublik/bublik-conf/xce/dpdk
REDIS_HOST=redis
SECRET_KEY=BUBLIK_DEV_SECRET_KEY
SECURE_HTTP=True
TE_BASE=/app/te
TMPDIR=/tmp
URL_PREFIX=
```
