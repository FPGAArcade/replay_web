---
title: "Namco CUS34 - second mode."
created: 2023-07-06
categories: 
  - general
authors: 
  - mikej
---

I'm fully focused on Replay2 currently, but just a quick update on the Namco CUS34 replacement. I really wanted to complete the alternative mode used on ToyPop and Libble Rabble.

Using my 20 year old bit of vero-board, I can compare the replacement and real chip directly. The logic analyzer connects to both parts and dip switches let me isolate outputs from the replacement while still feeding it all the inputs. I worked out which pins where inputs/outputs and bidirectional first by isolating each pin and applying pull ups/downs.

I've got it all running now, and the advantage of this direct compare is that the analyzer can tell me if there are any differences at all between the chips, but also I can compare and tweak the timing. The CPLD used is way faster than the original and sometimes delay cells need to be used to add some hold timing. The disadvantage compared to reverse engineering the die is that I can only test functionality used in the game.

Now I understand what the chip does, I can put it back on the Zynq tester shown in the previous post and apply some unusual signals just to make sure it works correctly.

<figure>

![](@assets/images/post/20230704_230252-scaled.jpg)

</figure>

I've seen posts from a Japanese chap who has reverse engineered the die. Great job, but no source code as far as I can see yet.The code for this, along with all the other reverse engineer chips will be in the public R2 git repository, and used in our latest FPGA cores.

I've been shipping replacement modules for many years for the Namco28 pin chips (and other parts) so message me if you are in need. I have quite a few in stock currently.

Cheers,

Mike.
