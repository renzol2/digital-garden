---
tags: compression
---

# Gregory Scott: Demolishing the Myths of Compression

The following are my short notes on this article on debunking common myths about [[compression]].

TLDR: All myths are related to the behavior of a compressor's **attack** and **release** parameters.

1. Attack is the length of time it takes a compressor to apply roughly two-thirds of the targeted amount of gain reduction
2. Release is the time it takes a compressor to restore two-thirds of the reduced gain to the compressed signal
3. Once a signal is over the threshold, both attack and release are _constantly_ at play; it's not only when the signal crosses the threshold
4. While compressors generally reduce dynamic range, the attack and release parameters can be adjusted to do the exact opposite effect (for creative and practical use).
5. Compression make sounds _denser_. Density can be used to make sounds both big and small; the goal is make each sound as dense "as necessary to transmit emotion... and no denser".

## Myth 1

> Myth #1: Attack is the time it takes for a compressor to begin compressing once a signal crosses over the threshold.

The above definition is commonly cited as a definition of attack, but it is incorrect. The correct definition of attack (Gregory Scott):

> Correction: Attack is the length of time it takes a compressor to apply roughly **two-thirds** of the targeted amount of gain reduction

This definition leads to a few things:

- a compressor begins compressing as soon as a [[audio-signal|signal]] crosses the [[threshold-drp|threshold]]
- attack is not a delay before an action occurs, or a measurement of time
- rather, attack is a _rate_; a measurement of the speed at which gain reduction is occurring

## Myth 2

> Myth #2: Release is the time it takes a compressor to release compression after the signal drops below threshold

Similar to last myth, here is the correct definition:

> Correction: Release is the time it takes a compressor to restore two-thirds of the reduced gain to the compressed signal.

- every [[decibel|dB]] of gain a compressor takes away, it must put back
- release this process of "gain restoration"
- the faster the release, the faster the compressor restores gain

## Myth 3

> Myth #3: A compressor won’t release until the signal drops below the threshold

In reality, attacking and releasing are the only two things a compressor can do.

- or: any time the gain reduction meter on a compressor is moving, it is either attacking or releasing the signal
- simple debunk:
  - feed an audio signal through a compressor such that there is a constant amount of reduction, ex. 6-12 dB
  - change the attack and release knobs as the signal is playing
  - if the myths were true, these knobs shouldn't do anything; but they do

## Myth 4

> Myth #4: Compression reduces dynamic range

Usually true, but not always.

> Correction: Yes, a compressor can and does push down on the loudest stuff. But no, that doesn't mean the dynamic range is automatically reduced.

Simple debunk:

- feed a drum loop (or drum buss) through a compressor
- set a medium to high ratio, slowest attack, and fastest release
- dig the threshold in hard
- the loud stuff stays just as loud (for a shorter time), while the quiet stuff is quieter, resulting in an _increased_ dynamic range

The above technique is often used on drum busses for a combination of [[buss-compression|buss compression]] to enhance [[transient|transients]] and blending with the dry signal using [[parallel-compression|parallel compression]].

## Myth 5

> Myth 5: Compression makes sounds bigger

TLDR; Compression make sounds _denser_. Density can be used to make sounds both big and small; the goal is make each sound as dense "as necessary to transmit emotion... and no denser".

Quote involving Michael Brauer from Mix With the Masters:

... pushing a sound into a compressor is like pushing an object into a stretched rubber band. The harder you push the object, the more the rubber band pushes back. Michael listens for the point where there’s a musical push-pull movement and the comp feels springy and flexible.

Not pushing enough results in too little resistance – no interesting movement. But push too far and the rubber band loses its elasticity and becomes stiff – the sound loses its life. What’s more, **when you push too hard into a compressor the sound becomes small.**

> That means attuning your ears to the proportionate spaces around each tone like the curves and twists of the pieces in a jigsaw puzzle, filling up the spectrum where necessary while preserving enough dynamics to allow the sounds, and with them the entirety of your mix, to breathe – to have air around the elements such that you feel the impact when those spaces contract and the sounds collide.
> Everything in a mix must be shaped with complete awareness and respect for every other piece in the puzzle… or it won’t fit. It won’t assemble into the vivid picture that the song wants to be – a gripping story the listener wants to surrender to from start to finish.

## Sources

- <https://www.attackmagazine.com/features/columns/gregory-scott-demolishing-the-myths-of-compression/2/>

[//begin]: # "Autogenerated link references for markdown compatibility"
[compression]: compression "Compression"
[audio-signal|signal]: audio-signal "Audio Signal"
[threshold-drp|threshold]: threshold-drp "Threshold (DRP)"
[decibel|dB]: decibel "Decibel"
[buss-compression|buss compression]: buss-compression "Buss compression"
[transient|transients]: transient "Transient"
[parallel-compression|parallel compression]: parallel-compression "Parallel Compression"
[//end]: # "Autogenerated link references"