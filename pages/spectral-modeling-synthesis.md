---
tags: ece-402 dsp synthesis spectral-analysis
---

# Spectral Modeling Synthesis

**Spectral modeling synthesis (SMS)** is a [[sound-waves|sound]] analysis/[[sound-synthesis|synthesis]] model for analyzing and synthesizing speech and other [[audio-signal|signal]]s. SMS assumes that any audio signal can be split into two parts: a [[harmonic-series|harmonic]] and [[inharmonicity|inharmonic]] component.

The harmonic component is represented by peaks in the [[frequency]] [[spectrum]]

- referred to as "deterministic"
- can be modeled through [[additive-synthesis|additive synthesis]]

The inharmonic component is represented everything that is not the harmonic component, i.e. the [[noise]]

- referred to as "stochastic" and "residual"
- can be modeled in several ways:
  - as white noise passed through a time-varying [[filter]] (i.e. [[subtractive-synthesis|subtractive synthesis]])
  - in tandem with the harmonic components using [[bandwidth-enhanced-oscillator|BEOs]]

![Spectral modeling synthesis diagram](../attachments/spectral-modeling-synthesis-diagram.png)

## Examples

- speech signals include slowly changing harmonic sounds caused by vibration of vocal chords, and wideband, noise-like sounds caused by lips and mouth
- instrument signals produce both harmonic components and percussive, noise-like components from the instrument body

## Implementation

- The [[mcaulay-quatieri-algorithm|McAulay-Quatieri algorithm]] has been used to implement SMS, in both analysis and synthesis phases

## Sources

- <https://en.wikipedia.org/wiki/Spectral_modeling_synthesis>
