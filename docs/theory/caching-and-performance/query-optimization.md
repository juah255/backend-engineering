# Query Optimization

## Overview

Query optimization is the process of making database queries more efficient.

In backend engineering, this matters because slow queries directly affect:

- response time
- server load
- database load
- scalability

## Why Query Optimization Matters

Many backend performance problems are actually database access problems.

Even well-written application code will feel slow if the queries behind it are inefficient.

## Common Causes of Slow Queries

- missing indexes
- selecting more data than needed
- unnecessary joins
- poor filtering strategy
- N+1 query patterns
- inefficient sorting on large datasets

## Typical Optimization Approaches

### 1. Select Only What You Need

Fetching unnecessary columns increases data transfer and processing cost.

### 2. Use Appropriate Indexes

Indexes can greatly improve lookups, filtering, and sorting when used correctly.

### 3. Avoid N+1 Patterns

If the application runs one query for the main list and then one additional query per item, performance usually degrades quickly.

### 4. Use Pagination

Large unbounded result sets are expensive and often unnecessary.

### 5. Examine Query Plans

The database execution plan shows how a query is actually run.

This often reveals whether indexes are used or whether full table scans happen.

## Backend Relevance

Query optimization matters most on:

- high-traffic endpoints
- list endpoints
- reporting queries
- join-heavy workflows
- search-like features

## ORM Context

Using Prisma or TypeORM does not remove the need to understand query behavior.

ORMs help productivity, but they can still produce inefficient database access if used carelessly.

## Common Mistakes

### 1. Assuming the ORM automatically makes queries fast

It does not.

### 2. Optimizing without measuring

Performance work should follow real evidence.

### 3. Returning full datasets where only summaries are needed

This wastes both database and application resources.

## Practical Guidance

Start with the actual slow query, inspect what it does, and fix the root cause rather than guessing.

## Summary

Query optimization is one of the most important backend performance practices because database inefficiency often becomes application slowness very quickly.
