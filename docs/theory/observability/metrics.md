# Metrics

## Overview

Metrics are numerical measurements collected over time to describe how a backend system is behaving.

They help answer questions like:

- how many requests are arriving
- how long requests take
- how often errors happen
- how heavily resources are being used

## Why Metrics Matter

Logs are useful for investigating individual events, but metrics are better for understanding system trends and overall health.

They help teams:

- detect degradation early
- measure reliability
- track performance over time
- alert on abnormal behavior

## Common Metric Categories

### 1. Traffic Metrics

Examples:

- request count
- requests per second
- job throughput

### 2. Latency Metrics

Examples:

- average response time
- percentile latency such as p95 or p99

### 3. Error Metrics

Examples:

- error rate
- failed job count
- database query failures

### 4. Resource Metrics

Examples:

- CPU usage
- memory usage
- disk usage
- open connections

## Backend Relevance

Backend systems need metrics because production problems are often gradual before they become obvious.

Examples:

- latency slowly rising
- error rate increasing under load
- worker throughput falling
- database connections becoming exhausted

Metrics reveal those patterns in a way that logs alone usually do not.

## Good Metric Design

Useful metrics should be:

- clearly named
- stable over time
- tied to meaningful system behavior
- collected at the right granularity

Too many low-value metrics create noise, just like excessive logging.

## NestJS Context

In NestJS, metrics may be collected for:

- HTTP requests
- route latency
- queue processing
- custom business events
- database operation timing

Metrics are often exposed to a monitoring system rather than inspected directly inside the application.

## Common Mistakes

### 1. Tracking only infrastructure metrics

CPU and memory matter, but application-level metrics are also necessary.

### 2. Using averages without percentiles

Average latency can hide slow outliers that affect real users.

### 3. Measuring too much without clear purpose

Metrics should answer operational questions, not exist just because they can.

## Practical Guidance

Track request rate, latency, errors, and key resource usage first. Then add business and workflow-specific metrics where they improve operational understanding.

## Summary

Metrics are a core observability tool for understanding performance, reliability, and capacity trends in backend systems.
