# Secrets Management

## Overview

Secrets management is the practice of handling sensitive configuration values securely.

Examples of secrets include:

- database passwords
- API keys
- JWT signing secrets
- OAuth client secrets
- encryption keys

## Why It Matters

If secrets are exposed, attackers may gain direct access to critical systems or sensitive data.

Poor secret handling is one of the most damaging backend security failures because it can bypass many other controls.

## Core Principle

Secrets should be:

- stored securely
- accessed only where needed
- rotated when required
- kept out of source control

## Common Backend Practices

- environment variables
- secret managers provided by cloud platforms
- strict access control around deployment configuration

The specific mechanism can vary, but the operational discipline matters more than the syntax.

## What Not to Do

Avoid:

- hardcoding secrets in source files
- committing secrets to Git
- sending secrets in logs
- sharing production secrets casually across environments

## NestJS Context

In NestJS, secrets are often accessed through configuration modules and environment validation.

That makes configuration easier to centralize, but secure storage and access control still need to be handled outside the application code as well.

## Common Mistakes

### 1. Reusing the same secrets across all environments

This increases blast radius when one environment is exposed.

### 2. Leaving secrets in example files or history

Even removed secrets may still exist in Git history or build logs.

### 3. Logging secrets accidentally

Operational debugging can create major exposure if sensitive values appear in logs.

## Practical Guidance

Treat secrets as high-risk operational assets and manage them with clear storage, access, rotation, and audit discipline.

## Summary

Secrets management is a core backend security responsibility because leaked secrets can compromise entire systems very quickly.
