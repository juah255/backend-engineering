# Controllers

## Overview

Controllers handle incoming requests and return responses.

In NestJS, they define routes and connect the transport layer to application logic.

## Main Responsibilities

- receive HTTP requests
- extract params, query, and body data
- call services
- return results

## What Controllers Should Not Do

Controllers should not contain heavy business logic, database queries, or complicated rule processing.

Those concerns belong in services or lower layers.

## Why Controllers Matter

Controllers provide a clean boundary between the outside world and your backend code.

Thin controllers are easier to:

- test
- read
- maintain

## Practical Guidance

Keep controllers focused on request handling. Let services decide how the actual business behavior works.

## Summary

Controllers are the entry points of a NestJS API. Their job is coordination, not business ownership.
