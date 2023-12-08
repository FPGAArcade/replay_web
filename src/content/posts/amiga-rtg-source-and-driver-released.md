---
title: "Amiga RTG source and driver released."
created: 2019-10-29
categories: 
  - news
authors: 
  - mikej
---

Hi all.

We've released our RTG HDL files and Amiga driver code.

https://github.com/FPGAArcade/amiga\_code

https://github.com/FPGAArcade/replay\_amiga

This uses some primitives in replay\_common. This is just a code dump to support the other projects while we faff around.

I think it makes sense you reuse my code rather than do it from scratch.

I'm still working to get a huge amount of stuff released including support for the Arduino Vidor and Replay1 board.

Work progresses rapidly on Replay2 which is XIlinx Ultrascale MPSoC based and we will support the hardmac GPU from the Amiga hopefully.

Note, you don't need the blitter file (vbe) which may be harder to integrate. Blitter support can be disabled in the driver.

The M68K CPU (TG68K variant) will follow shortly which has all the cas2/cmp2 stuff implemented as well.

Travelling this week so response will be intermittent. Use the FPGAArcade forum if you want to get my attention.

Cheers,

Mike
