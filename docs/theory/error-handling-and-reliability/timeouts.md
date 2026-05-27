# Timeouts

## Overview

A timeout is a limit on how long the system waits for an operation before treating it as failed.

Timeouts are essential in backend systems because waiting forever is usually worse than failing clearly.

## Why Timeouts Matter

Backend applications depend on external systems and slow operations such as:

- database queries
- HTTP requests to other services
- file operations
- message broker interactions

Without timeouts, one slow dependency can tie up resources and degrade the whole system.

## What Timeouts Protect

Timeouts help protect:

- request latency
- thread or worker availability
- connection pools
- user experience
- overall system stability

They force the system to stop waiting and handle the failure.

## Common Timeout Scenarios

- upstream API does not respond
- database query becomes unexpectedly slow
- external authentication provider hangs
- queue consumer waits too long on a dependency

## Design Considerations

A timeout value should match the real behavior of the operation.

If it is too short, healthy requests may fail unnecessarily.

If it is too long, failures become slow and resource usage grows.

## Timeouts and Retries

Timeouts often work together with retries.

The timeout defines when one attempt fails.

The retry policy defines whether another attempt should be made.

## NestJS Context

In NestJS, timeouts may be enforced in:

- HTTP client calls
- database or ORM operations
- interceptors
- gateway or microservice communication

They are usually an infrastructure concern rather than a controller concern.

## Common Mistakes

### 1. Having no timeout

This can cause requests or jobs to hang much longer than acceptable.

### 2. Using the same timeout for everything

Different operations have different latency expectations.

### 3. Hiding timeouts without logging context

A timeout should produce enough diagnostic information to investigate the underlying slowness.

## Practical Guidance

Set explicit timeouts for network and persistence operations.

Treat timeout selection as a reliability decision, not an arbitrary number.

## Summary

Timeouts prevent backend systems from waiting indefinitely on slow dependencies.

They are a core safeguard for performance, stability, and failure control.
