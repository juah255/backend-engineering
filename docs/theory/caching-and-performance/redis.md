# Redis

## Overview

Redis is an in-memory data store commonly used in backend systems for fast data access.

It is often used for:

- caching
- sessions
- rate limiting
- queues
- pub/sub
- temporary state

Because Redis keeps data in memory, it is much faster than querying a relational database for the same repeated information.

## Why Redis Matters

Backend systems often need a place for data that is:

- fast to read
- short-lived
- frequently accessed
- not ideal for repeated database queries

Redis fits that need well.

## Common Backend Use Cases

### 1. Caching

Redis is widely used to cache expensive or frequently requested data.

Examples:

- user profile lookups
- product listings
- computed statistics
- API responses

### 2. Session Storage

In session-based authentication systems, Redis is often used to store session state centrally.

### 3. Rate Limiting

Redis is useful for counters and time-window tracking, which makes it a common fit for rate limiting.

### 4. Queues and Background Jobs

Tools like BullMQ use Redis as the backing store for job queues.

## Strengths

- very fast reads and writes
- simple data structures
- good fit for ephemeral data
- widely used in backend ecosystems

## Tradeoffs

Redis is not a replacement for a relational database.

It should not automatically become the primary source of truth for all application data.

Tradeoffs include:

- memory cost
- data persistence considerations
- consistency challenges when cached data becomes stale

## NestJS Context

In NestJS, Redis often appears in:

- caching layers
- BullMQ queues
- rate limiting implementations
- shared session infrastructure

## Common Mistakes

### 1. Treating Redis as a universal solution

Not every performance issue should be solved by adding Redis.

### 2. Ignoring cache invalidation

Cached data is only useful if the system handles staleness correctly.

### 3. Putting long-term source-of-truth data there without a strong reason

Redis is strongest for fast-access, temporary, or derived data.

## Practical Guidance

Use Redis when the system needs low-latency access to repeated or temporary data, but keep database fundamentals and consistency rules clear.

## Summary

Redis is a fast in-memory backend tool that is especially useful for caching, short-lived state, and performance-sensitive workflows.
