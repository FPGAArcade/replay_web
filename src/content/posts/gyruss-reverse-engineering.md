---
title: "Gyruss reverse engineering"
created: 2019-02-12
categories: 
  - news
authors: 
  - mikej
image: "@assets/images/gyruss-1.png"
---

<figure>

![](@assets/images/gyruss-1.png)

</figure>

Here at FPGAArcade we've always tried to reproduce retro hardware for preservation as accurately as possible. When I did the first Pacman design years ago it was quite easy as there were only a few custom ICs. I built some analysis hardware you can find way back in the news here to compare the ASIC with my CPLD clone on the board in real time.

We have an extensive library of accurate replacements for the custom ICs on many boards. I produce CPLD modules which can be used to fix real arcade games - they are that accurate. This library is migrating to public github along with the rest of my designs asap.

I was lucky enough to be able to borrow a Gyruss game a few months ago and test the code. I decided to manufacture a 40 pin CPLD module to repair the board as well - although I've been waiting for it to clear customs here in Sweden for 3 weeks now :(

In the picture below, I'm using a Replay1 board with it's debug daughterboard. This proves 5V isolation. Inside the FPGA I'm running the replacement design and a logic analyser core which compares all the IO in real time against the target board. Once the design is well understood, I can replace the custom ASIC with my CPLD board running the same code and see if it still works. Then we can produce an FPGA version of the complete game.

<figure>

![](@assets/images/Gyruss_debug.png)

</figure>

Modern and retro hardware in perfect union

<figure>

![](@assets/images/cpld40.gif)

</figure>

The 40 pin CPLD module which can be used to repair old boards (Konami 503)
