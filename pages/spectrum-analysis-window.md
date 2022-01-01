---
tags: ece-402 dsp
---

# Spectrum Analysis Window

A **spectrum analysis window (or _window function_)** is a function used to extract a short time segment from some longer [[audio-signal|signal]] to perform [[spectral-analysis|spectral analysis]] on that signal.

- models how the human ear analyzes [[frequency|frequencies]] over short segments of [[sound-waves|sound]] (about 10-20 ms in length)
- main benefit is the minimization of side lobes, which cause "cross talk" in the estimated [[spectrum]] from one [[frequency]] to another and causes faulty data
- used in both [[long-window-time-varying-spectral-analysis]] and [[short-window-time-varying-spectral-analysis]]

## Window Types

- Rectangular
- Hamming
- Blackman-Harris (sums of cosines)
- Bartlett (triangular)
- Poisson (exponential)
- [[kaiser-window|Kaiser]] ([[bessel-function|Bessel]])
- Dolph-Chebyshev
- Gaussian

## Sources

- <https://www.dsprelated.com/freebooks/sasp/Spectrum_Analysis_Windows.html>
