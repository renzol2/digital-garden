---
tags: rust programming-languages computer-science
---

# Variables (Rust)

- [Variables (Rust)](#variables-rust)
  - [Immutability](#immutability)
  - [Constants](#constants)
  - [Shadowing](#shadowing)
  - [Sources](#sources)

## Immutability

Variables in [[Rust]] are _immutable_ by default. You must _explicitly_ declare a variable to be mutable.

- explicitly declaring mutability allows programmers to more often write code in ways that take advantage of Rust's safety and easy concurrency
- compile-time errors when trying to change the value of immutable variables helps avoid bugs

```rust
let apples = 5;  // immutable
let mut bananas = 5;  // mutable
```

## Constants

**Constants** are variables with values bound to a name that are _never_ allowed to change - they're always immutable.

- can be declared in any scope, including the global scope
- can only be set to a constant expression, not the result of a value that can only be computed at runtime

```rust
const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
```

Constants are valid for the entire time a program runs within its declared scope.

- naming hardcoded values throughout a program is useful to convey meaning
- helps reusability of values across a program

## Shadowing

We can _shadow_ variables (even immutable ones!) by declaring the variable again, oftentimes with a different type. Shadowing is often used to convert a value from one type to another.

- shadowing effectively creates a new variable, just under the same name
- lets us reuse variable names rather than forcing us to create two unique variables, causing confusion

```rust
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {}", x);
    }

    println!("The value of x is: {}", x);
}
```

Output:

```text
The value of x in the inner scope is: 12
The value of x is: 6
```

## Sources

- <https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html>
