# Dependency Injection

## Overview

Dependency injection is a design pattern where a class receives the dependencies it needs instead of creating them directly.

NestJS uses dependency injection as one of its core architectural features.

## Why It Matters

Dependency injection improves:

- modularity
- testability
- reusability
- separation of concerns

If a service creates all its own dependencies internally, it becomes tightly coupled and harder to replace or test.

## NestJS Context

In NestJS, the framework resolves dependencies through the provider system.

For example, a controller can receive a service through its constructor, and a service can receive a database provider the same way.

## Practical Benefits

- controllers stay thin
- services become easier to test
- shared infrastructure becomes easier to reuse
- the framework controls object creation consistently

## Common Mistake

Using dependency injection does not automatically produce good architecture. If responsibilities are unclear, injected code can still become messy.

## Summary

Dependency injection is how NestJS wires the application together. It reduces tight coupling and supports maintainable backend design.
