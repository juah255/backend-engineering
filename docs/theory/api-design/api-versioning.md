# API Versioning

## Overview

API versioning is the practice of managing changes to an API without breaking existing clients unexpectedly.

## Why It Matters

As systems evolve, routes, payloads, and behavior may need to change.

Without versioning, those changes can break consumers that depend on the older contract.

## Common Approaches

- URI versioning such as `/v1/users`
- header-based versioning
- media type versioning

## Practical Goal

Versioning should make change explicit and controlled.

It should not be used casually for every small change, but it is important when contracts must remain stable across client versions.

## Summary

API versioning supports backward compatibility and controlled evolution of backend interfaces.
