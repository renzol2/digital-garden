---
tags: mus-407 delay delay-line
---

# Variable Delay Effects

**Variable delay effects** are [[digital-delay-line|digital delay effects]] in which delay time changes dynamically.

Imagine a tape loop as an analogy to a [[circular-queue|circular queue]]:

- read/write pointers as play/record heads
- instead of pointers advancing, tape moves underneath heads

Essential behavior of variable delay:

- delay time (distance) between read pointer and write pointer varies
- as delay time _increases_, read pointer _lags behind_ write pointer, reading through samples more _slowly_, causing a _downward_ pitch shift
- as delay time _decreases_, read pointer _catches up_ to write pointer, reading through samples more _quickly_, causing an _upward_ pitch shift
- delay time usually driven by oscillator or noise generator

Within the circular buffer:

- distance between read and write pointer is _modulated_
- modulates the _delay time_
- modulation [[envelope]] and determines the shape of effect over time

This variable delay creates varying levels of [[wave-interference|constructive and destructive interference]].

- delay time can line up with various [[harmonic]]s to boost their [[resonance]]
- through destructive interference, delayed [[dry-wet-signal|wet signal]] can also remove odd harmonics - basis for [[pitch-shifting-realtime|pitch shifting]]
