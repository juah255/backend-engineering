# Sessions vs JWT

## Overview

Sessions and JWTs are two common approaches to authentication state management.

Both solve the problem of remembering who the user is across requests, but they do it differently.

## Sessions

With sessions, the server stores authentication state and the client keeps a session identifier, usually in a cookie.

### Strengths

- server-controlled invalidation
- straightforward revocation
- common fit for browser-based apps

### Tradeoff

The server must store session state.

## JWT

With JWT-based auth, the client stores a signed token containing claims, and the server validates that token on each request.

### Strengths

- stateless verification
- useful for distributed systems and APIs

### Tradeoff

Revocation and token lifecycle management are more complex than with sessions.

## Summary

Sessions and JWTs solve similar problems with different tradeoffs. The right choice depends on the application’s architecture and security needs.
