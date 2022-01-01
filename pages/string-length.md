---
tags: cs-374 computer-science strings theory
---

# String Length

## Theory

The **length** $|w|$ of a [[string]] $w$ is the number of symbols in $w$.

- ex. the string $\text{FIFTEEN}$ has length 7
- rarely distinguish between symbols and strings of length 1

The length function for an arbitrary string $w$ is defined recursively as follows:

$$
|w| := \begin{cases}
0 & \text{if } w = \epsilon \\
1 + |x| & \text{if } w = ax \\
\end{cases}
$$

## Sources

- [Algorithms: Strings by Jeff Erickson](https://courses.engr.illinois.edu/cs374/fa2021/A/notes/models/01-strings.pdf)
