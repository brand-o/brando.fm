---
title: "picking the perfect always-on mini pc for my mini rack"
description: "finding the perfect balance between performance, price, and expandability for my home server"
pubDate: 2025-11-23
type: shopping
tags: ["project", "nas", "mini-pc", "tech", "diy", "home-server"]
---

# building my new home network: why i chose the beelink n150 6-bay nas mini pc

this is the full breakdown of every mini pc i considered for my home rack.  
the goal: an always-on machine for routing, storage, Docker, Home Assistant, Syncthing, and a Minecraft server for my kids and me (mostly me).

below is a quick comparison table to preview all five contenders.

---

# comparison table

|  | **Aoostar N1 Pro N150** | **Beelink ME Mini N150** | **Gmktec G9 N150** | **Beelink ME Mini N95** | **Generic N100** |
|---|---|---|---|---|---|
| image | ![](https://m.media-amazon.com/images/I/61OqcyvrpeL._AC_SL1500_.jpg) | ![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg) | ![](https://m.media-amazon.com/images/I/61ECn8BFbGL._AC_SL1500_.jpg) | ![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg) | ![](https://m.media-amazon.com/images/I/51sD8t6GUwL._AC_SL1000_.jpg) |
| cpu | Intel N150 | Intel N150 | Intel N150 | Intel N95 | Intel N100 |
| ram | 12GB DDR5 | 12GB DDR5 | 12GB DDR5 | 12GB DDR5 | none |
| internal storage | 1× m.2 NVMe | 6× m.2 NVMe | 4× m.2 NVMe | 1× m.2 NVMe | 5× m.2 NVMe |
| lan ports | 2× 2.5Gbe | 2× 2.5Gbe | 2× 2.5Gbe | 2× 2.5Gbe | 4× 2.5Gbe |
| included ssd | 512GB | 2TB | 512GB | 1TB | none |
| price | $165 | $280 | $230 | $237 | $220 |
| link | https://a.co/d/f5DZfaY | https://a.co/d/38gtPpa | https://a.co/d/hO3vfGU | https://a.co/d/4p9MgqI | https://a.co/d/2RLpDBq |

---

# what i needed

- fast enough to run OPNsense/PFSense, Docker, Home Assistant, Syncthing, and a Minecraft server for my kids and me (mostly me)
- low power (always on)  
- future-proof  
- expandable internal storage  
- dual 2.5Gbe or better  

---

# 1. Beelink ME Mini N150 — 6 NVMe slots — 12GB DDR5 — Dual 2.5Gbe  
**link:** https://a.co/d/38gtPpa  
**image:**  
![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg)

`+` cpu: **Intel N150** — plenty for routing, docker, home assistant, nas, and minecraft<br>
`+` ram: **12GB DDR5** — fast efficient ddr5, 12gb should be plenty<br>
`++` storage: **6x m.2 NVMe slots** — unmatched expandability at this size<br>
`+` networking: **2x 2.5Gbe** — router-ready<br>
`+` included ssd: **2TB NVMe** — adds real value and reduces total cost<br>
`++` size/cleanliness: internal power supply, very clean internals, awesome looking<br><br>
`+` **price: $279.20** — strong value considering the storage and expandability  

**brando score: 8/10**  
my final pick. overall the best value for the price.

---

# 2. Aoostar N1 Pro N150 — 12GB DDR5 — Dual 2.5Gbe — 1× NVMe  
**link:** https://a.co/d/f5DZfaY  
**image:**  
![](https://m.media-amazon.com/images/I/61OqcyvrpeL._AC_SL1500_.jpg)

`+` cpu: **Intel N150** — great for lightweight homelab tasks<br>
`+` ram: **12GB DDR5** — fast efficient ddr5, 12gb should be plenty<br>
`-` storage: **single NVMe slot** — severely limits long-term expansion<br>
`+` networking: **2x 2.5Gbe** — router-ready<br>
`-` included ssd: **512GB** — fair, but not useful for our project<br>
`+` size/cleanliness: super compact<br><br>
`++` **price: $165** — one of the best deals in this category  

**brando score: 6/10**  
great value if storage expandability doesn’t matter.

---

# 3. GMKtec G9 N150 — 12GB DDR5 — Dual 2.5Gbe — 4x NVMe  
**link:** https://a.co/d/hO3vfGU  
**image:**  
![](https://m.media-amazon.com/images/I/61ECn8BFbGL._AC_SL1500_.jpg)

`+` cpu: **Intel N150** — solid for most homelab workloads<br>
`+` ram: **12GB DDR5** — fast efficient ddr5, 12gb should be plenty<br>
`-` storage: **4× NVMe** — good, but not as expandable as the beelink<br>
`+` networking: **2x 2.5Gbe** — router-ready<br>
`+` included ssd: **512GB NVMe** — decent starter drive<br>
`+` size/cleanliness: not the prettiest, but it's fine<br><br>
`·` **price: $229.99** — okay, but less storage than competitors and less expandability.

**brando score: 7/10**  
great alternative to the Beelink ME Mini N150 if you don’t want the included 2TB NVMe or 6x NVMe slots.

---

# 4. Beelink ME Mini N95 — 12GB DDR5 — Dual 2.5Gbe — 1TB NVMe  
**link:** https://a.co/d/4p9MgqI  
**image:**  
![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg)

`-` cpu: **Intel N95** — good enough, but limits future expansion<br>
`+` ram: **12GB DDR5** — fast efficient ddr5, 12gb should be plenty<br>
`++` storage: **6x m.2 NVMe slots** — unmatched expandability at this size<br>
`+` networking: **2x 2.5Gbe** — ideal for router + lan setup<br>
`+` included ssd: **2TB NVMe** — adds real value and reduces total cost<br>
`++` size/cleanliness: internal power supply, very clean internals, awesome looking<br><br>
`-` **price: $236.55** — for a little more you can get a better cpu and an additional 1tb of storage

**brando score: 6/10**
the best option if you don’t want the extra power or storage from the Beelink ME Mini N150 2TB.

---

# 5. Generic N100 — 5× NVMe — 4× 2.5Gbe — Barebones  
**link:** https://a.co/d/2RLpDBq  
**image:**  
![](https://m.media-amazon.com/images/I/51sD8t6GUwL._AC_SL1000_.jpg)

`·` cpu: **Intel N100** — usable, not fast<br>
`-` ram: **none** — adds significant cost, but allows for future upgrades<br>
`++` storage: **5x NVMe slots** — excellent expandability<br>
`++` networking: **4x 2.5Gbe** — great for vlan/router experiments<br>
`--` included ssd: **none** — more cost on top<br>
`+` size/cleanliness: all aluminum enclosure is cool, but not the prettiest<br><br>
`-` **price: $220** — becomes overpriced once ram + nvme are added

**brando score: 5/10**  
perfect for router labs, but not ideal for an all-in-one homelab when you factor the total price.

---

# what i chose

the **beelink me mini n150 6-bay nas mini pc**  
https://a.co/d/38gtPpa

it hit every requirement:

- six NVMe slots  
- internal power supply  
- dual 2.5Gbe  
- clean internals  
- low power draw  
- enough CPU for Docker, Home Assistant, OPNsense, Minecraft, and more  
- included 2tb NVMe  
- zero external storage clutter  
- price is the sweet spot for everything included

---

# runner-up

**aoostar n1 pro n150**  
https://a.co/d/f5DZfaY  
best deal per dollar, but not enough expandable storage for this build.

---

# the one i wanted but didn’t need

**generic n100 5×nvme / 4×lan**  
https://a.co/d/2RLpDBq  
incredibly flexible, but too expensive once you add ram and an NVMe.

---

# final thoughts

if you only need 1–2 nvme drives, cheaper models make sense.  
but if you want a clean, expandable, long-term, always-on homelab brain with no external storage nonsense, the **Beelink ME Mini N150** is the clear winner.

