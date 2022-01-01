---
tags: music mus-407 electroacoustic computer digital audio sampling sample-rate bit-depth sample dynamic-range quantization
---

# Sampling (Signal Processing)

Sampling involves taking periodic measurements of an analog [[audio-signal|signal]] and assigning a digital value to each measurement, facilitating the conversion from analog audio to [[digital-audio|digital audio]].

- [Sampling (Signal Processing)](#sampling-signal-processing)
  - [Concepts](#concepts)
  - [Sources](#sources)

## Concepts

- [[sample-rate|Sample Rate]]
- [[bit-depth|Bit Depth]]
- [[nyquist-frequency|Nyquist Frequency]]
- [[Aliasing]]
- [[Quantization]]
- [[quantization-error|Quantization error]] and [[bit-depth|Bit depth]]
  - In general: greater bit depth means higher sample resolution, which means smaller quantization error, leading to better signal-to-[[noise]] ratio
- [[Dither]]

To convert an analog signal to a digital signal, we take a periodic sample of the analog signal. The value we obtain is the [[amplitude]] of the signal at a specific point in time, corresponding to the pressure change captured by some device.

We take a new sample at a specific rate, called the [[sample-rate|sample rate]]

The amplitude measurement must be represented in a digital format through a process called [[quantization]]. Since digital values can only be expressed finitely, we must assign a range of values to work with to represent amplitude; we call this range [[bit-depth|bit depth]].

The difference between the original amplitude measurement and our new, quantized value according to the bit depth is called [[quantization-error|quantization error]], which is heard as [[noise]]. We can mitigate this noise through [[dither]]ing.

Due to the finite number of samples we can take in a given point in time, there is a limited number of high [[frequency|frequencies]] we can digitally represent. This limit is determined by the [[nyquist-frequency|Nyquist frequency]].

Any frequencies above that limit causes [[aliasing]].

## Sources

- MUS 407 Sampling
