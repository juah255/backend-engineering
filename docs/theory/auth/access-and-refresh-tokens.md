# Access Tokens and Refresh Tokens

## Overview

Access tokens and refresh tokens are often used together in token-based authentication systems.

## Access Tokens

Access tokens are short-lived tokens used to authorize requests.

They are typically sent with API requests and should expire relatively quickly.

## Refresh Tokens

Refresh tokens are longer-lived tokens used to obtain new access tokens without forcing the user to log in again each time the access token expires.

## Why the Pair Matters

This design balances:

- usability
- security

Short-lived access tokens limit exposure, while refresh tokens support smoother user sessions.

## Practical Concern

Refresh tokens need careful storage, rotation, and revocation handling.

## Summary

Access and refresh tokens are a common pattern for managing secure, usable authentication lifecycles in API-based systems.
