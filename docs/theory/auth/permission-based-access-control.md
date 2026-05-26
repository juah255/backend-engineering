# Permission-Based Access Control

## Overview

Permission-Based Access Control grants access based on specific permissions rather than only broad roles.

Examples:

- `user.read`
- `user.update`
- `order.cancel`

## Why It Matters

This model gives more granular control than simple role-based systems.

It is useful when access requirements are detailed or vary significantly across users.

## Benefit

Permissions model real actions more precisely than broad role names.

## Tradeoff

Permission systems are more flexible, but they are also more complex to design and manage.

## Summary

Permission-based access control is a stronger fit than simple RBAC when an application needs detailed, action-level authorization rules.
