# Pipes

## Overview

Pipes transform or validate incoming data before it reaches the route handler.

They are commonly used in NestJS to ensure request data has the expected shape and format.

## Main Uses

- input validation
- value transformation
- parsing route parameters

## Why Pipes Matter

Pipes move input checking to a clear boundary in the request lifecycle.

This improves:

- API safety
- consistency
- code cleanliness

Without pipes, controllers often become cluttered with manual validation code.

## Examples of Use

- validating DTO input
- parsing numeric route params
- rejecting malformed payloads

## Practical Guidance

Use pipes at the boundary where data enters your application. This keeps controllers and services focused on actual backend behavior rather than raw input cleanup.

## Summary

Pipes are a clean NestJS mechanism for validating and transforming incoming data before business logic begins.
