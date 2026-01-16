---
layout: home
title: DISCOWER ATMOS
permalink: /
---

Welcome to the DISCOWER Autonomy Testbed for Multi-purpose Orbiting Systems (ATMOS) documentation page. 

ATMOS is a free-flyer platform developed at the KTH Space Robotics Laboratory for testing and validating space systems. The platform is composed by an air-bearing support system for frictionless motion, a modular actuation plate compatible with solenoid thrusters and propeller-based actuation, and a payload support system for testing various accessories. ATMOS aims at being a state-of-the-art platform for space robotics testing and validation, with the aim of reducing ground-to-orbit testing costs and increasing the reliability of space systems.


<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/full_assy_wAttachments.glb" 
              alt="A 3D model" 
              ar 
              auto-rotate 
              camera-controls 
              shadow-intensity="1">
</model-viewer>
<style>
    model-viewer {
        width: 100%;
        height: 500px;
        background-color: var(background-color, #ffffff);
    }
</style>
</html>

Here you can see the 3D platform used in DISCOWER. In this website, we provide detailed setups on assembling such a free-flyer platform, including modular actuation plates and payload bays.

> ##### ATMOS in Augmented Reality
>
> Visualizing this website on Android allows you to see ATMOS in Augmented Reality. Just click the AR button on the 3D model above!
{: .block-tip }

### Changelog
The latest changes to the documentation can be found below:
- **2025-11-24**: 
  - Updated Jetson Box STL files in [Avionics Plate](https://atmos.discower.io/jekyll/2024-11-23-avionics.html#onboard-computer) to match latest version of ATMOS
  - Added aluminium profile height for each layer in [Base Plate](https://atmos.discower.io/jekyll/2024-11-21-baseplate.html#pneumatic-plate---attached), [Actuation Plate](http://127.0.0.1:4000/jekyll/2024-11-22-actuation.html#aluminium-profiles), and [Avionics Plate](https://atmos.discower.io/jekyll/2024-11-23-avionics.html#payload-aluminium-profiles)
  - Updated PX4 instructions in [Pixhawk Setup](https://atmos.discower.io/pages/PX4/) for the multiple connection options with UXRCE and MAVLink

## Citing this work

A preprint with information regarding ATMOS and the KTH Space Robotics Laboratory is [available on arXiv](https://arxiv.org/abs/2501.16973). If this work is useful for your research, consider citing:

```bibtex
@misc{roque2025opensourcemodularspacesystems,
      title={Towards Open-Source and Modular Space Systems with ATMOS}, 
      author={Pedro Roque and Sujet Phodapol and Elias Krantz and Jaeyoung Lim and Joris Verhagen and Frank Jiang and David Dorner and Roland Siegwart and Ivan Stenius and Gunnar Tibert and Huina Mao and Jana Tumova and Christer Fuglesang and Dimos V. Dimarogonas},
      year={2025},
      eprint={2501.16973},
      archivePrefix={arXiv},
      primaryClass={cs.RO},
      url={https://arxiv.org/abs/2501.16973}, 
}
```
<html>
<iframe src="https://drive.google.com/file/d/1IQ3zcbxwNgNY_v_4YbrNEkiCZEV_he8L/preview" width="100%" height="435" allow="autoplay"></iframe>
</html>