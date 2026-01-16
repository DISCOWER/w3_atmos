---
title: Base Plate
author: Pedro Roque
date: 2024-11-21
category: Jekyll
layout: post
---

To assemble a free-flyer, we will start with the bottom plate. This plate provides support for the remaining layers and contains the pneumatic components for air-supply, regulation, as well as air bearings for frictionless motion. The final assembly can be seen in the 3D model below.

<html>

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/1. Bottom Plate/1_f.glb" 
              alt="Bottom plate" 
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

## Polycarbonate Plate

The baseplate is composed of a single 8 mm thick polycarbonate plate - item 0101 in the Bill of Materials. The diameter of the plate is 400mm and it is recommended to be cut using a CNC waterjet. The DXF file for the plate can be downloaded [here](/dxf/base_plate.DXF), and the end result can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/1. Bottom Plate/1_a.glb" 
              alt="Bottom plate - PC" 
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

<div style="display: table; width: 300px; margin: 20px auto; border: 2px solid #000000; padding: 10px; text-align: center; background-color: var(background-color, #ffffff); border-radius: 4px;">
  Download the <a href="/dxf/base_plate.DXF" download>DXF file</a>.
</div>

## Air Bearings

With the plate cut, we are ready to start attaching the air bearings. These bearings are used to provide a frictionless motion to the platform. The bearings are attached to the plate using the provided mounting screws, nuts and washers - items 0103 and 0104. In the center of the plate, we should also attach an X-connecting piece to allow for the air supply to reach the bearings - item 0214. Then, connect the air bearings to the X-connector using 6mm tubing - item 0210 - and the connector 0208. The final assembly can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/1. Bottom Plate/1_b.glb" 
              alt="Bottom plate - PC" 
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

> ##### NOTE
>
> After installation, the air bearings shall be protected from damage and kept on clean surfaces.
> We recommend to use the provided boxes for storage and transportation.
{: .block-tip }

## Bottle Supports and Regulators

At this stage, we are ready to install the bottle supports, thrusters, and air bearings regulators. The first step is to print all the 3D parts in [here](/stl/pneumatic_mount/base_plate_prints.zip). The parts are then attached to the plate using M4 screws, nuts and washers according to the 3D model below. The items used in this step are 0206, 0207.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/1. Bottom Plate/1_c.glb" 
              alt="Bottom plate - PC" 
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
<div style="display: table; width: 300px; margin: 20px auto; border: 2px solid #000000; padding: 10px; text-align: center; background-color: var(background-color, #ffffff); border-radius: 4px;">
  Download the <a href="/stl/pneumatic_mount/base_plate_prints.zip" download>STL files</a>.
</div>

## Bottles and in-line Regulators

Next, we are ready to test the bottles' mounting and install all in-line regulators. Start by taking one bottle (item 0201) and attach to it the first (item 0202) and second (item 0203) regulators. Then, at the end of the last regulator, make sure to use the provided Festo-compatible fitting. Lastly, attach the 3D print part that secures the regulators to the bottle next holder.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/1. Bottom Plate/1_d.glb" 
              alt="Bottom plate - PC" 
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

## Aluminium Profiles

Almost at the last step, we are now ready to install the supporting aluminium profiles. These profiles are used to provide structural support to the platform and are attached to the plate using the provided angle brackets and T-slot nuts. The items used in this step are 0102, 0105, 0106. M4 screws and nuts are used to secure these items to the locations shown in the 3D model below.


<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/1. Bottom Plate/1_e.glb" 
              alt="Bottom plate - PC" 
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

## Manifold

### Manifold - Assembly

At this point, we are ready to assemble the manifold plate that will direct the air from from the bottles to the air bearings and actuators. The STL files used in this step can be found below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3.1 Manifold/3_1_d.glb" 
              alt="Bottom plate - PC" 
              ar 
              auto-rotate 
              camera-controls 
              camera-orbit="180deg 75deg 3m" 
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


<div style="display: table; width: 300px; margin: 20px auto; border: 2px solid #000000; padding: 10px; text-align: center; background-color: var(background-color, #ffffff); border-radius: 4px;">
  Download the <a href="/stl/control_panel/control_panel.zip" download>STL files</a>.
</div>

### Manifold - Baseplate

First, start by 3D printing the baseplate.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3.1 Manifold/3_1_a.glb" 
              alt="Bottom plate - PC" 
              ar 
              auto-rotate 
              camera-controls 
              camera-orbit="180deg 75deg 3m" 
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

### Manifold - Supports

