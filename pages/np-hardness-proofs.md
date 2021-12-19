---
tags: computer-science algorithms computer np np-hard np-hardness
---

# NP-Hardness Proofs

Proving a problem $X$ is NP-hard requires several steps:

- Choose a problem $Y$ that you already know is NP-hard
- Describe an [[algorithm]] to solve $Y$, using an algorithm for $X$ as a subroutine. Typically, this algorithm has the following form:
  - Given an instance of $Y$, [[reduction-complexity|reduce]] it into an instance of $X$, and then call the magic black-box algorithm for $X$.
- **Prove** that your algorithm is correct. This always requires 2 separate steps, which are usually of the following form:
  - **Prove** that your algorithm transforms "good" instances of $Y$ into "good" instances of $X$.
  - **Prove** that your algorithm transforms "bad" instances of $Y$ into "bad" instances of $X$. Equivalently: Prove that if your transformation produces a "good" instance of $X$, then it was given a "good" instance of $Y$.
- Argue that your algorithm for $Y$ runs in polynomial time. (This is usually trivial).

## Sources

- [CS 374 Lab 12.5](https://courses.engr.illinois.edu/cs374/fa2021/A/labs/lab12bis.pdf)
