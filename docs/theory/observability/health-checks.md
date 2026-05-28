# Health Checks

## Overview

Health checks are endpoints or mechanisms used to determine whether an application is running and whether it is ready to handle work.

They are a standard part of backend operations.

## Why Health Checks Matter

Infrastructure platforms, orchestrators, and monitoring systems need a way to know whether an application instance is:

- alive
- ready
- degraded

Without health checks, unhealthy instances may keep receiving traffic or failures may go unnoticed longer than necessary.

## Common Health Check Types

### 1. Liveness Check

This asks whether the application process is still alive.

Its purpose is usually to detect whether the process should be restarted.

### 2. Readiness Check

This asks whether the application is ready to serve requests.

For example, the process may be running but not yet ready because:

- database connection is not available
- startup tasks are incomplete
- critical dependencies are unavailable

## Backend Relevance

Health checks are important for:

- container orchestration
- load balancers
- deployment safety
- monitoring alerts

They are not only about whether the process exists. They are about whether the service can actually do its job.

## What Health Checks Should Include

That depends on system design, but common checks involve:

- application process state
- database connectivity
- cache availability
- message broker access
- critical downstream dependency state

Not every external dependency belongs in every health check, so the design should reflect operational reality.

## NestJS Context

In NestJS, health checks are often exposed as dedicated endpoints and may integrate with infrastructure-aware libraries or custom logic.

They are commonly used in production deployments and containerized environments.

## Common Mistakes

### 1. Making health checks too shallow

If the endpoint only returns "OK" without verifying anything meaningful, it may not help operations much.

### 2. Making health checks too heavy

Expensive health checks can create extra load or false alarms.

### 3. Failing to distinguish liveness from readiness

These checks solve different operational problems and should not always be treated as the same thing.

## Practical Guidance

Design health checks around the dependencies that truly determine whether the service should receive traffic or be restarted.

## Summary

Health checks help infrastructure and operators understand whether a backend service is alive, ready, and operationally safe to use.