Then, we attach the 3D printed supports for the valves and tubing.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3.1 Manifold/3_1_b.glb" 
              alt="Bottom plate - PC" 
              ar 
              auto-rotate 
              camera-controls 
              camera-orbit="180deg 75deg 3m" 
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

### Manifold - Valves, T-pieces and Tubing

Next, we attach the valves and T-pieces to the manifold plate using the valve supports. Note that the valves have a rectangle extrusion that will be used to attach to the support, ensuring correct orientation and alignment.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3.1 Manifold/3_1_c.glb" 
              alt="Bottom plate - PC" 
              ar 
              auto-rotate 
              camera-controls 
              camera-orbit="180deg 75deg 3m" 
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

Lastly, we can add the tubing to the manifold.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3.1 Manifold/3_1_d.glb" 
              alt="Bottom plate - PC" 
              ar 
              auto-rotate 
              camera-controls 
              camera-orbit="180deg 75deg 3m" 
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


## Pneumatic Plate - Attached

The last component to attach to the baseplate is the manifold plate. This plate is used to provide a mounting location for the valves that direct the airflow. The aluminium profiles are then attached to the base plate using M4 screws T-slot nuts - item 0106. Each aluminium profile should have a lenght of 21cm. Using 6mm tubing (item 0210), connect the bottles to the pneumatic plate according to the diagram. Print the provided 3D parts and assemble them according to the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<style>
    model-viewer {
        width: 100%;
        height: 500px;
        background-color: var(background-color, #ffffff);
    }
    .hotspot{
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: none;
    background-color: blue;
    box-sizing: border-box;
    pointer-events: none;
  }
  .hotspot[slot="hotspot-hand"]{
    --min-hotspot-opacity: 0;
    background-color: red;
  }
  .annotation{
    background-color: #888888;
    position: absolute;
    transform: translate(10px, 10px);
    border-radius: 10px;
    padding: 10px;
  }
  /* This keeps child nodes hidden while the element loads */
  :not(:defined) > * {
    display: none;
  }
</style>
<model-viewer src="/3D/1. Bottom Plate/1_f.glb" 
              alt="Bottom plate" 
              ar 
              camera-controls 
              shadow-intensity="1">
    <button class="hotspot" slot="hotspot-frombottle1" data-position="0.075 0.223 -0.15" data-normal="0 0 -1">
         <div class="annotation">From bottle 1.</div>
    </button>
    <button class="hotspot" slot="hotspot-frombottle2" data-position="0.075 0.195 -0.15" data-normal="0 0 -1">
         <div class="annotation">From bottle 2.</div>
    </button>
    <button class="hotspot" slot="hotspot-frombottle3" data-position="0.075 0.169 -0.15" data-normal="0 0 -1">
         <div class="annotation">From bottle 3.</div>
    </button>
    <button class="hotspot" slot="hotspot-actuation" data-position="0.065 0.135 -0.15" data-normal="0 0 -1">
         <div class="annotation">To actuation regulator (A)</div>
    </button>
    <button class="hotspot" slot="hotspot-bearings" data-position="0.065 0.11 -0.15" data-normal="0 0 -1">
         <div class="annotation">To air-bearing regulator (B)</div>
    </button>
    <button class="hotspot" slot="hotspot-bottle1" data-position="0.17 0.10 0.06" data-normal="0 0 1">
         <div class="annotation">Bottle 1.</div>
    </button>
    <button class="hotspot" slot="hotspot-bottle3" data-position="0.17 0.10 -0.06" data-normal="0 0 1">
         <div class="annotation">Bottle 3.</div>
    </button>
    <button class="hotspot" slot="hotspot-bottle2" data-position="-0.17 0.195 0.0" data-normal="0 0 1">
         <div class="annotation">Bottle 2.</div>
    </button>
    <button class="hotspot" slot="hotspot-reg-in" data-position="-0.035 0.075 0.16" data-normal="0 0 1">
         <div class="annotation">From manifold (A)</div>
    </button>
    <button class="hotspot" slot="hotspot-reg-out" data-position="0.035 0.075 0.16" data-normal="0 0 1">
         <div class="annotation">To actuation plate</div>
    </button>
    <button class="hotspot" slot="hotspot-bearing-reg-in" data-position="0.017 0.06 -0.16" data-normal="0 0 -1">
         <div class="annotation">From manifold (B)</div>
    </button>
    <button class="hotspot" slot="hotspot-bearing-reg-out" data-position="-0.017 0.06 -0.16" data-normal="0 0 -1">
         <div class="annotation">To air-bearing plate</div>
    </button>
</model-viewer>
</html>