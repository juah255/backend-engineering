# Event-Driven Patterns

## Overview

Event-driven patterns organize backend behavior around events that represent something that has happened in the system.

Examples:

- user registered
- payment completed
- order shipped
- URL created

Instead of tightly coupling all follow-up actions into one direct flow, the system can publish an event and let interested components react to it.

## Why Event-Driven Patterns Matter

These patterns help reduce tight coupling between parts of the system.

For example, when a user registers, the system may need to:

- create the account
- send a welcome email
- log an audit event
- enqueue onboarding tasks

If all of that is handled directly in one service method, the logic becomes tightly connected and harder to evolve.

An event-driven approach separates the primary action from secondary reactions.

## Core Idea

One part of the system emits an event.

Other parts listen for that event and decide whether to act.

This supports looser coupling and clearer separation of responsibilities.

## Common Uses

- notifications after domain changes
- audit trails
- asynchronous workflows
- integration with external systems
- modular monolith event handling

## Benefits

- decoupling
- easier extensibility
- better support for asynchronous workflows
- clearer modeling of domain events

## Tradeoffs

Event-driven systems can become harder to reason about because flow is no longer fully linear.

Challenges include:

- tracing behavior across handlers
- handling delivery failures
- ordering concerns
- duplicate event processing

This means event-driven design should follow a real architectural need, not just fashion.

## NestJS Context

In NestJS, event-driven patterns can appear through:

- in-process event emitters
- queue-based workflows
- message brokers

The same idea applies whether the event stays within one app or crosses service boundaries.

## Common Mistakes

### 1. Emitting events for trivial local behavior

Not every small method call needs to become an event.

### 2. Ignoring observability

If events trigger important behavior, the system needs visibility into what was emitted, handled, failed, or retried.

### 3. Treating asynchronous behavior like direct synchronous logic

Event-driven systems often require stronger thinking about timing, retries, and consistency.

## Practical Guidance

Use event-driven patterns when multiple parts of the system need to react to the same business event, especially when loose coupling or asynchronous processing adds real value.

## Summary

Event-driven patterns help backend systems become more modular and extensible, but they introduce distributed-system complexity that must be handled deliberately.
