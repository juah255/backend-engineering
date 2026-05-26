# Route Design

## Overview

Route design is the practice of choosing URL paths that clearly represent backend resources and actions.

Good route design improves clarity for both developers and clients.

## Good Route Characteristics

- resource-oriented
- consistent
- predictable
- readable

## Common Principles

- use nouns rather than verbs
- keep naming consistent
- reflect resource hierarchy only when it is meaningful
- avoid deeply nested routes unless the relationship is strong

## Examples

Good:

- `/users`
- `/users/:id`
- `/users/:id/orders`

Less clear:

- `/getUsers`
- `/createUser`

## Summary

Good route design makes the API easier to understand and reduces confusion about what each endpoint represents.
