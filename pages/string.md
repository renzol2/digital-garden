---
tags: cs-374 computer-science strings theory
---

# String

## Theory

A **string** (or word) is a finite sequence of zero or more symbols from an [[alphabet]] $\Sigma$. Formally, a string $w$ over $\Sigma$ is defined recursively as either

- the empty string, denoted by $\epsilon$
- an ordered pair $(a,x)$ where $a$ is a symbol in $\Sigma$ and $x$ is a string over $\Sigma$
  - the ordered pair $(a,x)$ is normally written as $a \cdot x$ or simply $ax$

For simplicity, explicit strings are written as sequences of symbols instead of nested ordered pairs:

- the difference between $\text{STRING}$ and $(S,(T,(R,(I,(N(G,\epsilon)))))$.

The set of all strings over $\Sigma$ is denoted $\Sigma^*$ (pronounced "sigma star").

- every element of $\Sigma^*$ is a _finite_ string
- $\Sigma^*$ itself is an infinite set containing strings of every possible _finite_ length

There are two natural functions for strings:

1. [[string-length|the length of a string]]
2. concatenating two strings together

Ultimately, the input and output of any [[algorithm]] must be representable as a finite string of symbols - the raw contents of some contiguous portion of the computer's memory. *Reasoning about computation requires reasoning about strings*.

## Sources

- [Algorithms: Strings by Jeff Erickson](https://courses.engr.illinois.edu/cs374/fa2021/A/notes/models/01-strings.pdf)
