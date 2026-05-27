# SQL Injection

## Overview

SQL injection is a security vulnerability where untrusted input changes the meaning of a database query.

It happens when user-controlled data is combined unsafely into SQL statements.

## Why It Matters

SQL injection can allow an attacker to:

- read unauthorized data
- modify or delete data
- bypass authentication logic
- damage database integrity

It is one of the most serious classes of backend vulnerabilities.

## How It Happens

The core problem is mixing untrusted input directly into query logic.

If input is treated as part of the SQL command instead of only as data, the attacker may be able to manipulate the query.

## Backend Relevance

Any backend that interacts with a relational database must take SQL injection seriously.

This applies even when using ORMs, because unsafe raw queries or poor query construction can still create exposure.

## Common Defenses

- parameterized queries
- ORM query builders used correctly
- input validation
- least-privilege database access

Parameterized queries are especially important because they separate query structure from data values.

## NestJS Context

In NestJS projects using Prisma or TypeORM, the ORM can reduce injection risk when used correctly.

But the backend engineer still needs to be careful with:

- raw SQL
- dynamic query construction
- overly permissive filtering logic

## Common Mistakes

### 1. Building SQL with string concatenation

This is one of the most direct ways to create SQL injection risk.

### 2. Assuming ORM use makes the problem impossible

The ORM helps, but unsafe raw query usage can still reintroduce the vulnerability.

### 3. Relying only on input filtering

Validation helps, but parameterized query design is the stronger primary defense.

## Practical Guidance

Treat all user input as untrusted and ensure it is passed into the database as data, not as executable query structure.

## Summary

SQL injection is a critical backend security risk that is prevented mainly through safe query construction and disciplined database access patterns.
