# Types, Interfaces, and Enums

## Overview

TypeScript adds a type system on top of JavaScript. In backend engineering, this helps make APIs, service logic, and data flow easier to understand and safer to maintain.

Three common building blocks are:

- `type`
- `interface`
- `enum`

They are related, but they serve different purposes.

## Why They Matter in Backend Engineering

Backend systems deal with structured data all the time:

- HTTP request bodies
- Query parameters
- Database records
- Service responses
- Configuration objects
- Authentication payloads

Without clear types, these structures become harder to reason about. Types, interfaces, and enums help define the shape of data and reduce ambiguity across modules.

## 1. Types

### Definition

A `type` is a way to define a custom TypeScript type. It can describe:

- primitive values
- object shapes
- unions
- intersections
- tuples
- function signatures

### Purpose

`type` is flexible. It is useful when you want to combine or transform types, or when the structure is more than just a plain object contract.

### Common Uses

- Defining API response shapes
- Creating union types such as status values
- Combining multiple types together
- Representing function signatures

### Key Idea

A `type` is often preferred when the shape is derived, composed, or needs unions/intersections.

### Example

```ts
type UserRole = 'admin' | 'editor' | 'user';

type User = {
  id: string;
  email: string;
  role: UserRole;
};
```

### Advantages

- Very flexible
- Good for composition
- Can represent unions and intersections cleanly

### Limitation

`type` does not support declaration merging the way `interface` does.

## 2. Interfaces

### Definition

An `interface` defines the structure of an object. It is mainly used to describe contracts that objects, classes, or function parameters should follow.

### Purpose

`interface` is useful when modeling entities and contracts that are expected to be extended or implemented.

### Common Uses

- DTO-like object structures
- Service contracts
- Class implementations
- Shared object shapes across modules

### Key Idea

An `interface` is often preferred when describing object-oriented contracts or stable object shapes in an application.

### Example

```ts
interface CreateUserDto {
  email: string;
  password: string;
}

interface UserService {
  create(data: CreateUserDto): Promise<void>;
}
```

### Advantages

- Clear object contract
- Good for extension
- Works naturally with classes
- Supports declaration merging

### Limitation

`interface` is less flexible than `type` for unions, tuples, and more advanced compositions.

## 3. Enums

### Definition

An `enum` is a TypeScript feature used to define a fixed set of named constants.

### Purpose

Enums are useful when a value must come from a small, controlled list of options.

### Common Uses

- User roles
- Order status
- Payment state
- Environment labels
- Access levels

### Example

```ts
enum OrderStatus {
  Pending = 'PENDING',
  Paid = 'PAID',
  Shipped = 'SHIPPED',
  Cancelled = 'CANCELLED',
}
```

### Why Enums Can Help

- Improves readability
- Prevents magic strings spread across the codebase
- Makes allowed values explicit

### Tradeoff

In many modern TypeScript codebases, string union types are often preferred over enums because they are lighter and simpler in some cases.

Example:

```ts
type OrderStatus = 'PENDING' | 'PAID' | 'SHIPPED' | 'CANCELLED';
```

So enums are useful, but they are not always the best default choice.

## Type vs Interface

Both can describe object shapes, so the difference is practical more than theoretical in many cases.

### Use `interface` when:

- You are defining a clear object contract
- You expect extension through `extends`
- You want classes to implement that contract
- You want a conventional structure for domain models or service contracts

### Use `type` when:

- You need unions
- You need intersections
- You need tuples
- You are composing multiple types
- You want aliases for primitive or derived types

## Enum vs Union Type

### Use `enum` when:

- You want named constants grouped together
- You want explicit reusable members
- The team prefers enum-based domain values

### Use a union type when:

- You only need a fixed set of string values
- You want simpler TypeScript output and usage
- You want to avoid extra enum syntax

## Practical Backend Guidance

In a NestJS backend, a reasonable approach is:

- Use `interface` for object contracts and service boundaries
- Use `type` for unions, derived shapes, and flexible compositions
- Use `enum` only when named constants improve clarity enough to justify it

## Common Mistakes

### 1. Treating types as runtime validation

TypeScript types exist only at compile time. They do not validate incoming HTTP data at runtime.

In NestJS, runtime validation is typically handled with DTO classes and validation libraries such as `class-validator`.

### 2. Overusing enums

Enums can be useful, but some teams use them where a string union would be simpler.

### 3. Mixing unclear conventions

If one part of the codebase uses enums for statuses and another uses string unions for the same kind of values, the system becomes inconsistent.

### 4. Using interfaces when composition is the real need

If the real requirement is union or intersection modeling, `type` is usually the better tool.

## Summary

- `type` is flexible and strong for composition
- `interface` is strong for object contracts and extension
- `enum` represents fixed named constants

In backend engineering, the main goal is not just syntax knowledge. The real goal is to model data clearly, keep contracts understandable, and reduce mistakes across modules.
