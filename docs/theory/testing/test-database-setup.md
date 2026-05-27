# Test Database Setup

## Overview

Test database setup is the process of preparing a database environment specifically for automated tests.

This matters whenever tests interact with real persistence.

## Why It Matters

Database-backed tests are only reliable when the test data and schema state are controlled.

Without proper setup, tests often become:

- flaky
- order-dependent
- hard to reproduce
- unsafe to run repeatedly

## Common Goals

A test database setup should provide:

- isolated test data
- repeatable schema state
- predictable cleanup
- safe execution separate from development and production data

## Common Approaches

### 1. Separate Test Database

Use a dedicated database for tests.

This is the standard baseline because it avoids mixing test data with development data.

### 2. Reset Between Tests or Test Suites

The database can be cleaned:

- before each test
- after each test
- before each test suite

The right choice depends on speed and isolation needs.

### 3. Run Migrations for Test Environment

The test database schema should match the application schema.

That usually means applying migrations before tests run.

### 4. Seed Only What Is Needed

Tests should create only the data they need.

Heavy shared seed data often makes tests harder to understand and maintain.

## NestJS Context

In a NestJS project using Prisma or TypeORM, test database setup often includes:

- dedicated test environment variables
- test-specific database URL
- schema migration step
- cleanup strategy

For e2e and integration tests, this setup is often as important as the test code itself.

## Common Mistakes

### 1. Reusing development data

This makes tests unsafe and non-repeatable.

### 2. Not cleaning state

Leftover data from earlier tests causes random failures.

### 3. Using shared fixtures carelessly

Large shared fixtures often create hidden dependencies between tests.

### 4. Ignoring performance

Resetting the whole database too often can make the suite unnecessarily slow. The isolation strategy should match the project’s actual needs.

## Practical Guidance

Start with a separate test database and a clear cleanup strategy.

Make sure tests can run repeatedly with the same result, regardless of order.

## Summary

Test database setup is a core part of reliable backend testing.

When persistence is involved, good setup is what makes integration and e2e tests trustworthy instead of fragile.
