---
title: "Amiga core update - Blitter issues and chipset timing"
created: 2015-09-07
categories: 
  - core-updates
authors: 
  - mikej
image: "@assets/images/post/amiga500.jpg"
---

The AGA core is pretty stable now, but one issue which has been haunting me for ages is some blitter operations go wrong and leave garbage on the screen.

I've been working with Jim Drew, who pointed me at some source code released by DMA designs for Menace - Amiga Format issue 8 or 9 I think : [AmigaFormatIssue009](https://archive.org/details/AmigaFormatIssue009199004FuturePublishingGB300dpi)

This was a fairly simple sub-section of the game which showed how the parallax scroll worked. It also nicely exhibited the problem with my core. When you are debugging complex hardware, usually we use a simulator to see what's going on. It takes several minutes to simulate one frame of video (on bigger projects it can take hours) so it really helps to get as simple a test case as possible. The testbench I use can load in SREC files from the cross assembler directly into the DRAM in the sim, so I can run exactly the same software as on the hardware.

<figure>

![sim](@assets/images/post/sim.gif)

</figure>

To make sure the OS doesn't get in the way, I upload a simple bootstrap binary to 0xF80000 (where the Kick ROM would live) which jumps to 0x20000 in chip men - where I have also uploaded my test program and any resource files needed. The files are in the forum [here](http://www.fpgaarcade.com/punbb/viewtopic.php?id=232&p=34)

 

I took the Menace code, and kept chopping bits out, until I had the simplest possible case where the problem was still visible. Just blitting one tile over and over showed random corruption. I then saw in the simulator that the next blit was being started by the CPU before the previous one had finished. Odd - so how could this have worked on real hardware?

The author, David Jones, had a clever trick. DMA "nasty" was enabled, which stalled the CPU until the blit had finished, then the CPU would set up the next one.The problem with the core was we have 16 times the memory access slots as the original A500, and despite my best efforts the CPU was still getting in. I've just updated the core now which seems to resolve the problem. When in A500 or A1200 compatibility mode, the Gary module holds off any CPU access to chipset resources until a colour clock cycle (roughly 3MHz).  If a collision with a request from the DMA controller happens, the CPU is stalled to the next colour clock cycle - exactly as in the real machine. I also tweaked the soft CPU so it will only start cycles every 4 cycles (A500) or 2 clocks (A1200) mode.

When the system is put into "turbo" mode, these constraints are turned off and everything goes at full speed. As a result, Menace, Slamtilit AGA and Shadow of the Beast seem to work fine, although more testing to follow. I need to do a bit more tidying up, then back to the DVI / RTG (enhanced graphics card) work.

/MikeJ
