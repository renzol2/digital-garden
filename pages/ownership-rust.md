---
tags: rust programming-language computer-science
---

# Ownership (Rust)

In [[Rust]], **ownership** involves a set of rules regarding memory:

- Each value in Rust has a variable that's called its _owner_
- There can only be one owner at a time
- When the owner goes out of scope, the value will be dropped

## Scope

```rust
{   // s is not valid here, it’s not yet declared
    let s = String::from("hello");
    // s is valid from this point forward

    // do stuff with s
}
// this scope is now over, and s is no longer valid
```

Rust works similarly to other languages in regards to scope:

- When a variable comes _into scope_, it is valid
- It remains valid until it goes _out of scope_
- Deallocates resources at the end of the variable's lifetime
  - known as _Resource Acquisition is Initialization (RAII)_

This deallocation is performed by a special Rust function, `drop`. Rust calls `drop` automatically for mutable types.

- the author of such a type (ex. `String`) puts code in the `drop` method to return the memory allocated by the variable

## Move

Variables that implement the `Copy` trait have their values copied when interacting with the same data.

```rust
let x = 5;
let y = x;
```

Both `x` and `y` are variables bound to the value `5`. The two `5` values are both pushed onto the stack, since `u32` implements the `Copy` trait. Therefore, both `x` and `y` can be used after this code. Here's a list of types that implement `Copy`:

- all integer types
- `bool`
- all floating point types
- `char`
- tuples, if they only contain types that also implement `Copy`

However, for types that do not implement the `Copy` trait:

```rust
let s1 = String::from("hello");
let s2 = s1;

// This causes a compiler error!
println!("{}, world!", s1);
```

Here, ownership is transferred from `s1` to `s2`, since `String`s do not implement `Copy`. Rust will never automatically create "deep" copies of data, so any "automatic" copying can be assumed to be inexpensive. To create a deep copy, we use the `clone` method.

```rust
let s1 = String::from("hello");
let s2 = s1.clone();

println!("s1 = {}, s2 = {}", s1, s2);
```

`clone` is a visual indicator that arbitrary code is being executed, and that code may be expensive.

## Benefits

Ownership solves several problems:

- keeping track of what parts of your code are using what data on the heap
- minimizing the amount of duplicate data on the heap
- cleaning up unused data on the heap to avoid running out of space

## Sources

- <https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html>
