# Structured Error Responses

## Overview

A structured error response is a consistent format for returning failure information from an API.

Instead of sending random error messages or raw exception output, the backend returns errors in a predictable shape.

## Why It Matters

Structured errors help:

- clients handle failures consistently
- frontend applications display useful messages
- logs and monitoring correlate failures more easily
- developers debug issues faster

Without structure, each endpoint may fail differently, which makes the API harder to consume and maintain.

## Common Fields

A structured error response often includes:

- status code
- error name or type
- human-readable message
- request path
- timestamp
- optional validation details

The exact format can vary, but it should stay consistent across the application.

## Backend Relevance

Backend systems fail in many ways:

- invalid input
- missing resources
- authentication failure
- database issues
- upstream service failure

Clients should be able to understand the category of failure without needing internal implementation details.

## Security Consideration

Structured does not mean verbose.

A response should be clear, but it should not expose:

- stack traces
- SQL details
- internal table names
- secret values

Internal details belong in logs, not public API responses.

## NestJS Context

In NestJS, structured error responses are often implemented with:

- built-in exceptions
- custom exceptions
- exception filters

This allows the application to keep failure output consistent without repeating formatting logic in every controller.

## Common Mistakes

### 1. Returning different shapes from different endpoints

This makes API consumers harder to write and maintain.

### 2. Exposing raw internal error messages

This creates security and debugging problems.

### 3. Returning vague messages with no useful category

Errors should be controlled, but still informative enough for clients to react appropriately.

## Practical Guidance

Choose one error response format and apply it consistently.

Separate public error information from internal diagnostic details.

## Summary

Structured error responses make backend failures predictable, safer, and easier for clients and developers to work with.
