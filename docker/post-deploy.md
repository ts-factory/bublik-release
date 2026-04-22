Now that your **Bublik** instance is running at the specified **FQDN**, you're ready to import your first log.

## Directory Structure

After setting `BUBLIK_DOCKER_DATA_DIR` and launching the application, it creates the following structure:

```

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

Once log published you should be able to see it at `
http://localhost/v2/admin/import

## Import Log

Import process is mainly is a background process and you view and monitor logs at <br/>

1. `
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
