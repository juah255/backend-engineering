# Request Validation

## Overview

Request validation ensures that incoming data matches the rules your API expects.

This is one of the first defensive layers in a backend system.

## Why It Matters

Without validation, invalid or malicious input can move deeper into the application and cause:

- runtime errors
- bad database writes
- security issues
- unclear failures

## Common Validation Checks

- required fields
- string length
- email format
- numeric ranges
- allowed enum values

## NestJS Context

NestJS commonly uses DTOs with validation rules and pipes to enforce request correctness before controller logic proceeds.

## Summary

Request validation protects the application boundary and makes API behavior more reliable.
