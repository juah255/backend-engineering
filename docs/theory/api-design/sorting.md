# Sorting

## Overview

Sorting controls the order in which results are returned.

It is a common requirement for list endpoints.

## Common Examples

- newest first
- oldest first
- alphabetical order
- price ascending or descending

## Why It Matters

Sorting affects both usability and predictability.

Clients often need a stable order to display or process data correctly.

## Design Considerations

- define allowed sort fields
- define allowed directions
- validate input
- ensure database indexes support common sorting patterns when necessary

## Summary

Sorting is a standard API capability that improves list endpoint usefulness and predictability.
