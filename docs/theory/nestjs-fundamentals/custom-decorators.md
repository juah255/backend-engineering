# Custom Decorators

## Overview

Custom decorators let you attach reusable metadata or helper behavior to NestJS classes, methods, parameters, or properties.

They are often used to reduce repetition and make route definitions cleaner.

## Why They Matter

Decorators help express intent directly in the code.

They are useful when the same pattern appears in many endpoints, such as:

- extracting the current user
- applying route metadata
- defining custom access rules

## Common Uses

- parameter decorators like current user extraction
- route metadata for roles or permissions
- reusable handler annotations

## Risk

Custom decorators can improve readability, but too many can hide important behavior. If a decorator is unclear, it makes the code harder to follow.

## Practical Guidance

Use custom decorators when they remove real repetition and make route behavior clearer. Avoid creating decorators that hide core business logic.

## Summary

Custom decorators are a useful NestJS abstraction for reusable metadata and cleaner endpoint definitions when applied with discipline.
