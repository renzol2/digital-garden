---
tags: computer-science
---

# Side effect (programming)

A **side effect** in programming occurs when an operation modifies some state variables outside its scope, and that modification is expressed in some way _other than_ the return value.

Example:

```c
i++  // return the old value of `i` while incrementing the value
```

The expression `i++` has a side effect on the current value, which cannot be expressed by the substitution model.

## Sources

-
