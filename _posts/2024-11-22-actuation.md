---
title: Actuation Plate
author: Pedro Roque
date: 2024-11-22
category: Jekyll
layout: post
---

The second layer in the free-flyer is the actuation plate, a modular component that provides thruster capabilities via solenoid valves, but which can also be switched for other actuator models such as. Below, you can see the 3D model of the actuation plate with 8 thrusters, two in each thruster module. Each module houses two solenoid valves, that will be later controlled by the onboard PX4.

<html>

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2. Middle Plate/2_d.glb" 
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

## Actuation Support Plate (Middle Plate)

First, start by cutting with a water jet the actuation support plate, item 0201 in the Bill of Materials. The plate is 8mm thick and has a diameter of 400mm. The DXF file for the plate can be downloaded [here](/dxf/middle_plate.DXF), and the end result can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2. Middle Plate/2_a.glb" 
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
<div style="display: table; width: 300px; margin: 20px auto; border: 2px solid #000000; padding: 10px; text-align: center; background-color: var(background-color, #ffffff); border-radius: 4px;">
  Download the <a href="/dxf/middle_plate.DXF" download>DXF file</a>.
</div>

## Actuation Plate

Then, we can waterjet the actuation plate that will host the thrusters. The DXF file for it can be downloaded below. The actuation plate is attached to the middle plate using 8 standoffs, item 0107, and 8 M5 screws. The assembly can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2. Middle Plate/2_b.glb" 
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
<div style="display: table; width: 300px; margin: 20px auto; border: 2px solid #000000; padding: 10px; text-align: center; background-color: var(background-color, #ffffff); border-radius: 4px;">
  Download the <a href="/dxf/actuation_plate.DXF" download>DXF file</a>.
</div>

## Thruster Modules

### Module Base

At this stage, we are ready to assemble the thruster modules. We will provide instructions for one such module, knowing that the procedure can be repeated for the other three. Note that the actuation modules are 2 original format and 2 mirrored units. To start, print the housings provided with the link below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3. Thruster Modules/3_a.glb" 
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

<div style="display: table; width: 500px; margin: 20px auto; border: 2px solid #000000; padding: 10px; text-align: center; background-color: var(background-color, #ffffff); border-radius: 4px;">
  Download the <a href="/stl/actuator_module/actuator_mount_bottom.STL" download>Original</a> and <a href="/stl/actuator_module/mirror_actuator_mount_bottom.STL" download>Mirrored</a> STLs.
</div>

### First Solenoid

Then, we can install the first solenoid with the 4-to-2mm adapter, as well as the 2mm tubing (items 0209, 0211, 0216). The solenoid is attached to the housing using the provided 3D printed part that is secured with M2 screws. The assembly can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3. Thruster Modules/3_b.glb" 
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
<div style="display: table; width: 500px; margin: 20px auto; border: 2px solid #000000; padding: 10px; text-align: center; background-color: var(background-color, #ffffff); border-radius: 4px;">
  Download the <a href="/stl/actuator_module/actuator_mount_holder.STL" download>solenoid holder</a> and the <a href="/stl/actuator_module/actuator_mount_nozzle_holder.STL" download>nozzle holder</a>.
</div>

### Second Solenoid

Then, we can install the second solenoid, on top of the first one, as shown in the visualization below. The items used are 0209, 0211, and 0216. The solenoid is attached to the housing using the provided 3D printed part that is secured with M2 screws. The assembly can be seen in the 3D model below. 

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3. Thruster Modules/3_c.glb" 
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
<div style="display: table; width: 500px; margin: 20px auto; border: 2px solid #000000; padding: 10px; text-align: center; background-color: var(background-color, #ffffff); border-radius: 4px;">
  Download the <a href="/stl/actuator_module/actuator_mount_holder_top.STL" download>solenoid holder</a> and the <a href="/stl/actuator_module/actuator_mount_nozzle_holder.STL" download>nozzle holder</a>.
</div>

### Power and Signal Distribution PCB

Now we are ready to install the power and signal distribution PCB on the side of the thruster module, as shown below. The PCB is composed of items 0010 and 0011. The PCB is attached to the housing using 2 M2 screws and nuts. The assembly can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3. Thruster Modules/3_d.glb" 
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

