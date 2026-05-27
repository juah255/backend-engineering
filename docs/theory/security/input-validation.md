# Input Validation

## Overview

Input validation is the process of checking whether incoming data matches the rules the backend expects.

It is one of the first and most important security controls in any API.

## Why It Matters

Every backend receives data from outside its trust boundary:

- request bodies
- query parameters
- route parameters
- headers
- file uploads

That data should never be assumed safe or correct.

Without validation, the system becomes more vulnerable to:

- runtime errors
- bad data writes
- broken business logic
- injection attacks
- abuse of internal assumptions

## What Validation Checks

Validation usually checks:

- required fields
- data types
- allowed value ranges
- string length
- formats such as email or URL
- enum membership

Validation rules should reflect both technical correctness and business constraints.

## Security Relevance

Input validation reduces the attack surface by rejecting malformed or unexpected data early.

It does not solve every security problem by itself, but it is a core defensive layer.

## NestJS Context

In NestJS, input validation is commonly handled with:

- DTO classes
- validation decorators
- pipes

This lets the application enforce request shape before controller or service logic runs.

## Common Mistakes

### 1. Trusting client-side validation

Frontend validation improves user experience, but it is not a security control.

Server-side validation is still required.

### 2. Validating shape but ignoring business rules

An input can be technically valid and still violate domain rules.

### 3. Accepting more fields than needed

Loose input contracts make systems harder to secure and reason about.

## Practical Guidance

Validate all untrusted input at the application boundary and keep the accepted shape explicit and narrow.

## Summary

Input validation is a foundational backend security control because it prevents unsafe or malformed data from moving deeper into the system.
