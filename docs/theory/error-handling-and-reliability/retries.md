# Retries

## Overview

A retry is a repeated attempt to perform an operation after it fails.

Retries are commonly used for temporary or transient failures in distributed systems.

## Why Retries Matter

Some failures are not permanent.

Examples:

- temporary network interruption
- upstream service overload
- short database connectivity issue
- message broker unavailability for a brief period

In these cases, retrying can allow the system to recover automatically without manual intervention.

## When Retries Make Sense

Retries are appropriate when:

- the failure is likely temporary
- the operation is safe to repeat
- the retry policy is bounded

Not every failure should be retried.

For example:

- invalid input should not be retried
- authentication errors should not usually be retried automatically
- business rule violations should not be retried

## Retry Strategy

A retry policy often defines:

- how many times to retry
- how long to wait between attempts
- whether delay increases over time

Exponential backoff is a common strategy because it reduces pressure on already unhealthy systems.

## Backend Risks

Retries can improve resilience, but they can also create new problems:

- duplicate actions
- extra load on failing systems
- delayed failure visibility
- cascading traffic spikes

That is why retries should be deliberate, not automatic everywhere.

## Idempotency Connection

Retries are much safer when the operation is idempotent.

If repeating the same request can create duplicate side effects, retries become risky.

## NestJS Context

In a NestJS backend, retries may appear in:

- external API calls
- queue workers
- database connection handling
- message processing

They are more common in infrastructure or integration code than in simple controller logic.

## Common Mistakes

### 1. Retrying permanent failures

This wastes time and load without solving the problem.

### 2. Using unlimited retries

Unbounded retries can create reliability problems instead of fixing them.

### 3. Retrying non-idempotent operations carelessly

This can create duplicate writes, payments, or messages.

## Practical Guidance

Retry only when the failure is likely transient and the operation can safely be repeated.

Use bounded policies and backoff rather than immediate repeated attempts.

## Summary

Retries are a useful reliability tool for temporary failures, but they must be used carefully to avoid causing more damage than the original error.
