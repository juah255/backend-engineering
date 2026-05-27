# Connection Pooling

## Overview

Connection pooling is the practice of reusing a managed set of database or network connections instead of creating a new connection for every operation.

## Why It Matters

Creating a new database connection for every request is expensive.

It adds latency and can overwhelm the database when traffic increases.

Connection pooling improves performance by keeping a reusable pool of open connections available.

## How It Works

Instead of opening a fresh connection each time:

- the application borrows a connection from the pool
- performs the operation
- returns the connection to the pool

This reduces connection setup overhead.

## Backend Relevance

Connection pooling is especially important for:

- relational database access
- high-concurrency APIs
- services with frequent short database operations

Without proper pooling, a backend can run into:

- connection exhaustion
- slower requests
- unstable performance under load

## Pool Sizing Tradeoff

A pool that is too small can create waiting and throughput limits.

A pool that is too large can overload the database server or waste resources.

Pool size should match:

- application traffic
- database capacity
- deployment model

## NestJS Context

In NestJS applications using Prisma or TypeORM, connection management is often partly handled by the ORM or driver, but the backend engineer still needs to understand the implications.

This becomes especially important in:

- containerized deployments
- serverless patterns
- multi-instance environments

## Common Mistakes

### 1. Ignoring connection limits

This often appears only after traffic grows.

### 2. Creating unnecessary client instances

Multiple unmanaged ORM or database client instances can cause connection waste.

### 3. Tuning blindly

Pooling values should follow actual load and database behavior.

## Practical Guidance

Use one well-managed database client per application process where appropriate, understand your driver's pooling behavior, and avoid unnecessary connection creation.

## Summary

Connection pooling is a core backend performance and stability concept because efficient connection reuse is essential for scalable database access.
