# End-to-End Tests

## Overview

End-to-end tests, often called e2e tests, verify the application as a whole from the outside.

They simulate how a real client interacts with the backend.

In an API project, that usually means sending HTTP requests and checking the full response behavior.

## Why End-to-End Tests Matter

E2e tests verify the full request lifecycle:

- routing
- middleware
- guards
- pipes
- controllers
- services
- database access
- response formatting

This makes them the closest automated test layer to real application behavior.

## What They Catch

E2e tests help catch:

- routing mistakes
- missing guards
- broken validation setup
- dependency injection problems
- incorrect status codes
- bad response shapes
- integration issues across the whole stack

## Benefits

- strongest confidence in user-facing API behavior
- validates system wiring end to end
- good for critical workflows

## Limitation

E2e tests are usually:

- slower
- more expensive to maintain
- more dependent on environment setup

They should be focused on critical flows rather than covering every tiny branch.

## NestJS Context

NestJS projects often use e2e tests to verify:

- auth flows
- CRUD endpoints
- request validation
- permission enforcement
- database-backed workflows

These tests commonly boot an application instance and send HTTP requests to it.

## Common Mistakes

### 1. Using e2e tests for everything

This creates a slow and brittle test suite.

### 2. Ignoring response contract details

E2e tests should verify status codes, payload shape, and critical behavior, not only whether the request "works."

### 3. Depending on dirty test state

If the database is not reset or isolated properly, e2e tests become unreliable.

## Practical Guidance

Use e2e tests for important user-visible workflows and system-critical routes.

Do not rely on them as the only test layer. They work best when combined with unit and integration tests.

## Summary

End-to-end tests validate backend behavior through the full application stack.

They provide the highest confidence for API flows, but they should be used selectively because they are heavier than other test types.
