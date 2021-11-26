---
tags: cs-374 computer-science computer science p-vs-np algorithms reduction theory
---

# Certificates (complexity)

**Certificates** are proofs that a given instance is "good". In [[decision-problems]], a certificate is a particular input that solves the problem.

- A certificate for `CircuitSAT` ([[circuit-satisfiability]]) is a set of inputs that turns on the light bulb
- A certificate for `SAT` or `3SAT` is a satisfying assignment
- A certificate for `MaxIndSet` is a large independent set

For problems that are _in NP_ ([[p-vs-np]]), if the answer is "Yes", then

1. a polynomial-sized certificate can be provided which proves that the answer is "Yes", and
2. the validity of this certificate can be checked in polynomial time.
