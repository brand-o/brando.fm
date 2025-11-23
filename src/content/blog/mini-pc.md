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

- `+` = good  
- `++` = really good  
- `·` = neutral  
- `-` = bad  
- `--` = very bad  

price grading always appears *last* because it’s relative to everything above it.

---

## 1. beelink me mini n150 – 6 nvme slots – 12GB DDR5 – dual 2.5GbE  
**link:** https://a.co/d/38gtPpa  
**image:**  
![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg)

**cpu: intel n150**  
`+` plenty for routing, docker, home assistant, nas, and minecraft
**ram: 12gb ddr5**  
`+` more than enough for this workload
**storage: six m.2 nvme slots**  
`++` unmatched expandability at this size and price
**networking: 2× 2.5gbe**  
`+` perfect for router + lan
**included storage: 2tb nvme**  
`+` real value-added, lowers effective cost
**size/cleanliness:**  
`++` internal power supply, clean internal layout, perfect for mini rack builds

**price: $279.20**  
`+` very fair considering the included 2tb nvme and 6-bay expandability  

**brando score: 8/10**  
my final pick.

---

## 2. aoostar n1 pro n150 – 12GB DDR5 – dual 2.5GbE – 1× NVMe  
**link:** https://a.co/d/f5DZfaY  
**image:**  
![](https://m.media-amazon.com/images/I/61OqcyvrpeL._AC_SL1500_.jpg)

**cpu: intel n150**  
`+` great for lightweight homelab tasks
**ram: 12gb ddr5**  
`+` enough for router + ha + docker
**storage: one nvme slot**  
`-` severely limits long-term expansion
**networking: 2× 2.5gbe**  
`+` router-capable
**included storage: none**  
`-` you supply everything
**size/cleanliness:**  
`+` compact, simple 

**price: $165**  
`++` an extremely good deal for an n150 mini pc  

**brando score: 7/10**  
best bang-for-buck if storage doesn’t matter.

---

## 3. gmktec g9 n150 – 12GB DDR5 – dual 2.5GbE – NVMe + eMMC  
**link:** https://a.co/d/hO3vfGU  
**image:**  
![](https://m.media-amazon.com/images/I/61ECn8BFbGL._AC_SL1500_.jpg)

**cpu: intel n150**  
`+` solid for most homelab tasks
**ram: 12gb ddr5**  
`+` good
**storage: 1× nvme + emmc**  
`-` the emmc is useless; only one real slot
**networking: 2× 2.5gbe**  
`+` router-capable
**included storage: 512gb nvme**  
`+` useful starter drive
**size/cleanliness:**  
`+` very compact
**price: $229.99**  
`·` not bad, but weaker storage story compared to similarly-priced options  

**brando score: 6/10**  
only good if you don’t care about expansion.

---

## 4. beelink me mini n95 – 12GB DDR5 – dual 2.5GbE – 1TB NVMe  
**link:** https://a.co/d/4p9MgqI  
**image:**  
![](https://m.media-amazon.com/images/I/71zwLGpFttL._AC_SL1500_.jpg)

**cpu: intel n95**  
`·` usable but noticeably weaker than n150
**ram: 12gb ddr5**  
`+` fine for daily services
**storage: one nvme slot**  
`-` caps expansion early
**networking: 2× 2.5gbe**  
`+` router-ready
**included storage: 1tb nvme**  
`+` solid included drive
**size/cleanliness:**  
`+` clean and compact

**price: $236.55**  
`-` too expensive for what it offers compared to other options  

**brando score: 5.5/10**

---

## 5. generic n100 mini pc – 5× NVMe – 4× 2.5GbE – barebones  
**link:** https://a.co/d/2RLpDBq  
**image:**  
![](https://m.media-amazon.com/images/I/51sD8t6GUwL._AC_SL1000_.jpg)

**cpu: intel n100**  
`·` usable but weaker than n95/n150
**ram: none (barebones)**  
`--` significantly increases real cost
**storage: five nvme slots**  
`++` excellent expandability at this price
**networking: 4× 2.5gbe**  
`++` great for multi-vlan/router playground setups
**included storage: none**  
`--` more cost on top
**size/cleanliness:**  
`+` small, easy to place

**price: $220**  
`-` becomes overpriced once you add RAM + NVMe  

**brando score: 5/10**  
amazing for router labs, not ideal for an all-in-one homelab.

---

# what i chose

the **beelink ME Mini N150 6-bay NAS Mini PC**  
https://a.co/d/38gtPpa

it hit every requirement:

- six NVMe slots  
- internal power supply  
- dual 2.5GbE  
- clean internals  
- low power  
- enough CPU for everything i need  
- included 2TB NVMe makes the price better  
- zero external storage clutter  

it’s exactly what i wanted for a long-term mini rack build.

---

# runner-up

the **aoostar N1 Pro N150**  
https://a.co/d/f5DZfaY

best deal per dollar, but not enough storage expansion for what i’m building.

---

# the one i wanted but didn’t need

the **generic N100 5×NVMe / 4×LAN barebones**  
https://a.co/d/2RLpDBq

super flexible, but the true cost balloons once you add RAM and NVMe.

---

# final thoughts

if you only need 1–2 nvme drives, the cheaper models make sense.

but if you want a clean, expandable, long-term, always-on homelab brain with no external storage nonsense, the **beelink n150 6-bay** is the clear winner.

