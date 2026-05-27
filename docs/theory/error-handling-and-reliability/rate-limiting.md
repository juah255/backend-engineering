# Rate Limiting

## Overview

Rate limiting controls how many requests a client can make within a given time period.

It is a common backend protection mechanism for both security and stability.

## Why It Matters

Without rate limiting, a system can be harmed by:

- abusive clients
- accidental request floods
- brute-force login attempts
- poorly written integrations
- denial-of-service pressure

Rate limiting helps protect application resources and keeps service quality more stable for legitimate users.

## Common Goals

Rate limiting is used to:

- reduce abuse
- protect expensive endpoints
- slow brute-force attacks
- prevent one client from consuming disproportionate resources

## How It Works

A limit is usually defined by:

- identity of the client
- number of allowed requests
- time window

The client identity might be based on:

- IP address
- user account
- API key
- session

## Backend Tradeoffs

Rate limiting protects the system, but if configured badly it can also block valid users.

That means the policy should reflect:

- endpoint sensitivity
- normal traffic patterns
- type of client

Login endpoints and password reset flows often need stricter protection than normal read-only endpoints.

## NestJS Context

In NestJS, rate limiting is often applied through guards, middleware, or dedicated throttling modules.

It is commonly used on:

- login routes
- public APIs
- expensive search endpoints
- write-heavy operations

## Common Mistakes

### 1. Applying the same limit everywhere

Different endpoints have different risk and cost profiles.

### 2. Relying only on IP-based limits

This can be too weak or too aggressive depending on the environment.

### 3. Forgetting operational visibility

If rate limiting events are not observable, it becomes harder to distinguish abuse from misconfiguration.

## Practical Guidance

Apply rate limiting where abuse, brute force, or cost concentration is a real risk.

Tune limits by endpoint sensitivity rather than using one global number for every route.

## Summary

Rate limiting is a core backend defense for protecting stability, fairness, and security under real traffic conditions.
