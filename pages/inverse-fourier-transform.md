---
tags:
---

# Inverse

- Resynthesis: frequency domain to time domain
- the inverse process (IDFT or IFFT) creates and sums harmonic sinusoids using magnitude & phase data
- if frame data is unaltered, IDFT will reconstruct the original waveform perfectly
- the IFFT will reconstruct the overall waveform with some inaccuracy due to amplitude envelope window functions
- the inverse process often involves overlapping windows which are added together

![Overlap-Add Resynthesis](../public/attachments/overlap-add-resynthesis.png)

## Sources

-
