---
title: Report
---

# Report Configuration

To build a run report, an appropriate configuration is required.

## Format

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
  "id": 1,
  "name": "dpdk-ethdev-ts_example",
  "description": "An example of a run report config for dpdk-ethdev-ts",
  "version": "v1",
  "title_content": ["CAMPAIGN_DATE", "CFG", "SSN", "XDP_HW_CSUM", "LINK_AGGR"],
  "test_names_order": ["testpmd_rxonly"],
  "tests": {
    "testpmd_rxonly": {
      "table_view": true,
      "chart_view": true,
      "axis_x": "packet_size",
      "axis_y": [
        {
          "type": ["throughput"],
          "keys": {
            "Side": ["Rx"]
          },
          "aggr": ["mean"]
        }
      ],
      "sequence_group_arg": "testpmd_arg_burst",
      "percentage_base_value": 32,
      "sequence_name_conversion": {
        "32": "32 packets",
        "64": "64 packets"
      },
      "not_show_args": {
        "testpmd_command_flow_ctrl_tx": ["off"],
        "n_rx_cores": [1, 4],
        "packet_size": [42, 252, 508, 1514, 2044]
      },
      "records_order": [
        "testpmd_command_flow_ctrl_tx",
        "n_rx_cores",
        "testpmd_arg_rxq"
      ]
    }
  }
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
