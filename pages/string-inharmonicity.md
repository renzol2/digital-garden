---
tags: ece-402 dsp pitch-detection
---

# String Inharmonicity

**String inharmonicity** refers to the phenomenon of stringed instruments, like piano and guitar, having its higher [[harmonic]]s deviate from the [[harmonic-series|harmonic series]].

Most spectrally harmonic instruments have [[partial]]s that follow the harmonic series, i.e. [[partial]] $n$ has the following [[frequency]] $f_n$ based on the [[fundamental]] frequency $f_1$:

$$
f_n = n \cdot f_1
$$

However, stringed instruments exhibit different harmonics based on some value $B$, which changes based on the type of stringed instrument:

$$
f_n = n f_1 \sqrt{1 + B n^2}
$$

If $B$ is low (ex. $B=0.0001$), this formula holds well and maintains quasi-harmonicity. However, $B$ is larger in wound string instruments (low piano strings have $B=0.01$), higher partials become [[inharmonicity|inharmonic]] very quickly.

## Sources

- ECE 402 Lecture 20
- <https://www.uwec.edu/files/7224/Musical-string-inharmonicity-Chris-Murray.pdf>
