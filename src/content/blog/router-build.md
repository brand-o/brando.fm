---
title: "Building a High-Performance OPNsense Router on the Beelink ME Mini"
description: "How I replaced my home router with a Proxmox-powered OPNsense box and automated the entire setup with AI."
pubDate: 2025-11-29
type: project
tags: ["networking", "router", "opnsense", "proxmox", "automation", "ai"]
---

# Building a High-Performance OPNsense Router on the Beelink ME Mini

I finally got tired of babying consumer routers and pretending I didn’t know better.  
I wanted more speed, more control, real ad-blocking, a whole-home VPN that didn’t demolish performance, and something I could actually trust long-term.

So I took the Beelink ME Mini I already had in my rack — the one with **dual 2.5GbE**, plenty of CPU overhead, and zero thermal drama — and decided it was time to build the router I should’ve had from day one.

This is why I did it, how I set it up, and how I used AI to automate almost the entire thing so I don’t have to click a hundred buttons every time I make a change.

---

# What I Needed

- Full control of my network  
- Better speed than I was getting from the TP-Link BE9300  
- Whole-home VPN with zero “my Netflix doesn’t work anymore” nonsense  
- Real ad-blocking and DNS filtering baked in  
- Stable, predictable routing  
- Easy VLAN support  
- Enough horsepower to handle future upgrades (multi-gig fiber, more devices, etc.)  
- Something I can manage without logging into a sketchy cloud app  
- Automation hooks so I don’t spend my weekends in web dashboards

---

# Why OPNsense on Proxmox Made Sense

I had options: pfSense, OpenWrt, VyOS, raw Linux, whatever.

But after going down the rabbit hole, **OPNsense** was the clear winner for what I’m doing:

- Clean UI  
- Massive plugin system  
- Painless WireGuard  
- Easy ad-blocking with blocklists  
- Great performance on x86  
- Simple to automate through API + SSH  
- Huge community  
- Runs perfectly in a Proxmox VM

Pair it with the **Beelink ME Mini** and its dual 2.5GbE ports, and you’ve got a better router than almost anything under $600 in the consumer world.

The TP-Link BE9300 isn’t going to waste either — it’s now my dedicated access point. No more letting it make routing decisions.

---

# The Hardware Layout

- **Beelink ME Mini** → Main router (OPNsense VM)  
- **Port 1 (2.5GbE)** → WAN → Modem  
- **Port 2 (2.5GbE)** → LAN →  Ubiquiti Switch Flex Mini 2.5G
- **Ubiquiti Switch** → TP-Link BE9300 (Access Point Mode)
- **Proxmox** handles the VM, snapshots, backups, and updates

This gives me:

- Multi-gig routing  
- Clean separation between routing and Wi-Fi  
- Full control over VLANs  
- Future-proofing for faster service later

---

# The Automation Approach

My goal wasn’t “click through OPNsense once and call it good.”

I wanted this thing to be **as hands-off as possible** without getting stupid or compromising security.

So I built a pipeline that looks like this:

1. **Generate the VM and network config in Cursor/Windsurf** using a few master prompts  
2. **Push configs to Proxmox over SSH**  
3. **Proxmox auto-creates the VM** with the right network bridges, CPU, and storage  
4. **Cloud-init preloads my OPNsense base config**  
5. **First-boot scripts apply blocklists, DNS config, WireGuard, and basic firewall rules**  
6. **Monitoring scripts run on a schedule** to keep logs clean and DNS lists fresh  
7. If something breaks:  
   - I have **version-controlled templates**  
   - A **snapshot**  
   - And a **button that rebuilds the entire router in under 5 minutes**

AI isn’t replacing security — I’m just offloading the tedious stuff.

---

# The Prompts I Used

Here’s one of the core prompts I drop into Cursor for generating Proxmox + OPNsense automation:

```
You are configuring a Proxmox VM that will serve as my primary router.
Generate:
- qm commands to create a VM with the OPNsense ISO
- network bridge setup for vmbr0 (WAN) and vmbr1 (LAN)
- cloud-init template for initial OPNsense config
- SSH key injection
- first-boot shell script that:
  - enables WireGuard
  - installs ad-blocking blocklists
  - configures Unbound DNS
  - applies my default firewall rules
  - enables API access
Everything must be idempotent, safe, and minimize the attack surface.
```

Another one for auto-updating lists:

```
Write a hardened shell script that:
- refreshes Unbound DNS blocklists
- flushes cache
- reloads DNS
- logs actions
- fails safely
- can be run via cron
```

And a third for monitoring:

```
Generate a lightweight monitoring script for OPNsense that:
- checks CPU, load, and memory
- alerts on VPN status changes
- logs failed firewall attempts
- sends results to my central dashboard
Optimize for low resource usage.
```

These aren’t “AI taking over my network.”  
They’re AI doing the repetitive work that humans always mess up anyway.

---

# Speed and Performance

The combination of:

- Multi-gig ports  
- x86 CPU  
- Dedicated access point  
- WireGuard instead of OpenVPN  
- Unbound DNS instead of ISP defaults  
- Actual firewall rules instead of whatever TP-Link thought I needed  

…all adds up to a network that finally feels like it woke up.

Latency dropped.  
Streaming is smoother.  
VPN doesn’t choke.  
Ad-blocking works at the DNS level for every device.

And I don’t have a consumer router gasping for air anymore.

---

# Final Thoughts

This setup hits the sweet spot for price-to-performance without going overkill.  
I’ve got the control of a prosumer router, the automation of a DevOps pipeline, and the speed of a multi-gig setup — all on hardware that costs less than a flashy “gaming router.”

I’m going to keep expanding this with better dashboards, more automation, and maybe some AI-based anomaly detection later.

If you want a real router, this is the way.
