---
title: "Bring up continues"
created: 2009-07-31
categories: 
  - general
authors: 
  - mikej
---

This week I have coded up the boot loader OSD. This took more time than I expected as a decent anti-aliased fixed space font is hard to find. I ended up writing some software which takes the output of Angelcode's font renderer and converts it into a suitable format for the FPGA. 

The OSD is up and running and I have implemented 576i, 480i, 576p, 480p, 720p and a few other standards so far. I am quite disappointed with the LG video scaling. When it has an analogue input the picture looks ok, I get the edges and all pixels are present. This is mainly due to my output filter which band limits the signal correctly. With the HDMI input however at 576i the outer edges are missing and single pixel vertical lines sometimes vanish. This is a sign of rubbish digital filtering. I expect the LG is about the same as other cheap flatscreen tvs and the scalar is something which is "cost optimized". Having said that, for normal pictures (i.e none techy test patterns) it looks fine, and 576i isn't officially supported over HDMI but it does work.

As most screens now are native 1920x1080 I'll see if I can get 1080p out of the board. Flat panels look much better when run at their native resolution. This means we need a 1920x1080 Amiga/Atari resolution output - or maybe half (960x540) may be more realistic and pixel/line double the output. I will do some eye pattern measurements on the DVI signals and check the noise level of the analogue outputs next week, but testing with a DVI->VGA->Scart cable into a normal CRT looks great.

I have also been knocking up a simple picture display application to test the DRAM. This would make the Replay board into a nice cheap photo player for your big screen TV.

Arnim has converted his Adventure Vision game and sent me a preview which works nicely over DVI and uses the joystick and audio out - so they work as well :) 

The next stage is to finish the protocol between the ARM and the FPGA and then move onto testing the DRAM. I also have to make a slight tweak to the board to fix a Chrontel DAC problem (and they don't answer my emails) and tidy up a few things. I have created the new board design already so this change won't cause any delays, I'll do a production directly from the new design as the changes are very minor.
