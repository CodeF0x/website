---
title: "Import Witcher 3 Savegame Linux Proton"
date: 2021-07-04T00:41:03+02:00
draft: false
tags: ["Linux", "Gaming", "Proton"]
---

Import Witcher 3 save games from GOG to Steam in Linux Proton
============================================================

I recently bought Witcher 3: The Wild Hunt on Steam and wanted to import my savegames from the GOG version. In Windows, that's easy: install the Witcher 3 on Steam, boot it up and press continue; your savegames will be there, as they're saved in `Users\you\Documents\The Witcher 3` and both games use that location to store their savegames at.

When playing Witcher 3 via Proton... that's different.

Import your save games
=====================

So, here are the steps:

*   copy the complete `gamesaves` directory from your previous Witcher 3 installation
*   remember the Steam ID of the game: `292030`
*   locate your Steam library. Per default, it's at `~/.steam/` or at `~/.local/share/Steam/`
*   go to `your-steam-library-path/steamapps/compatdata/292030/pfx/drive_c/users/steamuser/My Documents/`
*   create a directory `The Witcher 3`
*   copy your save games directory `gamesaves` to the newly created `The Witcher 3` directory

And that's it!

With the next restart of the game, your save games are ready to load.