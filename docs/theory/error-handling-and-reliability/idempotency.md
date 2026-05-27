# Idempotency

## Overview

Idempotency means that performing the same operation multiple times has the same effective result as performing it once.

This is a critical concept in reliable backend design.

## Why It Matters

In real systems, duplicate requests happen for many reasons:

- client retries
- network instability
- user double submission
- queue redelivery
- upstream retry logic

If the backend is not designed for this, duplicates can create:

- repeated payments
- duplicate orders
- duplicate emails
- inconsistent state

## Simple Idea

If a request is retried, the system should either:

- safely do nothing extra
- or return the same result without repeating the side effect

## Common Examples

Operations that should often be idempotent:

- creating a payment with a client-supplied idempotency key
- processing an external webhook event
- retrying a queue job that updates a known record

## HTTP Perspective

Some HTTP methods are naturally closer to idempotent behavior:

- `GET`
- `PUT`
- `DELETE` in many designs

`POST` is not naturally idempotent, but it can be made idempotent through application logic, such as idempotency keys.

## Backend Relevance

Idempotency matters whenever retries or duplicate delivery are possible.

It becomes especially important in:

- payment systems
- order creation
- webhook handling
- background job processing

## Common Techniques

- idempotency keys
- unique constraints
- deduplication tables
- state checks before applying side effects

## Common Mistakes

### 1. Assuming the client sends a request only once

That assumption is unsafe in distributed systems.

### 2. Retrying non-idempotent operations blindly

This can create duplicate effects with real business consequences.

### 3. Treating idempotency as only an HTTP concern

It also matters in background jobs and event processing.

## Practical Guidance

For operations with external side effects or monetary impact, design explicitly for duplicate handling.

Idempotency should be a planned property, not an accidental one.

## Summary

Idempotency is a core reliability concept that protects backend systems from duplicate side effects during retries, redelivery, and repeated requests.
