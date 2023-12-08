---
title: "Amiga AGA core stable release"
created: 2016-02-26
categories: 
  - core-news
authors: 
  - mikej
image: "@assets/images/amiga500.jpg"
---

I've released a new version of the Amiga core ([https://github.com/FPGAArcade](https://github.com/FPGAArcade/replay_release)).

New features :

48M XRAM mapped as Chip and all chipset DMA pointers support 64M addressing (optionally enabled in OSD / .ini file)

CPU cache stable - 2 way I + D with full snoop. ~16000 AIBB Dhrystones

Filtered & Mono audio

RTG over analog/DVI/HDMI with hardware sprites and dedicated blitter engine.  1024x768 at 16 bit, 1280x1024 at 8 bit.

(1920x1080i works over analog but not digital for some reason at the moment)

Real Amiga keyboard support (thanks to Erique)

I'm going to spend some time now updating the website and working on the AGA debug hardware so we can further improve compatibility. I also have some CPU upgrades in the pipeline which will allow x2-x3 speed up hopefully.

/MikeJ
