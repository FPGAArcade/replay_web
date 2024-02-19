---
title: "Libs and Pacmans"
created: 2015-09-06
categories: 
  - general
authors: 
  - mikej
---

I've been working on moving the existing (old) cores like Scramble and Asteroids over to the new Replay framework. While I was at it, I tidied up the library wrapper which has made the "plumbing" a lot simpler. I've started documentation and work on a webpage for this.

I also realized that my Pacman core was a little dated, other people had added Pengo and other variants to the hardware - so we needed to catch up, this is the original after all.

The Replay framework lets you easily change the ROM contents in an ini file :

ROM = roms\_pengo/ep1689c.8,  0,    0x00000000 ROM = roms\_pengo/ep1690b.7,  0,    0x00001000 ROM = roms\_pengo/ep1691b.15, 0,    0x00002000

The command ROM is followed by a file name, a size (or 0 for all of it) and an address to upload to.

If the top bit is set in the address, the data is routed to an internal bus and used for loading internal FPGA memories. In this case it goes to external DRAM.

The Pacman core is a good starting point to see how the library DRAM controller is used, as well as the block RAM init blocks.

I discovered Pengo has additional ROMs, but also (and it's not well documented) an additional SRAM

\--  vram  0x000-0x3FF --  cram  0x400-0x7FF --  ram   0x800-0xBFF << PENGO ONLY --  ram   0xC00-0xFFF

The game actually runs reasonably without this memory, so it took a while to find.

I also needed a way to enable/disable the extra Pengo features from the INI file (which also comes up as an option on the OSD - On Screen Display).

title  = "PacMan Setup"

item   = "Hardware",        0x0000000F,static option = "Pengo",           0x00000001,default

Here, config bit 0 is set high for Pengo hardware. Static means a core reset is required to change this (done from the OSD or by selecting a new INI file)

I've got a little work to do still for LizWiz and MsPacman.

This code is checked in and available on the public SVN.

/MikeJ
