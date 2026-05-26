# Error Handling

## Overview

Error handling is the practice of detecting, managing, and responding to failures in a controlled way.

In backend engineering, errors are normal. They happen because of:

- invalid input
- missing resources
- database failures
- network issues
- authentication problems
- unexpected bugs

A good backend does not assume errors will never happen. It is designed to handle them clearly and predictably.

## Why Error Handling Matters

If errors are handled poorly, a backend system becomes difficult to debug, unsafe for users, and unreliable in production.

Good error handling helps with:

- stability
- debugging
- consistent API behavior
- security
- maintainability

In practice, error handling is not only about catching exceptions. It is about making failure behavior explicit.

## Types of Errors in Backend Systems

### 1. Validation Errors

These happen when input data is wrong or incomplete.

Examples:

- missing required fields
- invalid email format
- negative quantity where only positive values are allowed

These are usually client-side mistakes, so the backend should return a clear response explaining what is wrong.

### 2. Business Logic Errors

These happen when the request is structurally valid, but violates application rules.

Examples:

- user already exists
- account is suspended
- order cannot be cancelled after shipment

These are not syntax problems. They are domain rule violations.

### 3. Infrastructure Errors

These happen when external systems fail.

Examples:

- database connection failure
- Redis unavailable
- third-party API timeout
- message broker failure

These often need logging, retries, or fallback behavior.

### 4. Programming Errors

These are mistakes in the code itself.

Examples:

- accessing a property on `undefined`
- wrong assumptions about returned data
- unhandled promise rejection
- logic bugs

These should be fixed in code, not hidden with weak error handling.

## Compile-Time vs Runtime Safety

TypeScript improves safety at compile time, but many backend errors happen at runtime.

Examples:

- a database query fails
- a request body is malformed
- an external service is down

TypeScript helps reduce mistakes in code, but it does not replace runtime error handling.

## Basic Error Handling in TypeScript

The main language feature for handling thrown errors is `try/catch`.

Example:

```ts
async function findUser(id: string) {
  try {
    return await userRepository.findById(id);
  } catch (error) {
    throw error;
  }
}
```

This allows code to:

- attempt an operation
- catch failures
- log them
- transform them
- rethrow them if needed

## Throwing Errors

When code detects a failure condition, it can throw an error.

Example:

```ts
function validateAge(age: number) {
  if (age < 18) {
    throw new Error('User must be at least 18 years old');
  }
}
```

Throwing an error is appropriate when execution should stop because the current operation cannot continue safely or correctly.

## Using Custom Errors

In larger systems, plain `Error` objects are often not enough.

Custom error classes make failures more explicit.

Example:

```ts
class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}
```

This helps separate different categories of failure, such as:

- not found
- unauthorized
- conflict
- validation failure

In backend systems, this improves both readability and error mapping.

## Error Handling in Async Code

Async code often fails through rejected Promises.

With `async/await`, these are usually handled with `try/catch`.

Example:

```ts
async function loadUser(id: string) {
  try {
    const user = await userRepository.findById(id);
    return user;
  } catch (error) {
    throw new Error('Failed to load user');
  }
}
```

This is one reason `async/await` is easier to manage than callback-based async code.

## Handling Errors Close to the Right Layer

A useful backend principle is to handle errors at the correct abstraction level.

### Low-level layers

Repository or infrastructure layers usually know:

- whether the database failed
- whether a query timed out
- whether a connection was unavailable

### Service layers

Service layers usually know:

- what the failure means in business terms
- whether a missing record should become a domain error
- whether an operation should be retried or rejected

### Controller or transport layers

Controllers usually know:

- which HTTP status should be returned
- what response shape the client should receive

If every layer handles errors badly or inconsistently, the system becomes hard to reason about.

## Error Handling in NestJS

NestJS provides structured tools for error handling.

Common ones include:

- `HttpException`
- built-in exceptions like `NotFoundException`
- exception filters
- validation pipes
- interceptors in some workflows

### Example

```ts
import { NotFoundException } from '@nestjs/common';

async findOne(id: string) {
  const url = await this.prisma.url.findUnique({
    where: { id },
  });

  if (!url) {
    throw new NotFoundException('URL not found');
  }

  return url;
}
```

This is better than returning unclear values such as `null` without explanation when the route contract expects a real resource.

## Consistent Error Responses

A backend API should expose errors in a consistent shape.

That usually includes:

- error message
- status code
- timestamp
- path
- optional error details

Consistency matters because:

- frontend clients can handle responses predictably
- logs are easier to correlate
- debugging becomes faster

## Logging Errors

Handling an error is not the same as logging it well.

Important failures should usually be logged with useful context, such as:

- request ID
- user ID
- operation name
- external dependency involved
- stack trace when appropriate

But logging should avoid exposing sensitive data such as:

- passwords
- tokens
- private personal data

## Avoid Leaking Internal Details

A backend should not expose raw internal errors directly to clients.

Bad example:

- database table name appears in the API response
- stack trace is returned in production
- internal query details are exposed

This is both a security and maintainability problem.

The client should receive a clean, controlled message. Internal details should stay in logs or monitoring systems.

## Fail Fast, but Fail Clearly

When input or state is invalid, it is usually better to fail early.

Examples:

- reject invalid request data immediately
- stop processing when required dependencies are missing
- return clear exceptions when resources are not found

This prevents confusion later in the execution flow.

## Common Error Handling Strategies

### 1. Validate Early

Catch bad input as early as possible.

In NestJS, DTO validation is commonly used for this.

### 2. Use Specific Exceptions

Prefer meaningful error types over generic failures where possible.

### 3. Map Internal Failures to Clear External Responses

The database may fail for one technical reason, but the API response should still be understandable to the client.

### 4. Log with Context

A short error message without context is often not enough in production.

### 5. Do Not Swallow Errors

If code catches an error and then silently ignores it, debugging becomes much harder.

### 6. Retry Carefully

Some infrastructure errors can be retried, but not every failure should be retried blindly.

Retries should be deliberate and bounded.

## Common Mistakes

### 1. Catching Errors Without Doing Anything Useful

This adds noise without improving behavior.

Example:

```ts
try {
  await doSomething();
} catch (error) {
  throw error;
}
```

If nothing is added, the `try/catch` may not be necessary.

### 2. Returning Ambiguous Failure Values

Returning `null`, `false`, or empty arrays without a clear contract can make calling code harder to reason about.

### 3. Throwing Generic Errors Everywhere

If every failure becomes `new Error('Something went wrong')`, the system loses important meaning.

### 4. Exposing Internal Details

Clients should not receive raw stack traces or infrastructure internals.

### 5. Ignoring Async Failures

Unhandled Promise rejections are a serious backend reliability problem.

## Practical Guidance for NestJS Backends

A practical approach is:

- validate input at the boundary
- use service logic to detect domain errors
- throw meaningful NestJS exceptions
- centralize formatting with exception filters when needed
- log operational failures with context
- keep internal details out of client responses

## Summary

Error handling is a core part of backend engineering, not a small cleanup step after writing the main logic.

Good error handling means:

- failures are expected
- errors are categorized clearly
- responses stay consistent
- logs remain useful
- internal details stay protected

In a NestJS backend, strong error handling makes the system easier to debug, safer to expose, and more reliable in production.
