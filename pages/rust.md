---
tags: computer-science programming-languages rust
---

# Rust

- [Rust](#rust)
  - [Types](#types)
  - [Standard library (`std`)](#standard-library-std)
  - [Variables](#variables)
  - [Associated Functions](#associated-functions)
  - [References](#references)
  - [Enums](#enums)
  - [`match` expression](#match-expression)
  - [Sources](#sources)

**Rust** is a programming language focused on delivering high performance with low-level access alongside an improved developer experience compared to existing low-level languages like C and C++.

- runs very fast
- prevents memory leaks and segmentation faults
- guarantees thread safety
- stresses performance and correctness

Can be compiled down to [[WebAssembly]] for use in [[client-side-rendering|client-side]] web applications.

## Types

Rust has a strong, static type system. However, it also has type inference.

Number types:

- `i32`, a 32-[[bit]] number
- `u32`, an unsigned 32-bit number
  - useful for small, positive numbers
- `i64`, a 64-bit number

## Standard library (`std`)

Rust's standard library has many useful packages:

- `std::io` (input/output)

Rust imports some packages automatically into every Rust program in the _prelude_.

- kept small as possible
- contains things used in every Rust program, like _traits_

## Variables

See: [[variables-rust|Variables (Rust)]]

## Associated Functions

```rust
let mut guess = String::new();
```

The `::` syntax means that `new` is an _associated function_
of the `String` type. The `new` function creates a new, empty string. As a function, `new` is a common name across many types for a function that makes a new value of some kind.

## References

A **reference** is a way to let multiple parts of the code access one piece of data without needing to copy that data into memory multiple times.

- Rust makes it safe and easy to use references

References are indicated by a `&`.

## Enums

**Enumerations**, or just _enums_, are types with a fixed set of values, called _variants_.

Examples:

- `Result` types, with `Ok` and `Err` variants

## `match` expression

A `match` expression is made up of _arms_.

Each arm consists of a _pattern_, and the code that should be run if the value given to the beginning of the `match` expression fits that arm's pattern.

- Rust takes the value given to `match` and looks through each arm's pattern in turn
- the `match` expression _returns_ a value
- for error handling, using `match` instead of `expect` is one way of moving from crashing on an error to handling the error

Example:

```rust
let guess: u32 = match guess.trim().parse() {
    Ok(num) => num,
    Err(_) => continue,
};
```

## Sources

- <https://www.rust-lang.org>
- [The Rust Programming Language Ch. 2: Programming a Guessing Game](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html)
- [Rust in the Browser for JavaScripters: New Frontiers, New Possibilities](https://www.youtube.com/watch?v=ohuTy8MmbLc)
