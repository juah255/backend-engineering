# Unit Tests

## Overview

A unit test verifies one small unit of behavior in isolation.

In backend engineering, that usually means testing:

- a function
- a service method
- a utility
- a small validation rule

The goal is to confirm that one part of the system behaves correctly without involving the full application stack.

## Why Unit Tests Matter

Unit tests help catch logic mistakes early and make small parts of the codebase safer to change.

They are useful because they are usually:

- fast
- focused
- easy to run frequently
- good for debugging business logic

## What a Unit Test Should Cover

A good unit test checks:

- expected input and output
- edge cases
- failure behavior
- branching logic

Example targets:

- a service that calculates short URL expiration
- a helper that normalizes domains
- a permission-checking function

## Isolation

The key characteristic of a unit test is isolation.

That means the test should avoid depending on:

- a real database
- a real HTTP server
- real external APIs
- complex system wiring

If those dependencies are needed, they are usually replaced with mocks, fakes, or stubs.

## Benefits

- fast feedback
- strong coverage of business logic
- easier debugging when something fails
- safer refactoring

## Limitation

Unit tests do not prove that the whole system works together.

A service may pass all unit tests and still fail when connected to the real database or request pipeline.

That is why unit tests are necessary but not sufficient.

## NestJS Context

In NestJS, unit tests commonly focus on:

- services
- guards
- pipes
- helpers
- custom decorators with logic

Controllers can also be unit tested, but many controller concerns are often better validated with integration or end-to-end tests.

## Common Mistakes

### 1. Testing implementation details instead of behavior

Tests should care about what the unit does, not every internal step it takes.

### 2. Writing tests that depend on unstable external state

That makes the test closer to integration testing and usually less reliable.

### 3. Over-mocking everything

Too much mocking can make tests unrealistic and tightly coupled to internal structure.

## Practical Guidance

Use unit tests for business rules, transformations, validation behavior, and error conditions.

If the behavior depends heavily on real system interaction, consider an integration test instead.

## Summary

Unit tests verify small pieces of backend logic in isolation.

They are the fastest and most focused layer of testing, and they are especially useful for protecting service logic and domain rules.
