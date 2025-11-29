---
title: "Hosting My Entire Blog On A Phone Powered By A Single Solar Panel"
description: "How I built a budget-friendly, off-grid, always-on blog using a phone, solar panel, and a battery."
pubDate: 2025-11-04
tags: ["project","tools","tech","android","diy"]
---

# Hosting My Entire Blog On A Phone Powered By A Single Solar Panel

Being a tech enthusiast, I've always been fascinated by the idea of hosting a website on a phone. Mix that with my interest in solar technology, I thought the best way to combine the two was to build a blog that runs on a phone powered by a single solar panel. 

Figuring out how to do this on the cheap was the challenge. I wanted something that was cheap, reliable, and efficient enough to run 24/7.

## Hardware

### The device

The first step was to find a device that could host a website, but to be just powerful enough to balance between cost, performance, and energy efficiency. After considering some basic SBCs, or raspberry pis, I settled on a basic android phone. 

Most people don't realize how great these cheap android phones are. They're totally capable devices and can be found for a fraction of the cost of a common sbc, yet they contain a display, camera, a battery, and a cell radio. 

These phones can be found super cheap, the only decicing factor was finding one that was unlocked or could be easily unlocked to use with my free data SIM card (we'll get into more on that later). 

With lots of options, but few that fit the bill, I settled on the Moto Stylus 2025 from TotalWireless for $40. This phone was locked to Verizon carriers, but I was able to unlock it using a very easy process. 

### The power storage

To power the phone and keep it charged, I settled on a BLUETTI EB3A Portable Power Station. I found it cheap enough to justify the purchase, and it's a reliable, long-cycle, safe LiFePO4 battery.

I found it on eBay refurbished from the manufacturer for $105 shipped. By far the most expensive part of the setup, but this was a better option than a generic mobile phone battery bank that would cause hazard when exposed to heat.

BLUETTI EB3A Portable Power Station
-   600W output
-   268Wh LiFePO4 battery (reliable, long‑cycle, safe)
-   Accepts solar input directly
-   Provides pure sine‑wave AC and regulated DC

The EB3A acts as the buffer between sunlight and the phone. Even on
cloudy days, it keeps everything running.

### The power source

The final piece of the puzzle is the solar panel. I settled on a 195W bifacial solar panel. It's mounted at a fixed angle outdoors, and it charges the EB3A to full by midday. 

I found the panel at a local auction for $35. It works great for the project and I would even say it's overkill for the amount of energy I need.

ECO-WORTHY 195W Bifacial Solar Panel
-   Mounted at a fixed angle outdoors at 30 degrees for adequate year-round charging.
-   Consistently charges the EB3A to full by midday. 


------------------------------------------------------------------------

## Software

### On the phone

-   Termux\
-   Astro
-   SFTP server for pushing updates
-   Basic monitoring scripts

### Why Astro?
-   Super simple html only, all in markdown files.
-   Zero‑config HTTPS
-   Stupidly easy to run
-   Lightweight and perfect for ARM devices

### Storage

The blog itself is static files built on my main computer, then uploaded
to the phone. No database, no unnecessary overhead.

------------------------------------------------------------------------

## Networking

### The data

Helium Mobile is a free data SIM card that provides 3GB of data per month. This is more than enough for a blog, and it's totally free. It runs on the T-Mobile network, which is good enough for the location I'm in and it's fast enough to handle the blog traffic.

https://heliummobile.com/#plans

-   Enough bandwidth for a low‑cost blog
-   Zero monthly bill
-   NATed connection is fine since Astro phones home via a tunnel

The entire site tunnels through a lightweight reverse‑proxy that keeps
things reachable even behind mobile NAT.

------------------------------------------------------------------------


## Reliability

-   Survives grid outages\
-   Immune to ISP failures\
-   Runs silently\
-   Solar + LiFePO4 = extremely stable\
-   The phone's thermals stay cool inside its case

It's an always‑on, disaster‑resistant, low‑cost hosting solution.

------------------------------------------------------------------------

## Final Thoughts

This entire blog runs on a \$29 Android phone powered by a single solar panel and a BLUETTI EB3A. It's goofy and ridiculous, but it works shockingly well. 

If you want a resilient, off‑grid, ultra‑cheap hosting setup, this is probably the cheapest and simplest path.
