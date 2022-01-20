---
tags:
---

# Fixed point

A **fixed point** of a function `f` is a number `x` if

```scala
f(x) = x
```

For some functions `f`, we can locate fixed points by starting with an initial estimate and then by applying `f` in a repetitive way:

```scala
x, f(x), f(f(x)), f(f(f(x))), ...
```

The square root operation can be defined through fixed point.

## Sources

- Functional Programming Principles in Scala (Coursera) (TODO: link)
