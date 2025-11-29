---
title: "Building a Practical Doomsday PC: A Radxa X4 Survival Vault"
description: "The build that made sense for long-term survivability without being a budget-breaking prepper fantasy"
pubDate: 2025-11-20
tags: ["project","tools","tech","usb","diy"]
---

# Building a Practical Doomsday PC: A Radxa X4 Survival Vault

## Introduction

This project started with a simple question: *What’s the most practical, realistic, and useful way to preserve computing capability after an EMP, grid collapse, or large-scale disaster—without drifting into prepper fantasy or wasting money?*

The answer is a balanced middle ground:

**A Radxa X4–based survival computer stored inside a Pelican case, powered by a compact battery and solar panel, paired with a small display and combo keyboard/trackpad, and loaded with a massive offline knowledge library and useful software.**

It’s rugged.  
It’s modular.  
It’s repairable.  
It’s efficient.  
And most importantly—it makes sense.

---

## Why Not Just Use a Laptop?

A fair question. Here’s the breakdown:

### **Pros of a Cheap Laptop**
- Integrated screen and keyboard  
- Easy to charge  
- Runs local AI models  
- Simple “Faraday bag + forget it” storage  

### **Cons of a Cheap Laptop**
- Batteries degrade in storage  
- Fragile screens and hinges  
- Proprietary parts, not field-repairable  
- Limited storage capacity  
- Higher power draw (harder to solar-charge)  
- One failure = total failure  

---

## Why the Radxa X4 Build Makes Sense

### **Advantages**
- Low power draw (easy solar operation)  
- Fanless, cool-running, long-term reliable  
- USB‑C power  
- NVMe slot for large offline storage  
- Modular and repairable  
- No built-in battery to degrade over time  
- Can be paired with any display or keyboard  
- Ideal for long-term storage in a Faraday-protected Pelican case  

### **Disadvantages**
- Requires external display, keyboard, and battery  
- Slightly more setup work  
- Not as “plug and play” as a laptop  

### **Bottom Line**
If your goal is **maximum long-term survivability, modularity, repairability, and storage capacity**, this build is significantly better than a laptop.

---

## The Full Parts List

Below is the exact kit you'll store inside the Pelican case.

### **1. Radxa X4 (Intel N100, 12GB RAM)**
Your main computer. Low power, efficient, and capable of running 3B–7B LLMs.

### **2. 2TB NVMe 2230 SSD**
Stores the full knowledge archive, offline tools, and AI model weights.

### **3. 7–10 Inch Portable USB-C Display**
Preferably one that:
- Draws under 6–8W  
- Supports USB‑C video + power  

### **4. Mini Wireless Keyboard + Trackpad Combo**
A compact Bluetooth or 2.4GHz unit that fits inside the case.

### **5. 20,000–30,000 mAh LiFePO4 Battery Bank**
Critical for long-term storage; LiFePO4 lasts 10–15 years safely.

### **6. 40–60W Folding Solar Panel**
Allows full off-grid operation indefinitely.

### **7. Pelican Case (1200/1300/1400 Series)**
Shockproof, waterproof, crushproof.

### **8. Accessories**
- Short USB‑C cables  
- Spare USB‑C to USB‑C cable in a Faraday bag  
- MicroSD with Radxa OS image  
- USB‑C OTG adapter  
- EVA foam or 3D printed tray  

---

## Software Loadout

Your Radxa X4 will run a clean, durable, offline‑oriented software stack.

### **Operating System**
**Ubuntu Server or Ubuntu Desktop (ARM64)**  
Lean and stable, ideal for long-term offline use.

### **Essential Packages**
```
sudo apt update && sudo apt install -y   git vim tmux htop curl wget python3 python3-pip   unzip build-essential net-tools openssh-server
```

### **AI Tools**
- **llama.cpp** (Local LLM inference engine)
- **Ollama** (Optional, for easier model management)
- **Models to store:**
  - TinyLlama 1.1B
  - Mistral 3B Instruct
  - Phi-3-Mini  
  - A Q4_K_M 7B model for robust general reasoning

### **Offline Knowledge Stack**
Stored on your 2TB NVMe:

- **Wikipedia (ZIM file, all text + images)**
- **Medical Wikipedia**
- **Wikihow survival ZIM**
- **Project Gutenberg Library**
- **Offline Maps (OpenStreetMap regional extracts)**
- **Repair manuals**
- **First-Aid PDFs**
- **Agriculture, engineering, chemistry basics**
- **Ham radio frequency tables**
- **Offline translation datasets**

### **Useful Tools**
- **Kiwix** (Offline Wikipedia reader)
- **Foliate** (Ebook/PDF reader)
- **Mapscii** (Terminal maps)
- **RTL-SDR software** (if you add an SDR later)
- **Syncthing** (local/offline device sync)
- **FileBrowser** (Local file explorer server)

---

## System Architecture

Everything lives inside the Pelican case:

```
[Pelican Case]
 ├── Radxa X4 (main board)
 ├── NVMe 2TB storage
 ├── 7–10” display
 ├── Mini keyboard/trackpad
 ├── LiFePO4 battery bank
 ├── Folding solar panel (stored)
 ├── USB‑C cables + spares
 ├── MicroSD OS backup
 └── Printed quickstart + password sheet
```

Everything stays unpowered and unplugged until needed.

---

## EMP Protection Strategy

We're not doing a full copper-lined Faraday cage.  
Instead, we use:

- **A proper MIL‑STD Faraday bag** inside the Pelican case  
- **Devices stored unpowered**  
- **No cables attached**  
- **Second bag for spare cables**

This is the practical level of EMP protection—enough to survive E1/E2 pulses without turning the Pelican into a science project.

---

## How You Use It After an EMP

1. Open the Pelican case.  
2. Pull out the Faraday bag, open it.  
3. Remove the Radxa, display, battery, and cables.  
4. Connect Radxa → Display → Battery (USB‑C).  
5. Boot into Ubuntu.  
6. Deploy solar panel when charging is needed.  
7. Your full offline computer is online and functional.

No infrastructure needed.

---

## What This Build Actually Gives You

### **Pros**
- Portable, rugged, long-lasting  
- Massive offline library  
- Fully solar-powered  
- Runs local AI models  
- No batteries inside that degrade  
- Modular and repairable  
- Physically protected from shock, water, and impact  
- Far more durable than a laptop  

### **Cons**
- More components than a laptop  
- Slightly more setup time  
- Requires storage discipline (stay inside Faraday bag)  

---

## Final Thoughts

This isn’t a doomsday fantasy machine.  
It’s a **practical, durable, long-term offline computing system** that uses:

- A powerful, low‑power Radxa X4  
- A compact display and input system  
- A long-life LiFePO4 power bank  
- A solar panel for indefinite operation  
- A curated offline knowledge library  
- A secure storage environment  
- The right balance of protection and practicality  

Simple. Effective. Realistic.

If you want the “full extreme Faraday vault” version or a lighter minimalist version next, just say the word.

