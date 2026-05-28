# CI/CD

## Overview

CI/CD stands for Continuous Integration and Continuous Delivery or Continuous Deployment.

It refers to the practices and automation used to build, test, and release software in a repeatable way.

For backend engineering, CI/CD helps move code from development into running environments with less manual risk.

## Continuous Integration

Continuous Integration, or CI, is the practice of frequently merging code changes and automatically verifying them.

Typical CI steps include:

- installing dependencies
- running lint checks
- running tests
- building the application

The goal is to catch problems early, before broken code reaches shared branches or deployment stages.

## Continuous Delivery and Continuous Deployment

These two terms are related but not identical.

### Continuous Delivery

The code is kept in a deployable state, and release to an environment is a controlled step that can be triggered when desired.

### Continuous Deployment

Changes that pass the pipeline are automatically released without a manual approval step.

The difference is mainly whether deployment to the target environment is automatic or still explicitly approved.

## Why CI/CD Matters

Without CI/CD, releases often depend on manual steps such as:

- running tests by hand
- building artifacts locally
- copying files manually
- remembering deployment commands

This creates inconsistency and increases the chance of human error.

CI/CD improves:

- repeatability
- speed of feedback
- deployment safety
- release confidence

## Common Pipeline Stages

A backend CI/CD pipeline often includes:

- source checkout
- dependency installation
- linting
- test execution
- build step
- artifact or container creation
- deployment step

More mature pipelines may also include:

- migration checks
- security scanning
- environment-specific approvals
- rollback procedures

## Backend Relevance

For backend systems, CI/CD is especially important because deployment often affects:

- APIs used by clients
- database schema compatibility
- environment variables
- service availability
- background workers

A weak release process can break production even if the code itself is mostly correct.

## NestJS Context

For a NestJS application, CI/CD commonly automates:

- `pnpm install`
- linting
- unit and e2e tests
- production build
- Docker image build when containers are used
- deployment to staging or production

If the application depends on Prisma or database migrations, the deployment process also needs to account for schema changes carefully.

## Benefits

- faster feedback on code quality
- fewer manual deployment mistakes
- more predictable releases
- easier collaboration across a team
- clearer path from commit to running service

## Risks and Tradeoffs

CI/CD improves delivery discipline, but it is not automatically safe just because it is automated.

Risks include:

- automated release of bad changes if tests are weak
- environment drift if deployment logic is inconsistent
- migration risk if schema changes are not coordinated
- false confidence from pipelines that check only superficial things

Automation increases leverage, so poor automation can fail at scale.

## Common Mistakes

### 1. Treating CI as only a test runner

CI should verify that the application is buildable and release-ready, not only that some tests pass.

### 2. Automating deployment without strong validation

If the test and build pipeline is weak, fully automatic deployment may increase production risk.

### 3. Ignoring rollback and failure handling

Deployment is not only about shipping changes. It is also about recovering when a release goes wrong.

### 4. Separating application and migration strategy poorly

Schema changes and application releases need coordination.

## Practical Guidance

Start with a simple pipeline that reliably installs dependencies, runs checks, and builds the app.

Then add deployment automation in a controlled way, with clear environment handling and rollback awareness.

## Summary

CI/CD is a core backend engineering practice because it turns code integration and release into a repeatable, testable, and safer operational process.
