# Deployment and DevOps Basics

## Overview

Deployment and DevOps basics cover the practices needed to run a backend application reliably outside the development environment.

Writing backend code is only part of the job. The application also needs to be configured, packaged, started, observed, and maintained in a way that works in real environments.

## Why It Matters

A backend that works only on a local machine is not operationally complete.

Real systems need:

- repeatable setup
- environment-specific configuration
- safe deployment processes
- predictable runtime behavior
- operational visibility

Deployment and DevOps basics help turn code into a usable service.

## What This Area Includes

This area usually includes topics such as:

- Docker
- environment configuration
- CI/CD
- process management
- reverse proxies
- cloud deployment basics

At this stage, the goal is not deep platform engineering. The goal is to understand the foundations required to run and maintain a backend service properly.

## Backend Relevance

Backend engineers need working knowledge of deployment because operational problems often come from:

- missing environment variables
- bad container setup
- inconsistent environments
- startup failures
- configuration drift

Even if a dedicated infrastructure team exists, backend engineers still need to design applications that can be deployed safely.

## NestJS Context

For a NestJS application, deployment basics often involve:

- building the app for production
- providing environment variables safely
- packaging the app into a container
- connecting it to databases, caches, and other services
- running it with correct health and startup behavior

## Practical Guidance

Learn deployment and DevOps from the perspective of operational clarity:

- how the app starts
- what configuration it needs
- how environments differ
- how the app is packaged
- how failures are detected

## Summary

Deployment and DevOps basics are part of backend engineering because building the service and running the service are tightly connected in practice.
