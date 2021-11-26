---
tags: cs-374 computer-science computer science p-vs-np algorithms circuit-satisfiability np-complete decision-problems theory
---

# Circuit Satisfiability

Also known as `CircuitSAT`. Circuit satisfiability is one of many [[decision-problems]].

Circuit satisfiability: Given a boolean circuit, is there a set of inputs that makes the circuit output `True`, or conversely, whether the circuit _always_ outputs `False`.

For any particular input setting of a given circuit, we can calculate the output of the circuit in linear time using depth-first-search.

However, to test _all_ inputs for a given circuit (and therefore solve `CircuitSAT`), nobody knows how to solve it faster than brute-forcing all $2^n$ possible inputs.

However, no one has formally proven that we _can't_ beat brute force, so there may be some clever, undiscovered algorithm.
