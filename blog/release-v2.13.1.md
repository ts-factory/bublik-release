We're excited to announce Bublik v2.13.1! <br />
In this release we've added a button to navigate to the latest run report from history page. We also fixed timestamp corruption in imported test iteration results, including timezone offset issues and midnight-crossing errors, and added automatic repair during imports to prevent future inconsistencies. Expected result generation was fixed to preserve keys and notes from obtained data, while avoiding duplicate expectations on force imports.

### What's New

**History Button To Latest Run Report** <br />
We've added a button to navigate to the latest run report from history page

<!--truncate-->

## Highlights

### History Button To Latest Run Report

![History Button To Latest Run Report](/bublik-release/blog/img/report-1.webp)

## Admin Section

⚠️ **Action Required — Force Re-import Needed**

In v1.10.0, Bublik was updated to support the new run log format. As part of this update, the handler that derives the expected result for iterations that lack one was adjusted. In the updated version, only `key` and `notes` nested inside `result` of the obtained result are taken into account, while top-level fields of the obtained result are not. This may result in missing corresponding `key` values in the expected results of iterations from affected runs. To resolve this a force re-import of the relevant runs is required **after completing the update**.

:::tip
Before starting the update, create a database backup to ensure data safety in case of any unexpected issues during the process.
:::

### Backend Update

1. `cd bublik`
2. `git remote update`
3. `git checkout v2.13.1`
4. `./scripts/deploy --steps run_services`

Runs imported before Bublik v2.13.0 from logs generated before TE v1.68.0 may contain two classes of timestamp corruption in iteration results: midnight-crossing date errors and timezone offset errors. These stem from incorrect timezone handling during import (fixed in Bublik v2.13.0) and incorrect calendar date assignment during log-to-JSON parsing (fixed in TE v1.68.0). To repair the affected data:

:::tip
Since repairing iteration result timestamps may take a long time, use `tmux` or `screen` during the update to keep your session running in the background, ensuring it won't be interrupted if the connection is lost.
:::

1. Activate the virtual environment: `source .env/bin/activate`
2. Run the management command with a date range and/or a list of run IDs: `python manage.py fix_result_timestamps -f 2017.01.01`

### Frontend Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-ui`
4. `git remote update`
5. `git checkout v2.13.1`

### Documentation Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-docs`
4. `git remote update`
5. `git checkout v2.13.1`

### Docker Instance Update

:::note
TE has been upgraded from version v1.47.1 to v1.69.0
:::

```bash
# 1. Backup the current db
task backup:create

# 2. Update the image tag in the .env file
sed -i "s/^IMAGE_TAG=.*/IMAGE_TAG=2.13.1/" .env

# 3. Pull the latest docker image
task pull

# 4. Start the docker container
task up

# 5. Enter the shell
task shell

# 6. Fix result timestamps (see above)
python manage.py fix_result_timestamps -f 2017.01.01
```

## Changelog

### Frontend

#### 🚀 New Feature

- **history:** add button for navigation to latest run report ([801cc8b](https://github.com/ts-factory/bublik-ui/commit/801cc8b9a0469c55f9e30b3d5495fcd1a19db891))

#### 🐛 Bug Fix

- **import:** fix import event filter pagination reset ([a7c2ded](https://github.com/ts-factory/bublik-ui/commit/a7c2dedcd1e28f7b52bd55c7258aad1ab6c37f1a))
- **import:** status line on top of the import table header ([9918c4b](https://github.com/ts-factory/bublik-ui/commit/9918c4b99af3a4fc41078b7492fa680006ee97df))
- **log:** adjust objective text wrapping in log metadata ([7ecef66](https://github.com/ts-factory/bublik-ui/commit/7ecef66e6350323896300f1941dd5721294fcb5f))

#### 📦 Chores

- **deps:** upgrade `xlsx` to 0.20.3 version to integrity issues ([ab8a671](https://github.com/ts-factory/bublik-ui/commit/ab8a6710e579f53c19f960641d705c65b7fe7aae))

---

### Backend

#### 🐛 Bug Fix

- **config:** fix list method ignoring query parameter filters ([90ce105](https://github.com/ts-factory/bublik/commit/90ce105cb7533e365d7e14ea397a6fd3256e7279))
- **importruns:** fix expected result composition when absent from log ([596b083](https://github.com/ts-factory/bublik/commit/596b083db6cd7388cd87c76dc655ed62235c7d5a))
- **importruns:** fix duplicate expectations on force import ([c1515b2](https://github.com/ts-factory/bublik/commit/c1515b2a7a8d3d941558c57f1c2c36c7e8adfbad))
- **importruns:** fix timezone mismatch between run and iteration timestamps ([6bf518e](https://github.com/ts-factory/bublik/commit/6bf518e2e256bbd0f1dba40af9246bd608796926))
- **log:** fix fetching JSON logs without authenticated URL helper ([1a17177](https://github.com/ts-factory/bublik/commit/1a17177859a1648be015bccbd2e888427cae3dfc))
- **mcp:** fix wrong name for run metadata filter in `list_runs` tool ([08940c6](https://github.com/ts-factory/bublik/commit/08940c6e01da279f6a46f955924c7da79c32f777))
- **mcp:** fix `list_runs_today` not matching project today dashboard ([0c90db2](https://github.com/ts-factory/bublik/commit/0c90db26c9deca5c2d056fcfda7a3a5e4129d8d4))
- **mcp:** accept numeric JSON log timestamps ([17fa4f8](https://github.com/ts-factory/bublik/commit/17fa4f870c7f2cc892425cd0bfe8f34d4f7833ee))
- **importruns:** fix crash when importing runs with non-UTC timezone offset ([029cc23](https://github.com/ts-factory/bublik/commit/029cc23e85fd4dd6c09c55c229a79c435eb740b7))

#### 🚀 New Feature

- **runs:** add backend aggregation for runs charts ([c069e53](https://github.com/ts-factory/bublik/commit/c069e53fdadc0e9d32ff06ade863fa7734a5beeb))
- **history:** include report config ID in test result response ([b6e1403](https://github.com/ts-factory/bublik/commit/b6e1403a9ff533c8552cf6e447e150c30676f130))
- **importruns:** prefer Unix timestamps over naive strings for iterations ([55080f1](https://github.com/ts-factory/bublik/commit/55080f144bfdc015279c7dc505d7e0b83c7969d6))
- **utils:** add context manager support to execution time measurement ([d4895ab](https://github.com/ts-factory/bublik/commit/d4895ab9c31825d0ba4fe7d465d4fbd00722c57c))
- **management:** add command to repair corrupted TIR timestamps ([cc5f822](https://github.com/ts-factory/bublik/commit/cc5f822cacaf56b627fbdc39c5434e1f41d890e4))
- **importruns:** automatically fix result timestamps after run import ([e3abcc0](https://github.com/ts-factory/bublik/commit/e3abcc076340b57f8c5701cb479ea26aeff2c93d))

#### ♻️ Code Refactoring

- **report:** encapsulate recent report config lookup in service layer ([12cbce9](https://github.com/ts-factory/bublik/commit/12cbce9b0709e36db8cf2308e75b14a6f495369f))

#### 📦 Chores

- **config:** remove pagination from ViewSet for consistency ([f401077](https://github.com/ts-factory/bublik/commit/f401077d25f9b3a0beb59ead46f8693e23066394))
- **config:** clarify OpenAPI response descriptions ([3c5674d](https://github.com/ts-factory/bublik/commit/3c5674d24f60b576bc3c9ad594132cfbf41e6984))
