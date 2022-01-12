---
tags: computer-science
---

# Tail recursion

**Tail recursion** is a form of recursion where a function's stack frame can be reused if a function calls itself as its last action.

- tail recursive functions are iterative processes
- used to avoid deep recursive chains (and a resulting stack overflow)

In general, if the last action of a function consists of calling a function (even itself), one stack frame is sufficient for both functions.

- this scenario is called a _tail-call_

## Sources

- Functional Programming Principles in Scala (Coursera) (TODO: link)
