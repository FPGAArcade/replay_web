---
title: "Last Replay1 shipped...."
created: 2019-02-17
categories: 
  - general
authors: 
  - mikej
image: "@assets/images/post/20190217_190845.jpg"
---

<figure>

![](@assets/images/post/20190217_190845-1024x576.jpg)

</figure>

The final complete R1 & 68060 DB to ship

Well, actually the last (I thought) Replay1 shipped years ago, but I've had one sitting around which failed production test. When a core boots up, the ini file for that core tells the software which files to upload into the FPGA, and optionally these can be read back to verify everything is working correctly.

The system uses the same mechanism at start-up to check the DDR memory is behaving itself. This particular board was unique in failing this test.

2.827: \[config.c:2095\] tDirScan allocated: 7936 bytes  
2.929: \[fpga.c:363\] FPGA:DRAM enabled, running test.  
WARN: !!Match fail Addr: 0  
2.932: \[messaging.c:270\] DumpBuffer: address = 0020ea78 ; size = 128 (0x80) bytes  
2.940: \[messaging.c:316\] 0x00000000: 0004FFFF FFFF0004 FFFF0004 0004FFFF

3.000: \[fpga.c:393\] Should be:  
3.009: \[messaging.c:270\] DumpBuffer: address = 0012d2c4 ; size = 128 (0x80) bytes  
3.011: \[messaging.c:316\] 0x00000000: 0000FFFF FFFF0000 FFFF0000 0000FFFF

<figure>

![](@assets/images/post/20190217_153746-1024x576.jpg)

</figure>

I had already replaced the DRAM chip and it hadn't fixed the problem. An old tip is to press down hard on the BGA - and suddenly it was all good. With little to lose (apart from maybe setting fire to my office) I gave it a good roasting with the hot air gun. 300C for a few minutes seems to have done the trick.

It's been on soak test all day and seems ok, so now I've cleared my desk it's time to bring Replay2 into the world.

/MikeJ
