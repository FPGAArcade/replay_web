---
title: "Replay2"
created: 2017-11-08
categories: 
  - general
authors: 
  - mikej
image: "@assets/images/post/replay2.jpeg"
---

Over the years there has been a lot of frustration about the lack of Replay boards. The main issue was the lack of quality control on components from China which caused a lot of rework effort. In retrospect, we should probably have thrown these away and built new ones....

I've been working with some contacts and have now learned enough to get them manufactured and shipped in volume. While the current Spartan3E based Replay board is quite capable of running anything we can throw at it, it's getting harder to source components and the FPGA is not supported by the new Xilinx toolchain, so after a lot of discussion we've decided to move ahead and make Replay2.

Xilinx have been rather late producing the Spartan7 FPGA I've been waiting for, and other solutions such as the DE-10 SOC board are already shipping in volume at an amazing price. So why bother?

Well, I prefer to have a complete solution which has all the bits on we need, including decent quality analog outputs. I've used embedded Linux on FPGAs before, but I've gone for a lightweight solution here with a separate ARM. This is pretty cost effective and means the system is easier to get to grips with from both the software and core perspective. It also gives, in my view, a more uniform look and feel to the system across the cores.

The current replay board is still supported - all the board specific stuff is currently abstracted in the Replay support library, and this will be enhanced to support the additional PHYs and DRAM. We've kept the DDR1 memory as well so we can immediately run up the current cores (and focus on porting others)

It's currently being prototyped and the design is in PCB layout. I hope we will see it towards the end of the year.

/MikeJ

<figure>

![](@assets/images/post/replay2.jpeg)

</figure>