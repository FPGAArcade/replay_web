---
title: "68000 soft core debug"
created: 2010-04-28
categories: 
  - news
authors: 
  - mikej
---

The PCB house unfortunately made a mistake with the impedance control on the Replay boards. They have re-made them now and they are on the way to Beijing where I can rescue them. The Chrontel DACs have also arrived at the distributor and are making their way here. Some other parts I am still waiting for however.

I have been playing with the 68000 I have on a daughter board. I am using Chipscope, a Xilinx soft logic analyser. The idea is to verify the soft-core 68000 against the real chip.

One of the great things about using an FPGA for this is I can update the program code on the fly. The external 68K is reading the FPGA as if it is memory, and I have a test loop which loads all the registers, executes an instruction then dumps all the registers out again. The FPGA monitors all the access and compares to the softcore. It can also update the virtual ROM on the fly so I can run through a whole sequence of operations pretty fast.

Here you can see the 68K prefetch behaviour for a move instruction (click for a bigger picture). The yellow op-code is a move.l D0, $00010000 You can see it fetches the next instruction (4EF9 in green, a JMP) before it has written back the contents of D0 (in purple).

![68_prefetch](@assets/images/68_prefetch.gif)


