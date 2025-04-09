---
title: Post Deploy
---

Now that your **Bublik** instance is running at the specified **FQDN**, you're ready to import your first log.

## Directory Structure

After setting `BUBLIK_DOCKER_DATA_DIR` and launching the application, it creates the following structure:

```
<BUBLIK_DOCKER_DATA_DIR>/
├── django-logs/           # Application logs
└── logs/                 # Test logs storage
    ├── bad/             # Failed imports
    ├── incoming/        # Temporary storage for logs waiting to be published
    └── logs/            # Put your logs in this folder
        └── ...          # Your test logs
```

:::note
The example below shows a possible structure with `net-drv-ts` as a test suite directory, but you can organize your logs in any way that suits your needs:

```
<BUBLIK_DOCKER_DATA_DIR>/
logs/
└── logs/
    └── net-drv-ts/      # Example test suite directory
```

:::

### Directory Purposes

- **`incoming/`**: Temporary storage for logs waiting to be published
- **`logs/`**: Contains all successfully published logs, accessible at `<BUBLIK_FQDN>/logs/`. You can organize test logs in this directory using any structure
- **`bad/`**: Storage for logs that failed during the publishing process

## Publishing Logs

### Input Requirements

Each log must be a **GNU tar archive** containing two mandatory files:

1. `meta_data.json` - contains metadata about the log
2. `raw_log_bundle.tpxz` - the actual log content

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.<br />
TODO:

- Add other allowed files
  :::

### Publishing Process

:::note
These command also trigger automatic import of the log into **Bublik** database
:::

1. Copy your log archive(s) to the `incoming` directory
2. Run the publish command:

```bash
task publish
```

You also can import log archive directly via this command:

```bash
task import -- <path/to/my_log.tar>
```

Once log published you should be able to see it at `<BUBLIK_FQDN>/logs/`
Since import is automatically triggered you should be able see running import logs at <br />
http://localhost/v2/admin/import

## Import Log

Import process is mainly is a background process and you view and monitor logs at <br/>

1. `<BUBLIK_FQDN>/v2/admin/import/`
2. `<BUBLIK_FQDN>/flower/`

You can import logs in multiple ways:

### UI

You can also issue import via using UI

1. Go to `<BUBLIK_FQDN>/v2/admin/import`
2. Press "Import" button in the top right corner of the screen
3. Specify single URL or multiple URLs for logs to import

### API

You can also import log from remote logs storage via using **Bublik** API by issuing GET request

We provide shortcut for this command with:

```bash
# This calls under the hood:
# curl <BUBLIK_FQDN>/api/v2/importruns/source/?url=<log_url>
task import-remote -- <log_url>
```

### Archive

```bash
task import -- <path/to/tar-archive>.tar
```

### Command

```bash
task import-command -- <log_url>
```

## FAQ

### How to reset db?

:::danger
This is dangerous operation <br />
Please, create db backup before doing anything via `task backup:create` <br />
Proceed with caution!
:::

1. `task down` - remove running containers
2. `docker volume ls` - locate db volume (be default it should be `bublik_db_data`, depends on project name from `.env` file)
3. `docker volume rm <volume_name>` - to delete db
4. `task up` - db will be create again

### URL doesn't matched project references

This is caused by misconfiguring `references` config
For example if you try to import log from: <br />
https://example.com/logs/

#### Solution

1. Go to `<BUBLIK_FQDN>/v2/admin/config`
2. Find `references` config
3. Add or edit `LOGS_BASES` to include from where you try to import logs

```json
{
  "uri": ["https://example.com/logs/"],
  "name": "Example log base"
},
```
