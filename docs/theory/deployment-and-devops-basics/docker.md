# Docker

## Overview

Docker is a containerization tool used to package an application and its runtime dependencies into a consistent, portable unit.

For backend engineering, Docker is commonly used to make application environments repeatable across:

- local development
- testing
- staging
- production

## Why Docker Matters

One common backend problem is environment inconsistency.

The application may work on one machine but fail on another because of differences in:

- Node.js version
- installed system packages
- environment setup
- runtime dependencies

Docker helps reduce this inconsistency by defining the runtime environment explicitly.

## Core Idea

With Docker, the application runs inside a container built from an image.

That image defines:

- the base runtime
- system dependencies
- application files
- startup command

This gives the team a repeatable way to run the backend in different environments.

## Backend Relevance

Docker is especially useful for backend systems because they often depend on supporting services such as:

- PostgreSQL
- Redis
- message brokers

Docker and tools like `docker-compose` make it easier to run these dependencies together in development and testing.

## Common Benefits

- consistent runtime environment
- easier onboarding
- more reproducible deployments
- simpler local setup for supporting services
- cleaner separation between app and host machine

## Tradeoffs

Docker improves consistency, but it also introduces extra operational concepts:

- image builds
- container networking
- volumes
- environment injection
- resource limits

If used carelessly, container setup can become another source of confusion instead of removing it.

## NestJS Context

In a NestJS project, Docker is commonly used to:

- build the production app
- run the app in a container
- connect the app to database and cache containers
- standardize development and deployment workflows

## Common Mistakes

### 1. Treating Docker as a fix for weak application design

Docker helps package an app, but it does not fix bad configuration or poor dependency handling.

### 2. Building oversized or unclear images

Container images should be deliberate and focused on what the app actually needs.

### 3. Mixing development-only assumptions into production containers

Production containers should reflect production needs, not temporary local shortcuts.

## Practical Guidance

Use Docker to make runtime environments repeatable and explicit.

Understand what the container contains, how it starts, and what external services it needs.

## Summary

Docker is a foundational backend deployment tool because it helps package applications into consistent, portable runtime environments.