The pictures below show the PCB's front and back, as well as the schematic view.
<html>
<a>
     <img src="/assets/pcb/schematic.png" alt="Schematic" style="width: 100%; margin: 10px;">
     <img src="/assets/pcb/front.png" alt="Schematic" style="width: 100%; margin: 10px;">
     <img src="/assets/pcb/back.png" alt="Schematic" style="width: 100%; margin: 10px;">
</a>
<style>
    model-viewer {
        width: 100%;
        height: 500px;
        background-color: var(background-color, #ffffff);
    }
</style>
</html>

> ##### Gerber Files
>
> Gerber files for this PCB will soon be made available for easy fabrication.
{: .block-tip }


### Power Regulator and Top Cover

With the bottom part finished, we can now install the power regulator on the top cover. The power regulator is item 0004 and it is attached to the top cover (3D printed with the STL below) with two M5 screws and nuts. The assembly can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3. Thruster Modules/3_e.glb" 
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

<div style="display: table; width: 500px; margin: 20px auto; border: 2px solid #000000; padding: 10px; text-align: center; background-color: var(background-color, #ffffff); border-radius: 4px;">
  Download the <a href="/stl/actuator_module/actuator_mount_top.STL.STL" download>Original</a> and <a href="/stl/actuator_module/mirroractuator_mount_top.STL.STL" download>Mirrored</a> STLs.
</div>

### Thruster Module Assembly

The last step is to attach the top cover using M3 screws and nuts, as per the assembly below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/3. Thruster Modules/3_f.glb" 
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

### Thruster Module Wiring

After assembling each thruster module, the next step is to connect the power regulator and the thrusters' solenoids to the on-board PCB and the Pixhawk's PWM breakout board.  

The power regulator provides a stable 24V output for the thruster solenoids and other module electronics. It has four wires, connected as:  
**Input (9-40 V)**: Connect to the main power source.  
**Input GND**: Connect to the main supply ground.  
**Output (+24 V, 6 A)**: Provides regulated 24V to the thruster PCB. Connect to J5.  
**Output GND**: Provides ground reference to the thruster PCB. Connect to J5.  
_Here, Input and Output refer to the input and output of the power regulator._

Each thruster (T1-T8) is connected to a corresponding pair of terminals on the PCB, which then routes the signal to the Pixhawk PWM breakout board. The table below summarizes the thruster wiring.

| **Thruster** | **Module** | **Force Direction**\* | **PCB Connections**                 |
|--------------|------------|---------------------|-------------------------------------|
| **T1**       | M1         | +X                  | Solenoid → J2 → J1 → **PWM1**       |
| **T2**       | M2         | -X                  | Solenoid → J4 → J3 → **PWM2**       |
| **T3**       | M3         | +X                  | Solenoid → J4 → J3 → **PWM3**       |
| **T4**       | M4         | -X                  | Solenoid → J2 → J1 → **PWM4**       |
| **T5**       | M2         | +Y                  | Solenoid → J2 → J1 → **PWM5**       |
| **T6**       | M4         | -Y                  | Solenoid → J4 → J3 → **PWM6**       |
| **T7**       | M1         | +Y                  | Solenoid → J4 → J3 → **PWM7**       |
| **T8**       | M3         | -Y                  | Solenoid → J2 → J1 → **PWM8**       |

\*_Direction using the coordinate frame of the Pixhawk controller, i.e. X-forward, Y-right, Z-down._

Below 3D view illustrates each thruster (T1-T8) and thruster module (M1-M4). Refer to it for correct placement, orientation and wiring.

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
<model-viewer src="/3D/2. Middle Plate/2_c.glb" 
              alt="Bottom plate" 
              ar 
              camera-controls 
              shadow-intensity="1">
     <button class="hotspot" slot="hotspot-PWM-board" data-position="-0.01 0.33 0.021" data-normal="0 0 -1">
          <div class="annotation">PWM1-PWM8</div>
     </button>
         <button class="hotspot" slot="hotspot-module-1" data-position="-0.1 0.36 -0.1" data-normal="0 0 -1">
         <div class="annotation">M1</div>
    </button>
    <button class="hotspot" slot="hotspot-thruster-1" data-position="-0.08 0.3 -0.05" data-normal="0 0 -1">
         <div class="annotation">T1</div>
    </button>
    <button class="hotspot" slot="hotspot-thruster-7" data-position="-0.05 0.3 -0.08" data-normal="0 0 -1">
         <div class="annotation">T7</div>
    </button>
     <button class="hotspot" slot="hotspot-module-2" data-position="0.1 0.36 -0.1" data-normal="0 0 -1">
         <div class="annotation">M2</div>
    </button>
    <button class="hotspot" slot="hotspot-thruster-2" data-position="0.08 0.3 -0.05" data-normal="0 0 -1">
         <div class="annotation">T2</div>
    </button>
    <button class="hotspot" slot="hotspot-thruster-5" data-position="0.05 0.3 -0.08" data-normal="0 0 -1">
         <div class="annotation">T5</div>
    </button>
        <button class="hotspot" slot="hotspot-module-3" data-position="-0.1 0.36 0.1" data-normal="0 0 -1">
         <div class="annotation">M3</div>
    </button>
        <button class="hotspot" slot="hotspot-thruster-3" data-position="-0.08 0.3 0.05" data-normal="0 0 -1">
         <div class="annotation">T3</div>
    </button>
    <button class="hotspot" slot="hotspot-thruster-8" data-position="-0.05 0.3 0.08" data-normal="0 0 -1">
         <div class="annotation">T8</div>
    </button>
        <button class="hotspot" slot="hotspot-module-4" data-position="0.1 0.36 0.1" data-normal="0 0 -1">
         <div class="annotation">M4</div>
    </button>
        <button class="hotspot" slot="hotspot-thruster-4" data-position="0.08 0.3 0.05" data-normal="0 0 -1">
         <div class="annotation">T4</div>
    </button>
    <button class="hotspot" slot="hotspot-thruster-6" data-position="0.05 0.3 0.08" data-normal="0 0 -1">
         <div class="annotation">T6</div>
    </button>
</model-viewer>
</html>

## Actuator Plate and Pneumatic Connection

With all thruster modules assembled, it is time to install them on the plate and do all the power and pneumatic connections. For the pneumatic connections, please follow the diagram in the 3D model below, connecting the same letters to the same spots (that is A-A, B-B, etc). The power connections from the power regulators should be connected to the power hub in the actuation plate (item 0008) using power cables capable of passing a peak of 4A. Lastly, connect the PWM cables (item TODO) to the PX4 mini PWM receptor.

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
<model-viewer src="/3D/2. Middle Plate/2_c.glb" 
              alt="Bottom plate" 
              ar 
              camera-controls 
              shadow-intensity="1">
    <button class="hotspot" slot="hotspot-from_manifold" data-position="0.055 0.295 0.0" data-normal="0 0 -1">
         <div class="annotation">From manifold</div>
    </button>
    <button class="hotspot" slot="hotspot-A_1" data-position="0.025 0.295 0.0" data-normal="0 0 -1">
         <div class="annotation">A</div>
    </button>
    <button class="hotspot" slot="hotspot-A_2" data-position="0.015 0.295 0.0" data-normal="0 0 -1">
         <div class="annotation">A</div>
    </button>
    <button class="hotspot" slot="hotspot-B_1" data-position="0.00 0.295 0.015" data-normal="0 0 -1">
         <div class="annotation">B</div>
    </button>
    <button class="hotspot" slot="hotspot-B_2" data-position="0.00 0.295 0.105" data-normal="0 0 -1">
         <div class="annotation">B</div>
    </button>
    <button class="hotspot" slot="hotspot-D1" data-position="-0.015 0.295 0.121" data-normal="0 0 -1">
         <div class="annotation">C</div>
    </button>
    <button class="hotspot" slot="hotspot-D2" data-position="-0.06 0.297 0.119" data-normal="0 0 -1">
         <div class="annotation">C</div>
    </button>
    <button class="hotspot" slot="hotspot-E1" data-position="0.015 0.295 0.121" data-normal="0 0 -1">
         <div class="annotation">D</div>
    </button>
    <button class="hotspot" slot="hotspot-E2" data-position="0.07 0.297 0.121" data-normal="0 0 -1">
         <div class="annotation">D</div>
    </button>
    <button class="hotspot" slot="hotspot-C1" data-position="0.00 0.295 -0.105" data-normal="0 0 -1">
         <div class="annotation">E</div>
    </button>
    <button class="hotspot" slot="hotspot-C2" data-position="0.00 0.295 -0.015" data-normal="0 0 -1">
         <div class="annotation">E</div>
    </button>
    <button class="hotspot" slot="hotspot-F1" data-position="-0.015 0.295 -0.121" data-normal="0 0 -1">
         <div class="annotation">F</div>
    </button>
    <button class="hotspot" slot="hotspot-F2" data-position="-0.06 0.297 -0.119" data-normal="0 0 -1">
         <div class="annotation">F</div>
    </button>
    <button class="hotspot" slot="hotspot-G1" data-position="0.015 0.295 -0.121" data-normal="0 0 -1">
         <div class="annotation">G</div>
    </button>
    <button class="hotspot" slot="hotspot-G2" data-position="0.07 0.297 -0.121" data-normal="0 0 -1">
         <div class="annotation">G</div>
    </button>
    <button class="hotspot" slot="hotspot-H1" data-position="0.04 0.295 0.015" data-normal="0 0 -1">
         <div class="annotation">H</div>
    </button>
    <button class="hotspot" slot="hotspot-H2" data-position="-0.055 0.31 0.015" data-normal="0 0 -1">
         <div class="annotation">H</div>
    </button>
    <button class="hotspot" slot="hotspot-I1" data-position="-0.07 0.31 0.0" data-normal="0 0 -1">
         <div class="annotation">I</div>
    </button>
    <button class="hotspot" slot="hotspot-I2" data-position="-0.105 0.31 0.0" data-normal="0 0 -1">
         <div class="annotation">I</div>
    </button>
    <button class="hotspot" slot="hotspot-J1" data-position="-0.12 0.31 -0.015" data-normal="0 0 -1">
         <div class="annotation">J</div>
    </button>
    <button class="hotspot" slot="hotspot-J2" data-position="-0.12 0.31 -0.06" data-normal="0 0 -1">
         <div class="annotation">J</div>
    </button>
    <button class="hotspot" slot="hotspot-K1" data-position="-0.12 0.31 0.015" data-normal="0 0 -1">
         <div class="annotation">K</div>
    </button>
    <button class="hotspot" slot="hotspot-K2" data-position="-0.12 0.31 0.06" data-normal="0 0 -1">
         <div class="annotation">K</div>
    </button>
    <button class="hotspot" slot="hotspot-L1" data-position="-0.044 0.31 0.0" data-normal="0 0 -1">
         <div class="annotation">L</div>
    </button>
    <button class="hotspot" slot="hotspot-L2" data-position="0.105 0.31 0.0" data-normal="0 0 -1">
         <div class="annotation">L</div>
    </button>
    <button class="hotspot" slot="hotspot-M1" data-position="0.12 0.31 0.015" data-normal="0 0 -1">
         <div class="annotation">M</div>
    </button>
    <button class="hotspot" slot="hotspot-M2" data-position="0.13 0.31 0.06" data-normal="0 0 -1">
         <div class="annotation">M</div>
    </button>
    <button class="hotspot" slot="hotspot-N1" data-position="0.12 0.31 -0.015" data-normal="0 0 -1">
         <div class="annotation">N</div>
    </button>
    <button class="hotspot" slot="hotspot-N2" data-position="0.13 0.31 -0.06" data-normal="0 0 -1">
         <div class="annotation">N</div>
    </button>
</model-viewer>
</html>

## Aluminium Profiles

Lastly, install the aluminium profiles in the middle plate. Each aluminium profile should have a lenght of 12cm. The profiles are attached to the plate using M4 screws and nuts. The assembly can be seen in the 3D model below- At this stage, your middle plate is complete.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2. Middle Plate/2_d.glb" 
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