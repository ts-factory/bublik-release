---
title: Report
---

# Report Configuration

<!--toc:start-->
  - [Format](#format)
    - [Core Fields](#core-fields)
    - [Test Configuration Fields](#test-configuration-fields)
    - [Example Configuration](#example-configuration)
  - [Understanding the Example](#understanding-the-example)
  - [Location](#location)
  - [Configuration Guidelines](#configuration-guidelines)
<!--toc:end-->

To build a run report, an appropriate configuration is required.


## Format
You can find the active schema definition at: [URL](https://github.com/ts-factory/bublik/blob/main/bublik/data/schemas/report.json)

<details>
  <summary>JSON Schema</summary>

  ```json
  {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "title_content": {
            "description": "Metas for title genegation",
            "type": "array",
            "items": {
                "description": "Meta with label type",
                "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
        },
        "test_names_order": {
            "description": "Test names for tests sorting",
            "type": "array",
            "items": {
                "description": "Test name",
                "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
        },
        "tests": {
            "type": "object",
            "additionalProperties": {
                "type": "object",
                "properties": {
                    "table_view": {
                        "description": "Table view flag",
                        "type": "boolean"
                    },
                    "chart_view": {
                        "description": "Chart view flag",
                        "type": "boolean"
                    },
                    "axis_x": {
                        "description": "Axis x test argument",
                        "type": "object",
                        "properties": {
                            "arg": {
                                "type": "string",
                                "minLength": 1
                            },
                            "label": {
                                "type": "string",
                                "minLength": 1
                            }
                        },
                        "required": [
                            "arg"
                        ]
                    },
                    "axis_y": {
                        "description": "Measurement parameters",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "tool": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "type": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "name": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "aggr": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "keys": {
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "additionalProperties": false
                        }
                    },
                    "sequences": {
                        "description": "Sequences settings",
                        "type": "object",
                        "properties": {
                            "arg": {
                                "description": "Specify an argument for displaying iteration results on the same axes",
                                "type": ["string"]
                            },
                            "arg_label": {
                                "description": "Specify label to display the sequense group argument",
                                "type": ["string"]
                            },
                            "percentage_base_value": {
                                "description": "Base value for percentage calculation",
                                "type": ["string", "number"]
                            },
                            "arg_vals_labels": {
                                "description": "Specify labels to display the sequense group argument values",
                                "type": "object",
                                "additionalProperties": true
                            }
                        },
                        "required": [
                            "arg"
                        ]
                    },
                    "not_show_args": {
                        "description": "Arguments and their values for excluding results from the report",
                        "type": "object",
                        "additionalProperties": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    },
                    "records_order": {
                        "description": "Test names list for records sorting",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                },
                "required": [
                    "table_view",
                    "chart_view",
                    "axis_x",
                    "axis_y",
                    "not_show_args",
                    "records_order"
                ]
            }
        }
    },
    "required": [
        "title_content",
        "test_names_order",
        "tests"
    ],
    "additionalProperties": false
}
  ```
  
</details>

The configuration file must be in JSON format and include the following mandatory fields:

### Core Fields

- `id`: Unique identifier for the report configuration
- `name`: Descriptive name of the report configuration
- `description`: Detailed explanation of the report's purpose
- `version`: Version identifier of the configuration
- `title_content`: List of metadata fields to be displayed in the report title
- `test_names_order`: Ordered list of test names for sorting
- `tests`: Object containing test configurations

### Test Configuration Fields

Each test configuration under the `tests` object must include:

- `table_view`: Boolean flag indicating if tabular view should be enabled
- `chart_view`: Boolean flag indicating if chart view should be enabled
- `axis_x`: Test argument to be used for X-axis in charts and tables
- `axis_y`: List of measurement parameter configurations, where each configuration includes:
  - `type`: List of measurement types (e.g., "throughput")
  - `keys`: Dictionary of key-value pairs for filtering (e.g., `{"Side": ["Rx"]}`)
  - `aggr`: List of aggregation methods (e.g., ["mean"])
- `sequence_group_arg`: Test argument used to group measurement results into sequences
- `percentage_base_value`: Reference value for percentage calculations within sequence groups
- `sequence_name_conversion`: Dictionary mapping sequence argument values to display names
- `not_show_args`: Dictionary of test arguments and their values to exclude from the report
- `records_order`: List of test arguments defining the sorting order of reports

### Example Configuration

```json
{
  "tests": {
    "testpmd_rxonly": {
      "axis_x": {
        "arg": "packet_size",
        "label": "Packet Size"
      },
      "axis_y": [
        {
          "keys": {
            "Side": ["Rx"]
          },
          "type": ["throughput"]
        },
        {
          "aggr": ["mean"],
          "keys": {
            "Side": ["Rx"]
          },
          "type": ["pps"]
        }
      ],
      "chart_view": true,
      "table_view": true,
      "not_show_args": {},
      "records_order": [],
      "sequence_group_arg": "testpmd_arg_rxq",
      "percentage_base_value": 1,
      "sequence_name_conversion": {}
    },
    "testpmd_txonly": {
      "axis_x": {
        "arg": "testpmd_command_txpkts",
        "label": "Packet Size"
      },
      "axis_y": [
        {
          "keys": {
            "Side": ["Tx"]
          },
          "type": ["throughput"]
        },
        {
          "aggr": ["mean"],
          "keys": {
            "Side": ["Tx"]
          },
          "type": ["pps"]
        }
      ],
      "chart_view": true,
      "table_view": true,
      "not_show_args": {},
      "records_order": [],
      "sequence_group_arg": "testpmd_arg_txq",
      "percentage_base_value": 1,
      "sequence_name_conversion": {}
    }
  },
  "title_content": ["CAMPAIGN_DATE", "CFG"],
  "test_names_order": ["testpmd_txonly", "testpmd_rxonly"]
}
```

## Understanding the Example

Let's break down the key components of this example:

1. **Basic Information**:

   - The configuration is for DPDK Ethernet device testing
   - It has ID 1 and version "v1"
   - Title will include campaign date, configuration, SSN, XDP hardware checksum, and link aggregation information

2. **Test Configuration**:

   - Configured for a single test: "testpmd_rxonly"
   - Both table and chart views are enabled
   - X-axis represents packet size

3. **Measurements**:

   - Tracking throughput measurements
   - Only considering Rx (receive) side data
   - Using mean aggregation for values

4. **Sequence Groups**:

   - Groups based on "testpmd_arg_burst"
   - Base value of 32 for percentage calculations
   - Maps burst sizes to readable names (e.g., "32" → "32 packets")

5. **Filtering**:

   - Excludes specific flow control settings ("off")
   - Filters out certain RX core counts (1 and 4)
   - Omits specific packet sizes from results

6. **Ordering**:
   - Results ordered by flow control, RX cores, and RX queue parameters

## Location

All run report configuration files must be stored in the `<PER_CONF_DIR>/reports` directory.

## Configuration Guidelines

1. Keep IDs unique across configurations
2. Use descriptive names that reflect the test suite
3. Include version information for tracking changes
4. Select title content fields that provide relevant context
5. Configure axes based on the most important test parameters
6. Use meaningful sequence names for better readability
7. Carefully consider which arguments to exclude to keep reports focused
8. Order records logically for easy analysis

For more examples and templates, refer to the _report_config.json_ file in your installation.
