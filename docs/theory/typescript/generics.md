# Generics

## Overview

Generics in TypeScript let you write code that works with different types while still preserving type safety.

Instead of writing separate logic for each data type, you can write one reusable structure and let TypeScript keep track of the exact type being used.

## Why Generics Matter in Backend Engineering

Backend systems repeat the same patterns across many different kinds of data:

- API response wrappers
- Pagination results
- Repository methods
- Service return types
- Utility functions
- Event payload handlers

Without generics, reusable code often becomes either:

- too specific, so it cannot be reused well
- too loose, usually with `any`, so type safety is lost

Generics solve that by making code reusable without giving up correctness.

## Basic Idea

A generic allows a type to be passed in as a parameter.

Example:

```ts
function identity<T>(value: T): T {
  return value;
}
```

Here, `T` is a type parameter. It means:

- the function accepts a value of some type `T`
- the function returns that same type `T`

If you pass a string, the return type is string.
If you pass a number, the return type is number.

## Main Purpose of Generics

Generics are used to build reusable code that still knows the shape of the data it handles.

This is important in backend code because the same workflow often applies to many entities such as:

- users
- orders
- products
- payments

## Generic Functions

Generic functions are functions that work with multiple types while preserving the relationship between input and output.

### Example

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}
```

This means:

- if `value` is a number, return type is `number[]`
- if `value` is a string, return type is `string[]`

### Backend Use Case

Generic utility functions are useful for:

- formatting responses
- transforming data
- mapping database results
- building common helpers

## Generic Interfaces

Interfaces can also use generics.

This is useful when an object structure stays the same, but one field changes depending on the data type.

### Example

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
```

This lets the same response shape work for many resources:

- `ApiResponse<User>`
- `ApiResponse<Order>`
- `ApiResponse<Product[]>`

### Backend Relevance

This pattern is common in:

- API response wrappers
- paginated responses
- service result objects
- shared transport structures

## Generic Classes

Classes can also be generic.

### Example

```ts
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}
```

### Backend Relevance

Generic classes are useful when writing:

- repositories
- caches
- in-memory stores
- reusable infrastructure components

In real NestJS applications, you may not always create a fully generic repository layer, but the idea appears often in shared abstractions.

## Generic Type Aliases

Type aliases can also accept generic parameters.

### Example

```ts
type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
};
```

This allows reusable pagination structures such as:

- `PaginatedResult<User>`
- `PaginatedResult<Order>`

## Constraints in Generics

Sometimes a generic should not accept every possible type. You may want to require that the type has certain properties.

This is done with `extends`.

### Example

```ts
function getId<T extends { id: string }>(item: T): string {
  return item.id;
}
```

This means `T` must be an object with an `id` field of type `string`.

### Why This Matters

Constraints let you keep flexibility while still enforcing the minimum structure your logic depends on.

In backend systems, this is useful when:

- an entity must have an `id`
- a payload must include a timestamp
- a service requires a specific field to exist

## Multiple Generic Parameters

Generics can use more than one type parameter.

### Example

```ts
type KeyValuePair<K, V> = {
  key: K;
  value: V;
};
```

This is useful when different parts of a structure vary independently.

### Backend Use Cases

- key-value caches
- mapping utilities
- event name and payload relationships
- repository query result structures

## Generics and Reusability

Generics improve reusability by allowing the same code to work across multiple domains without duplicating logic.

That matters in backend engineering because large codebases often repeat the same structural patterns:

- fetching records
- wrapping responses
- validating service results
- building paginated data

Generics make these patterns reusable while preserving exact types.

## Generics vs `any`

This is one of the most important distinctions.

### `any`

`any` turns off type safety.

If a function uses `any`, TypeScript stops checking whether the value is being used correctly.

### Generics

Generics keep type information intact.

They allow flexibility without losing the connection between input and output types.

### Example

Bad:

```ts
function identity(value: any): any {
  return value;
}
```

Better:

```ts
function identity<T>(value: T): T {
  return value;
}
```

The second version is reusable and still safe.

## Generics in NestJS Context

In NestJS, generics often appear in:

- response DTO wrappers
- base service patterns
- interceptors
- repository abstractions
- utility helpers
- custom pagination structures

A common example is a reusable paginated response or standard API response format.

## Common Mistakes

### 1. Using generics when a concrete type is enough

If code only ever handles one exact type, generics add complexity without benefit.

### 2. Replacing clear domain modeling with over-abstract design

Too many generic layers can make a backend harder to read. Reuse is useful, but only when the abstraction matches real repeated patterns.

### 3. Using `any` inside generic code

If the inside of a generic implementation falls back to `any`, much of the value of generics is lost.

### 4. Missing constraints

If logic depends on a property like `id`, but the generic does not enforce that structure, the type definition is incomplete.

## Practical Guidance

Use generics when:

- the same logic must work for many data types
- the structure is reusable
- type relationships must be preserved

Do not use generics when:

- the code handles only one domain type
- the abstraction makes the code harder to understand
- the generic is introduced only to look more advanced

## Summary

Generics let TypeScript code stay both reusable and type-safe.

In backend engineering, they are especially useful for:

- response wrappers
- pagination structures
- repositories
- shared utilities
- infrastructure abstractions

The real value of generics is not abstraction by itself. The value is writing reusable backend code without losing clarity about what data is flowing through the system.
