---
title: "Extract, reconstruct, simulate ... repeat"
created: 2021-09-08
categories: 
  - core-news
tags: 
  - vlm5030
authors: 
  - fangviech
image: "@assets/images/vlm5030_clocks.png"
---

[![VLM5030 die, highlighted ROMs](@assets/images/vlm5030_rom-150x150.png)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2021/09/vlm5030_rom.png)

When I started to search for the [random generator](https://www.fpgaarcade.com/randomness-on-a-microscopic-level/) the first challenge was the decision where to begin with. Looking at the [die](https://siliconpr0n.org/archive/doku.php?id=ogoun:vlm5030), there are not many landmarks that provide clear guidance. The ROMs are quite prominent due to their regular structure, but they don't have a direct relationship to the random generator. Furthermore, the purpose of two of the three ROMs was entirely unclear.

[![VLM5030 die, highlighted pad ring](@assets/images/vlm5030_pads-150x150.png)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2021/09/vlm5030_pads.png)

Next on the list of obvious items are the pads of course. They neatly follow the DIP40 pin-out and are assigned to functions in no time. Should I start off from the data or address bus? That would mean to dig through data paths whereas I expected the random generator to be located in a processing or calculation block. Somewhere in the middle between K-factors and final PCM output. With potentially deep logic cones on either side, not an appealing idea. I briefly considered entering the design via the few control pins, but the perspective to untangle piles of potentially complex control logic wasn't appealing at all.

[![VLM5030 OSC1 and OSC2 surrounding the oscillator circuit](@assets/images/vlm5030_osc-150x150.png)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2021/09/vlm5030_osc.png)In the end I decided for tracing the clock tree first. That's a single source signal, easy to identify from the pads, and - if Sanyo designed a reasonable clock system - fans out to all function blocks. I also hoped that the logic in the clock tree is less complex and that the purpose of such logic is easy to understand.

The OSC2 pin feeds directly into the clock generation system where the 3.58 MHz clock is divided by 2 before being used anywhere else. Identifying the divider was my first lesson in tracing logic from the die shot. After much back and forth I figured that all these polygons are just standard logic gates - and that they actually make sense. I mean, it's located in the center of the die, and a /2 divider can be expected at the clock tree's root.

\[caption id="attachment\_67229" align="alignright" width="150"\][![Transistor-level circuit of the OSC2 clock divider](@assets/images/vlm5030_clk2div_schem-150x150.png)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2021/09/vlm5030_clk2div_schem.png) OSC2 /2 divider\[/caption\]

Curiosity was fueled enough to tackle further gates in the neighbourhood to the divider. This time I faced a number of flip-flops - they look different than the logic gates but once I understood the concept of 2-phase clocking and latch/feedback topology, they turned out to be positive edge triggered D-type registers arranged in a shift chain with feedback. Not too bad for starters, but isn't that a bit too easy? Let's build it a VHDL model and check the extracted circuit in simulation. The waveforms from simulation backed the extraction result: That shift chain generates 10+ staggered clocks.

\[caption id="attachment\_67227" align="aligncenter" width="1024"\][![Simulation waveforms of VLM5030's derived clocks](@assets/images/vlm5030_clocks-1024x317.png)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2021/09/vlm5030_clocks.png) Core clocks of the VLM5030, clk2 is oscillator /2\[/caption\]

Step by step I paved my way through the design (still searching for the [random source](https://www.fpgaarcade.com/randomness-on-a-microscopic-level/)):

1. Extract the gates of a sub-circuit
2. Reconstruct the sub-circuit as a VHDL model based on the extraction result
3. Simulate the model to examine its behaviour and to validate the extraction
4. Repeat with the next sub-circuit

At the point when the random source had been identified, I looked back at quite a collection of models running nicely in simulation. Should I stop here or keep on moving until I would hit a wall maybe?

**TLDR;** I decided to continue, repeatedly cycled through above steps and didn't hit any walls. The VLM5030 gate-level replacement is available at [FPGAArcade's github repo](https://github.com/FPGAArcade/replay_common/tree/master/lib/sound/vlm5030).
