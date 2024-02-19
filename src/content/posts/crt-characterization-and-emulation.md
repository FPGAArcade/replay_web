---
title: "CRT Characterization and Emulation"
created: 2020-06-19
categories: 
  - general
authors: 
  - mikej
---

I think many people agree that retro hardware looks best on CRTs from the same period. The downside is CRTs are expensive, bulky and hard to get hold of now.

I've got a small Sony PVM I use for testing, and a large Sony broadcast monitor that is most often used as a coffee table to be honest. Modern screens have a different gamut (colour space) but the gamut is generally larger than the Rec601 EBU spec for the CRT.

<figure>

![](@assets/images/post/20200619_211849-scaled.jpg)

</figure>

I'm lucky enough to have access to some software from [Light Illusion](https://www.lightillusion.com) and a high-end probe on loan. I'm using Replay1 as a patch generator controlled by the calibration software over a serial link. This wasn't my initial plan, but it's almost impossible to get PAL analog video out a modern PC. Replay1 has a reasonable quality analog output stage, filter and line driver - but it's good to get any artefacts here included in the calibration.

I'm running an initial profile of the CRT at 80 nits, a little lower than usual, to stop any blooming. I'll then run a profile of a standard LCD with default settings, probably one of my Dell panels. One of the really cool things about the ColourSpace software is give these two datasets, it can then generate a LUT (look up table) which will make the LCD look like the CRT.  [https://www.lightillusion.com/3d\_lut\_guide.html](https://www.lightillusion.com/3d_lut_guide.html)

I can then profile the LCD with the LUT applied by the tool, and see how far off from the CRT it is.

This data can then be built into the FPGA framework and be available to all cores. It's likely a colour matrix and linear look up table will be sufficient, but I want to capture as much data as possible while I have the kit.

/MikeJ
