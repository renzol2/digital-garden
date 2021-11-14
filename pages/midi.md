---
tags: midi music mus-407 electroacoustic
---

# MIDI

> MUS 407: Electroacoustic Music Techniques I

Full: **Musical Instrument Digital Interface**

Digital communication protocol enabling musical systems and instruments to exchange basic information about

- consists of discrete messages
- electrically transmitted as binary data
- capable of representing/recreating a musical performance

MIDI is ***not*** an audio signal

- It knows *nothing* about the actual sound it is playing - it simply knows the names of the instruments it is representing
- MIDI is *just data*, fully divorced from sound and can be extracted from musical performance to other use cases

## History

### Brief History

MIDI was created to accommodate a rapidly diversifying market of increasingly popular analog and hybrid synthesizers.

**Main problem**: users wanted to combine sounds from different models, play multiple synths simultaneously for a richer sound, etc.

Some analog-digital sound control protocols existed at the time, but there was **no industry standard** for inter-device communication

- Companies would make inter-communication protocols for *their own devices*, but any individual protocol was specific to that family of synths or devices.

**MIDI** was developed with coordination from multiple companies (Roland, Oberheim, Yamaha, Sequential Circuits)

- initially called the *Universal Synthesizer Interface* (USI) in 1981
- later was revised and publicly released in **1983** as **MIDI 1.0** and was quickly embraced by the music industry

MIDI messages consisted of a very small amount of binary data - an overall very small data footprint. Rather than a continuous stream of audio data, it's a relatively small handful of bytes.

- around 2-3 bytes per messages
- an ideal control protocol, especially by 1980s computer standards
- vs. digital audio: 2 bytes *per sample* = ~88 KB per second

MIDI is **still widely used today**.

- applications in DAWs, mixers, effects units, recording gear (MIDI Machine Control or MMC), video software, theatre/live events, lighting boards, water fountains, pyrotechnics, etc.

## Hardware

MIDI is both a protocol and a hardware specification.

Original hardware specification: **5-pin DIN connector**

![5-pin-din-connector](/images/midi/5-pin-din-connector.png)

Typical MIDI connections are male on both ends, though there are female-female connectors that allow for daisy changing.

MIDI hardware tends to be equipped with 5-pin MIDI ports (female jacks).

The `THRU` port on MIDI hardware immediately relays all data received at IN port facilitating device "daisy-changing" for simultaneous use.

Today, few modern devices use 5-pin connections. Instead, they rely on USB for data transmission (and often power supply).

MIDI can also be transmitted over Thunderbolt, Bluetooth, FireWire, Ethernet, etc.

### Examples

- USB-MIDI interfaces for connecting 5-pin gear with modern computers
- MIDI patchbays to manage interconnections on multiple devices

Connector pin numbering:

- on female connector, left to right:
  - 3, 5, 2, 4, 1
- on male connector, left to right:
  - 1, 4, 2, 5, 3
- data transmitted on pin 4, received on pin 5 (at 5V DC)
- pin 2 shield/ground
- pins 1 and 3 are *unused*
  - they serve to distinguish from XLR?
- MIDI-XLR adapters are possible
- uniqueness of 5-pin design meant to prevent erroneous connections

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

- more *musical*
- channel-specific
- more commonly encountered and frequently used
- contains information typically used for pitch, timbre, expression, etc.

**Channel voice**: individual musical data, e.g. note on/off, control change, pitch bend, etc.

**Channel mode**: general musical data, e.g. omni on/off, all notes off, mono/poly mode, etc.

#### System messages

- more *functional*
- not channel-specific
- used for global device configuration, bulk data transmission, device sync, manufacturer-specific functions

**System real-time**: prompts all MIDI devices for a response in real-time, e.g. stop, play

**System common**: prompts all MIDI devices but does not require an immediate response, e.g. tune, set, timeline position cue

**System exclusive**: reserved for manufacturer-specific functionality

### MIDI Message Format

A MIDI message consists of one or more *bytes*.

- 1 byte = 8 bits
- 1 bit = smallest digital unit, zero or one ("off" or "on)
- a UART chip (universal asynchronous receiver/transmitter) receives and processes binary signal into usable data
- MIDI messages sent at 31,250 bits/sec
  - exact division of 1 mHz to facilitate synchronization with early CPUs
  
### MIDI Message Example

Imagine we **press** and **release** a key on a keyboard controller.

**How many MIDI messages are generated?** *Two*. A *note-on message* when we press the key, and a *note-off message* when we release the key.

**How many bytes are generated?** *Six*. Each message contains three bytes:

- A *status byte* specifying message type and channel.
- A *data byte* specifying note number
- A *data byte* specifying note velocity

**In general**:

- every message consists of one status byte followed by zero, one, or two data bytes
- status bytes begin with a `1`, data bytes begin with a `0`

### Binary vs. Decimal Data

Every MIDI message starts with exactly one status byte followed by an arbitrary amount of data bytes.

Example:

- A MIDI Note On message starts with a status byte indicating that it is a 'Note On' message, followed by additional metadata such as key number, velocity, etc.

### Note-On Message, Deconstructed

```text
10010010

Breaking up into sections, starting from left:
1 -> indicates status byte
001 -> message type, 8 possibilities (001 = note on)
0010 -> message channel, 16 possibilities: 0010: channel 3 (0-indexed)
```

```text
00111100
Note number: 60 (decimal)
```

```text
01100101
Note velocity: 101 (decimal)
```

Be able to convert between binary and decimal numbers.

### Other Common Message Types

control change (CC)

- two data bytes: controller number and controller value
- sent by most knobs, fader,s and pedals
- typically used to affect note expression
- some CC numbers standardized, others intentionally unspecified
  - CC1 = modulation wheel
  - CC7 = main volume
  - CC10 = pan
  - CC64= sustain pedal

pitch bend

- two data bytes: coarse and fine bend
- $2^{14}$ = 16,384 resolution values

program change

- one data byte: program number
- typically used to select a voice/timbre from a bank of 128 choices
- ex. having a device switch voices mid-phrase

aftertouch

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
