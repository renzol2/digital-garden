---
tags: rust
---

# Slices (Rust)

In [[Rust]], **slices** are [[references-rust|references]] to parts of a [[variables-rust|variable]].

- references to partial segments of memory on the heap

```rust
let s = String::from("hello world");
let hello = &s[0..5];
let world = &s[6..11];
```

![Slices - example](../attachments/slices-rust-example.png)

## Sources

- <https://doc.rust-lang.org/book/ch04-03-slices.html>
