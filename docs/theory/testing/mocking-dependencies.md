# Mocking Dependencies

## Overview

Mocking dependencies means replacing real collaborators with controlled test doubles during a test.

This is commonly used when testing backend code in isolation.

## Why Mocking Matters

Many backend components depend on external systems or lower layers such as:

- databases
- HTTP clients
- caches
- queues
- file systems
- other services

If unit tests used all of those real dependencies, they would become slower, harder to control, and less isolated.

## Common Types of Test Doubles

### Mock

A mock is a test double used to simulate behavior and verify interaction.

### Stub

A stub returns predefined values.

### Fake

A fake is a lightweight working substitute, such as an in-memory repository.

In practice, teams often use the word "mock" broadly for all of these.

## Benefits

- isolates the unit under test
- keeps tests fast
- makes failure cases easier to simulate
- avoids dependence on unstable external systems

## Example Use Cases

- mock a repository when testing a service
- mock an email sender when testing registration flow
- mock a JWT service when testing auth logic

## Risks

Mocking is useful, but it can be overused.

If a test only verifies that mocked methods were called, without checking real behavior meaningfully, the test may provide weak confidence.

Too much mocking can also make tests tightly coupled to implementation details.

## NestJS Context

In NestJS, mocking dependencies is common in unit tests for:

- services
- guards
- interceptors
- controllers

This often happens by replacing providers in the testing module.

## Practical Guidance

Mock dependencies when:

- the dependency is external
- the real dependency is slow or unstable
- the test should focus on one unit only

Prefer real collaborators in integration tests when the interaction itself is what you need to validate.

## Summary

Mocking dependencies is an important testing technique for isolating backend units.

It improves speed and control, but it should be used carefully so tests still reflect meaningful behavior.
