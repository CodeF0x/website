---
title: "Fix Lagging Darksouls3 Linux"
date: 2021-06-28T00:39:49+02:00
draft: false
tags: ["Linux", "Gaming", "Proton"]
---

The issue
=========

Dark Souls 3 can be pretty laggy when running with Proton on Linux. According to my FPS counter, it would run at a constant 60 FPS (it's locked to 60 by the game), but it didn't feel like 60 FPS at all. Sometimes I even had very noticable lag spikes.

The solution
============

To fix this issue, create a file called `dxvk.conf` in the root directory of your Dark Souls 3 installation.

It should look like this:

    DarkSouls3/
    ├─ Game/
    ├─ dxvk.conf


Now open the file and add `dxgi.syncInterval = 0` as its content.

Conclusion
==========

And that's it! Enjoy your smooth running game! When it comes to the FPS lock, there seems to be no way to disable it. Some users claim to have disabled it and the game completely shat itself (crashes, horribly broken game physics, etc.) and others even say that you get shadow banned. So if you want to make other players' life hard by invading them, get used to 60 FPS.

