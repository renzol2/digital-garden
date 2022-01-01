---
tags: ece-402 dsp
---

# Pitch Detection Algorithm

A **pitch detection algorithm (PDA)** is an [[algorithm]] that estimates the [[fundamental]] [[pitch]] of a [[audio-signal|signal]], usually that of a musical note or tone. There is no ideal PDA, so several algorithms exist.

## Algorithms

- [[fast-fourier-transform|FFT]]: within the [[frequency]] domain, FFTs are often used for their fast [[runtime]]
  - variations include [[short-time-fourier-transform|STFTs]]
- **YAAPT** (yet another algorithm for pitch tracking) algorithm uses a combination of [[time-domain]] and [[frequency-domain]] processing combined with [[dynamic-programming|dynamic programming]] to find the most likely fundamental
- [[cepstral-pitch-detection|Cepstral Pitch Detection]] uses the [[cepstrum]] of a signal to determine the fundamental even when it's quieter than other [[partial]]s

## Harmonic Pitch Detection Problems

Many methods assume equally spaced [[harmonic]]s, where harmonic input models $f_n \approx n \cdot f_1$. However, many sounds do not strictly follow the [[harmonic-series|harmonic series]] (ex: [[string-inharmonicity|stringed instruments]]).

Methods like [[spectral-peak-labeling|spectral peak labeling]] aim to somewhat remedy this issue by detecting _perceived_ pitch rather than actual pitch.

## Sources

- <https://en.wikipedia.org/wiki/Pitch_detection_algorithm>
- <https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.129.4722&rep=rep1&type=pdf>
