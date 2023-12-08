---
title: "68060 Ethernet and SD card support"
created: 2019-11-06
categories: 
  - news
authors: 
  - mikej
---

Our resident coding genius Erique has been hard at work finishing off driver support for the DB. Source and the ROM binary can be round here : https://github.com/FPGAArcade/amiga\_code

Please also take a look at the FAQ here:

https://www.fpgaarcade.com/kb/how-to-install-and-setup-the-060-daughterboard/

 

The Ethernet (unlike some other solutions) relies on a 16 bit parallel interface MAC which sits on the '060 local bus. There is scope for improving performance, but first I want to increase the CPU frequency as high as possible. Many rev6 060s will work at 113MHz.There is a jumper on board to increase the core voltage by ~5% if necessary via the dedicated DC/DC driving the CPU.

Another question I've been asked...  We have 128MB of directly connected SDRAM, why not use DDR2/3, surely that's "faster". No. The SDRAM can burst read/write 4 words at the maximum speed the CPU can, so there is no performance gain by using a higher frequency (unless you want to share the memory with another controller - but we have the main board DDR memory for that). The real killer is read latency. If we put an FPGA bridge in the path, the reads would have to pass through the FPGA controller to the memory and back again. Admittedly the 060 on die cache solves this problem for many cases, but not all.  For R2 we will have very high speed memories on the main board, but I think I will still add an option for local SDRAM for this reason.

The picture below shows Erique's homebrew SD card adapter. This allows him to connect a logic analyzer while connected to the SD card .... and the board being in it's case. Neat!

![](@assets/images/IMG_20190925_222229-1024x768.jpg) ![](@assets/images/IMG_20191025_084521_3-768x1024.jpg)
