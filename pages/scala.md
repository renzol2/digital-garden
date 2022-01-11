---
tags: computer-science
---

# Scala

Scala is a modern, multi-paradigm [[programming-language|programming language]] designed to express common programming patterns in a concise, elegant, and type-safe way.

- integrates features of object-oriented and [[functional-programming|functional]] languages
- statically typed
- interoperates with the Java Runtime Environment (JRE)

## Types

Scala primitive types are like Java's, but capitalized.

## Value Definitions

Definitions can be done by value or by name.

- `def` is "by-name": its RHS is evaluated on each use
- `val` is "by-value": its RHS is evaluated at the point of the definition itself

```scala
def loop: Boolean = loop
def x = loop  // ok
val x = loop  // will lead to infinite loop
```

## Evaluation

**Basically: think algebra**. A non-pritimive expression is evaluated by:

- taking the leftmost operator
- evaluating its operands (left before right)
- apply operator to operands

A name is evaluated by replacing it with the RSH of its definition.

- evaluation process stops once it results in a value (i.e. a number, String, etc.)

Examples:

```scala
(2 * pi) * radius
(2 * 3.14159) * radius
6.28138 * radius
6.28318 * 10
62.8318
```

### Function Applications

Applications of parameterized functions are evaluated like operators:

- evaluate all function args, left to right
- replace functional application by the function's RHS, and, at the same time
- replace formal parameters of function by actual arguments

Example:

```scala
sumOfSquares(3, 2+2)
sumOfSquares(3, 4)
square(3) + square(4)
3 * 3 + square(4)
3 * 3 + 4 * 4
9 + square(4)
9 + 4 *4
9 + 16
25
```

This scheme of expression evaluation is called the _substitution model_.

- all evaluation does is _reduce an expression to a value_
- can be applied to all expressions, as long as they have _no side effects_
- substitution model can be used to express every [[algorithm]]; equivalent to a Turing machine
- the substitution model is formalized in the $\lambda$-calculus, which gives a foundation for [[functional-programming|functional programming]]
  - Alonzo Church

### Evaluation strategies

There are two evaluation strategies in Scala: _call-by-value_ and _call-by-name_.

Both strategies reduce to the same final values as long as

- the reduced expression consists of pure functions
- both evaluations terminate

Main differences:

- Call-by-value has the advantage since it evaluates every function argument only once
- Call-by-name has the advantage where a function argument is not evaluated if the corresponding parameter is unused in the evaluation of the function body

### Non-guaranteed termination

If termination is not guaranteed:

- if CBV evaluation of an expression _e_ terminates, then CBN evaluation of _e_ terminates too
  - CBV termination => CBN termination
- but the other direction is not true

Example:

```scala
def loop: Int = loop

def first(x: Int, y: Int) = x

// Consider this expression:
first(1, loop)

// Under CBN
first(1, loop) // -> 1 since CBN only evaluates used parameters

// Under CBV
first(1, loop) // -> infinite loop, since CBV evaluates all parameters once and `loop` evaluates to itself infinitely
```

Within Scala:

- Scala uses CBV by default
- Scala uses CBN if the type of a function parameter starts with `=>`

Example:

```scala
def constOne(x: Int, y: => Int) = 1

constOne(1+2, loop)
constOne(3, loop)
1

constOne(loop, 1+2)
constOne(loop, 3)
constOne(loop, 3)
...
(infinite loop)
```

## Conditional Expressions

Scala uses `if-else` or expressions, not statements.

```scala
def abs(x: Int) = if (x >= 0) x else -x
```

Here, `x >= 0` is a predicate of type `Boolean`.

### Boolean Expressions

Boolean expressions `b` can be composed of

```scala
true  false  // constants
~b           // negation
b && b       // conjunction
b || b       // disjunction
```

and of usual comparison operators

`e <= e, e >= e, e < e, e > e, e == e, e != e`

### Rewrite rules

Where `e` is an arbitrary expression,

```scala
!true      --> false
!false     --> true
true && e  --> true
false && e --> false
true || e  --> true
false || e --> e
```

`&&` and `||` do not always need their right operand to be evaluated; these expressions use "short-circuit evaluation"

## Blocks in Scala

Blocks are used to encapsulate implementation details.

- delimited by braces `{ ... }`
- contains a sequence of definitions or expressions
- last element of a bock is an expression that defines its value
- this return expression can be preceded by auxiliary definitions
- blocks are themselves expressions; a block may appear everywhere an expression can
- definitions inside a block are only visible from within the block
- definitions inside a block *shadow* definitions of the same names outside the block
- definitions of outer blocks are visible inside a block unless they are shadowed

## Semicolons

Semicolons are mostly optional, but are required when having more than one statement one a single line

```scala
val y = x + 1; y * y
```

An issue with Scala's semicolon convention is multiline expressions:

```scala
someLongExpression
+ someOtherExpression
```

is interpreted as follows:

```scala
someLongExpression;
+ someOtherExpression
```

Here are two ways to overcome this problem:

```scala
// 1.
(someLongExpression
+ someOtherExpression)

// 2.
someLongExpression +
someOtherExpression
```

## Sources

- <https://docs.scala-lang.org/tour/tour-of-scala.html>

[//begin]: # "Autogenerated link references for markdown compatibility"
[programming-language|programming language]: programming-language "Programming Language"
[functional-programming|functional]: functional-programming "Functional programming"
[algorithm]: algorithm "Algorithm"
[functional-programming|functional programming]: functional-programming "Functional programming"
[//end]: # "Autogenerated link references"
