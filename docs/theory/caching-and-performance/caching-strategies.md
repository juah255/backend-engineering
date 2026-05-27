# Caching Strategies

## Overview

Caching is the practice of storing data temporarily so it can be reused without recomputing or refetching it every time.

In backend systems, caching is one of the most common ways to improve performance and reduce repeated work.

## Why Caching Matters

Some operations are expensive because they involve:

- repeated database queries
- heavy computation
- external API calls
- aggregation over large datasets

If the same result is requested often, caching can reduce load and improve response time.

## Main Idea

Instead of doing the full work for every request, the backend stores a result for a period of time and reuses it until the cache expires or is invalidated.

## Common Caching Targets

- database query results
- rendered API responses
- configuration data
- reference data
- session data
- computed analytics

## Common Caching Strategies

### 1. Cache-Aside

The application checks the cache first.

If the value is missing:

- load from the source
- store it in cache
- return it

This is one of the most common backend caching patterns.

### 2. Write-Through

The application writes to the cache and the primary data store together.

This keeps the cache updated more directly, but it can add complexity.

### 3. Write-Back or Write-Behind

Writes go to the cache first and are persisted later.

This can improve write performance, but it introduces consistency and failure complexity.

### 4. Time-Based Expiration

Cached values expire after a defined TTL, or time to live.

This is simple, but the chosen expiration time affects freshness.

## Tradeoffs

Caching improves performance, but it introduces new problems:

- stale data
- invalidation complexity
- consistency tradeoffs
- extra operational systems

That is why caching should follow a real performance need, not be added blindly.

## Cache Invalidation

One of the hardest parts of caching is deciding when data should no longer be trusted.

Invalidation can happen:

- on write
- on event
- on timer expiration

If invalidation is weak, clients may receive outdated results.

## NestJS Context

In NestJS, caching may be used for:

- repeated read-heavy endpoints
- expensive service calls
- shared reference lookups
- Redis-backed cache layers

## Common Mistakes

### 1. Caching everything

Not all data benefits from caching.

### 2. Ignoring freshness requirements

Some data changes too often or is too sensitive to serve stale values casually.

### 3. Using cache to hide bad query design

Caching can help, but it should not replace correct database design and query optimization.

## Practical Guidance

Cache data that is expensive to compute, frequently requested, and safe enough to reuse for a controlled period.

Choose invalidation rules before adding the cache.

## Summary

Caching strategies improve performance by reducing repeated work, but they only help when freshness, invalidation, and system complexity are handled carefully.
