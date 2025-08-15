---
title: Glossary Of Terms
---

<!--toc:start-->

- [Test Suite (TS)](#test-suite-ts)
- [TS Run](#ts-run)
- [Bublik Instance](#bublik-instance)
- [Project](#project)
- [Organization](#organization)
- [Team](#team)
- [Strand](#strand)
<!--toc:end-->

## Test Suite (TS)

A **Test Suite** is a collection of test cases, along with the configuration, dependencies, and execution scripts required to run them under defined conditions.
Each test suite targets a specific component or functionality.

**Examples**:

- `netdrv-ts` – for network driver testing
- `dpdk-pmd-ts` – for DPDK poll mode driver validation
- `sapi-ts` – for system API conformance checks

---

## TS Run

A **TS Run** refers to a single execution of a test suite. It includes:

- Test results (pass/fail status, durations)
- Generated logs and diagnostic artifacts
- Runtime metadata (e.g., environment, version, configuration)

Each TS Run is uniquely identifiable and serves as the primary unit of data uploaded to Bublik for analysis and reporting

---

## Bublik Instance

A Bublik Instance is a deployed instance of the Bublik system, which may be:

- A local development setup (e.g., running on a developer’s laptop)
- A shared staging environment
- A public or internal production server

Each instance manages its own data, users, and configurations independently

---

## Project

A Project is a configuration layer that defines how a TS Run is processed and integrated into a Bublik Instance
It controls:

- How logs and artifacts are stored
- Which metadata fields are extracted and prioritized
- Rules for generating and validating metadata

Projects ensure consistent data handling across runs and facilitate structured reporting.

:::note
Due to current system architecture, some inheritance between projects is required to maintain compatibility with existing scripts and Bublik components.
:::

---

## Organization

:::warning
Not yet implemented.
Work in progress
:::

An **Organization** represents a top-level entity—such as a company, department,
or open-source group—that may oversee multiple Bublik Instances, Projects, and Teams
It provides a framework for administrative control and resource management

---

## Team

:::warning
Not yet implemented.
Work in progress
:::

A **Team** is a group of users collaborating within a Bublik Instance
Teams typically share:

- Access permissions and roles,
- Default settings and preferences,
- (Planned) Custom views and dashboards

Teams enable collaborative workflows while maintaining controlled access to data and functionality

---

## Strand

:::warning
Not yet implemented.
Work in progress
:::

A **Strand** represents a focused line of work pursued by a team.
It may involve:

- A series of related TS Runs from one or more Projects
- A curated subset of runs from a single Project, grouped by a common goal (e.g., performance regression tracking, feature validation)

Strands help organize analysis efforts and track progress across time and multiple test cycles
