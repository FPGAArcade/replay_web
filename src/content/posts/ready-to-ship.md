---
title: "Ready to ship"
created: 2013-06-20
categories: 
  - news
authors: 
  - mikej
---

Price is 199Euro for the version without composite/SVHS output, 229Euro with.

Replay features :

Very large FPGA with high IO pin count for expansion 64 MByte of DDR memory Six layer PCB for high performance and stability 24 bit HD DAC with DVI / HDMI / VGA and legacy 15K monitor support Video line buffer / filter for highest quality output 24 bit / 192KHz audio DAC Flexible clock generator Small board size, fits in standard itx/atx case Lots of expansion for custom daughterboards or IO adapters (JAMMA for arcade cab use) Optional dual host USB with dedicated CPU for low latency Daughterboard with Ethernet, fast USB and optional 68060 processor being designed Designed from the ground up to support multiple platforms (Amiga, Atari and others)

Things were delayed slightly due to a quality issue on one of the power regulators. These are being replaced and the boards tested.

[![replay_box](@assets/images/replay_box.jpg)](http://fpgaarcade.com/wp4/wp-content/uploads/2015/06/replay_box.jpg)

 

This is the custom test jig used to speed up production test. A special FPGA design is used to wiggle all IO pins though loops on the jig and make sure they work as expected. The test suite runs margin tests on the DRAM and all other IOs are hooked up to verify they are working correctly.

[![replay_test](@assets/images/replay_test.jpg)](http://fpgaarcade.com/wp4/wp-content/uploads/2015/06/replay_test.jpg)

This is the optional dual host USB interface. Each interface supports a hub, so you can connect mouse and keyboard to the external port. The internal port is designed for cases with built in USB keyboard, but this can be cabled out to a connector if needed.

[![replay_usb2](@assets/images/replay_usb2.jpg)](http://fpgaarcade.com/wp4/wp-content/uploads/2015/06/replay_usb2.jpg)
