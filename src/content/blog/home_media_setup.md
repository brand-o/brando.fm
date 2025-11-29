---
title: "My New Home Media Setup: Building a Clean, Automated Streaming Hub on the Beelink ME Mini"
description: "I used AI to set up my media center, and it worked like a charm."
pubDate: 2025-11-29
tags: ["project","media","tech","diy","home"]
---

# My New Home Media Setup: Building a Clean, Automated Streaming Hub on the Beelink ME Mini

I wanted to dive into the world of home media, but I didn't want to deal with the complexity of setting up and maintaining a media center. I also didn't want to deal with the hassle of setting up and maintaining a media center.

A critical part of my new home mini rack is the Beelink ME Mini. It's a small, fast, and efficient box that can do everything I'm wanting out of my mini rack in a nice small, power efficient package.

I've seen lots of guides on how to set up a media center, but they all seemed to be either too complex or too simple. I wanted something that was easy to set up, easy to maintain, and easy to use.

After seeing the non-stop hype over Proxmox, Jellyfin, and Home Assistant, I decided to give it a try. But I wanted to see if I could get everything running on one small box, and if I could get it to work without breaking a sweat or wasting an entire weekend.

I was determined to make this as simple to setup as possible. AI was my secret weapon. I used Google Antigravity, an agentic AI IDE (you can use pretty much any AI agentic IDE like Cursor, Windsurf, or VSCode), to help me set up everything. It handled the entire process, from setting up SSH keys to creating containers and configuring each service.


---

## Hardware: Beelink ME Mini

Everything runs on the Beelink ME Mini. It's not a powerhouse, but it's small, fast enough, super efficient, and handles the whole media stack with ease, along with being my router, NAS, and Proxmox host, including a Minecraft server, all at the same time.

This box hosts:
- Proxmox is the main VM host
- Jellyfin is the main media server
- qBittorrent is the main torrent client
- Sonarr is the main TV show manager
- Radarr is the main movie manager
- Prowlarr is the main indexer manager
- Bazarr is the main subtitle manager
- Portainer is the main Docker management UI

That’s it. And it's all automated once its setup.

---

## Setup: Letting AI Do the Heavy Lifting

Instead of manually setting everything up myself, I used **Google Antigravity** — an agentic AI IDE.

I simply provided the Proxmox IP, login, and password. It handled the entire process, from setting up SSH keys to creating containers and configuring each service. 

It got me 95% of the way there. I finished the last bit of tuning manually: paths, ip's/ports, and feeding API keys to each service.

---

## The Media Stack

Below is the full breakdown of each service, what it does, why it matters, and how it fits into the system. This is the exact setup running in my house right now.

---

### Jellyfin  
**Purpose:** Media server for movies, TV, and family videos.  
**Why it’s useful:** Fast, private, and lightweight. No subscriptions, no tracking, and it plays nicely with everything else in the stack.  
**How I use it:** Streams to TVs, tablets, phones, and laptops across the house.

---

### Jellyseerr  
**Purpose:** A clean front-end for requesting movies and shows.  
**Why it’s useful:** Anyone in the house can request content without touching the backend.  
**How it fits:** Sends requests directly to Radarr and Sonarr.

---

### qBittorrent  
**Purpose:** Torrent client.  
**Why it’s useful:** Handles all downloads for the automation loop.  
**How it fits:** Radarr/Sonarr feed it the files. It handles the rest.

---

### Radarr  
**Purpose:** Automated movie management.  
**Why it’s useful:** Finds, downloads, organizes, and files every movie you add or request.  
**How it fits:** Gets signals from Jellyseerr → passes downloads to qBittorrent → drops organized files for Jellyfin.

---

### Sonarr  
**Purpose:** TV show management.  
**Why it’s useful:** Same as Radarr, but for episodic content.  
**How it fits:** Keeps every show updated, properly named, and ready to watch.

---

### Prowlarr  
**Purpose:** Centralized indexer manager.  
**Why it’s useful:** Keeps all indexers synced across Radarr, Sonarr, and qBittorrent.  
**How it fits:** Ensures the automation doesn’t fail due to mismatched or outdated indexer settings.

---

### Bazarr  
**Purpose:** Subtitle manager.  
**Why it’s useful:** Automatically fetches subtitles in any language and fixes missing or bad subs.  
**How it fits:** Keeps Jellyfin’s playback experience clean, especially for older content.

---

### Portainer  
**Purpose:** Docker management UI.  
**Why it’s useful:** Makes it easy to update, restart, or tweak containers without SSHing into the box.  
**How it fits:** Acts as the “control panel” for all media-related containers.

---

## How Everything Works Together

Here’s the automation loop:

1. **Jellyseerr** → Super useful front-end library with tons of movies, and tv shows to dig through. 
2. **Radarr/Sonarr** → Fetch it automatically.
3. **Prowlarr** → Provides indexers.
4. **qBittorrent** → Downloads the content.
5. **Bazarr** → Adds subtitles.
6. **Jellyfin** → Makes it instantly available to stream from any device on the network.

Once it’s set up, it runs itself. I barely touch anything.

---

## Final Thoughts

This is the cleanest, most reliable media setup I’ve ever run. Everything is automated, everything is organized, and the Beelink ME Mini handles it with ease.

