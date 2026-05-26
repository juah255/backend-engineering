# Exception Filters

## Overview

Exception filters catch thrown errors and control how they are turned into responses.

They are a key part of structured error handling in NestJS.

## Why They Matter

Without consistent error formatting, APIs become unpredictable and harder to debug.

Exception filters help:

- standardize error responses
- separate error formatting from business logic
- centralize failure behavior

## Common Uses

- formatting API error responses
- handling custom exceptions
- mapping internal errors to safe external responses

## Practical Guidance

Use exception filters when you want consistent error output across the application. Keep them focused on error translation and presentation, not core business rules.

## Summary

Exception filters are the NestJS mechanism for turning thrown exceptions into controlled, consistent API responses.
