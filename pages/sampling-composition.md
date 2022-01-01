---
tags: music sampling electroacoustic composition synthesis
---

# Sampling (composition)

- [Sampling (composition)](#sampling-composition)
  - [History](#history)
  - [Early Sampling Instruments](#early-sampling-instruments)
  - [Digital Sampling Instruments](#digital-sampling-instruments)
  - [Techniques and Terminology](#techniques-and-terminology)

## History

Broadly, there are two categories of [[electroacoustic-music|electroacoustic]] [[music-composition|composition]]:

1. [[modulation-synthesis|synthesis]] (generated audio)
2. sampling (recorded audio)

Composed manipulations of recorded sound via variable-speed phonographs date back to 1920s (D. Milhaud, E. Toch, P. Hindemith).

Magnetic tape (1930s) enabled more fluid manipulation of recorded audio

- _Imaginary Landscape No. 1_, John Cage

**Musique concrète** was an early form of sampling, primarily concerned with tape splicing, manipulation, and looping.

- objet sonore

## Early Sampling Instruments

Operating principles include:

- sound encoding on optical discs (photoelectric effect)
- sound recording on magnetic tape

In general, all these instruments work to achieve the same thing; creative expression through manipulation of recorded audio.

- [[light-tone-organ|Light Tone Organ]] (Licht-Tone Organ) - Edwin Welte, Germany, ca. 1936
- [[phonogene|Phonogène]] - [[pierre-schaeffer|Pierre Schaeffer]], Paris, ca. 1950s
- [[special-purpose-tape-recorder|Special Purpose Tape Recorder]] - [Hugh Le Caine](https://hughlecaine.com/en/), 1955
- [[mellotron|Mellotron]] - Birmingham, England, 1963

## Digital Sampling Instruments

- [[fairlight-cmi|Fairlight CMI]] (1979)
- [[e-mu-emulator-i|E-Mu Emulator I]] (1981)

Sampling techniques were greatly enhanced by [[MIDI]] (1983). Numerous other sampling instruments were introduced by Akai, Roland, Kurzweil, Ensoniq.

## Techniques and Terminology

**keymapping**: assigning samples to [[MIDI]] note numbers

- sometimes multiple samples per note, or one sample for multiple notes
- key aspect of designing samplers - how do we let the user choose which keys are mapped to which samples?

**root key**: the [[MIDI]] note number that plays back a sample at its original speed/pitch

- usually you want to map pitched samples to the matching key on the keyboard (ex. playing middle C on the keyboard should result in a middle C)
- but can also move the root key and exaggerate its position for interesting effects

**key zone/key range**: a contiguous region of [[MIDI]] note numbers that plays back a single sample, usually transposing pitch based on note number

- can be every keynum (0-127), but not always
- ex. a virtual cello instrument's key zone could be mapped to only the physical acoustic range of a cello
- can also have many contiguous zones
- large key zones can create problems at extremes: high/low numbers can result in extremely unrealistic sounds

**multisampling**: recording multiple pitches across an instrument's range and keymappping to smaller key zones

- ex. if you have a library of violin samples, but not every chromatic pitch, you can map multiple keys to each violin sample to cover every chromatic pitch
- usually sounds okay to transpose a sample only a few steps
- used to reduce the number of samples (and therefore storage used)
- helps alleviate problems with few samples/large zones

**chromatic multisampling**: creating a separate audio sample for each chromatic pitch on an instrument, and using 1:1 keymapping

- greater sense of realism, but greater memory storage required

**velocity switching**: using [[MIDI]] velocity values to select from multiple samples assigned to the same [[MIDI]] note number

- ex. to accurately model a piano, different samples are needed for playing fortissimo vs. pianissimo
- useful in simulating timbral differences encountered when playing an acoustic instrument at different intensities

**keyswitching**: using a [[MIDI]] note number outside an instrument's typical range to switch between banks of samples

- ex. C2 activates a bank of bowed (arco) violin samples. C#2 activates a bank of plucked (pizz) violin samples

**looping**: see: [[looping]]

**sample patch**: a pre-configured sampler instrument which has undergone many of the previously mentioned techniques (multisampling, keymapping, velocity switching, keyswitching, predetermined loop points)

**sample library**: a software package containing several pre-configured sample patches

**downsampling**: when an audio sample is transposed (pitch-shifted) upwards, some sampler [[algorithm]]s will skip a number of sample values in the audio file (see: [[sampling-signal-processing|sampling in signal processing]]), in proportion to the amount of pitch-shift specified. Also called **decimation**.

- this process of upward transposition can cause [[aliasing]], which prompts the use of [[anti-aliasing-filter|anti-aliasing filters]]
