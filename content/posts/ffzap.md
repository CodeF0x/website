
---
title: "Ffzap"
date: 2024-11-18T22:58:30+01:00
draft: false
tags: ["Development"]
---

### Introduction

Recently, I had a lot of videos to re-encode to save storage space. After some googling, I found that there isn't a good way to run multiple FFmpeg processes in parallel or even perform batch processing efficiently.

Most solutions involved batch and shell scripts. Having to copy, paste, and potentially debug them didn’t satisfy me. Additionally, controlling output options like filenames, extensions, and directory structures is theoretically simple, but it often requires adjusting the script every time. Thus, the idea of **ffzap** was born. Initially called **MTC** (Multithreaded Transcoding CLI), I later settled on **ffzap** to highlight the two most important aspects of the tool: using **FFmpeg** under the hood and emphasizing **zap** (as in speed or quickness).

The tool is fairly simple, both in code and usage. 

Here's an example:

```bash
$ ffzap -i "~/Videos/YouTube/**/*.mp4" -f "-vf 'scale=1920:1080,fps=30' -c:v libx265 -preset medium -crf 23 -c:a aac -b:a 128k" -o "~/Videos/encoded/{{dir}}/{{name}}.mkv" -t 4
```

This command takes all videos in all subfolders of `~/Videos` ending in `.mp4`, re-encodes them as H.265 while changing the resolution to Full HD, the FPS to 30, and the audio bitrate to 128k. It runs 4 FFmpeg processes in parallel and saves all videos to a new directory, `~/Videos/encoded`, while preserving the original folder structure and filenames, but using MKV as the container format.

### The Code

From a coding perspective, it's quite simple.

I chose **Rust** as the programming language because:
- It compiles to small binaries.
- Its memory safety features make multithreading easier to manage.
- Its standard library covers all the requirements for this tool without the need for third-party libraries (with two exceptions, explained below).
- I wanted to gain more experience with Rust.

To parse arguments and provide basic CLI functionality, such as enforcing specific arguments and generating a `--help` command, I used `clap`. It's powerful and easy to use.

**ffzap** supports glob patterns, but the implementation is admittedly a bit clunky. You must provide your glob pattern as a string, which is then processed using the `glob` crate. In the future, I might release a version that removes this dependency altogether—at least for Unix-based systems (I’m unsure how globbing works on Windows).

The rest of the implementation is basic Rust. After identifying all files matching the glob pattern, a simple thread pool executes as many FFmpeg instances as specified with `-t <amount>`. The default is `2`.

The output templating system is a straightforward search-and-replace mechanism. Here’s a simplified example:

```rust
...replace("{{ext}}", path.extension().unwrap().to_str().unwrap());
```

### Conclusion

Creating **ffzap** was super fun. It’s a practical tool that supports a variety of use cases. Plus, it was a refreshing distraction from my usual frontend work, where multithreading, performance, and proper error handling for `stderr` aren’t typical concerns.

There’s still room for improvement, such as:
- Removing unnecessary dependencies.
- Optimizing the thread pool mechanism (locking and unlocking an `Arc` repeatedly can't be very efficient).
- Expanding the output templating syntax.

The code is hosted on [GitHub](https://github.com/CodeF0x/ffzap). Contributions are welcome!

Thanks for reading my ramblings—writing isn’t my strong suit, but I hope you found this interesting. 😄
