---
title: "Amiga roadmap and DDR memory fun"
created: 2015-10-07
categories: 
  - general
authors: 
  - mikej
---

Time for another update. Sometimes it seems things go a bit quiet here - while it's true September is a busy month with my other (money earning) activities, there has been a lot going on with Replay.

I've just finished the tweaks for the DDR controller needed for the vector games (Asteroids and StarWars) and the RTG graphics mode for the Amiga.

Now we can get 2 x 128bits per system clock (~8MHz) from the memory system, which is enough to run the CPU at full speed and decent resolution on the RTG. The RTG is fully written, including the driver, but there is still some work to do debugging the new code.

I've completed the Amiga cache system as well, but it requires some tuning to get timing closure still. This gives about x4 performance increase on the current core. The cache features prefetch which will read ahead of the CPU and try to keep the buffer as full as possible. For burst access, the memory system can keep up with the CPU, but I noticed today that it's possible for DRAM refresh to get locked out. I'm adding a mode (refresh panic) which asks the cache to hold off for a cycle while the DRAM catches up with the house keeping.

I'm still working hard to test and ship boards, and I'm heading to China shortly to see how the production run is going.

/Mike
