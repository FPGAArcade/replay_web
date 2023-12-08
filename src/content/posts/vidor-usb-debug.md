---
title: "Vidor USB debug"
created: 2019-06-17
categories: 
  - news
authors: 
  - mikej
---

Here "Erique" the world renowned Amiga demo coder is doing some actual hardware debug. I think he got a bit over excited if I'm honest....

The Vidor currently has some limitations with it's USB OTG support, primarily connecting a hub doesn't work. This is rather useful if you want to connect both a keyboard and mouse simultaneously.

A parallel track is to add a MAX3421E which works correctly. This work is important in abstracting the way the ARM talks to the FPGA. For example on Replay1 the mouse and keyboard come in on ps/2 direct to the FPGA, but on Vidor for the moment they come in over USB through the ARM to the FPGA via SPI. The framework handles these differences transparently for the core.

This scales to the Zynq Ultrascale where the CPU and FPGA are on the same die, connected with a high bandwidth AXI interface.

 

 

![](@assets/images/IMG_20190613_233724-1024x768.jpg)
