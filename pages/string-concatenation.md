---
tags: cs-374 computer-science strings theory
---

# String Concatenation

The **concatenation** of two [[string|strings]] $x$ and $y$, denoted either $x \cdot y$ or simply $xy$, is the unique string containing the characters of $x$ in order, followed by the characters of $y$ in order.

Formally, concatenation is defined recursively as follows:

$$
w \cdot z := \begin{cases}
z & \text{if } w = \epsilon \\
a \cdot (x \cdot z) & \text{if } w = ax
\end{cases}
$$

Example: computing $\text{NOW} \cdot \text{HERE}$:

![String concatenation example](../attachments/string-concatenation-example.png)

![String concatenation with recursion](../attachments/string-concatenation-with-recursion.png)

## Sources

- [Algorithms: Strings by Jeff Erickson](https://courses.engr.illinois.edu/cs374/fa2021/A/notes/models/01-strings.pdf)
