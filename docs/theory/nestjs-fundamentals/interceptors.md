# Interceptors

## Overview

Interceptors wrap route handling logic and can run both before and after the handler.

They are useful when you need to transform responses or apply cross-cutting behavior around execution.

## Common Uses

- response mapping
- logging
- timing
- caching behavior
- adding metadata to responses

## Why Interceptors Matter

Interceptors help keep repeated response or execution logic out of controllers and services.

They are especially useful when many endpoints should behave consistently.

## Difference from Middleware

Middleware runs early in the request lifecycle.

Interceptors work closer to the route execution and can also modify the returned value.

## Practical Guidance

Use interceptors when you need to wrap handler execution or normalize output. Do not use them as a replacement for business logic.

## Summary

Interceptors are a flexible NestJS tool for applying behavior around request handling, especially for response shaping and cross-cutting concerns.
