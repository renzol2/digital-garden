---
tags: ece-402 dsp
---

# Temporal Smearing

**Temporal smearing** is a loss of [[transient]] audio data during [[spectral-analysis|spectral analysis]], resulting in an audible "smearing" effect.

- synthesized transients from data sound less sharp
- related to _time resolution_

Normal [[short-time-fourier-transform|STFT]] techniques and basic implementations of [[mcaulay-quatieri-algorithm|MQ]] algorithms cause temporal smearing, but this can be solved by using newer techniques like [[time-frequency-reassignment|time frequency reassignment]].

## Sources

- ECE 402 Lecture 15
