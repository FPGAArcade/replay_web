---
title: "Analysis and a hypothesis"
created: 2021-09-28
categories: 
  - core-news
tags: 
  - vlm5030
authors: 
  - fangviech
image: "@assets/images/vlm5030_lfsr_async_rst.png"
---

What could cause that the [VLM5030 partially behaves non-deterministic](https://www.fpgaarcade.com/vlm5030-gate-level-design-validation-and-lock-step-comparison/) for certain frames? The usual suspects are incomplete reset and ...randomness. Lots of internal states / flip-flops aren't affected by the RST input, so that could be a cause for repeated execution of the same speech sample. The random source is not strictly random, however. It's an LFSR and as such it has a fixed sequence of 0s & 1s and is thus fully deterministic when starting from a known initial value. It's even reset by RST, so what could go wrong?

## Simulation

The issue is 100% reproducible in a controlled environment and the time slots of the variations are fixed. Ideal boundary conditions to take this back to simulation for further investigation.

<figure>

![](@assets/images/vlm5030_sim_destroy_gl_100ms.png)

<figcaption>Loading the registerfile slots with new frame data at 0x1FF8, write strobe by rflatchwen</figcaption>
</figure>

Simulation output above shows that the VLM reads the next frame from address 0x1FF8 at 104.5 ms. This frame loads 0x00 into registerfile slot 11 (`rf11[9:3]`) that stores the frame's pitch information. Pitch value 0x00 configures noise generation which makes use of the random generator (ref. [vlm5030.cpp](https://github.com/mamedev/mame/blob/7c721ed780a0be351b958543e2cece981c7827e3/src/devices/sound/vlm5030.cpp#L75) L.58). Time to take a closer look at this circuit.

## Design analysis and hypothesis

Revisiting [Randomness on a microscopic level](https://www.fpgaarcade.com/randomness-on-a-microscopic-level/), look at note at the bottom of the schematic that says "NOTE: Active RST shifts 0 into the LFSR." Contemplate on the term "shifts", it means that the LFSR is reset synchronously when RST is active. Coincidentally, the entire clocking system is halted during RST:

<figure>

![](@assets/images/vlm5030_sim_rst.png)

<figcaption>Derived VLM5030 clocks during RST sequence</figcaption>
</figure>

So no matter for how long RST is kept active, there won't be a clock to clear the LFSR.

Looks like the non-determinism might be caused by the missing reset of the LFSR when the speech sample starts. The LFSR itself is fully deterministic but its starting state is random at the time when the speech sample starts. The LFSR's current state is not controllable under real world conditions.

## Definition of experiment

What if the LFSR gets cleared at the beginning of a speech sample? This appears to be the original intention of the design.

The chip can't be changed of course, but we can run this experiment with the gate-level design.

<figure>

![](@assets/images/vlm5030_lfsr_async_rst.png)

<figcaption>Left: LFSR with synchronous clear. Right: Modification for asynchronous clear</figcaption>
</figure>

Running the asynchronous version in the test rig multiple times results in exactly the same waveform for each run.

Seems like the designers had everything in shape except for the indisposition to expect synchronous reset during a mode where all clocks are stopped. Does this mean the chip itself would also change to deterministic behaviour? Likely, but without actually changing the chip's logic we have a strong indication but not a proof.

## Conclusion

The chip produces different waveforms for noise frames when re-running the same speech sample. This difference is very likely caused by the LFSR in the random source:

- The LFSR chain is cleared synchronously by RST
- Clocks are disabled during RST
- Thus the LFSR's synchronous reset is not effective due to missing clock
