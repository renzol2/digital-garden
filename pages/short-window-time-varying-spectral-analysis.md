---
tags: ece-402 dsp spectral-analysis
---

# Short Window Time-Varying Spectral Analysis

**Short Window Time-Varying Spectral Analysis** is a form of [[time-varying-spectral-analysis|time-varying spectral analysis]] that analyzes only a short segment of a [[audio-signal|signal]], rather than the entire signal.

- models how the human ear analyzes [[frequency|frequencies]] over short segments of [[sound-waves|sound]] (about 10-20 ms in length)
- used to perform [[spectral-analysis|spectral analysis]] comparable to human hearing
- pitch-synchronous, results in good-time resolution and prevents temporal smearing
- short-window artifacts include cross-talk between frequencies and "ripple" effects

The proper way to extract a short signal segment is to multiply the longer, original signal by a [[spectrum-analysis-window|window function]].

Short window analysis is best for monophonic, "quasi-harmonic" input sounds.

- **quasi-harmonic**: [[partial]]s of the sound should be very close to integer multiples of the [[fundamental]]
- for best results, recording should have as little [[reverb]] as possible
- for the sake of analysis, reverb makes a monophonic sound polyphonic!

## Procedure

The following steps are a loose outline of performing short window analysis:

1. Detect pitch of waveform (or ask user)
2. Select window, which is related pitch period (usually a two-period window), as well as a hope size
3. Compute amplitude and phase at each window (also referred to as "grain")
4. String together $A_n(t_0 + m \times N)$ to get amplitude envelope for partial $n$
5. Perform frequency correction from phase values

Use of a **two-period raised-cosine window**:

- all parts of the period are weighted the same
- assume [[spectrum]] does not change much within the short window
- each window could be thought of as a "grain"

### Mathematics

- $s(t)$: input signal to be analyzed, where $t$ is the sample number ($t$ is time in units of $\frac{1}{SR}$)
- $h(i)$: 2-period window
- $N$: input signal's period i samples, rounded to nearest integer
- $f$: frequency in Hz corresponding to period $N$, computed by $f = SR / N$
- $n$: partial number ($n=1$ is fundamental), $1 \leq n \leq N/2$
- $a_n(t)$: "sine coefficient" for partial $n$ at time $t$, computed using two periods of windowed input data centered at sample $t$
  $$
  a_n(t) = \sum^N_{i=-N}s(i+t) \cdot h(i) \cdot sin(2 \pi nfi / N)
  $$
- $b_n(t)$: "cosine coefficient" for partial $n$ at time $t$, computed using two periods of windowed input data centered at sample $t$
  $$
  b_n(t) = \sum^N_{i=-N}s(i+t) \cdot h(i) \cdot cos(2 \pi nfi / N)
  $$
- $A_n(t)$: [[amplitude]] [[envelope]] value for partial $n$ at time $t$
  $$
  A_n(t) = \sqrt{a^2_n(t) + b^2_n(t)}
  $$
- $\theta_n(t)$: phase value for partial $n$ at time $t$
  $$
  \theta_n(t) = atan(\frac{a_n(t)}{b_n(t)})
  $$
- $F_n(t)$: frequency envelope value for partial $n$ at time $t$
  $$
  F_n(t) = n \cdot (f + \theta_n ' (t))
  $$
- $\Delta t$: hop size; usually $\Delta t = N$; $A_n(t)$ and $F_n(t)$ will be computed for $t =$ integer multiples of $t$
  - during synthesis, linear interpolation will be done between these computed values of $A_n(t)$ and $F_n(t)$

![Short window](../attachments/short-window.png)

## Sources

- <https://ccrma.stanford.edu/~jos/sasp/Spectrum_Analysis_Windows.html>
