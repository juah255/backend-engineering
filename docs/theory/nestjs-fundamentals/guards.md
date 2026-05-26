# Guards

## Overview

Guards decide whether a request is allowed to continue.

They are usually used for authentication and authorization checks.

## What Guards Do

Guards run before the route handler and can:

- allow the request
- deny the request
- use metadata to apply access rules

## Why Guards Matter

Guards provide a dedicated place for access control logic.

That is better than scattering permission checks directly through controllers.

## Common Uses

- checking whether a user is authenticated
- verifying roles or permissions
- protecting private routes

## Practical Guidance

Use guards for access decisions, not for data validation or response formatting. Keep them focused on whether the request should proceed.

## Summary

Guards are the NestJS tool for request authorization flow. They protect routes and centralize access rules.
