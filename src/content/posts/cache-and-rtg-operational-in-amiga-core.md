---
title: "Cache and RTG operational in Amiga core"
created: 2016-01-21
categories: 
  - core-news
authors: 
  - mikej
image: "@assets/images/post/amiga500.jpg"
---

A lot of work has been done both on the CPU to increase compatibility, and the core to get the cache working and timing closure.

The design is completely constrained and this results in a very stable platform

Latest features:

2K Instruction plus 2K Data cache with full chipset snoop on both.Performance is around 11.3 mips / 10800 dhrystones with sysinfo 4.0.

The RTG dedicated blitter is working, and this coupled with the fast hard disk speed makes the system feel highly responsive.

 

I've added some modes to the scan doubler to help DVI monitors work.

Low pass filters on the audio (optional).

HRTMon cart working again with custom & cia shadow and full VBR support. Config is editable from the .INI file.

More details on the forum.

/Mike
