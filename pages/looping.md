---
tags: music production mus-407 sampling
---

# Looping

**Looping**: identifying part of an audio sample (sometimes the entire thing) to be repeated while the corresponding key is depressed

- samples are inherently finite - looping gives the illusion of an infinitely playing sample
- in most cases, necessary for loop to start and end at the same value
- typically both **zero crossings** (points where waveform crosses horizontal axis)
- alternatives to finding zero crossings:
  - **crossfading** between adjacent loops
  - **bidirectional looping**

## Sample Selection

Not all samples are created equally.

- samples with no sustained sound are difficult to loop convincingly
- ex. bells, percussive instruments with transients, etc. are difficult to loop without causing audible artifacts

## Loop Regions

Tried-and-true strategy for selecting loop regions: **find zero crossings**

**Zero crossing**: a sample value at 0, with a (hopefully) smooth transition from positive to negative (or vice versa) in surrounding sample values

- even if loop regions are bounded at zero crossings, the transition from end to start should be continuous

By having both ends of the loop region at zero crossings that smoothly transition, you create a "beautiful" loop; a finite sample with infinite looping results.

Selecting loop regions:

- visualize the evolving "character" of the overall sound, and select your region based on how to keep that character
- generally: the larger the loop region, the better
- most important: the actual points of the loop region **should be zero crossings**
