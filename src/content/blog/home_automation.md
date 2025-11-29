---
title: "A realistic smart home build without unnecessary frills"
description: "How I automated everything that actually matters"
pubDate: 2025-10-20
type: project
tags: ["project","home-automation","diy","home-server"]
---

# Building a Smarter Home: How I automated everything that actually matters

## Opening context

This whole setup started because life got busy. Two kids, unpredictable work hours, and a house that needed to run itself without constant attention. I built everything around Home Assistant to handle the stuff we forget, automate the stuff that used to annoy me, and add safety without turning the place into a sci‑fi bunker. The goal: real automation that improves daily life, not random gadgets.

---

## What I needed

- Lights that follow the exact outdoor color temperature in real time  
- Locks that manage themselves  
- Window and door sensors for kid safety  
- Voice-driven whole-house routines  
- A smart calendar with tasks, reminders, and work times  
- Air quality automation tied to my hacked Winix C545 purifiers  
- A thermostat that adapts to my changing work schedule  
- Full reproducibility with automated setup  
- Everything local, fast, and predictable

---

## Natural temperature lights

The idea: indoor lighting should match the *actual* outdoor light temperature—not a canned schedule, not an “approximation.”

I’m building an ESP32 + ambient light sensor module mounted outdoors. It reads:

- Exact Kelvin temperature  
- Brightness  
- Color shifts during sunrise/sunset  
- Pink, orange, red, and blue sky phases  

Home Assistant ingests that data and applies it to every compatible bulb in the house.

If the sunset is a bright pink gradient, the house mirrors it.  
If the sky shifts warm before storm clouds roll in, the house shifts too.

The benefit is massive for circadian rhythm and sleep—your body winds down naturally because the light cues are real, not simulated.

---

## Smart locks and safety automations

Every exterior door auto-locks after a short delay. Presence detection prevents accidental lockouts. If a door stays unlocked, Home Assistant fixes it.

The “Goodnight” routine force-locks everything no matter what.

The system also:

- Provides alerts if a door opens after bedtime  
- Ties into window sensors for HVAC control and kid safety  
- Sends real-time warnings for suspicious openings when nobody’s home  

It’s simple, quiet, and reliable.

---

## Door and window sensors

These are essential with two young kids.

They drive:

- Safety alerts  
- HVAC pause if a door is left open  
- Security arming logic  
- Sleep-mode protections at night  
- Automations tied to night or day routines  

The house always knows what’s open and what’s not.

---

## The "goodnight" routine

Saying “Goodnight” triggers a full house shutdown:

- Locks every door  
- Locks car doors via ESP32 + car key fob relay mod  
- Dims or shuts off all lights  
- Switches bulbs to warm night mode  
- Arms the security system  
- Sets thermostat to night mode  
- Pauses media  
- Activates white noise machines  
- Closes blinds  
- Warns if any window or door is open  

It’s all handled in one command.

---

## The morning routine

Opposite of “Goodnight,” but timed to my shifting schedule.

- Unlocks the main door  
- Brings kitchen lights up bright  
- Restores daytime temperature settings  
- Displays today’s calendar  
- Starts the coffee maker  
- Slowly brightens bedroom lights  

The pace feels natural, not jarring.

---

## Smart calendar wall display

A always-on tablet shows:

- Tasks  
- Reminders  
- Errands  
- Grocery list  
- Work schedule  
- My wife’s schedule  
- Upcoming events  
- Weather  
- Trash days  
- Flight days  

It updates automatically and keeps everyone on the same page.

---

## Smart thermostat

I like it cold when I sleep—but I also need to wake up with my alarm, which changes daily.

Home Assistant checks my next alarm time and:

- Keeps the room cold while I sleep  
- Turns the AC off **two hours before my alarm**, letting the room warm slightly  
- Begins a gentle “fake sunrise” using a smart lamp that brightens over 30 minutes  

This combination wakes me naturally without a harsh shock.  
When nobody’s home, it switches to eco mode.  
If a window or door opens, HVAC pauses automatically.

---

## Air quality control with my hacked Winix C545

The stock Winix sensor is slow, so I added an external particle sensor feeding Home Assistant real data.

When PM2.5 or VOC levels rise:

- Purifiers jump to turbo  
- Drop back to low when clean  
- Kitchen spikes trigger higher airflow  
- Kid-level chaos triggers whole-room cleanup modes  

Air stays fresh without touching anything.

---

## “We’re leaving” mode

Triggered by geofencing, a button, or voice.

It:

- Locks all doors  
- Shuts off all lights  
- Lowers thermostat  
- Arms the security system  
- Checks the garage door  
- Locks the car again via ESP32  
- Sends a summary notification  

It’s everything you’d manually check—automated.

---

## Package detection system

Cameras identify when a package is delivered.  
Home Assistant sends a notification with a snapshot and logs the event.  
No more guessing or missing boxes.

---

## Automating the setup

No way am I rebuilding this by hand on a new device.

I use:

- Proxmox running a Home Assistant container
- Home Assistant `packages/` folder  
- All automations and scripts stored in YAML 
- Nightly snapshots to my Proxmox storage  
- A bootstrap script to rebuild the entire system automatically  

If hardware dies, I can be back online in minutes.

---

## Other automations that add up

- Washer/dryer finished notifications  
- Hallway night lights at 10% brightness  
- Motion-only garage lighting  
- Robot vacuums triggered when nobody is home  
- “Calm the house” button to instantly shut off noise  
- Camera motion alerts with snapshots  
- Optional water shutoff when traveling  

These micro-automations smooth out daily life more than expected.

---

## Final thoughts

The system’s goal isn’t to impress anyone—it’s to eliminate friction.  
Home Assistant handles the routine, the repetitive, and the easy-to-forget.  
The more I offload to automation, the smoother the house runs and the more time I get with my family.

If someone wanted to build their own version, they’d just need:

- Local-first tech  
- Automations that actually matter  
- A fully automated setup process  

Everything else is wiring.

