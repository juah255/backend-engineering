# CORS

## Overview

CORS stands for Cross-Origin Resource Sharing.

It is a browser security mechanism that controls whether a web application from one origin is allowed to make requests to another origin.

## Why It Matters

If a frontend and backend run on different origins, the browser may block requests unless the backend explicitly allows them.

CORS is not primarily an authentication system. It is a browser-enforced access control mechanism for cross-origin requests.

## Core Idea

An origin is defined by a combination of:

- scheme
- host
- port

If any of these differ, the request is cross-origin.

## Backend Relevance

Backend engineers need to configure CORS carefully so that:

- legitimate frontend clients can call the API
- unnecessary origins are not allowed
- credentialed requests are handled correctly

## Important Point

CORS does not protect a public API from non-browser clients.

Tools such as curl, mobile apps, or backend services are not restricted by browser CORS rules in the same way.

That is why CORS should not be confused with true authorization.

## Common CORS Decisions

- which origins are allowed
- which methods are allowed
- which headers are allowed
- whether credentials are allowed

These should be chosen deliberately rather than opened broadly by default.

## NestJS Context

NestJS supports CORS configuration at the application level.

This is commonly used when connecting a browser frontend to the API.

## Common Mistakes

### 1. Allowing every origin without need

This weakens control unnecessarily.

### 2. Treating CORS as an auth mechanism

CORS is not a replacement for authentication or authorization.

### 3. Misconfiguring credentials with wildcard origins

Credentialed browser requests need more careful origin handling.

## Practical Guidance

Allow only the origins and request patterns your application actually needs.

## Summary

CORS is an important browser-facing backend configuration topic, but it should be understood as a controlled cross-origin policy, not as core application authorization.
