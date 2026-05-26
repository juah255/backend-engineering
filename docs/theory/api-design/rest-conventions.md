# REST Conventions

## Overview

REST conventions are common design patterns for building HTTP APIs around resources.

They help make an API predictable for clients.

## Core Idea

In a REST-style API, endpoints usually represent resources such as:

- users
- orders
- products
- URLs

HTTP methods then express operations on those resources.

## Typical Method Meanings

- `GET` for reading
- `POST` for creating
- `PATCH` or `PUT` for updating
- `DELETE` for removing

## Why REST Conventions Matter

When APIs follow familiar conventions, they are easier to:

- learn
- document
- consume
- maintain

## Practical Guidance

Use nouns for resources, standard HTTP methods for actions, and consistent status codes and response shapes.

## Summary

REST conventions improve API consistency by aligning routes and methods with clear resource-oriented behavior.
