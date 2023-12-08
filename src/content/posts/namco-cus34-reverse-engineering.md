---
title: "Namco CUS34 reverse engineering"
created: 2023-05-18
categories: 
  - news
authors: 
  - mikej
---

I've been shipping Namco CUS34 replacements for a while and the majority of the engineering work was done over 10 years ago. Reverse engineering the silicon by decapsulation of the die, taking pictures and manually tracing them is best way to understand what is going on, but it's very time consuming. Most of these chips are quite simple and have little internal state - but to make sure all paths are covered I've started to retest the chips using a little jig designed by my friend Wolfgang. This sits on top of an AMD Zynq board, and allows each pin to be driven and measured.

The test framework is written in Python, and then wavedrom (https://wavedrom.com/) is used to draw the waveforms.

[![](@assets/images/20230206_121314-225x300.jpg)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2023/02/20230206_121314-scaled.jpg)[![](@assets/images/capture_main_read-300x250.png)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2023/02/capture_main_read.png)![](@assets/images/logic_main_read-300x176.png)

Sometimes you need a bit more timing information, so a logic analyser is also hooked up. This lets me see which edges are used.

A month or so ago I thought all was good - and then somebody tries it in a ToyPop board... ToyPop and Libble Rabble use the Namco System 16 Universal hardware.

Unlike the other boards which use this chip - Dragon Buster for example - pin 13 is tied low rather than high.  This seems to put the chip in an entirely different mode. As far as I know, no schematics exist for these boards, so a brute force reverse engineering effort is underway.

[![](@assets/images/toypop-225x300.jpeg)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2023/05/toypop-scaled.jpeg)[![](@assets/images/cus34_logic-225x300.jpeg)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2023/05/cus34_logic-scaled.jpeg)[![](@assets/images/agilent_cus34-225x300.jpeg)](https://www.fpgaarcade.com/wp4/wp-content/uploads/2023/05/agilent_cus34-scaled.jpeg)

I dug out my old adapter board from 10 years ago. This let's me isolate each pin and with the logic analyzer - here the big Agilent 1680 - I can work out which pin is an input, which is an output etc.

I've got to fit this around Replay2 design work - more on that shortly, but I hope to be done soon - and I'll document it publicly.

/Mike
