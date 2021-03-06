---
tags: mus-407 sampling
---

# Dither

**Dither** is the process of adding low-[[amplitude]] noise to an analog [[audio-signal|audio signal]], prior to [[sampling-signal-processing|sampling]] and [[quantization]], to introduce randomness and reduce [[noise]] from [[quantization-error|quantization error]].

Periodic signals exhibit a regular, predictable pattern of quantization error.

- smooth signals take on a more [[square-wave|square]]-like appearance
- low [[amplitude]] signals have access to fewer resolution points, and are therefore particularly prone
- results in additional high-[[frequency]] components in the [[spectrum]], also called harmonic distortion
- **dithering** is the solution to spreading the noise across the spectrum

Dithering is an option when exporting audio from a DAW.

- spreads quantization noise more evenly throughout the spectrum
- often used when converting from higher [[bit-depth]]s down to 16-bit

## Sources

- MUS 407 Digital Audio

[//begin]: # "Autogenerated link references for markdown compatibility"
[amplitude]: amplitude "Amplitude"
[audio-signal|audio signal]: audio-signal "Audio Signal"
[sampling-signal-processing|sampling]: sampling-signal-processing "Sampling (Signal Processing)"
[quantization]: quantization "Quantization"
[noise]: noise "Noise"
[quantization-error|quantization error]: quantization-error "Quantization Error"
[square-wave|square]: square-wave "Square Wave"
[frequency]: frequency "Frequency"
[spectrum]: spectrum "Spectrum"
[bit-depth]: bit-depth "Bit Depth"
[//end]: # "Autogenerated link references"