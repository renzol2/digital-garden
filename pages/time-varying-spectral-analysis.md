---
tags: ece-402 dsp spectral-analysis
---

# Time-Varying Spectral Analysis

**Time-Varying Spectral Analysis** is a method of [[spectral-analysis|spectral analysis]] that generates a series of [[amplitude]] and [[frequency]] [[envelope]]s that describe a [[sound-waves|sound]].

- kind of an oxymoron: [[fourier-transform|Fourier transforms]] already utilize time; you can't take a Fourier transform of just one sample
- trying to analyze sound as we perceive it: _over a period of time_

Time-varying analysis methods offer various degrees of information on the [[partial]]s within a [[spectrum]], including:

- partial amplitudes
- partial frequencies
- partial [[phase]]s
  - in steady tones, phase does not matter (Ohm, 1843). Ex: [[hilbert-transform|Hilbert Transformed Square Wave]]
  - However, in the [[transient]]s of noises, phase can drastically alter the [[timbre]] of a sound
  - frequency is derivative of phase
  - ex. glottal pulses in speech

## Types

There are 2 main types of time-varying spectral analysis:

1. [[long-window-time-varying-spectral-analysis|Long Window Time-Varying Spectral Analysis]]
2. [[short-window-time-varying-spectral-analysis|Short Window Time-Varying Spectral Analysis]]

## Sources

- [ECE 402 UIUC: Electronic Music Synthesis](https://courses.grainger.illinois.edu/ece402/)
