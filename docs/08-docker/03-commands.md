---
title: Commands
---

In docker we mainly wrap **Bublik** internal commands and provide multiple shortcuts <br />

## List Of All Commands

You can get list of all commands via running:

```bash
task
```

## Summary

To get description of any command you can run with `--summary` flag:

```bash
task backup:create --summary
```

## Managing Containers

### Create & Remove

- To create and start containers run:
```bash
task up
```

- Opposite of `up` is `down`. This will also remove Containers
```bash
task down
```

### Start & Stop

- To start stopped containers you can run:
```bash
task start
```

- To stop containers you can run:
```bash
task stop
```

## Update

To update to latest version you should run two commands:

```bash
# To pull latest images
# This will pull images depending based on IMAGE_TAG from .env
# You can also pin IMAGE_TAG to some version
task pull

# Once images pulled recreate containers
task up
```

## Import & Publish

### Import & Publish Log Archives

1. Publish & Import Local Logs from `incoming` directory:
```bash
task publish
```

2. Publish & Import Single Log:
```bash
# Publish and import single log archive
task import -- ~/net.tar
```

### Import Log From URL

1. Import via API call with `curl`:
```bash
task import-remote -- <log_url>
```

2. Import via shell from container:
```bash
task import-command -- <log_url>
```


## Docker Containers

When you set up Bublik, you'll have multiple running containers. <br />
To manage these containers effectively, you can use the following commands:

### Viewing Running Containers

To get a list of all running containers:

```bash
docker ps
```

This command displays all active containers along with information such as their `CONTAINER ID`, `image`, `status`, `ports`, and `names`.

###  Accessing Container Shells

To access a shell inside a specific container:

1. First locate the container's ID from the `CONTAINER ID` column in the docker ps output
2. Then run

```bash
docker exec -it <container_id> bash
```

This command opens an interactive terminal session within the specified container, allowing you to execute commands directly inside it.

Some containers might use a different shell than `bash`. If the above command doesn't work, try using `sh` instead:

```bash
docker exec -it <container_id> sh
```

For convenience, we provide shortcut to get terminal session inside django container (see below)

## Shell Access

If you can't specify management command or you know what you are doing you can get a shell inside container to run different commands <br />
This will drop you into django container shell.

```bash
task shell
```

Now you can run different commands:

```bash
# To trigger meta meta categorization
python manage.py meta_categorization

# To delete run
python manage.py delete_run
```

We also offer some shortcuts

## Management


### Delete Run

To delete some run you can run:

```bash
task delete-run -- <run_id>
```

### Meta Categorization

To trigger meta categorization you can run:

```bash
task meta-categorization
```

## Backup

- To create backup of db and logs you can run:
```bash
task backup:create
```

- To get list of available backup run:
```bash
task backup:list
```

- To restore from backup you can run:
```bash
task backup:restore -- backups/<your_backup_file>
```
