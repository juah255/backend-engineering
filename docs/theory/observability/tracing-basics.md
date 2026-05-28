# Tracing Basics

## Overview

Tracing is the practice of following a single request or workflow as it moves through different parts of a system.

It is especially useful in distributed systems where one user action may involve multiple services, databases, queues, or external APIs.

## Why Tracing Matters

When a request is slow or failing, logs and metrics may show that a problem exists, but not exactly where the time or failure happened.

Tracing helps answer:

- which component handled the request
- how long each step took
- where the error occurred
- which downstream dependency caused delay

## Core Idea

A trace represents the full lifecycle of one request or workflow.

A trace is usually broken into spans.

Each span represents one operation, such as:

- an HTTP request
- a database query
- a message publish
- a call to another service

Together, the spans show how the full request moved through the system.

## Backend Relevance

Tracing is most valuable when:

- the system has multiple services
- requests call external APIs
- background jobs trigger chained workflows
- one failure can originate far from the entry point

Even in a modular monolith, tracing can still help reveal slow internal paths.

## Relationship to Logs and Metrics

Tracing does not replace logs or metrics.

Instead:

- metrics show trends
- logs show events and details
- traces show request flow

These three together form a stronger observability model.

## NestJS Context

In NestJS, tracing can be applied around:

- incoming HTTP requests
- service-to-service calls
- database access
- queue workflows

The goal is to preserve request context across the system so related operations remain connected.

## Common Mistakes

### 1. Adding tracing without preserving context across boundaries

If context is lost between services or background tasks, the trace becomes incomplete.

### 2. Tracing everything with no operational purpose

Tracing can produce a lot of data, so it should focus on meaningful workflows.

### 3. Expecting tracing alone to explain business meaning

Traces show flow and timing, but logs and metrics are still needed for full diagnosis.

## Practical Guidance

Use tracing for critical request paths and distributed workflows where timing and dependency visibility matter.

## Summary

Tracing is an observability technique for understanding how one request moves through a backend system, especially when multiple components interact.
