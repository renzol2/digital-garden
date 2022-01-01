---
tags: mus-407 delay delay-line
---

# Pitch-Shifting/Harmonization

**Pitch-shifting/harmonization** can be achieved using [[variable-delay-effects|variable delay lines]], because a dynamically changing delay time produces [[pitch]] variance.

In our [[circular-queue|circular buffer]]:

- `W`/`R` pointers move at different speeds in the same direction
- if `R` is faster than `W`, output pitch is higher than input
- if `R` is slower than `W`, output pitch is lower than input
- modulate the delay time with a [[sawtooth-wave|sawtooth wave]] to simulate a constant increase/decrease in speed of `R`
  - polarity (upward/downward slope) affects direction of pitch shift
  - magnitude of slope affects affects interval/distance of pitch shift

Central problem: At different speeds, `R` and `W` will periodically "pass through" each other, where `R` is likely to encounter a waveform discontinuity (heard as a click)

## Solution/Digital Implementation

To solve the discontinuity problem:

- create several `R` pointers spaced out along circular queue, all moving at the same speed
- use [[amplitude-modulation|amplitude modulation]] on each `R` pointer
- modulate the [[amplitude]] of each `R` pointer's output by unipolar [[sine-wave|sine]]/[[triangle-wave|triangle]] wave
- control initial [[phase]] of each oscillator so circular queue discontinuity aligns with zero crossing of modulator [[audio-signal|signal]]
- sum R pointer outputs together

Summed signals (dry + wet) can have phase reinforcement/cancellation issues, but usually makes for a decent real-time harmonizer.

- caused by lining up delay time [[resonance]] with certain [[harmonic]]s, boosting some while cancelling others through [[wave-interference|wave interference]] (constructive vs. destructive)
