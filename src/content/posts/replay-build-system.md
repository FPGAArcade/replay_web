---
title: "Replay build system"
created: 2019-06-17
categories: 
  - news
authors: 
  - mikej
---

Coming from an ASIC background, I generally don't use the FPGA tool IDEs. Sure they have a place for debug, but for consistency especially when using source control systems, scripting is the way forward. Both Intel and Xilinx have good support for TCL in their tool chains, but I find this a bit cumbersome.

I've built a set of python scripts called rmake, which can be used to both simulate and drive the FPGA vendor tools with minimum pain. It also makes it really quick to play around or add new cores.

If we look at Loader, a simple reference design which uses the Replay framework. This core shows how to provide an OSD (on screen display) over a video background picture stored in DRAM. It can also play audio samples from the sd-card, a path which is more commonly used for hard / floppy disk emulation.

These are all the source files in the core/rtl directory:

<figure>

![](@assets/images/post/loader_files.gif)

</figure>

\_src.txt contains  :

loader\_video.vhd loader\_top.vhd core\_pack.vhd core\_top.vhd

and \_deps.txt:

\[R1\] replay\_common/replay\_targets/R1 \[V4\] replay\_common/replay\_targets/V4

 

The support files which are common to all cores are in the replay\_common repository. The \[R1\] and \[V4\] allow changes based on the build target.

From the core directory I can do :

rmake sim  which will create a local work directory and compile all the files for Intel Modelsim

rmake ise --target=R1  will call the Replay1 XIlinx ISE flow and produce an FPGA file

rmake qrt --target=V4 does the same for Intel Quartus for the Vidor 4000

and we can also rmake viv for Xilinx Vivado, targeting the Zynq Ultrascale currently.

<figure>

![](@assets/images/post/ladybug_build-1024x654.gif)

</figure>

Cool eh?

 

Having the same build system for simulation makes it really easy to test the cores. The build system has /tb directories for each target which include a model of the board including DDR (Replay1) or SDR (Vidor) memory and can capture and store the video output to a file. Here is the result of simulating one frame of the Loader core :

<figure>

![](@assets/images/post/vga.gif)

</figure>