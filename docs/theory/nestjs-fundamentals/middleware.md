# Middleware

## Overview

Middleware is logic that runs before the route handler processes a request.

It sits in the request pipeline and can inspect or modify the request and response objects.

## Common Uses

- logging
- request timing
- authentication preprocessing
- header checks
- request metadata attachment

## Why Middleware Matters

Middleware is useful for cross-cutting concerns that should happen before controller logic.

It helps keep repeated pre-processing logic out of individual route handlers.

## Limits of Middleware

Middleware is not the best tool for every kind of request control.

For example:

- authorization is often better handled by guards
- validation is often better handled by pipes

Choosing the wrong tool makes the request pipeline harder to reason about.

## Practical Guidance

Use middleware for general request preprocessing. Keep it small and avoid placing feature-specific business logic there.

## Summary

Middleware runs early in the request lifecycle and is useful for broad, reusable request-level behavior.
