---
title: "Replay2 design nearing completion"
created: 2024-05-20
categories: 
  - general
tags:
  - replay2
authors: 
  - mikej
image: "@assets/images/post/replay2-block.svg"
---

I’m not doing very well at posting updates here, the Discord is where to be to get the latest gossip as we struggle to complete the design. The link below will work for a week, I’ll post another update after that.

https://discord.gg/UFHPxsMc

<figure>

![Replay2_Block](@assets/images/post/replay2-block.svg)

</figure>


We are out of NDA with Intel now and the Agilex5 info is publicaly available – as is the tool support. Anybody can get a license, zero cost. We have 10 chips for the prototypes waiting for the PCB now.

I’ll be honest, I had expected to get the board out to manufacture last month so we are running late – but it’s a very complex design and we are trying to keep costs down as much as possible, which makes the design phase and PCB layout harder.

Replay2 is a Mini-ITX board with a state-of-the-art Intel 7nm Agilex 5 FPGA. It’s very fast and low power. We have high speed DDR4 memory for the CPUs (64 bit A76s running at 1.4GHz). We have new IoT Hyperram running at 200MHz which offers low latency access for cores. We also have an SDRAM compatible with MiSTer FPGA cores – so porting is dead easy.

There are two versions – names to be decided, but let’s call them R2Phat and R2Lite for now. R2Phat has an FPGA roughly four times the size of the DE10-Nano used for MiSTer. Lite’s FPGA is more modest, but still somewhat larger than that Cyclone V. There is a multimode digital video out which can do at least 4K@60. There is a high quality 30bit analog VGA output and high quality audio codec with digital out. Both boards also have a removable eMMC module for mass storage.

R2Phat has a 2-lane PCIe M.2 slot for SSD, along with an optional compute module expansion slot which has 4x PCIe Gen 3, MIPI display interfaces, Ethernet and miscellaneous I/O. Originally this was going to be an RK3588 module, but we are also looking at a CM5.

Both boards have an M.2 slot for SDIO WI-FI/BT module and dual (front/back) swappable I/O modules for things like DB9 or SNAC controller inputs. There are lots of USB2 and Phat has a multi-mode USB-C connector.

Hopefully I can show you the final board in June.

/MikeJ