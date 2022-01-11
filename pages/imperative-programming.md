---
tags:
---

# Imperative programming

Imperative programming is about

- modifying mutable variables
- using assignments
- and control structures such as if-then-else, loops, break, cntinue, return

The most common informal way to understand imperative programs is as instruction sequences for a Von Neumann computer.

e.g. a processor and memory, with a bus linking the two (which has about a word length's worth of memory)

There's a strong correspondence between

- mutable variables and memory cells
- variable dereferences and load instructions
- variable assignments and store instructions
- control structures and jumps

Problem: scaling up. How can we avoid conceptualizing programs word by word?

- ex. Fortran
- in the end, pure imperative programming is limited by the "von Neumann" bottleneck
  - "One tends to conceptualize data structures word-by-word"
- We need other techniques for defining high-level abstractions such as collections, polynomials, geometric shapes, strings, and documents
- ideally: develop _theories_ of collections, shapes, strings, etc.

## Sources

-
