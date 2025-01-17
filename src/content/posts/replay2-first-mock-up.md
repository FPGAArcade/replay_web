---
title: "Replay2 first mock up"
created: 2019-02-08
categories: 
  - general
tags: 
  - replay2
authors: 
  - mikej
---

<figure>

![](@assets/images/post/Replay2-1024x834.jpg)

</figure>

Very rough CAD drawing to play with IO connectors

Replay2 is now in PCB design. We are using a Xilinx Ultrascale+ MPSoC device which combines a fast FPGA and a 64 bit Cortex A53 cluster. The device is built on 16nm FinFET+ logic. The processor system runs up to 1.5GHz, and will have 64bit DDR4 memory (which can be shared with the FPGA). There will be an additional memory directly attached to the FPGA to give low-latency storage to the core.

We also get USB3, Gigabit Ethernet, Display Port (primarily to debug the CPU software), PCI Express/SATA which we may use for M.2 storage. Finally, depending on the device and pricing we get from Xilinx, we may be able to use a device which contains a Mali GPU.

The board is a mini-ITX form factor to easily fit in cases. We also have an expansion option, for a 68060 processor or alternative console IO connectors for example.

/MikeJ
