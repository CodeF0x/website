---
title: "Remove Youtube Statement Banner"
date: 2023-11-16T18:10:23+01:00
draft: false
tags: ["Internet", "YouTube"]
---

How to remove the Statement / Theme Banners from YouTube
===

![YouTube banner in question](/img/youtube-banner.jpg)

After years of these super annoying YouTube banners, I hacked together a little script that removes them from the DOM upon finding one.

To run this, you need to install something like Tampermonkey (available for Firefox and Chrome) and create a new userscript with the following code:

```js
// ==UserScript==
// @name         Fuck YouTube Theme banners
// @namespace    https://codef0x.dev
// @version      1.0
// @description  Removes YouTube Theme banners
// @author       Tobias "CodeF0x" Oettl
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==

(() => {
    // remove on initial page load
    removeBanner();

    const target = document.querySelector('#content');

    const config = { attributes: false, childList: true, subtree: true };

    const callback = (mutationList, observer) => {
        removeBanner();
    }

    const observer = new MutationObserver(callback);
    observer.observe(target, config);
})();

function removeBanner() {
    const banner = document.querySelector('ytd-statement-banner-renderer');
        if (banner) {
            banner.parentElement.removeChild(banner);
        }
}
```

If you found an issue or a way to make it not run a thousend times when you just hover your mouse about something, add a comment on [GitHub](https://gist.github.com/CodeF0x/4ae5d6bb10fc31c2beebcfd964a8815e).
You can also add a comment if the script stopped working due to YouTube doing some breaking changes.