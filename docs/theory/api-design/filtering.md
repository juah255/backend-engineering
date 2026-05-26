# Filtering

## Overview

Filtering lets clients narrow results based on specific criteria.

It is commonly used on list endpoints.

## Examples

- users by role
- orders by status
- products by category
- URLs by active state

## Why It Matters

Filtering makes APIs more useful and reduces unnecessary data transfer.

It also allows clients to request data closer to their actual needs.

## Design Considerations

- keep filter names clear
- document supported fields
- validate filter inputs
- avoid exposing unbounded query complexity

## Summary

Filtering improves API usefulness by allowing clients to request targeted subsets of data.
