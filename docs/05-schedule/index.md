---
title: Schedule
---

# Schedule

## Introduction

Schedule config is the first step towards implementation of in-bublik runs scheduling. <br />
The end goal is to provide an API that will allow an external entity to get info on what to run.

## Short term

Short term solution is to have a config file that we can point a jenkins worker at. <br />
One or several files.

Each schedule file contains detailed configuration with the following key elements:

- **Tools configuration**:
  - List of tools needed for the run
  - Tool specifications including name, revision/branch/commit, URL, and access method (git, pip, wget)
- **Testbench parameters**:
  - Key-value pairs defining the testbench setup
  - Each parameter includes name, type, and value
- **Execution parameters**:
  - Tools to be utilized during test execution
  - Tool-specific parameters with name, type (option, option_flag, env), and value

The schema provides a comprehensive structure for defining exactly what to run, which versions to use, and how to prepare and execute the testbench environment.

[See full schema](https://github.com/ts-factory/bublik/blob/main/bublik/data/schemas/schedule.json)

## Long term

:::warning
Documentation is currently in progress. <br />
Please check back later for updates.<br />
:::
