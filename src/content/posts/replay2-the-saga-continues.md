---
title: "Replay2 .... the saga continues"
created: 2019-02-04
categories: 
  - news
authors: 
  - mikej
---

So first, I must apologise for it being quiet here news-wise. The active development is mostly on Slack now, but I will try and post updates here more often.

  

So, Replay2 stalled. The issue was the excellent price/performance of the DE10 board (used in the Mister project) which is available for $130. While add on boards are needed, the total price is around $200 - and you get a very capable FPGA for this due to Intel's education discounts.

The device used on the DE10 is a Cyclone® V SE 5CSEBA6 which has 160K flops and a dual 800MHz A9 processor.

Comparing this with the FPGA on the Vampire V4 5E 5CEFA5F23C for example, 116K flops and no CPU, you realize what a bargain the DE10 is.

I waited a long time for Xilinx to release a low end 7-series device to compete with Cyclone V, Spartan7, and it became available last year. The XC7S75-2 device I selected, 96K flops and no CPU, was reasonable - but I did need a CPU. I selected the Artik710 module, however as layout was nearing completion it was EOL (end of life'd). Boo.

So, I was talked into giving the Xilinx Zynq another look. The XC7Z7020-2 has a 766MHz dual processor, so close, but only 106K flops. We would need to go to the XC7Z7030-2 to be just competitive with the DE10, and the pricing isn't there. Anyhow, it's old - launched in 2011 - and when compared with say the RK3399 SOC (2x A72 @ 2GHz, 4 x A54@1.5GHz, Mali-T864) for $20, it's extremely hard to look competitive.

The Spartan3E/6 devices are excellent value for money even now, but the toolchain has been frozen since 2013 - the newer tool only supports 7 series or later devices. This probably makes a lot of sense for Xilinx, but it means no system verilog support for my board, and it's hard to get people to use a "dead" tool.

However, as the original developer of FPGA games ...  
  
A simulation model of Pacman hardware  
Copyright (c) MikeJ - September 2002  

we don't give up easily. I'm in the process of designing Replay2 based on a Xilinx Ultrascale MPSoC device. This will offer a 64bit ARM A53 processor cluster, fast DDR4 memory and USB3. It's certainly overkill for the simple games, but it will enable us to make the most amazing Amiga and Atari cores, as well as opening the door to "hybrid emulation" where we run some CPU emulation on the ARM cores, and the backend in the FPGA. More details to follow as we firm up the design.

Finally, the last few 68060 Daughterboards - if you have a Replay1 board and you want to have the fastest 060 based Amiga around, let me know. I have a few spare still.

/MikeJ  

  
  

![](@assets/images/68060dbs.jpg)

The last 68060 DBs ready for shipping
