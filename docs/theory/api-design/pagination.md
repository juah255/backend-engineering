# Pagination

## Overview

Pagination is the practice of returning large result sets in smaller chunks.

It prevents APIs from sending too much data in one response.

## Why It Matters

Pagination improves:

- performance
- response size control
- client usability
- database efficiency

## Common Approaches

- page-based pagination
- limit-offset pagination
- cursor-based pagination

## Tradeoffs

Offset pagination is simple, but cursor-based pagination is often better for large or frequently changing datasets.

## Summary

Pagination is essential for scalable API design whenever list endpoints can grow beyond small datasets.
