We're excited to announce Bublik v2.17.0! <br />
This release adds **drag-and-drop column reordering** to run tables, improves progress loading by fetching runs in batches as needed, and extends MI log charts with support for the new series aggregation type. We also made history form labels and placeholders clearer, significantly sped up report generation, and fixed broken short URLs, report generation bugs, and incorrect tag caching.

### What's New

**Reorder Runs Table Columns** <br />
Drag column headers into the order that works best for you. Your layout is preserved per project and can be shared through the page URL.

**Faster Progress Loading** <br />
Progress runs are now loaded in batches of 50 as you navigate through the table, replacing the previous 200-run limit as well as added lazy loading for infinite scrolling

**New MI Log Aggregation** <br />
MI log charts now support series entries containing multiple values, including charts that use automatic sequence numbers.

<!--truncate-->

## Highlights

### Reorder Runs Table Columns

Run table columns can now be reordered directly from their headers. Drag an individual column or move a grouped header as one block; the tree column remains fixed at the start of the table. Your preferred order is saved per project, reflected in the URL for sharing, and can be restored with the table's **Reset** action.

![Drag And Drop](/bublik-release/blog/img/drag-1.webp)

## Admin Section

### Backend Update

1. `cd bublik`
2. `git remote update`
3. `git checkout v2.17.0`
4. `./scripts/deploy --steps per_project_conf run_services`
`_TagsCache` was replaced with `_MetasCache` — the cache now also stores branches, revisions, and labels, plus the population logic was fixed. Existing caches need to be rebuilt to match the new structure.
1. Activate the virtual environment: `source .env/bin/activate`
2. Run the command to update the project cache: `python manage.py project_cache update`

### Frontend Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-ui`
4. `git remote update`
5. `git checkout v2.17.0`

### Documentation Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-docs`
4. `git remote update`
5. `git checkout v2.17.0`

### Docker Instance Update

```bash
# 1. Backup the current db
task backup:create

# 2. Update the image tag in the .env file
sed -i "s/^IMAGE_TAG=.*/IMAGE_TAG=2.17.0/" .env

# 3. Pull the latest docker image
task pull

# 4. Start the docker container
task up

# 5. Enter container shell
task shell

# 6. Run the command to update the project cache and configs
python manage.py project_cache update
python manage.py migrate_configs
python manage.py reformat_configs
python manage.py initialize_configs
```

## Changelog

### Frontend

#### 🐛 Bug Fix

