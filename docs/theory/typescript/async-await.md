# Async/Await

## Overview

`async/await` is the main TypeScript and JavaScript pattern for working with asynchronous operations in a readable way.

Backend applications constantly deal with operations that do not complete immediately, such as:

- database queries
- HTTP requests
- file access
- message queues
- background jobs

`async/await` makes this code easier to read and maintain than deeply chained callbacks or long promise chains.

## Why It Matters in Backend Engineering

Most backend logic depends on I/O operations. These operations take time and should not block the whole application while waiting.

Examples:

- fetching a user from the database
- calling another service
- saving a record
- reading configuration from disk

A backend engineer needs to understand how asynchronous code works, because almost every controller, service, and repository layer depends on it.

## The Core Idea

`async/await` is built on top of Promises.

### `async`

The `async` keyword marks a function as asynchronous.

An `async` function always returns a Promise.

Example:

```ts
async function getMessage(): Promise<string> {
  return 'hello';
}
```

Even though the function returns a string directly, TypeScript wraps it in a Promise because the function is marked `async`.

### `await`

The `await` keyword pauses execution inside an `async` function until a Promise resolves or rejects.

Example:

```ts
async function getUser() {
  const user = await userRepository.findById('123');
  return user;
}
```

This makes asynchronous code read in a top-to-bottom style, which is much easier to follow.

## Basic Flow

Typical flow:

1. mark the function as `async`
2. call a Promise-returning operation
3. use `await` to get the resolved value
4. return the result or continue processing

Example:

```ts
async function createUser(data: CreateUserDto) {
  const existingUser = await userRepository.findByEmail(data.email);

  if (existingUser) {
    throw new Error('User already exists');
  }

  const user = await userRepository.create(data);
  return user;
}
```

## Why Async/Await Is Better Than Callbacks

Older JavaScript code often used callbacks.

That style becomes hard to read when multiple steps depend on each other.

Example problems with callbacks:

- nested logic
- harder error handling
- reduced readability

`async/await` improves this by making control flow look more like synchronous code while still remaining non-blocking.

## Why Async/Await Is Better Than Long Promise Chains

Promise chains are valid, but large chains become harder to follow when the logic grows.

Example:

```ts
function getUserProfile(userId: string) {
  return userRepository.findById(userId).then((user) => {
    return profileRepository.findByUserId(user.id);
  });
}
```

With `async/await`, the same logic is often clearer:

```ts
async function getUserProfile(userId: string) {
  const user = await userRepository.findById(userId);
  const profile = await profileRepository.findByUserId(user.id);
  return profile;
}
```

## Error Handling with Async/Await

One of the biggest advantages of `async/await` is that it works naturally with `try/catch`.

Example:

```ts
async function getUserById(id: string) {
  try {
    const user = await userRepository.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
}
```

In backend applications, this matters because many async operations can fail:

- database connection errors
- validation failures
- network timeouts
- missing records

In NestJS, errors are often converted into HTTP exceptions or handled by exception filters.

## Important Rule: `await` Only Inside `async`

You can only use `await` inside a function marked `async`, unless the environment supports top-level await in that file context.

For normal backend application code, the practical rule is simple:

- if you use `await`, the function should be `async`

## Sequential vs Parallel Execution

This is an important backend concept.

### Sequential

If two operations depend on each other, they should run one after another.

Example:

```ts
const user = await userRepository.findById(userId);
const profile = await profileRepository.findByUserId(user.id);
```

The second query depends on the first one.

### Parallel

If two operations are independent, they can run at the same time with `Promise.all`.

Example:

```ts
const [user, settings] = await Promise.all([
  userRepository.findById(userId),
  settingsRepository.getGlobalSettings(),
]);
```

This is often faster than awaiting them one by one.

### Why This Matters

A common mistake is writing multiple `await` calls sequentially even when the operations are independent. That slows down request handling.

## Async/Await and Return Types

An `async` function always returns a Promise, so the return type should usually reflect that.

Example:

```ts
async function findUser(id: string): Promise<User | null> {
  return userRepository.findById(id);
}
```

This makes the contract clear to anyone calling the function.

## Async/Await in NestJS

In NestJS, `async/await` appears everywhere:

- controllers
- services
- guards
- interceptors
- custom providers
- database access

Example in a service:

```ts
async findOne(id: string) {
  const url = await this.prisma.url.findUnique({
    where: { id },
  });

  return url;
}
```

Example in a controller:

```ts
@Get(':id')
async findOne(@Param('id') id: string) {
  return await this.urlsService.findOne(id);
}
```

In many cases, the controller can simply return the Promise directly, but using `async/await` is still common when extra processing is needed.

## Common Mistakes

### 1. Forgetting to use `await`

If you forget `await`, you may accidentally work with a Promise instead of the resolved value.

This often causes logic bugs.

### 2. Using `await` when not needed

Sometimes people write:

```ts
return await this.userService.findAll();
```

If no extra error handling or transformation is needed, returning the Promise directly is usually enough.

### 3. Running independent operations sequentially

This hurts performance.

Use `Promise.all` when tasks do not depend on each other.

### 4. Poor error handling

Using `await` does not remove the need to handle rejected Promises correctly.

### 5. Blocking thinking

`await` pauses the current function, but it does not block the entire Node.js process. This distinction matters.

Backend code remains asynchronous overall.

## Practical Guidance

Use `async/await` when:

- reading from the database
- calling external APIs
- handling file operations
- coordinating multiple async steps

Be careful about:

- whether operations are sequential or parallel
- whether errors are handled properly
- whether the function return type is clearly defined

## Summary

`async/await` is the standard way to manage asynchronous backend code in TypeScript and NestJS.

Its main value is clarity:

- asynchronous logic becomes easier to read
- error handling becomes cleaner
- service and controller code becomes easier to maintain

In backend engineering, understanding `async/await` is essential because almost every real request depends on asynchronous work.
