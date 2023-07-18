---
title: "Steam Proton Shader Cashing"
date: 2021-06-17T00:31:18+02:00
draft: false
tags: ["Linux", "Gaming", "Proton"]
---

Disclaimer: This only works for NVIDIA cards!
=============================================

When I first tried out Steam's Proton support, I noticed that DOOM Eternal wasn't running smooth at all. I would be at a constant 75 FPS according to my FPS counter, but I still experienced a lot of stutters / micro lags while playing.

How I fixed the stuttering issue
================================

*   create a directory for the games to cache their shaders, e. g. /home/you/Shaders
*   declare the following environment variables:
    *   `__GL_SHADER_DISK_CACHE_SKIP_CLEANUP` and set it to `1`
    *   `__GL_SHADER_DISK_CACHE_PATH` and set it to the path of your earlier created shaders directory

However, this only fixes it for your current session. To make the fix persistent throughout system reboots, add these two lines to your `/etc/profile` file, respectively the file your shell uses.

It should look like this:

    export __GL_SHADER_DISK_CACHE_PATH=/home/you/Shaders
    export __GL_SHADER_DISK_CACHE_SKIP_CLEANUP=1


Explanation
===========

The problem is that [NVIDIA has a limit of 128 MB for its shader cache](https://devtalk.nvidia.com/default/topic/1032059/linux/opengl-shader-disk-cache-max-size-garbage-collection-/post/5251315/#5251315).

As there's no way to increase the cache size, we tell the NVIDIA driver to use deticated directories for each game to store shaders in instead of caching them.

**This also fixes the problem that Steam compiles VULKAN shaders everytime your launch a game via Proton**.

[Source](https://www.reddit.com/r/wine_gaming/comments/8ih53x/tutorial_how_to_reduce_stuttering_nvidia/)