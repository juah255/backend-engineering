# Indexes

## Overview

An index is a database structure that improves query speed for specific lookups or sorting patterns.

## Why Indexes Matter

Without indexes, the database may need to scan large parts of a table to answer queries.

Indexes help performance, especially for:

- frequent lookups
- sorting
- filtering
- joins

## Tradeoff

Indexes improve reads, but they also add storage cost and can slow writes because the index must be updated.

## Practical Guidance

Index fields that are commonly used in `WHERE`, `JOIN`, and `ORDER BY` operations, but do not add indexes without a reason.

## Summary

Indexes are one of the most important performance tools in relational databases.
