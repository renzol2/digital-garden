---
tags: midi music mus-407 mus-305 electroacoustic
---

# MIDI

- [MIDI](#midi)
  - [History](#history)
  - [Hardware](#hardware)
  - [Devices](#devices)
  - [Channels & Messages](#channels--messages)
    - [MIDI Channels](#midi-channels)
    - [MIDI Messages](#midi-messages)
      - [Channel messages](#channel-messages)
      - [System messages](#system-messages)
    - [MIDI Message Format](#midi-message-format)
    - [Other Common Message Types](#other-common-message-types)
    - [General MIDI](#general-midi)
  - [MIDI and Tuning](#midi-and-tuning)

**Musical Instrument Digital Interface, or MIDI**, is a digital communication protocol enabling musical systems and instruments to exchange basic information about

- consists of discrete messages
- electrically transmitted as binary data
- capable of representing/recreating a musical performance

MIDI is **_not_** an [[audio-signal|audio signal]]

- It knows _nothing_ about the actual [[sound-waves|sound]] it is playing - it simply knows the names of the instruments it is representing
- MIDI is _just data_, fully divorced from sound and can be extracted from musical performance to other use cases

## History

MIDI was created to accommodate a rapidly diversifying market of increasingly popular [[analog-synthesizers|analog]] and hybrid [[synthesizer|synthesizers]].

**Main problem**: users wanted to combine sounds from different models, play multiple synths simultaneously for a richer sound, etc.

Some analog-digital sound control protocols existed at the time, but there was **no industry standard** for inter-device communication

- Companies would make inter-communication protocols for _their own devices_, but any individual protocol was specific to that family of synths or devices.

**MIDI** was developed with coordination from multiple companies (Roland, Oberheim, Yamaha, Sequential Circuits)

- initially called the _Universal Synthesizer Interface_ (USI) in 1981
- later was revised and publicly released in **1983** as **MIDI 1.0** and was quickly embraced by the music industry

MIDI messages consisted of a very small amount of binary data - an overall very small data footprint. Rather than a continuous stream of audio data, it's a relatively small handful of bytes.

- around 2-3 [[byte]]s per messages
- an ideal control protocol, especially by 1980s computer standards
- vs. [[digital-audio|digital audio]]: 2 bytes _per sample_ = ~88 KB per second

MIDI is **still widely used today**.

- applications in DAWs and [[digital-synthesizers|digital synths]], [[mixer]]s, effects units, recording gear (MIDI Machine Control or MMC), video software, theatre/live events, lighting boards, water fountains, pyrotechnics, etc.

## Hardware

MIDI is both a protocol and a hardware specification. The original hardware specification for MIDI was the 5-pin [[din-connector|DIN connector]].

Today, few modern devices use 5-pin connections. Instead, they rely on USB for data transmission (and often power supply).

MIDI can also be transmitted over Thunderbolt, Bluetooth, FireWire, Ethernet, etc. Examples of uses for MIDI connections include:

- USB-MIDI interfaces for connecting 5-pin gear with modern computers
- MIDI patchbays to manage interconnections on multiple devices

## Devices

Musical MIDI devices generally fall into one of three categories:

**Controller**:

- sends MIDI when device is manipulated
- may receive MIDI to update status of controlled device
- cannot generate audio
- ex. Novation Launchpad

**Module**:

- generates audio when MIDI is received
- usually cannot send MIDI, but has thru port
- typically rack-mountable with no musical keyboard interface
- ex. Kurzweil K2500RS Sampler

**Keyboard synthesizer**:

- sends MIDI when keys/interface are manipulated
- generates audio when MIDI is received
- receives its own MIDI messages
- ex. Yamaha MOXF6

## Channels & Messages

### MIDI Channels

- One MIDI port can accommodate 16 discrete channels of MIDi data (conceptually similar to TV channels).
  - This is useful for controlling multiple voices with one MIDI message stream and one physical connection
- Channel specificity encoded into MIDI data itself
  - Unlike analog audio, where multiple channels require multiple connections
- Some (but not all) MIDI messages are channel-specific
- **omni mode**: a setting that causes a MIDI device to listen for messages on all channels
  - when disabled, a device generally listens to only one channel

### MIDI Messages

All MIDI messages fall into one of two categories.

#### Channel messages

- more _musical_
- channel-specific
- more commonly encountered and frequently used
- contains information typically used for [[pitch]], [[timbre]], expression, etc.

**Channel voice**: individual musical data, e.g. note on/off, control change, pitch bend, etc.

**Channel mode**: general musical data, e.g. omni on/off, all notes off, mono/poly mode, etc.

#### System messages

- more _functional_
- not channel-specific
- used for global device configuration, bulk data transmission, device sync, manufacturer-specific functions

**System real-time**: prompts all MIDI devices for a response in real-time, e.g. stop, play

**System common**: prompts all MIDI devices but does not require an immediate response, e.g. tune, set, timeline position cue

**System exclusive**: reserved for manufacturer-specific functionality

### MIDI Message Format

See: [[midi-message-format|MIDI message format]]

TODO: binary-decimal conversion

### Other Common Message Types

**control change (CC)**: general messages sent by controllers

- two data bytes: controller number and controller value
- sent by most knobs, faders and pedals
- typically used to affect note expression
- some CC numbers standardized, others intentionally unspecified
  - CC1 = modulation wheel
  - CC7 = main volume
  - CC10 = pan
  - CC64= sustain pedal

**pitch bend**: intended to allow smooth bending of pitch for MIDI playback samples

- two data bytes: coarse and fine bend
- $2^{14}$ = 16,384 resolution values

**program change**: switch selected instrument

- one data byte: program number
- typically used to select a voice/timbre from a bank of 128 choices
- ex. having a device switch voices mid-phrase

**aftertouch**: further expressivity by applying additional pressure after keypress

- triggered by additional key pressure after the key has "bottomed out"
- channel after touch: one data byte for maximum pressure among several depressed keys
- polyphonic aftertouch: two data bytes for each note (note number and note pressure)

### General MIDI

An additional set of specifications released in 1991 to supplement and refine the original MIDI specification.

**GM-compatibility required**:

- 24-voice polyphony
- support for 16 simultaneous MIDI channels
- MIDI channel 10 reserved for percussion sounds
- 128 specific program change timbres
- 47 specific percussion sounds mapped to specific note numbers

## MIDI and Tuning

MIDI key numbers 0-127 define 11 octaves of the 12-[[TET]] scale.

- starts on `A00` (keynum 0 at 8.175 Hz)
- ends on `G9` (keynum 127 at ~12,543 Hz)

Every adjacent interval in TET is the same size: $2^{1/12}$ - the smallest interval in the Western [[tuning-systems]].
