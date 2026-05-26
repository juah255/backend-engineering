# Password Hashing

## Overview

Password hashing is the practice of storing a one-way transformed version of a password instead of the raw password itself.

## Why It Matters

If a database is compromised, plain-text passwords create immediate, severe damage.

Hashed passwords reduce that risk because the original password is not stored directly.

## Good Practice

- never store raw passwords
- use a proven password hashing algorithm
- compare hashes securely
- tune cost parameters appropriately

## Common Tools

Algorithms such as bcrypt or Argon2 are commonly used for backend password storage.

## Summary

Password hashing is a basic security requirement in any backend that handles user credentials.