* **dashboard:** manual refresh not updating run statuses ([0502759](https://github.com/ts-factory/bublik-ui/commit/0502759633f7f1599d1a4661c3adbdf1d7f42233))
* **log:** render new series aggregation on auto-seqno MI charts ([9152b0a](https://github.com/ts-factory/bublik-ui/commit/9152b0a46755aa6d7d89a6a863d091d81bebd422))
* **sidebar:** hide horizontal overflow when collapsed ([85c45d9](https://github.com/ts-factory/bublik-ui/commit/85c45d9151fd8a4afd08bd3357396ae37541479a))

#### 🚀 New Feature

* **log:** support new aggregation type in MI logs ([996f0e9](https://github.com/ts-factory/bublik-ui/commit/996f0e9b27442e0dce9b50318a174b1f8f34fc01))
* **run:** [table] add ability to reorder columns by dragging them ([60b2655](https://github.com/ts-factory/bublik-ui/commit/60b26557c7328c8cbf2ee6a7d54968ef6e23613a))
* **runs:** [progress] lazy load progress runs in batches of 50 ([2616efa](https://github.com/ts-factory/bublik-ui/commit/2616efaeead85edf8b92eb790e920dcbda71241b))

#### 💅 Polish

* **history:** [form] make input label bolder ([982683c](https://github.com/ts-factory/bublik-ui/commit/982683c4cb4a084df93fd7757327cd9ab0e7dc32))
* **history:** [form] make inputs placeholders to use `#ccc` color ([8ddc001](https://github.com/ts-factory/bublik-ui/commit/8ddc001601904b420667dbc62a9c7981aab2bac8))

---

### Backend

#### 🐛 Bug Fix

- **run:** validate run before loading stats defaults ([b2fc6bc](https://github.com/ts-factory/bublik/commit/b2fc6bc2382cd3e0d366231113be37819a883ed2))
- **result:** validate result before loading artifacts ([2ae4525](https://github.com/ts-factory/bublik/commit/2ae4525efd01e7484b9dc353b84f72a81e2dd3de))
- **utils:** fix typo in binary multiplier key ([328b394](https://github.com/ts-factory/bublik/commit/328b394f2c15be1e0ed1810f0d35b1f8cfc21eae))
- **cache:** fix tags cache population for default context ([d84eff6](https://github.com/ts-factory/bublik/commit/d84eff63a8950aee4e99aa168ed0ccf8e4e6978a))
- **run data:** fix tags missing from project relevant and all cache entries ([c488028](https://github.com/ts-factory/bublik/commit/c4880285b237237f02222155e5f9a12fb323135e))
- **url:** fix URL-unsafe characters in short URL hashes ([d99652b](https://github.com/ts-factory/bublik/commit/d99652b4c95b3d80650272839595ddb0644332a8)), closes [#340](https://github.com/ts-factory/bublik/issues/340)
- **config:** align schema with the only supported UI version ([f412662](https://github.com/ts-factory/bublik/commit/f4126625ab87a129600659289e99cc8145144672)), related to [#341](https://github.com/ts-factory/bublik/issues/341)
- **report:** fix report configuration applicability detection ([ddec067](https://github.com/ts-factory/bublik/commit/ddec0672422b77956f5b9887caddfeef99f4dcd2))
- **config:** prevent broken reports caused by empty y-axis values ([5395bbd](https://github.com/ts-factory/bublik/commit/5395bbda1177c6366835942257ccc26ee3b3b59e))

#### 🚀 New Feature

- **importruns:** support series aggregation type in MI logs ([e6a011f](https://github.com/ts-factory/bublik/commit/e6a011ffa1505cf536da92547ae810a3e5c7f9ab))
- **importruns:** introduce data contract for run log format ([b4d8395](https://github.com/ts-factory/bublik/commit/b4d839503b51599e74165f3f92e6275b1002ed60))
- **importruns:** enforce run log contract during import ([7cd195a](https://github.com/ts-factory/bublik/commit/7cd195aac04e9aae871b2b8aa33240d60c597fc3))
- **importruns:** introduce data contract for run metadata format ([0e722e7](https://github.com/ts-factory/bublik/commit/0e722e77990a63899185eac137f9e333c7ca34f9))
- **importruns:** enforce run metadata contract during import ([769fbcc](https://github.com/ts-factory/bublik/commit/769fbcce8281a9852ecf0d87d37c77c2f96a15fb))
- **cache:** extend project cache with branches, revisions, and labels ([a520a83](https://github.com/ts-factory/bublik/commit/a520a83bcebc818680536135e622274ca051f81e))
- **history:** add endpoint to fetch test parameter search options ([f55c18a](https://github.com/ts-factory/bublik/commit/f55c18a0f8b5b10fe157c7ef520e480716664d0e))
- **history:** add endpoint to fetch run meta search options ([65ce277](https://github.com/ts-factory/bublik/commit/65ce2776782d1643e42eeb2c1b9677da1bf336d0))

#### ⚡ Performance

- **report:** improve performance by eager-loading related data ([59b6bf3](https://github.com/ts-factory/bublik/commit/59b6bf3e4ead46af3aa4c12a11cda7fae411acd3)), closes [#346](https://github.com/ts-factory/bublik/issues/346)
- **measurement:** improve performance by reusing prefetched measurement metas ([c4839ea](https://github.com/ts-factory/bublik/commit/c4839ea1dfa292608feabdbcade570975ea65152))
- **report:** improve performance by reducing filtering queries ([00cf85e](https://github.com/ts-factory/bublik/commit/00cf85e7d66b0ba7923e1c3ff491ff3ae612c60c)), related to [#346](https://github.com/ts-factory/bublik/issues/346)
- **report:** improve performance by avoiding re-execution of filter queries ([342627c](https://github.com/ts-factory/bublik/commit/342627c49015d6e019ec56763eed51bf8a8acbdd)), related to [#346](https://github.com/ts-factory/bublik/issues/346)

#### ♻️ Code Refactoring

- **report:** improve robustness of test ordering retrieval ([e272ae6](https://github.com/ts-factory/bublik/commit/e272ae68a9c3b730630fda167744ee2193140d44))
- **config:** make test ordering optional in report configs ([163c76c](https://github.com/ts-factory/bublik/commit/163c76ca36c7b9a4ab4f770c4b9d9fca0eb7b7e3))

#### 📦 Chores

- **run:** align OpenAPI schemas with actual API responses ([04abe49](https://github.com/ts-factory/bublik/commit/04abe49cb7217e1bd9f1768a493176d5fea640e2))
- **result:** align OpenAPI schemas with actual API responses ([b35e417](https://github.com/ts-factory/bublik/commit/b35e417db0cc659891353452a1c9dc5631282c9d))
- **management:** enable reformat to ensure supported UI version ([af7b667](https://github.com/ts-factory/bublik/commit/af7b6676e38c2b81e1d67d1302810e66ffb2babf)), closes [#341](https://github.com/ts-factory/bublik/issues/341)
- **management:** enable reformat to clean up empty y-axis config entries ([04a2f8b](https://github.com/ts-factory/bublik/commit/04a2f8bdac7c0072af899d7318d45cd791d2d1da))
