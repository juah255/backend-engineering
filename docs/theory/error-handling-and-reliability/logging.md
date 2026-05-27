# Logging

## Overview

Logging is the practice of recording important events, errors, and state transitions in an application.

In backend engineering, logs are one of the main tools for understanding what the system is doing.

## Why Logging Matters

When something goes wrong in production, logs often provide the first usable evidence.

They help with:

- debugging
- incident response
- tracing request flow
- auditing important operations
- understanding system behavior over time

## What Should Be Logged

Useful logs often include:

- application startup events
- request and response metadata
- important domain events
- failures and exceptions
- retry attempts
- external dependency failures

The goal is not to log everything. The goal is to log what helps explain system behavior.

## Log Levels

Backend systems usually distinguish between levels such as:

- debug
- info
- warn
- error

This helps teams filter logs by severity and purpose.

## Structured Logging

Structured logging means logs are emitted in a machine-readable format rather than only free text.

This is useful for:

- searching logs
- filtering by fields
- linking related events
- aggregating data in log platforms

Common fields include:

- timestamp
- request ID
- user ID when appropriate
- route
- service name
- error type

## Security Considerations

Logs should not contain sensitive data such as:

- passwords
- tokens
- full personal data when avoidable
- secret configuration values

Logging sensitive information creates long-term security risk because logs are often widely accessible within engineering systems.

## NestJS Context

In NestJS, logging may be handled through:

- the built-in logger
- custom logging services
- interceptors
- middleware

For serious systems, centralized logging is usually more important than console output alone.

## Common Mistakes

### 1. Logging too little

If critical failures happen with no useful context, debugging becomes slow.

### 2. Logging too much

Noise hides important information and increases storage cost.

### 3. Logging sensitive data

This is one of the most common and most serious logging mistakes.

### 4. Using inconsistent log structure

Inconsistent logs are much harder to query and analyze.

## Practical Guidance

Log important system behavior with consistent structure and useful context.

Treat logs as an operational tool, not as random console output.

## Summary

Logging is a core reliability practice in backend systems.

Good logs make failures understandable, system behavior observable, and production issues easier to investigate.
