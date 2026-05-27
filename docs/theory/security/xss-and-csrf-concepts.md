# XSS and CSRF Concepts

## Overview

XSS and CSRF are two different web security concepts that backend engineers need to understand, especially when building browser-facing systems.

- XSS means Cross-Site Scripting
- CSRF means Cross-Site Request Forgery

They are different threats and require different defenses.

## XSS Overview

XSS happens when untrusted content is treated as executable script in the browser.

This usually becomes possible when user-controlled input is rendered into HTML or page content without proper escaping or output handling.

## Why XSS Matters

XSS can allow an attacker to:

- run JavaScript in another user's browser
- steal session-related data
- perform actions as the victim user
- modify what the user sees

## Backend Relevance of XSS

Even though XSS executes in the browser, backend systems still influence the risk by:

- storing untrusted content
- returning unsafe HTML
- allowing dangerous rendering patterns

Backend engineers should understand how stored content may become dangerous later in frontend rendering.

## CSRF Overview

CSRF happens when a user's browser sends an unintended authenticated request to a site because the browser automatically includes credentials such as cookies.

The attacker does not need to read the response. The goal is to trigger an unwanted action.

## Why CSRF Matters

CSRF can cause:

- unauthorized state changes
- unwanted form submissions
- account actions performed without user intent

## Backend Relevance of CSRF

CSRF mainly matters in systems where authentication depends on automatically sent browser credentials, especially cookies.

Token-based APIs that do not rely on automatic browser credential sending are affected differently, but browser-based apps still need clear design decisions.

## Basic Defense Concepts

### XSS Defenses

- escape or encode untrusted output correctly
- avoid unsafe HTML rendering
- sanitize user-generated content where needed
- use browser security controls such as content policies where appropriate

### CSRF Defenses

- CSRF tokens
- same-site cookie strategy
- careful handling of state-changing requests
- origin or referer validation in some designs

## Common Mistakes

### 1. Treating XSS and CSRF as the same problem

They are different threats with different mechanics.

### 2. Assuming the backend can ignore browser security risks

Backend behavior often affects how exposed the application is.

### 3. Forgetting that stored user content may become dangerous later

Stored XSS is especially important in applications that show user-generated content.

## Practical Guidance

Understand how authentication, rendering, and browser behavior interact.

Security design should match whether the application is cookie-based, token-based, or a mix of both.

## Summary

XSS and CSRF are core web security concepts that backend engineers must understand because API behavior, credential design, and stored content all influence the risk.
