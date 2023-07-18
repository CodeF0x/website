---
title: "Fix Ark Proton Stuttering"
date: 2021-06-17T00:37:09+02:00
draft: false
tags: ["Linux", "Gaming", "Proton"]
---

Foreword
========

If you have an **NVIDIA GPU**, you can try my [other fix for stuttering games under Linux Proton](https://codef0x.dev/blog/posts/steam-proton-shader-caching.html). Maybe that fixes it. If that didn't fix it or you have an AMD GPU, keep on reading.

Editing ARK's launch options via Steam
======================================

Inside your Steam library, do the following:

*   right-click on ARK: Survival Evolved
*   click on "Properties"
*   paste `RADV_PERFTEST=aco %COMMAND%` in the input field below "Launch Options"
*   close out the window with the x-button

That should be it.

To be honest, I have no idea what this command does, but for me it fixed the stuttering issue completely (except when the game shits itself, but it's ARK so that's just normal behaviour).