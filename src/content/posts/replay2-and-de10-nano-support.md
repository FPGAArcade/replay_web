---
title: "Replay2 and DE10-nano support"
created: 2020-06-19
categories: 
  - news
authors: 
  - mikej
image: "@assets/images/post/20200615_150601-scaled.jpg"
---

Sorry it's been a bit quiet here for the last few months. I had to move flat three times since January and all the retro kit has been in storage. Work has been intense and it's only the last week or two that life is calming down enough to get the Retro stuff back on track.

The initial plan was to launch our new board (Replay2) at the Revision demo party, but it was not to be. The Xilinx Ultrascale parts used on it arrived a few months ago, but the design and PCB layout is complex to say the least. Replay2 is an Mini-ITX form factor (170mmX170mm), so it can fit in standard cases. We have build options of 1 to 4GB of DDR4 memory on the processor system, and twin 8bit DDR3 128MByte memories on the FPGA. Digital video out, as well as 30bit analog RGB is provided, as well as a display port connection for developers. We also provide USB3.1, a PS/2 connector (supports Amiga keyboard protocol) and Gigabit Ethernet. There are also some exciting mass storage options. The device also has a GPU on board we intend to fully utilize both from the GUI and from the Amiga core.

<figure>

![](@assets/images/post/20200608_143832-225x300.jpg)

</figure>

<figure>

![](@assets/images/post/20200615_150601-225x300.jpg)

</figure>

The Replay framework is being updated to support the board. Currently the same core can (in most cases) be built for Replay1 using Xilinx ISE, Arduino Vidor 4000 using Intel Quartus and now Replay2 using Xilinx Vivado. Our build system and Jenkins CI handles all this and rebuilds all cores that need it when a git commit occurs.

The cores we designed were always open source, and many have been ported to other systems, most notably Mister based on the Terasic DE10-nano platform. You get a lot of FPGA for your money there, and Mister has been very successful. While Replay2 is the system that I want to own, it is going to be more expensive. I also don't always agree with some of the core changes which occur during "porting" (I'm a bit of a purist) and It occurred to me that we have already done most of the work needed by supporting the [Vidor 4000 board](https://www.fpgaarcade.com/arduino-vidor-4000-springs-into-life/). The SOC integration we need to do for Replay2 anyway, so we made a decision to support the DE10-Nano hardware and bring the Replay ecosystem to everybody.

I don't know how long this will take, but I expect to have the Amiga core with a new RTG running shortly. It's likely you will need to have a separate sd card, but it may be possible to run a different binary and coexist with the Mister designs. We have had many features for years that are only now appearing on other platforms, for example we have an ini file per core which configures the menu system and uploads all ROMs - so released binaries do not have any IP issues. We have a scalar under development as well, but it will take us a little while to catch up in other areas. The neat thing, is all this work to support DE10 is also applicable to R2 and we will of course add third party cores with the authors permission.

My aim since the first design releases (nearly 20 years ago) was to bring FPGA retrogaming to the masses, and I never thought it would become as mainstream as it has. Our code is currently being moved to github. Some of it is already available [https://github.com/FPGAArcade/](https://github.com/FPGAArcade/) and all designs will be public as soon as we sort out the licensing and finish tidying up.

/MikeJ

<figure>

![](@assets/images/post/pacman.gif)

</figure>