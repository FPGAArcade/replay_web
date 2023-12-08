---
title: "Replay RevB schematic complete"
created: 2009-11-20
categories: 
  - news
authors: 
  - mikej
---

Right, I'm back on the case. I've had quite a lot going on in my life, but things are settling down again now.

I'm involved with taping out an ASIC which has one of the biggest die areas in the world, so it's been very challenging and taken all my time. I've also got behind on some contract work, but thats all complete now so my focus is returning to the replay board. I'm also not starting any new contract work now until the Replay board is complete.

Status : 

Schematic for revB Replay is complete and being reviewed. I'll post this shortly.

PCB layout for revB is proving a bit difficult. I've placed all the optional components for the SVHS/composite out connector on the back of the board. This increases production cost, but only for the top-spec'd boards with this option and it is still cheaper than the separate daughter board. I hope to get the PCB layout complete by end November.

revA and revB boards are completely firmware (ARM software and FPGA code) compatible.

BSP (board support package) continues to be developed. This is near completion. The boot system works, you can drive the on screen display with PS2 keyboard and joystick. The memory controller is being tested. The migration to the larger ARM 7S256 has been done. 

So, still some work to do but I feel it is coming together now. Hopefully we can post some pictures of the Amiga core running on the board soon :)
