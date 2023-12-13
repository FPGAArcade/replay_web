---
title: "Arduino Vidor 4000 springs into life"
created: 2019-06-17
categories: 
  - news
authors: 
  - mikej
---

The very talented Arnim Laeuger has been working with our new Replay framework to bring his games to the Arudino Vidor 4000 FPGA platform (called V4 from here down)

The Vidor is a low cost FPGA board available here : https://store.arduino.cc/mkr-vidor-4000

To support the cores, the firmware which runs on the Replay1 board ARM can now be built for the SAMD21 within the Arduino IDE.

We have abstracted the FPGA framework and created a build system so that the same core can be built for the V4 and the Replay1 board, as well as the up-coming Replay2 board.

Here we have the Videopac core with KC Munchkin on V4

<figure>

![](@assets/images/post/V4-Videopac-1024x748.jpg)

</figure> 

And here Colecovision Frogger on the V4, with Frogger on Replay1's Videopac core in the small picture.

<figure>

![](@assets/images/post/V4-Colecovision-R1-Videopac-1024x811.jpg)

</figure>

Ignore the configured time here, we had a bug....

<figure>

![](@assets/images/post/IMG_20190515_122439-768x1024.jpg)

</figure> 

We've started to put some binary releases here on github here, https://github.com/fpgaarcade

Our aim is to include every FPGA game we can find (including lots of my own stuff which never made it onto Replay1) into this new framework and publish it asap.
