# Transactions

## Overview

A transaction is a group of database operations that should succeed or fail as one unit.

## Why Transactions Matter

They protect data consistency when multiple related changes happen together.

Examples:

- creating an order and reducing stock
- transferring money between accounts
- creating related records in one workflow

If one step fails, the system should not keep partial changes.

## Core Idea

Transactions provide atomic behavior:

- all changes commit
- or all changes roll back

## Summary

Transactions are essential when backend workflows involve multiple dependent database operations.
