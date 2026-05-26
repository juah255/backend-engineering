# Providers

## Overview

Providers are classes or values that NestJS can manage and inject as dependencies.

In most applications, services are the most common kind of provider.

## What Providers Do

Providers usually contain:

- business logic
- reusable infrastructure logic
- shared application services

## Why Providers Matter

Providers make logic reusable and keep responsibilities separated.

Instead of creating objects manually in many places, NestJS manages them centrally.

## Common Examples

- service classes
- database services
- configuration services
- custom utilities registered in the DI container

## Practical Guidance

Use providers for reusable logic that should be shared across controllers or other services. Avoid putting request-handling code inside them unless the design clearly calls for it.

## Summary

Providers are a core NestJS building block. They hold reusable logic and work closely with dependency injection.
