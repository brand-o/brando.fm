---
title: "when building a new nas, which mini pc should i get?"
description: "deciding on which mini pc to use for my new home server nas build"
pubDate: 2025-11-23
type: shopping
tags: ["project", "nas", "mini-pc", "tech", "diy", "home-server"]
---

# building my new home network: why i chose the beelink n150 6-bay nas mini pc

this is the full breakdown of every mini pc i considered for my home rack.  
the goal: an always-on machine for routing, storage, docker, home automation, and a minecraft server.

below is a quick comparison table to preview all five contenders.

---

# comparison table

|  | **aoostar n1 pro n150** | **beelink me mini n150 (6-bay)** | **gmktec g9 n150** | **beelink me mini n95** | **generic n100 (5× nvme, 4× lan)** |
|---|---|---|---|---|---|
| image | ![](https://m.media-amazon.com/images/I/61OqcyvrpeL._AC_SL1500_.jpg) | ![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg) | ![](https://m.media-amazon.com/images/I/61ECn8BFbGL._AC_SL1500_.jpg) | ![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg) | ![](https://m.media-amazon.com/images/I/51sD8t6GUwL._AC_SL1000_.jpg) |
| cpu | intel n150 | intel n150 | intel n150 | intel n95 | intel n100 |
| ram | 12gb ddr5 | 12gb ddr5 | 12gb ddr5 | 12gb ddr5 | barebones |
| internal storage | 1× m.2 nvme | 6× m.2 nvme | 1× m.2 nvme + emmc | 1× m.2 nvme | 5× m.2 nvme |
| lan ports | 2× 2.5gbe | 2× 2.5gbe | 2× 2.5gbe | 2× 2.5gbe | 4× 2.5gbe |
| included ssd | none | 2tb nvme | 512gb nvme | 1tb nvme | none |
| price | $165 | $279.20 | $229.99 | $236.55 | $220 |
| link | https://a.co/d/f5DZfaY | https://a.co/d/38gtPpa | https://a.co/d/hO3vfGU | https://a.co/d/4p9MgqI | https://a.co/d/2RLpDBq |

---

# what i needed

- fast enough to run opnsense/pfsense, docker, home assistant, syncthing, and a minecraft server  
- low power (always on)  
- future-proof  
- expandable internal storage  
- dual 2.5gbe or better  
- clean internal layout  
- stable for 24/7 operation  

my goal was to avoid usb storage, external nvme enclosures, and messy wiring. internal nvme slots mattered a lot.

---

# contender breakdown  
grading key:  
`+` good `++` really good `·` neutral `-` bad `--` very bad

price grading always appears *last* because it’s relative to everything above it.

---

# 1. beelink me mini n150 — 6 nvme slots — 12gb ddr5 — dual 2.5gbe  
**link:** https://a.co/d/38gtPpa  
**image:**  
![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg)

`+` *cpu: intel n150* — plenty for routing, docker, home assistant, nas, and minecraft<br>
`+` *ram: 12gb ddr5* — more than enough for this workload<br>
`++` *storage: six m.2 nvme slots* — unmatched expandability at this size<br>
`+` *networking: dual 2.5gbe* — ideal for router + lan setup<br>
`+` *included ssd: 2tb nvme* — adds real value and reduces total cost<br>
`++` *size/cleanliness* — internal power supply, very clean internals<br>
`+` *price: $279.20* — strong value considering the storage and expandability  

**brando score: 8/10**  
my final pick.

---

# 2. aoostar n1 pro n150 — 12gb ddr5 — dual 2.5gbe — 1× nvme  
**link:** https://a.co/d/f5DZfaY  
**image:**  
![](https://m.media-amazon.com/images/I/61OqcyvrpeL._AC_SL1500_.jpg)

`+` *cpu: intel n150* — great for lightweight homelab tasks<br>
`+` *ram: 12gb ddr5* — plenty for router + docker + ha<br>
`-` *storage: one nvme slot* — severely limits long-term expansion<br>
`+` *networking: dual 2.5gbe* — router-capable<br>
`-` *included ssd: none* — you provide everything<br>
`+` *size/cleanliness* — compact and simple<br>
`++` *price: $165* — one of the best deals in this category  

**brando score: 7/10**  
best value if storage doesn’t matter.

---

# 3. gmktec g9 n150 — 12gb ddr5 — dual 2.5gbe — nvme + emmc  
**link:** https://a.co/d/hO3vfGU  
**image:**  
![](https://m.media-amazon.com/images/I/61ECn8BFbGL._AC_SL1500_.jpg)

`+` **cpu: intel n150** — solid for most homelab workloads<br>
`+` **ram: 12gb ddr5** — good<br>
`-` **storage: 1× nvme + emmc** — emmc is useless, only one real slot<br>
`+` **networking: dual 2.5gbe** — router-ready<br>
`+` **included ssd: 512gb nvme** — decent starter drive<br>
`+` **size/cleanliness** — compact design<br>
`·` **price: $229.99** — okay, but weaker storage story than competitors

**brando score: 6/10**  
only makes sense if you don’t care about future storage.

---

# 4. beelink me mini n95 — 12gb ddr5 — dual 2.5gbe — 1tb nvme  
**link:** https://a.co/d/4p9MgqI  
**image:**  
![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg)

`-` **cpu: intel n95** — noticeably weaker than n100/n150<br>
`+` **ram: 12gb ddr5** — enough for lightweight homelab tasks<br>
`-` **storage: one nvme slot** — limits expansion quickly<br>
`+` **networking: dual 2.5gbe** — router-grade<br>
`+` **included ssd: 1tb nvme** — solid included drive<br>
`+` **size/cleanliness** — clean and compact<br>
`-` **price: $236.55** — too expensive for what it offers

**brando score: 5.5/10**

---

# 5. generic n100 — 5× nvme — 4× 2.5gbe — barebones  
**link:** https://a.co/d/2RLpDBq  
**image:**  
![](https://m.media-amazon.com/images/I/51sD8t6GUwL._AC_SL1000_.jpg)

`·` **cpu: intel n100** — usable, not fast<br>
`--` **ram: none** — adds significant cost<br>
`++` **storage: five nvme slots** — excellent expandability<br>
`++` **networking: 4× 2.5gbe** — great for vlan/router experiments<br>
`--` **included ssd: none** — more cost on top<br>
`+` **size/cleanliness** — very compact<br>
`-` **price: $220** — becomes overpriced once ram + nvme are added

**brando score: 5/10**  
great for router labs, not ideal for an all-in-one homelab.

---

# what i chose

the **beelink me mini n150 6-bay nas mini pc**  
https://a.co/d/38gtPpa

it hit every requirement:

- six nvme slots  
- internal power supply  
- dual 2.5gbe  
- clean internals  
- low power draw  
- enough cpu for docker, home assistant, opnsense, minecraft, and more  
- included 2tb nvme  
- zero external storage clutter  

---

# runner-up

**aoostar n1 pro n150**  
https://a.co/d/f5DZfaY  
best deal per dollar, but not enough internal storage for this build.

---

# the one i wanted but didn’t need

**generic n100 5×nvme / 4×lan**  
https://a.co/d/2RLpDBq  
incredibly flexible, but too expensive once you add ram and an nvme.

---

# final thoughts

if you only need 1–2 nvme drives, cheaper models make sense.  
but if you want a clean, expandable, long-term, always-on homelab brain with no external storage nonsense, the **beelink n150 6-bay** is the clear winner.

