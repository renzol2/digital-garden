---
tags: cs-374 computer-science computer science p-vs-np algorithms theory p np
---

# P vs. NP

> If a problem is easy to _check_ the solution to, is it easy to _find_ the solution? - Jade, [Up and Atom](https://www.youtube.com/watch?v=EHp4FPyajKQ)

## Decision Problems

A decision problem is a problem whose output is a single boolean value, `Yes` or `No`. See: [[decision-problems]].

There are 3 classes of decision problems:

1. **P** is the set of decision problems that can be solved in polynomial time. Intuitively, P is the set of problems that can be _solved quickly_.
   - ex. Bipartite Matching
2. **NP** is the set of decision problems with the following property:
   - If the answer is `Yes`, then there is a _proof_ of this fact that can be checked in polynomial time.
   - Intuitively, NP is the set of decision problems where we can verify a `Yes` answer quickly if we have the solution in front of us.
   - Abbreviation of *N*ondeterministic *P*olynomial-time
3. **co-NP** is essentially the opposite of NP. If the answer to a problem in co-NP is `No`, then there is a proof of this fact that can be checked in polynomial time.

A more digestible breakdown provided by [Georgia Tech](https://www.youtube.com/watch?v=n0zd5hcOSQI):

- **P**: Problems _solvable_ in polynomial time
- **NP**: Problems _verifiable_ in polynomial time
  - Over time, some NP problems have been found to be in P.
- **NP-complete**: Hardest problems in NP.
  - No NP-complete problems have been found to be in P.

Some properties of these complexity classes:

- Every decision problem in P is also in NP.
  - If a problem is in P, we can verify `Yes` answers in polynomial time from scratch, meaning it is also in NP.
- Every problem in P is also in co-NP.

## NP-hard, NP-easy, and NP-complete

A problem Π is **NP-hard** if a polynomial time [[algorithm]] for Π would imply a polynomial time algorithm for _every problem in NP_. In other word:

```text
Π is NP-hard <-> If Π can be solved in polynomial time, then P = NP
```

Intuitively, if we could solve one particular NP-hard problem quickly, then we could quickly solve _any_ problem whose solution is easy to understand, using the solution to that one special problem as a subroutine.

NP-hard problems are at least as hard as every problem in NP.

Problems are **NP-complete** if they are both NP-hard and an element of NP (or "NP-easy").

- A polynomial-time algorithm for even one NP-complete problem would immediately imply a polynomial time algorithm for _every_ NP-complete problem
- Seems incredibly unlikely, since thousands of problems have been shown to be NP-complete

![More of what we think the world looks like](../attachments/P-vs-NP-vs-coNP-vs-NP-hard-vs-NP-complete.png)

## P != NP

Perhaps the single most important unanswered question in theoretical CS, or _science_ in general, is **P != NP**.

- Intuitively: are the complexity classes P and NP actually different?
- We generally accept P != NP as a "law of nature": something strongly supported by evidence but having no mathematical proof
- No one has figured out to prove P != NP. There is a $1,000,000 reward for the solution by the Clay Mathematics Institute, though!

We also don't know exactly if NP != co-NP.

- Intuitively: even if we can verify every `Yes` answer quickly, there's no reason to believe we can verify `No` answers quickly.
- Generally believed that NP != co-NP, but no concrete proof

![What we think the world looks like.](../attachments/P-vs-NP-vs-coNP.png)

## Reduction

Problems are proven to be in particular complexity classes through the process of **reduction** ([[reduction-complexity]]), i.e. using an algorithm that solves problem A to solve problem B and therefore proving that they are within the same complexity class.

Over time, many NP problems have been proven to be in P. However, no NP-complete problems have been proven to be in P yet.

## The Cook-Levin Theorem

Circuit satisfiability ([[circuit-satisfiability]]) is **NP-hard**.
