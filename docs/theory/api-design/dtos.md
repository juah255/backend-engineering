# DTOs

## Overview

DTO stands for Data Transfer Object.

In NestJS, DTOs define the expected shape of data moving into or out of parts of the application, especially request payloads.

## Why DTOs Matter

DTOs help:

- make API contracts explicit
- improve validation
- separate transport models from database models
- keep request handling organized

## Backend Relevance

A request body should not be treated as an unstructured object.

DTOs give incoming data a defined contract, which improves readability and safety.

## Practical Guidance

Use DTOs for request bodies, query parameters when needed, and other transport-level contracts. Keep them focused on API input and output concerns.

## Summary

DTOs make backend contracts explicit and are a standard part of clean NestJS API design.
