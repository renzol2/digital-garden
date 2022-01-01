---
tags: rust programming-languages computer-science
---

# References

In [[Rust]], **references** are [[variables-rust|variables]] that allow you to refer to some value without taking [[ownership-rust|ownership]] of it. In short:

- at any given time, you can have _either_ one mutable reference _or_ any number of immutable references
- references must always be valid (no dangling references)

```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

The diagram shows how the above code creates a reference `&String s` pointing at `String s1`:

![Diagram of references in Rust](../attachments/rust-references-diagram.png)

In Rust, references are immutable by default. **Mutable references** are declared explicitly:

```rust
fn main() {
    let mut s = String::from("hello");

    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
```

Mutable references have one big restriction: you can only have one mutable reference to a particular piece of data at a time. This restriction prevents _data races_, a race condition where

- two or more pointers access the same data at the same time
- at least one of the pointers is being used to write to the data
- there's no mechanism being used to synchronize access to the data

These data races cause undefined behavior and can be difficult to diagnose and fix when trying to track them down at runtime.

Rust also prevents you from making _dangling references._

## Sources

- <https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html>
