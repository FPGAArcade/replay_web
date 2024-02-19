---
title: "Replay booted"
created: 2009-04-16
categories: 
  - general
authors: 
  - mikej
---

It's been a bit of a busy week, I was away for Easter and I am busy installing a kitchen, so I haven't had as much time as I would like to carry on with the board bring up. However, I've got a rough cut of the boot software optimised for the ARM. It's booting ok, flashing lights and talking RS232 - and I can access the filesystem on the SD card!

The next stage is to read the file Replay\\boot.bit and configure the FPGA with the on screen menu system.

<figure>

![boot](@assets/images/post/boot.gif)

</figure>