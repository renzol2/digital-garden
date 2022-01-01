---
tags: ece-402 dsp spectral-analysis
---

# Time-Frequency Reassignment

**Time-Frequency Reassignment (TFR)** is a method of improving the accuracy of time and [[frequency]] representations of [[sine-wave|sinusoidal components]] in [[spectral-analysis|spectral analysis]].

- uses center-of-gravity computations of the spectral energy to find a time correction and frequency correction for each magnitude value in an [[fast-fourier-transform|FFT]]
- each magnitude value has its own correction

## Sharpening Transients

TFR uses [[phase]] information (the short-time phase spectrum) to preserve the temporal [[envelope]] without sacrificing the benefits of the [[bandwidth-enhanced-oscillator|bandwidth-enhanced]] [[spectral-modeling-synthesis|SMS]] model

- components extracted from very early or very late short-time windows are relocated nearer the times of transient events, creating clusters of time-frequency data points that more accurately represent the sound
- normal STFT techniques fail to distinguish between [[transient]] and sustained components, resulting in [[temporal-smearing|temporal smearing]] (which TFR avoids)

## Comparisons

### MQ and Short Window

TFR utilizes the [[phase]] information from [[short-time-fourier-transform|STFT]] data to compute sharpened reassignments for each spectral component

- unlike [[quadratic-phase-function-synthesis|MQ quadratic phase function synthesis]] synthesis or [[short-window-time-varying-spectral-analysis|short window method]], which utilize phase in different ways or not at all

### Long Window

TFR uses **three** FFTs on input data, with each FFT using a different [[spectrum-analysis-window|window function]]

- normal [[long-window-time-varying-spectral-analysis|long window analysis]] uses only one FFT on each window of the input data, advancing by the hop size each time.

Each FFT has a different purpose:

1. "Normal" window function :$h(t)$. Used for computing [[spectrum]] magnitudes, and for **normalizing** time and frequency correction values from FFT #2 and #3
2. Time-weighted window function: $t \cdot h(t)$. Values early in window are scaled negative, while those late the in window are scaled positive. The FFT integral of these scaled values leads to time correction.
3. Frequency-weighted window function: $dh(t)/dt$. _Derivative_ is the [[frequency-domain|frequency domain]] equivalent of FFT #2's time correction. FFT integral of these values leads to frequency correction.

This method of reassignment leads to better interpolation than [[quadratic-interpolation|quadratic "Smith Interpolation"]]

- quadratic interpolation only acts on 3 points in the magnitude spectrum
- TFR uses _global_ phase data, not just 3 values
- in practice, "Smith" interpolation is often good enough

### Example

![Time frequency reassignment comparison](../attachments/time-frequency-reassignment-comparison.png)

- a) STFT - retains data for every time $t_n$ and frequency $\omega_n$
  - sometimes called [[phase-vocoder|Phase Vocoder]], although the term has different meanings for different contexts
- b) MQ remains data at selected time and frequency points (sinusoidal components)
- c) time-frequency reassigned data is distributed _continuously_ in time and frequency, retained only in "time-frequency ridges"

## Sources

- ECE 402 Lecture 15
