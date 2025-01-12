---
title: Project
---

# Project Configuration

## Per-project Conception

All **metas** that users can apply to customize their Bublik pages originate from `metadata.json`. **Tags** are special metas that come from TE log and cannot be modified within Bublik.

## Configuration Areas

### Dashboard Configuration

The dashboard table is fully configurable through the following settings in `perconf.py`:

#### DASHBOARD_HEADER

Defines columns on the dashboard. Each column represents values of metas from its dedicated category, with special keys:

- `total`
- `total_expected`
- `progress`
- `unexpected`

These special keys show extended data that Bublik generates internally. The setting is represented as a dictionary where keys are common to all dashboard settings (user-defined) and values are meta category names.

#### DASHBOARD_PAYLOAD

Configures actions triggered when clicking column cells, typically navigating to another view:

- `go_run`: Navigate to run details
- `go_run_failed`: Navigate to run details with failed results displayed
- `go_tree`: Navigate to run tests as a tree with logs and context
- `go_bug`: Navigate to bug in repository
- `go_source`: Navigate to source from which the run was imported

This setting is represented as a dictionary mapping `DASHBOARD_HEADER` keys to the actions listed above.

#### DASHBOARD_ROWS_STYLE

Controls row coloring:

- Set to `'colored'` for colored rows
- Default: not set
  Note: Only works in UI-V1; UI-V2 uses a common row coloring style.

#### DASHBOARD_DATE

Specifies the meta name indicating which date the run relates to (useful for runs spanning multiple days).

#### DASHBOARD_RUNS_SORT

Defines default column sorting order. Accepts a list of `DASHBOARD_HEADER` keys plus the special `'start'` key for run start time.

#### DASHBOARD_DEFAULT_MODE

Sets the default dashboard view mode (UI-V2 only):

- `one_day_one_column`
- `one_day_two_columns`
- `two_days_two_columns`

### Metadata Configuration

#### Metadata on Pages

The **Metadata** column on history and runs pages is controlled by `METADATA_ON_PAGES` in `perconf.py`, which accepts a list of meta category names.

#### Special Categories

Extra project data in the **Info** block on log and run pages is managed by `SPECIAL_CATEGORIES` in `perconf.py`, which accepts a list of meta category names.

### Run Configuration

#### Run Completion File

The `RUN_COMPLETE_FILE` setting in `perconf.py` specifies the filename (accessed via run source link) that indicates test completion.

#### Run Uniqueness

Bublik distinguishes runs using metas defined in `RUN_KEY_METAS` setting in `perconf.py`, represented as a list of meta names.

## Applying Changes

### Configuration Updates

1. For `meta.conf` or `tags.conf` changes:

   - Send HTTP request: `GET: <bublik-web>/meta_categorization`
   - Example: https://ts-factory.io/bublik/meta_categorization

2. For `perconf.py` or `references.py` changes:

   - Restart server: `./scripts/deploy --steps run_server`

3. For dashboard settings changes in `meta.conf` or `perconf.py`:
   - Clear cache by clicking the clock icon in upper right corner

**Important**: After any configuration changes, reload web pages using `Ctrl + Shift + R`

### CSRF Configuration

To resolve "CSRF verification failed" in POST requests on hosted Bublik instances:

```python
# Configure trusted origins for CSRF verification
# More details: https://docs.djangoproject.com/en/3.0/ref/settings/#csrf-trusted-origins
CSRF_TRUSTED_ORIGINS = ['ts-factory.io']
```
