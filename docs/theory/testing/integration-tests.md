# Integration Tests

## Overview

Integration tests verify that multiple parts of the system work together correctly.

In backend engineering, this usually means checking how components interact across boundaries such as:

- service and database
- controller and service
- repository and ORM
- validation and persistence

## Why Integration Tests Matter

A backend can fail even when every unit works correctly on its own.

The problem often appears in the interaction between components.

Examples:

- a service sends the wrong data to the database layer
- validation rules do not match schema constraints
- dependency injection wiring is incomplete
- an ORM query behaves differently than expected

Integration tests help catch these issues.

## What They Usually Include

Integration tests often include real or near-real versions of:

- application modules
- dependency injection
- database access
- validation pipelines

They are broader than unit tests, but narrower than full end-to-end tests.

## Common Backend Use Cases

- testing a repository against a real test database
- testing a service with real persistence
- testing a module with its actual providers
- testing request validation plus database write behavior

## Benefits

- better confidence in component interaction
- catches configuration and wiring problems
- tests real persistence behavior
- stronger than isolated unit tests for shared flows

## Limitation

Integration tests are usually slower and more complex than unit tests.

They also require more setup, especially when a real database is involved.

## NestJS Context

In NestJS, integration tests often create a testing module with real providers and selected infrastructure.

This makes them useful for validating:

- service-provider interaction
- module configuration
- repository behavior
- DTO validation and persistence flow

## Common Mistakes

### 1. Calling something an integration test when it is still fully mocked

If all important dependencies are mocked, the test is probably still a unit test.

### 2. Making integration tests too broad

If they require the whole system and full HTTP flow, they may actually be end-to-end tests.

### 3. Using unstable shared test data

Integration tests become unreliable when test state is not controlled carefully.

## Practical Guidance

Use integration tests when the main risk is in the boundary between components rather than inside one isolated function.

They are especially valuable around ORM queries, module wiring, and service-to-database behavior.

## Summary

Integration tests verify that real backend components work correctly together.

They provide stronger confidence than unit tests when interaction between layers is the main concern.
