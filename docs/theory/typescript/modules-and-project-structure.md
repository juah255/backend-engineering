# Modules and Project Structure

## Overview

Modules and project structure define how code is organized in a backend application.

In small programs, file layout may not seem very important. In backend systems, that changes quickly. As features grow, poor structure creates confusion, duplication, and tight coupling.

Good structure makes the codebase easier to:

- navigate
- understand
- test
- extend
- maintain

In NestJS, modules are both a TypeScript and framework-level concept, so this topic matters at more than one layer.

## Why This Matters in Backend Engineering

Backend applications usually contain many different responsibilities:

- request handling
- business logic
- database access
- validation
- authentication
- configuration
- error handling
- integration with external services

If these concerns are mixed together without clear boundaries, the system becomes harder to work with over time.

Project structure is not only about where files are placed. It reflects how the system is divided into responsibilities.

## TypeScript Modules

In TypeScript, a module is a file that exports values, types, classes, or functions, and can import them into other files.

Example:

```ts
export interface User {
  id: string;
  email: string;
}
```

Another file can import it:

```ts
import { User } from './user.interface';
```

This allows code to be split into smaller, focused units instead of being written in one large file.

## Why TypeScript Modules Help

TypeScript modules help by:

- separating concerns
- enabling reuse
- reducing duplication
- making dependencies explicit

If a file imports something, that dependency is visible. This improves clarity and makes architectural boundaries easier to track.

## Project Structure as a Design Decision

A project structure should support the way the backend is built.

A weak structure often leads to:

- large files with mixed responsibilities
- business logic inside controllers
- duplicated validation or utility logic
- unclear ownership of code
- hard-to-follow dependencies

A better structure groups related code and keeps each part of the system focused.

## Common Backend Layers

Most backend applications have several common layers, even if names differ.

### 1. Controller Layer

This handles incoming requests and outgoing responses.

Responsibilities often include:

- routing
- reading parameters and body data
- calling services
- returning results

Controllers should usually stay thin. They should not contain heavy business logic.

### 2. Service Layer

This contains business logic.

Examples:

- deciding whether a user can perform an action
- checking rules before saving data
- coordinating multiple repositories or external services

Services are often the core of backend behavior.

### 3. Data Access Layer

This layer interacts with the database or persistence system.

Examples:

- Prisma queries
- repository methods
- transaction handling

This keeps database-specific logic away from controller code.

### 4. Shared or Common Layer

This includes code reused across features.

Examples:

- exception filters
- interceptors
- utility functions
- guards
- constants

Shared code is useful, but it should stay truly shared. Teams often misuse `common` directories as a place for unrelated leftovers.

## NestJS Modules

In NestJS, a module is a class decorated with `@Module()` that groups related parts of the application.

A module can include:

- controllers
- providers
- imports
- exports

Example idea:

- `UsersModule`
- `AuthModule`
- `UrlsModule`
- `PrismaModule`

Each module should represent a meaningful application boundary.

## Why NestJS Modules Are Important

NestJS modules help manage:

- dependency injection boundaries
- feature grouping
- reusability
- application composition

They make it possible to organize the system by feature instead of treating the whole backend as one flat collection of files.

## Feature-Based Structure

A common and practical structure in NestJS is feature-based organization.

That means grouping files by business area instead of only by technical type.

Example:

```text
src/
  auth/
    auth.module.ts
    auth.controller.ts
    auth.service.ts
  users/
    users.module.ts
    users.controller.ts
    users.service.ts
    dto/
  prisma/
    prisma.module.ts
    prisma.service.ts
```

This structure is often easier to scale because all files for one feature stay close together.

## Layer-Based Structure

Another style is layer-based organization.

Example:

```text
src/
  controllers/
  services/
  repositories/
  dto/
  entities/
```

This can work in small applications, but as the codebase grows, feature-related files get spread across many folders. That usually makes navigation slower.

For most NestJS backend projects, feature-based structure is the more practical default.

## Good Structure Principles

### 1. Group by responsibility

Files that work together should stay close together.

### 2. Keep boundaries clear

Controllers should not become service layers, and services should not become database adapters.

### 3. Prefer thin controllers

Request handling belongs in controllers. Business rules belong elsewhere.

### 4. Avoid god folders

Directories like `utils`, `helpers`, or `common` often grow without discipline if everything is pushed into them.

### 5. Make dependencies explicit

Imports should reflect real relationships. If files depend on each other in confusing ways, the structure is probably weak.

### 6. Organize for growth

The right structure is one that still makes sense after several new features are added.

## DTOs and Supporting Files

Supporting files should usually stay near the feature they belong to.

Examples:

- `users/dto/create-user.dto.ts`
- `auth/strategies/jwt.strategy.ts`
- `urls/dto/create-url.dto.ts`

This keeps the feature self-contained and easier to scan.

## Configuration and Infrastructure

Some parts of a backend do not belong to one feature, but to the whole application.

Examples:

- database setup
- environment validation
- logging configuration
- caching setup
- global exception filters

These are often placed in directories such as:

- `config/`
- `prisma/`
- `common/`
- `infrastructure/`

The exact names matter less than keeping responsibilities consistent.

## Project Structure and Maintainability

A clean structure improves maintainability because it reduces the cost of understanding change.

When a developer needs to add a feature, they should be able to answer:

- where should this code go
- which module owns this behavior
- what dependencies already exist
- what layer is responsible for this rule

If the structure does not make those answers clear, the project will become slower to evolve.

## Common Mistakes

### 1. Putting business logic in controllers

This makes controllers large and harder to test.

### 2. Creating very broad shared folders

When everything goes into `common`, `shared`, or `utils`, the folder loses meaning.

### 3. Organizing only for the current size

A structure that works for two files may fail badly for twenty.

### 4. Mixing infrastructure and domain logic

Database queries, business rules, and HTTP concerns should not all live in the same place.

### 5. Overengineering early

Not every small project needs a deep architecture. Structure should be clear, but not artificially complex.

## Practical Guidance for NestJS

A practical starting point for a NestJS backend is:

- organize by feature
- keep controllers thin
- place business logic in services
- isolate database access clearly
- keep DTOs and related files near the feature
- separate app-wide infrastructure from feature logic

This gives a codebase that is simple enough for learning but strong enough to scale.

## Summary

Modules and project structure are fundamental to backend engineering because they shape how the application grows.

In TypeScript, modules help split code into explicit units.

In NestJS, modules help group related functionality and define application boundaries.

The goal of a good structure is not just cleanliness. The goal is to make backend code easier to understand, safer to extend, and more maintainable over time.
