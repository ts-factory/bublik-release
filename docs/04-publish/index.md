---
title: Publish
---

# Publishing

Bublik has several assumptions in it's design:

 - UI (DB + UI) is separate from the logs
 - Logs storage can be implemented in any way as long as the storage system allows to get certain files by URL
 - All runs can be re-imported and this will NOT cause data loss except for things like comments or in-DB resutls classification (when supported)

Run import is sometimes called "publishing".

## Logs storage

### Supported storages

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.<br />
FIXME: Detailes should be provided.
:::


 - Flat
   - you store unpacked run logs/data
   - and nginx/apache or any other sever provides access
 - Apache CGI based:
   - [setup instructions](https://github.com/ts-factory/test-environment/tree/main/tools/log_server) can be found in TE repo
 - Artifactory:
   - FIXME: details once pushed
 - MinIO:
   - FIXME: details once pushed

## Import/Publish

Several ways:

 - via `importruns` management command
 - via admin interface on the web:
   - `Admin` section at the bottom
   - `Import` sub-section
   - `Import` button at the top right.
 - via curl command:
   - `curl --negotiate -u : "${BUBLIK_URL}/importruns/source/?url=${logs_url}&force=true"`
   - where `logs_url` should point to **directory** with the logs in a given format.

Import section contains all the details regarding latest import attempts and if
they were successful.

It's important to stress that logs are **NOT** modified/moved during the import.
They stay in place, but are accessed during run import and potentially during
further UI accesses.

:::note
Usually things will keep working as far as all
basic views go if logs can't be accessed post-Import, but this is **not** a
commitment.
:::

### Run Logs

#### Folder content

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.<br />
FIXME: outline what's needed
:::


#### Scripts to prepare

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.<br />
FIXME: where?
:::


### Artifacts

Sometimes it's useful to have things stored next to the run logs. Moreover, it's
useful to have logs/files associated with a specific result.

Historically we have **log** that is located in `html/node_id5.html` or
`json/node_id5.json`.

The idea is that we have `/artifacts/node_<id>/` folder that contains details on
the artefacts associated with the result.

See [Artifacts publishing](./01-artifacts.md)
