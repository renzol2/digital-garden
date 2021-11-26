---
tags: music sampling electroacoustic composition synthesis
---

# Sampling (composition)

- [Sampling (composition)](#sampling-composition)
  - [History](#history)
    - [Early Sampling Instruments](#early-sampling-instruments)
    - [Digital Sampling Instruments](#digital-sampling-instruments)
  - [Techniques and Terminology](#techniques-and-terminology)
    - [Key terms](#key-terms)

## History

Broadly, there are two categories of electroacoustic composition:

1. [[modulation-synthesis|synthesis]] (generated audio)
2. sampling (recorded audio)

Composed manipulations of recorded sound via variable-speed phonographs date back to 1920s (D. Milhaud, E. Toch, P. Hindemith).

Magnetic tape (1930s) enabled more fluid manipulation of recorded audio

- _Imaginary Landscape No. 1_, John Cage

**Musique concrète** was an early form of sampling, primarily concerned with tape splicing, manipulation, and looping.

- objet sonore

### Early Sampling Instruments

Operating principles include:

- sound encoding on optical discs (photoelectric effect)
- sound recording on magnetic tape

In general, all these instruments work to achieve the same thing; creative expression through manipulation of recorded audio.

**Light Tone Organ** (Licht-Tone Organ) - Edwin Welte, Germany, ca. 1936

The Light Tone Organ was a photoelectric instrument:

- waveforms encoded as patterns on rotating glass discs
- discs rotated across photoelectric cells
- filtered light beam controlling pitch/timbre

It was largely destroyed in 1944 WWII allied bombings.

**Phonogène** - Pierre Schaeffer, Paris, 1950s

- Twelve tape capstans of different diameter
- Key press engages one capstan and moves a tape loop across a playhead of corresponding speed influencing musical pitch

**Special Purpose Tape Recorder** - [Hugh Le Caine](https://hughlecaine.com/en/), 1955

- capable of playing/recording onto six tape reels simultaneously
- tape speeds controllable via 3-octave keyboard
- volume controlled by six touch-sensitive buttons

**Mellotron** - Birmingham, England, 1963

- evolved from the Chamberlin
- improved design to facilitate mass production
- polyphonic tape-replay keyboard
  - uses motorized tape rollers that pinches the tape and runs the tape across a playhead when a key is pressed
- featured on intro to [_Strawberry Fields Forever_ (The Beatles)](https://open.spotify.com/track/3Am0IbOxmvlSXro7N5iSfZ?si=b8928693a63f412d)

### Digital Sampling Instruments

**Fairlight CMI** (1979)

- Earliest commercial digital sampler workstation - $25k, 8-bit audio (see: [[sampling-signal-processing|sampling in signal processing]])
- Computer screen touch-sensitive via light pen

**E-Mu Emulator I** (1981)

- has hard drive slot to store sample data
- $10k, 66 lbs, 128 kB of sample memory

Sampling techniques were greatly enhanced by [[MIDI]] (1983). Numerous other sampling instruments were introduced by Akai, Roland, Kurzweil, Ensoniq.

## Techniques and Terminology

### Key terms

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

**downsampling**: when an audio sample is transposed (pitch-shifted) upwards, some sampler algorithms will skip a number of sample values in the audio file (see: [[sampling-signal-processing|sampling in signal processing]]), in proportion to the amount of pitch-shift specified. Also called **decimation**.

- this process of upward transposition can cause [[aliasing]], which prompts the use of anti-aliasing filters

[//begin]: # "Autogenerated link references for markdown compatibility"
[modulation-synthesis|synthesis]: modulation-synthesis "Modulation Synthesis"
[sampling-signal-processing|sampling in signal processing]: sampling-signal-processing "Sampling (Signal Processing)"
[MIDI]: midi "MIDI"
[looping]: looping "Looping"
[aliasing]: aliasing "Aliasing"
[//end]: # "Autogenerated link references"