---
tags: compression music-technology music production notes
---

# Compressing for A Reason

Notes from Mike Senior's workflow demonstration of using [[docs/compression]] on a rock multitrack demo, titled [_Compressing For a Reason_.](https://www.cambridge-mt.com/ms/ch9/)

Compress and balance in **order of importance**.

- [Compressing for A Reason](#compressing-for-a-reason)
  - [Drums](#drums)
    - [Kick](#kick)
    - [Snare](#snare)
    - [Overhead](#overhead)
  - [Electric Bass](#electric-bass)
  - [Acoustic Guitar](#acoustic-guitar)
  - [Electric Guitar](#electric-guitar)
  - [Vocals](#vocals)
  - [Countermelody (guitar)](#countermelody-guitar)
  - [Piano](#piano)
  - [Overall](#overall)
  - [Sources](#sources)

## Drums

Compress only when necessary; you can always add more later

### Kick

- [[Kick]] and snare should be balanced in level
- Fast attack, slow release -> doesn't affect [[envelope]] too much
- Keep compression moderate -> preserve musical dynamics (see: [[dynamic-range]])
- RMS window size (how sensitive to peaks) should be decently high for kick drum
  - However, if too high, compressor causes distortion at the [[transient]]

### Snare

- Adjust attack of compressor to preserve the snare's "snap"

### Overhead

- Use compression to enhance sustain
- Release should be quicker to lift the tail of each hit
- RMS window size should be much larger to avoid suppressing peaks
  - Suppressing peaks on overhead mics can dry out the snare

## Electric Bass

- In rock, bass should provide **strong, consistent** low [[docs/frequency|frequency]] foundation
- Less peak sensitive, lengthen attack time -> keep rhythmic energy of bass
- Automate fills when bass does fills in higher registers

## Acoustic Guitar

- Assess what you want
  - percussiveness (picking transients) or
  - sustain (ringing of strings after picking)
- Use compression to achieve that goal

## Electric Guitar

- Distortion reduces [[dynamic-range|dynamic range]] by nature, so compression isn't always necessary

## Vocals

- When compressing, preserve organic performance nature while keeping balance consistent

## Countermelody (guitar)

Reasons

- notes are not balanced at all, going in and out of foreground
- compression cannot alter tonal characteristics without being driven hard; other effects exist for that reason (EQ)

## Piano

- Compression to contain transients, then use makeup gain to lift sustain of piano
- [[parallel-compression|Parallel compression]] used to maintain transients and bring out sustain
  - Compressor settings on compressed track
    - 1.0 ms attack
    - 30 ms release
    - 2.5:1 ratio
- In normal compression, it's easy to A/B by using makeup gain and bypass
- In parallel compression, toggling the parallel compressed track will always sound better since it's louder
  - Find a way to group the parallel tracks together so that you can have the volume similar to the dry signal

## Overall

- Dry/wet comparison: compressed version has better sustain, balance is more under control
- Initial balance should be achieved by [[gain-staging|gain staging]]
- Compression is used to _maintain_ and _control_ balance
- **Always compress for a _reason_**

## Sources

- [Mixing Secrets for The Small Studio Ch. 9: Compressing For A Reason](https://www.cambridge-mt.com/ms/ch9/)
