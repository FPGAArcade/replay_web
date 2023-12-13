---
title: "It's-a me, Mario!"
created: 2021-04-26
categories: 
  - core-news
authors: 
  - hicks
image: "@assets/images/post/NES-Console-Set-scaled.jpg"
---

<figure>

![Nintendo entertainment system console with controller](@assets/images/post/NES-Console-Set-1024x556.jpg)

<figcaption>Nintendo Entertainment System - [Evan Amos](https://commons.wikimedia.org/wiki/User:Evan-Amos)</figcaption>
</figure>

There has been quite a lot of work going on in the background with the FPGA Arcade project, not the least of which is a host of new core releases.

As you may have guessed from the image, the NES is now available for the Replay and MKR Vidor4000 platforms. This version of the NES core includes a transistor net-list based 6502 by [Andrew Holme](http://www.aholme.co.uk/6502/Main.htm).

For FPGA capacity reasons, the Vidor4000 release of the NES has been split into 3 separate cores by mapper: MMC, VRC and Others, with PAL and NTSC versions for each. R1 users can enjoy all the mappers in a single core.

There's also been a number of new Arcade cores released including [Track&Field](https://www.fpgaarcade.com/kb/trackfield/) and its sequel [Hypersports](https://www.fpgaarcade.com/kb/hypersports/); [Tutankham](https://www.fpgaarcade.com/kb/tutankham/), [Time Pilot](https://www.fpgaarcade.com/kb/timepilot/), [Donkey Kong](https://www.fpgaarcade.com/kb/donkey-kong-2/) and more...

<!-- TODO: Gallery component based on list of image names -->
<!-- \[gallery ids="66653,66025,66721,66764,66436,66479"\] -->

Further information can be found in the [FAQ](https://www.fpgaarcade.com/kbtopic/all/) section. All the latest stable core releases for supported platforms are available for download from the [releases site](https://build.fpgaarcade.com/releases/) and if you're the adventurous sort, continuous development builds via the [CI build server](https://build.fpgaarcade.com/).

There's also a number of further exciting developments to share, but that's for a future post.
