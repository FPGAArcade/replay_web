---
title: "Replay2, Vampire V4 and DE10-nano (MiSTer)"
created: 2019-06-17
categories: 
  - news
authors: 
  - mikej
---

I made some comments in a post here regarding FPGA selection for Replay2

http://www.fpgaarcade.com/replay2-the-saga-continues/

One of the reasons we have been targeting the Arduino Vidor board is to get a low-cost alternative for Replay1 for people to play with - that is actually available. The other reason was to force the restructure of our code and build a system where we could use a common library of components and target different hardware relatively easily. I think we have just about achieved this, and you'll see the results as the repositories go public.

Given the huge amount of cores available for MiSTer (based on the DE10-nano) board, there would be little point launching Replay2 unless we had a similar range of cores, and we are working to bring both our stuff and 3rd party cores into our framework. I've been approaching people asking if they are ok with this, and I've been receiving loads of stuff back - sometimes based on things I did years ago and forgot about (Asteroids is one example)

The DE10 board has skewed the whole market as it's an amazingly large device for a small price ~ 118 Euro. It contains a Cyclone V FPGA with about 160K flops and a dual core A9 ARM CPU.

The device on the Vampire V4 (an Amiga FPGA system)  is also a cyclone V containing about 116K flops, and no CPU. They have added DDR3 memory onto the FPGA - the MISTer has SDRAM plus DDR3 on the CPU side.

I don't know the price of the Vampire yet, but it's not easy making low volume hardware and I guess it will be 5 times or more the price for the DE10-nano. We have the same problem with Replay2. Not much point making another Cyclone V board, the market is kinda saturated. The Xilinx Zynq1 is slower/smaller and old, so the only real option is the Zynq ultrascale. This is a fast device, but expensive and currently all but the smallest device (2CG) will be too expensive. The 2CG is smaller than the CycloneV, but has DDR4 memory, display port and USB3 so it's still my favourite option.

The thinking being if people are prepared to pay for a Vampire 4 when MiSTer is available, there should be a market for a multi-platform Xilinx based platform.

The nice thing with the new build system is I can easily take a library module and run it through the tool to get an idea of timing. Here I ran my M68K core (TG68K derivative) thorough Xilinx Vivado.

<figure>

![](@assets/images/m68k_viv.gif)

</figure>

The CPU core runs with a single cycle cache at 28MHz in my Amiga design on Replay1. On the ultrascale it comes out at around 70MHz without any optimization so I think we can compete with the Apollo core used on the Vampire.

We are also looking at hybrid emulation - this is where the 68K emulation is done on the A53 ARM core, but also investigating RiscV and JIT 68K emulation on the FPGA.

The RiscV, with a little extra hardware support for EA calculation, looks to be suitable for running 68K code - and the CPU cores run at 200MHz plus in the FPGA, and connect directly to the AXI interface to DDR4 memory.

If Xilinx are being nice to us, I would like to use the 3EG Zynq+ which contains a GPU. The idea of an FPGA based Amiga with GPU graphics is quite interesting.

Another option we are investigating, and one which gives more bank per buck, is connecting a Kintex7 FPGA (which are available dirt cheap in China) to an RK3399 CPU. These CPUs are available for around $20 and have a far more modern GPU than the Zynq+ and dual A72 cores. There are also simplifications in software development by keeping the CPU and FPGA separate. The downside is we lose the close coupling of the FPGA and CPU - however one idea is to connect the Kintex to one of the processor DRAM controllers.

This is something I've done before in my teleco work. Essentially the FPGA pretends to be a DRAM, and the CPU reads/writes without noticing the difference - although slower than a real memory but far faster than using QSPI to communicate. This would allow similar bandwidth to the ZYNQ+ AXI interconnect (although with slightly higher latency), a more modern GPU and CPU, at a significantly lower price point. Crazy eh?

Simulation continues, but I do like the simplicity of the integrated Xilinx SOC. We also need to see what Intel are coming up with, the Cyclone V SOC is rather old now.

/MikeJ
