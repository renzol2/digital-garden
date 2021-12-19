---
tags: cs-374 computer-science computer science p-vs-np algorithms reduction theory
---

# Reduction (complexity)

Given two problems A and B (ex. [[decision-problems]]), **reduction** is describing an [[algorithm]] to solve problem A under the assumption that an algorithm for problem B already exists.

- Intuitively, if you know some algorithm to solve problem B, and you can convert problem A to problem B, then you can solve problem A using the same algorithm.

This reduction process is often used to prove problems are NP-hard (see: [[p-vs-np]]).

> To prove that problem _A_ is NP-hard, reduce a known NP-hard problem to _A_.

## General Outline of Reduction

All polynomial-time reductions, including [[np-hardness-proofs|NP-hardness proofs]], follow the same general outline. To reduce problem `X` to problem `Y` in polynomial time, we need to do three things:

1. Describe a polynomial-time algorithm to transform an **arbitrary** instance of `x` of `X` into a _special_ instance `y` of `Y`
2. Prove that if `x` is a "good" instance of `X`, then `y` is a "good" instance of `Y`
3. Prove that if `y` is a "good" instance of `Y`, then `x` is a "good" instance of `X` (This is usually the part that causes the most trouble).

To describe the algorithm that reduces `X` to `Y`, we actually need to design _three_ algorithms, one for each of the following tasks (corresponding to the above steps). These steps involve the _certificates_ [[certificates-complexity]] for each problem:

1. Transform an arbitrary instance of `x` of `X` into a special instance of `y` of `Y` in polynomial time
2. Transform an arbitrary certificate for `x` into a certificate for `y`, and
3. Transform an arbitrary certificate for `y` into a certificate for `x`

Here, the 2nd and 3rd steps refer to the _input_ and _output_ of the first algorithm.
