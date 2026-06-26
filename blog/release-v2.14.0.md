We're excited to announce Bublik v2.14.0! <br />
In this release the run statistics table can now be configured to show a custom set of default columns straight from the project config, with the frontend honoring those defaults automatically. We've also added a button to copy a config's JSON schema, refactored the runs charts page to use a new, more efficient API endpoint, and fixed the import form so the "Force Import" flag and selected project are no longer reset when adding a new URL. On the backend, the run and result API modules were separated for clearer contracts, and the MCP server gained compact run and result navigation.

### What's New

**Configurable Default Columns for Run Stats Table** <br />
The default columns displayed in the run stats table can now be configured via the main project config, and the frontend applies them automatically instead of relying on hardcoded defaults.

**Copy Config Schema Button** <br />
The config editor now has a button to copy a config's JSON schema to the clipboard.

**Faster Runs Charts Page** <br />
The runs charts page now uses a new, more efficient API endpoint.

**Import Form Fix** <br />
The "Force Import" flag and selected project are no longer reset when adding a new URL field in the import form.

<!--truncate-->

## Highlights

### Configurable Default Columns for Run Stats Table

Which columns are shown by default in the run stats table can now be controlled from the main project config instead of being hardcoded. 

![Config](/bublik-release/blog/img/columns-1.webp)

![Reorder](/bublik-release/blog/img/columns-2.webp)

### Copy Config Schema Button

The config editor now exposes a button to copy a config's JSON schema to the clipboard, making it easier to author and validate configuration against the expected structure.

![Copy](/bublik-release/blog/img/copy.webp)

## Admin Section

### Backend Update

1. `cd bublik`
2. `git remote update`
3. `git checkout v2.14.0`
4. `./scripts/deploy --steps pip_requirements run_services`

### Frontend Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-ui`
4. `git remote update`
5. `git checkout v2.14.0`

### Documentation Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-docs`
4. `git remote update`
5. `git checkout v2.14.0`

### Docker Instance Update

```bash
# 1. Backup the current db
task backup:create

# 2. Update the image tag in the .env file
sed -i "s/^IMAGE_TAG=.*/IMAGE_TAG=2.14.0/" .env

# 3. Pull the latest docker image
task pull

# 4. Start the docker container
task up
```

## Changelog

### Frontend

#### 🐛 Bug Fix

* **import:** force import flag resetting after adding new URL ([babf57b](https://github.com/ts-factory/bublik-ui/commit/babf57bd80905f7e563ccd4fcbd989244b3fa46a))

#### 🚀 New Feature

* **configs:** add button to copy config schema ([a99c331](https://github.com/ts-factory/bublik-ui/commit/a99c33162dc9dd4d68613f1acb3cc2018dd536cd))
* **run:** add ability to reorder columns ([b8a212b](https://github.com/ts-factory/bublik-ui/commit/b8a212b22e5dfd78cb186ed6be1861f10fe90173))
* **run:** honor column order provided from API ([01a762e](https://github.com/ts-factory/bublik-ui/commit/01a762e6da48316fece8ebead4c4e87f42257db7))
* **run:** honor default columns provided for run table from API ([752b039](https://github.com/ts-factory/bublik-ui/commit/752b039777aba9eba70f922dc89e60081e801cb3))

#### ♻️ Code Refactoring

* **runs:** use new API endpoint for runs charts page ([d8ca6e8](https://github.com/ts-factory/bublik-ui/commit/d8ca6e8ae1f9acfa5014014a916cb219116d91aa))

---

### Backend

#### 🐛 Bug Fix

- **run:** fix compromised status check to consistently return `bool` ([a99d31b](https://github.com/ts-factory/bublik/commit/a99d31b90653ecfa4552e9d2730b0aa87b7193ae))
- **run:** unify compromised details `dict` shape across both statuses ([32d1824](https://github.com/ts-factory/bublik/commit/32d18242cce1cc5931c6c62d94428c561923427b))
- **mcp:** fix return type annotation of run compromised status tool ([85c5b9c](https://github.com/ts-factory/bublik/commit/85c5b9c9c25dfcbb4f1b5501956b24157bb11088))
- **api:** fix results module export declaration ([cabc978](https://github.com/ts-factory/bublik/commit/cabc978e89763053c59c69cebee61999549f12d7))

#### 🚀 New Feature

- **config:** allow configuring default columns for run stats table ([66bd431](https://github.com/ts-factory/bublik/commit/66bd43149c1b2b04b7c6b041d78b4856affa93e2))
- **run:** expose default run stats columns in stats API response ([720a816](https://github.com/ts-factory/bublik/commit/720a81603075d4973499e3b29adab92d2764432c))
- **core:** expose resolved page in pagination payload ([dda5c74](https://github.com/ts-factory/bublik/commit/dda5c742be1a0f1b765a98eb53b1a217dead4a50))
- **run:** add resolved page to run list pagination DTO ([40dc9d5](https://github.com/ts-factory/bublik/commit/40dc9d500e686a07c65ed8778de375d9f4f051f0))
- **mcp:** enforce run/result navigation to reduce context usage ([3617b55](https://github.com/ts-factory/bublik/commit/3617b55b7995d2221cb3c1d1fefd1b798501f45d))

#### ⚡ Performance

- **run:** materialize NOK distribution response ([5a48edc](https://github.com/ts-factory/bublik/commit/5a48edcac12e3474cde1e96334a8e725aab70c5b))
- **run:** improve run list pagination performance ([8144453](https://github.com/ts-factory/bublik/commit/814445324bc1f6a48bfa5686524d08a292ac8dd3))

#### ♻️ Code Refactoring

- **run:** prepare API modules for independent evolution ([add803d](https://github.com/ts-factory/bublik/commit/add803de0b7d58402b2d9672d5f0aae42c2bc07a))
- **run:** introduce DTO-based service contracts ([970baea](https://github.com/ts-factory/bublik/commit/970baea5117c886ecdf83cff2563a496cdc0299f))

#### 📦 Chores

- **ci:** use Ruff for Python quality checks ([acff8b3](https://github.com/ts-factory/bublik/commit/acff8b3e13fe9d0fc2d1879278bcfd1ba63c8b12))
- **style:** configure Ruff docstring quote handling as advised in PEP 257 ([2498626](https://github.com/ts-factory/bublik/commit/2498626d7aa8c8c331e27741b20a192373ba27a3))
- **style:** ignore ruff suggestion to remove list index lookup ([6d764b0](https://github.com/ts-factory/bublik/commit/6d764b09cb303c6cc3c8fe06f361929680982f96))

#### 🧹 Cleanup

- **style:** normalize Python docstring quotes ([9e1ef46](https://github.com/ts-factory/bublik/commit/9e1ef460731b8b319f9773cee4823875fc5ec674))
- **style:** normalize string and f-string literals ([b9e3010](https://github.com/ts-factory/bublik/commit/b9e3010d4b24d59c6ac4d3ecfb9be0bd47f47b58))
- **style:** rewrap long lambda expressions ([21d6503](https://github.com/ts-factory/bublik/commit/21d65032631ccb4df4f6f20682114d502fd92429))
- **style:** remove unused test imports ([282ad08](https://github.com/ts-factory/bublik/commit/282ad084e1e647129baf7941864ea50a346ec53b))
- **style:** simplify test helper ([fbc9817](https://github.com/ts-factory/bublik/commit/fbc98174426f75bdca9bbf8a0634a45924c832c9))
- **results:** clarify execution sequence number parameter description ([724dc90](https://github.com/ts-factory/bublik/commit/724dc907a332bb48462dd12d01c6321f31608503))
