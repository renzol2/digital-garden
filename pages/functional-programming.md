---
tags: programming-languages
---

# Functional programming

**Functional programming** is a [[programming-paradigm|programming paradigm]] that calls for

- in a restricted sense, programming without mutable variables, assignments, loops, and other imperative control structures, dealing only with [[theory|theories]] on data
- in a wider sense, focusing on pure functions
- in particular, functions can be values that are produced, consumed, and composed

Functional programming can be used like a calculator, within an interactive shell (or REPL, for Read-Eval-Print-Loop)

It's good functional programming style to split up a task into many small functions.

- modularity, ease-of-use

## Languages

An ideal functional [[programming-language|programming language]] exhibits the following characteristics across different contexts:

- in a restricted sense, the language has no mutable variables, assignments, or imperative control structures
- in a wider sense, the language enables the construction of elegant programs that focus on functions
- in particular, functions in a FP language are first-class citizens, i.e.
  - they can be defined anywhere, including inside other functions
  - like any other value, they can be passed as parameters to functions and returned as results
  - there exists a set of operators to compose functions

### Examples

FP languages in the restricted sense:

- Pure Lisp, XSLT, XPath, XQuery, FP (experimental)
- Haskell (without I/O Monad or UnsafePerformIO)

FP languages in the wider sense:

- Lisp, Scheme, Racket, Clojure
- SML, Ocaml, F#
- Haskell (full language)
- [[Scala]]
- Smalltalk, Ruby
- [[JavaScript]]

### History

- 1959: Lisp
- 1975-77: ML, FP, Scheme
- 1978: Smalltalk
- 1986: Standard ML
- 1990: Haskell, Erlang
- 1999: XSLT
- 2000: OCaml
- 2003: Scala, XQuery
- 2005: F#
- 2007: Clojure

## Sources

- Functional Programming Principles in Scala (Coursera) (TODO: link)

[//begin]: # "Autogenerated link references for markdown compatibility"
[programming-paradigm|programming paradigm]: programming-paradigm "Programming paradigm"
[theory|theories]: theory "Theory (mathematics, programming)"
[programming-language|programming language]: programming-language "Programming Language"
[Scala]: scala "Scala"
[JavaScript]: javascript "JavaScript"
[//end]: # "Autogenerated link references"