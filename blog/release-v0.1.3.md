We are happy to announce **Bublik v0.1.3**

Added features, bugs and more!

<!--truncate-->

# Highlights

### New icon for skipped tests

![Log page tree skipped tests](/bublik-release/blog/img/SCR-20230318-chrl.webp)

### Added more data to import event table

![Import page table](/bublik-release/blog/img/SCR-20230318-cjpi.webp)

### New form for importing multiple runs at once

![Import multiple runs at once](/bublik-release/blog/img/SCR-20230317-hkff.webp)

![Import list results](/bublik-release/blog/img/SCR-20230317-hlar.webp)

## Changelog

### Frontend

#### 🚀 New Feature

- feat(dashboard): expand NOK result on link click for `unexpected`
- feat(import): add form for importing multiple runs at once
- feat(import): add filter by task id, error message, log URL to form
- feat(log): mark skipped tests with icon

#### 🐛 Bug Fix

- fix(import): fix sidebar not sticking when table overflows page

#### 💅 Polish

- style(import): fix header dissapearing on when error present
- style(import): overflowing table should be scrollable
- chore(history): format dates in header legend

---

### Backend

#### 🚀 New Feature

- change the error message structure
- add 'skipped' info to the iteration data forwarded to the UI
- add new endpoint /v2/importruns/source to make imports from import status table

#### 🐛 Bug Fix

- runs import without logs

#### ✏️ Other

- add facility, severity, timestamp and Error message to the import statuses table
- add filtration by Celery task ID, Error message, Log URI to the import statuses table
- change the format of storing the expected result keys
- move key parsing from the import stage to the statistics generation stage
- add support for "ref://type/tail" keys to key parsing
