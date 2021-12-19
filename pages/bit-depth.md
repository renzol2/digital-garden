---
tags: music mus-407 electroacoustic computer digital audio sampling  bit-depth dynamic-range quantization
---

# Bit Depth

**Bit depth** (or _sample width_) in a digital audio encoding system determines the number of bits used to represent each sample (see: [[sampling-signal-processing]])

- i.e. the number of available resolution points to which a measured analog value can be approximated
- 1 byte = 8 bits

Number of resolution points = $2^{\text{bit depth}}$

- `1`-bit system; 2 resolution points
- `2`-bit system; 4 resolution points
- `8`-bit system; 256 resolution points
- `16`-bit system; 65536 resolution points (1 byte per sample)
- `32`-bit system; a lot of resolution points (4 bytes per sample)

Consider the analog-to-digital conversion process in a 3-bit system:

![Analog-to-digital conversion process in a 3-bit system](../attachments/analog-to-digital-conversion-3-bit.png)

The [[amplitude]] of each sample is quantized to a particular bit and encoded into binary. We then encode the binary into a modulated pulse wave.
