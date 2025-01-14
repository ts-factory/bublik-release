---
title: Project
---

# Project Configuration

<!--toc:start-->
  - [Update config from UI](#update-config-from-ui)
  - [Per-project Conception](#per-project-conception)
  - [Configuration Areas](#configuration-areas)
    - [Dashboard Configuration](#dashboard-configuration)
      - [DASHBOARD_HEADER](#dashboardheader)
      - [DASHBOARD_PAYLOAD](#dashboardpayload)
      - [DASHBOARD_ROWS_STYLE](#dashboardrowsstyle)
      - [DASHBOARD_DATE](#dashboarddate)
      - [DASHBOARD_RUNS_SORT](#dashboardrunssort)
      - [DASHBOARD_DEFAULT_MODE](#dashboarddefaultmode)
    - [Metadata Configuration](#metadata-configuration)
      - [Metadata on Pages](#metadata-on-pages)
      - [Special Categories](#special-categories)
    - [Run Configuration](#run-configuration)
      - [Run Completion File](#run-completion-file)
      - [Run Uniqueness](#run-uniqueness)
  - [Applying Changes](#applying-changes)
    - [Configuration Updates](#configuration-updates)
    - [CSRF Configuration](#csrf-configuration)
<!--toc:end-->

## Update config from UI

## Format

You can find the active schema definition at: [URL](https://github.com/ts-factory/bublik/blob/main/bublik/data/schemas/report.json)

<details>
<summary>JSON Schema</summary>

  ```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "PROJECT": {
            "description": "Identifies project matching PROJECT meta in metadata.json",
            "type": "string"
        },
        "UI_VERSION": {
            "description": "Default UI version",
            "type": "number"
        },
        "EMAIL_PROJECT_WATCHERS": {
            "description": "List of emails to notify about importruns failures",
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "DASHBOARD_HEADER": {
            "description": "Sets columns on dashboard",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "key": {
                        "type": "string"
                    },
                    "label": {
                        "type": "string"
                    }
                },
                "additionalProperties": false
            }
        },
        "DASHBOARD_PAYLOAD": {
            "description": "Sets link available by click on column values",
            "type": "object",
            "additionalProperties": {
                "type": "string",
                "items": {
                    "type": "string"
                }
            }
        },
        "DASHBOARD_DATE": {
            "description": "Represents the name of the meta pointing to which date the run is related to",
            "type": "string"
        },
        "DASHBOARD_RUNS_SORT": {
            "description": "Represents a list of DASHBOARD_HEADER keys and extra 'start' key which defines run start",
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "DASHBOARD_DEFAULT_MODE": {
            "description": "Sets the mode (one_day_one_column/one_day_two_columns/two_days_two_columns) which dashboard follows when opens",
            "type": "string"
        },
        "METADATA_ON_PAGES": {
            "description": "Represents a list of meta category names that manages columns in the history and runs page",
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "SPECIAL_CATEGORIES": {
            "description": "Represents a list of meta category names that defines extra data to show in Info block on run and log pages",
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "RUN_STATUS_META": {
            "description": "Represents meta name in meta_data.json that defines run status",
            "type": "string"
        },
        "RUN_STATUS_BY_NOK_BORDERS": {
            "description": "Represents 2 float numbers (left and right borders) that sets borders for defining run status by rate of unexpected results",
            "type": "array",
            "items": {
                "type": "number"
            },
            "uniqueItems": true,
            "minItems": 2,
            "maxItems": 2
        },
        "RUN_COMPLETE_FILE": {
            "description": "Represents file available via run source link that indicates that run testing was completed",
            "type": "string"
        },
        "RUN_KEY_METAS": {
            "description": "Represents meta name in meta_data.json that allows Bublik to distinguish one run from another",
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "FILES_TO_GENERATE_METADATA": {
            "description": "Represents a list of files available via run source link and allows Bublik to generate meta_data.json based on them",
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "CSRF_TRUSTED_ORIGINS": {
            "description": "Domens which Bublik server trusts accepting requests coming from",
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "HISTORY_SEARCH_EXAMPLE": {
            "description": "An example of history search for performance checking",
            "type": "object",
            "properties": {
                "testName": {
                    "type": "string"
                },
                "startDate": {
                    "type": "string"
                },
                "finishDate": {
                    "type": "string"
                },
                "runData": {
                    "type": "string"
                },
                "tags": {
                    "type": "string"
                },
                "labels": {
                    "type": "string"
                },
                "revisions": {
                    "type": "string"
                },
                "branches": {
                    "type": "string"
                },
                "testArgs": {
                    "type": "string"
                },
                "verdict": {
                    "type": "string"
                },
                "tagExpr": {
                    "type": "string"
                },
                "labelExpr": {
                    "type": "string"
                },
                "revisionExpr": {
                    "type": "string"
                },
                "branchExpr": {
                    "type": "string"
                },
                "testArgExpr": {
                    "type": "string"
                },
                "verdictExpr": {
                    "type": "string"
                }
            },
            "required": [
                "testName",
                "startDate",
                "finishDate"
            ]
        },
        "NOT_PERMISSION_REQUIRED_ACTIONS": {
            "description": "Actions that should not require administrator rights in this project",
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        }
    },
    "required": [
        "PROJECT",
        "RUN_STATUS_META",
        "RUN_KEY_METAS",
        "DASHBOARD_HEADER",
        "RUN_COMPLETE_FILE"
    ],
    "additionalProperties": false
}
```
</details>

### Example Configuration

```json
{
  "PROJECT": "ts-factory",
  "RUN_KEY_METAS": ["START_TIMESTAMP", "CFG"],
  "DASHBOARD_DATE": "CAMPAIGN_DATE",
  "RUN_STATUS_META": "RUN_STATUS",
  "DASHBOARD_HEADER": [
    {
      "key": "iut",
      "label": "IUT"
    },
    {
      "key": "notes",
      "label": "Notes"
    },
    {
      "key": "total",
      "label": "Total"
    },
    {
      "key": "status",
      "label": "Status"
    },
    {
      "key": "ts_name",
      "label": "Test Suite"
    },
    {
      "key": "variant",
      "label": "Variant"
    },
    {
      "key": "progress",
      "label": "Executed"
    },
    {
      "key": "unexpected",
      "label": "NOK"
    },
    {
      "key": "configuration",
      "label": "Configuration"
    }
  ],
  "DASHBOARD_PAYLOAD": {
    "notes": "go_bug",
    "total": "go_tree",
    "unexpected": "go_run_failed",
    "configuration": "go_run"
  },
  "METADATA_ON_PAGES": ["Test Suite", "Configuration"],
  "RUN_COMPLETE_FILE": ".done",
  "SPECIAL_CATEGORIES": ["Configuration"],
  "DASHBOARD_RUNS_SORT": ["start"],
  "CSRF_TRUSTED_ORIGINS": [],
  "DASHBOARD_DEFAULT_MODE": "two_days_two_columns",
  "EMAIL_PROJECT_WATCHERS": [],
  "RUN_STATUS_BY_NOK_BORDERS": [20, 80]
}
```


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
