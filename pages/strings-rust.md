---
tags: rust strings
---

# Strings (Rust)

There are two primary "[[string]]" implementations in [[Rust]]:

- the string slice `str`, which covers [[slices-rust|string slices]] (references to UTF-8 encoded string data in memory) and string literals (stored in program's binary)
- the `String` type: a growable, mutable, owned, UTF-8 encoded type provided by Rust's standard library

## Creating a new string

```rust
// new empty string
let mut st = String::new();

let data = "initial contents";
let s = data.to_string();
// the method also works on a literal directly:
let s = "initial contents".to_string();

// using the `from` method
let s = String::from("initial contents");
```

## Updating strings

### Appending to a String with `push_str` and `push`

```rust
let mut s = String::from("foo");
s.push_str("bar");
```

```rust
let mut s1 = String::from("foo");
let s2 = "bar";
s1.push_str(s2);
println!("s2 is {}", s2);
```

```rust
let mut s = String::from("lo");
s.push('l');
```

### Concatenation with the `+` Operator or the `format!` Macro

```rust
let s1 = String::from("Hello, ");
let s2 = String::from("world!");
let s3 = s1 + &s2; // note s1 has been moved here and can no longer be used
```

```rust
let s1 = String::from("tic");
let s2 = String::from("tac");
let s3 = String::from("toe");

let s = s1 + "-" + &s2 + "-" + &s3;
```

Alternatively,

```rust
let s1 = String::from("tic");
let s2 = String::from("tac");
let s3 = String::from("toe");

let s = format!("{}-{}-{}", s1, s2, s3);
```

`format!` uses references, so `s1`, `s2`, and `s3` all keep ownership of their values.

## Indexing

You can't index into strings in Rust.

- strings can be represented as collections of [[byte|bytes]], characters, or grapheme clusters
- Rust does not decide which of these to use for indexing
- using [[slices-rust|string slices]] looks at the byte representation

## Iterating

You _can_ iterate over strings using:

- `.chars()`
- `.byte()`

## Sources

- <https://doc.rust-lang.org/book/ch08-02-strings.html>
