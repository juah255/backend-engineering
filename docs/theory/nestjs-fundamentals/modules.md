# Modules

## Overview

In NestJS, a module is a class decorated with `@Module()` that groups related parts of the application.

It is the basic organizational unit of a NestJS app.

## What a Module Contains

A module can define:

- `controllers`
- `providers`
- `imports`
- `exports`

This allows one module to own a specific area of the system.

## Why Modules Matter

Modules help:

- group related code
- define feature boundaries
- control dependency visibility
- keep large applications manageable

Without modules, a NestJS backend becomes a flat set of files with unclear ownership.

## Common Examples

- `AuthModule`
- `UsersModule`
- `UrlsModule`
- `PrismaModule`

Each should represent a real backend concern.

## Practical Guidance

Use modules to organize code by feature or infrastructure responsibility. Keep each module focused and avoid turning one module into a container for unrelated logic.

## Summary

Modules are the structural foundation of a NestJS application. They define boundaries, organize features, and make the system easier to scale.
