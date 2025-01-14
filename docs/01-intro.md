---
docId: intro
title: Introduction
description: Introduction
slug: /
---

# Introduction

<!--toc:start-->

- [Core Components](#core-components)
  - [Test Environment (TE)](#test-environment-te)
  - [Results Management](#results-management)
  - [DPDK Testing Support](#dpdk-testing-support)
  - [Network Driver Testing](#network-driver-testing)
- [Key Features](#key-features)
  - [Test Development](#test-development)
  - [Test Execution](#test-execution)
  - [Results Analysis](#results-analysis)
- [Getting Started](#getting-started)
<!--toc:end-->

TS Factory provides a complete ecosystem for implementing, running, and analyzing tests. Our platform combines the power of the Test Environment (TE) framework with efficient results management systems to deliver a seamless testing experience.

## Core Components

### Test Environment (TE)

- A mature testing framework with origins dating back to 2000
- Distributed testing architecture supporting multiple platforms
- Flexible and extensible design for diverse testing scenarios
- Comprehensive agent system for test control and execution

### Results Management

- Real-time dashboard with customizable views
- Advanced history tracking and search capabilities
- Efficient log storage and analysis tools
- Support for millions of test results

### DPDK Testing Support

- Specialized tools for DPDK testing scenarios
- Performance measurement and analysis
- Network device testing capabilities

### Network Driver Testing

- Comprehensive network driver testing framework
- Traffic generation and analysis
- Protocol-specific testing support

## Key Features

### Test Development

- Write tests in C using the open-source Test Environment framework
- Distributed scenario support with RPC mechanisms
- Automatic host configuration tracking
- Extensive API support for various testing domains

### Test Execution

- Fast and reliable execution system
- Optimized for both quick tests (0.3s) and extended runs
- Support for tens of thousands of tests in a single run
- Real-time execution monitoring

### Results Analysis

- Sophisticated results management system
- Automatic tag assignment and customization
- Rich search and aggregation capabilities
- Performance measurement tracking
- Support for over 50 million results in production environments

## Getting Started

1. [Deploy](./02-deployment/index.md)

   - Set up your testing environment
   - Configure dashboard and reporting

2. [Project Configuration](./03-configuration/01-project-config/index.md)

   - Configure test result presentation
   - Customize analysis views

3. [Report Configuration](./03-configuration/02-report-config/index.md)

   - Configure test result presentation
   - Customize analysis views

4. [Test Development](https://github.com/ts-factory/test-environment)
   - Learn about Test Environment
   - Write your first test
