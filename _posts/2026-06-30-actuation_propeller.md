---
title: Actuation Plate - Propeller Module
author: Prasetyo WL Sanjaya, Elias Krantz
date: 2026-06-30
category: Jekyll
layout: post
---

The second layer in the free-flyer is the actuation plate. This layer is a modular component that provides propulsion via brushless motors and propellers, but which can also be switched for other actuator models. Below, you can see the 3D model of the propeller plate with 4 motors.

<html>

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2.1 Middle Plate Propeller/2_1_a.glb" 
              alt="Full propeller plate" 
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

## Platform Compatibility

The propeller plate is designed as a drop-in alternative to the thruster plate: it shares the same standoff and mounting interface on the free-flyer, so either one can be installed on its own depending on your propulsion needs. The two plates can also be installed at the same time, stacking the thruster plate and the propeller plate on the same free-flyer for a dual-actuation configuration. The 3D model below shows both plates mounted together.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2.1 Middle Plate Propeller/alpha3_v4.1_dual.glb" 
              alt="ATMOS dual configuration with thruster and propeller plates" 
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

First, start by cutting with a water jet the actuation support plate, item 0101 in the Bill of Materials. The plate is 8mm thick and has a diameter of 400mm. The DXF file for the plate can be downloaded [here](/dxf/middle_plate_propeller.DXF), and the end result can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2.1 Middle Plate Propeller/2_1_b.glb" 
              alt="Actuation support plate" 
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
  Download the <a href="/dxf/middle_plate_propeller.DXF" download>DXF file</a>.
</div>

## Actuation Plate

Then, we can waterjet the actuation plate that will host the motor brackets. This plate's geometry is specific to the propeller configuration — it is shaped to mount the four motor brackets in their planar layout — but it attaches to the middle plate the same way as the thruster variant: using 8 standoffs, item 0107, and 8 M5 screws. The DXF file for it can be downloaded below. The assembly can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2.1 Middle Plate Propeller/2_1_c.glb" 
              alt="Actuation plate with support plate" 
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
  Download the <a href="/dxf/actuation_plate_propeller.DXF" download>DXF file</a>.
</div>

## Motor Modules

### Bracket

At this stage, we are ready to assemble the motor modules. We will provide instructions for one such module, knowing that the procedure can be repeated for the other three. To start, print the custom 3D printed bracket provided with the link below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2.1 Middle Plate Propeller/2_1_d.glb" 
              alt="Motor bracket" 
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
  Download the <a href="/stl/actuator_prop_module/motor_bracket.STL" download>bracket STL</a>.
</div>

### Motor and Propeller Assembly

Next, mount the Velox Veloce V2208 V2 motor onto the bracket using its included mounting screws, then attach the Gemfan 3545 propeller to the motor shaft and secure it with the propeller nut. The completed motor module can be seen in the 3D model below.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2.1 Middle Plate Propeller/2_1_e.glb" 
              alt="Bracket with motor and propeller" 
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

## Motor Driver and CAN Bus

Each motor is driven independently by its own VESC 6 EDU motor controller — one VESC per motor module, for four VESCs in total. Command and telemetry distribution between the VESC controllers and the flight controller is handled over a CAN bus, with a Holybro CAN hub consolidating the four CAN lines before they reach the PX4.

## Wiring Diagram

After assembling each motor module, wire the corresponding VESC 6 EDU controller to power and to the CAN bus as follows. Each VESC takes power directly from the battery, and shares its CAN H / CAN L pair with the CAN hub. The table below summarizes the per-motor wiring.

| **Motor** | **Driver** | **Power Connection**                                | **CAN Connection**          |
|-----------|------------|-----------------------------------------------------|-----------------------------|
| **M1**    | VESC 1     | VESC power input → XT60 Power Distribution Module   | CAN H / CAN L → CAN HUB     |
| **M2**    | VESC 2     | VESC power input → XT60 Power Distribution Module   | CAN H / CAN L → CAN HUB     |
| **M3**    | VESC 3     | VESC power input → XT60 Power Distribution Module   | CAN H / CAN L → CAN HUB     |
| **M4**    | VESC 4     | VESC power input → XT60 Power Distribution Module   | CAN H / CAN L → CAN HUB     |

The CAN HUB aggregates the four CAN H / CAN L pairs coming from the VESC controllers into a single pair, which connects directly to the CAN port on the PX4 flight controller. No PWM wiring is required for this configuration, since motor commands are sent over CAN.

Below 3D view illustrates each motor module (M1-M4). Refer to it for correct placement and orientation when wiring.

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
<model-viewer src="/3D/2.1 Middle Plate Propeller/2_1_a.glb" 
              alt="Motor module placement" 
              ar 
              camera-controls 
              shadow-intensity="1">
     <button class="hotspot" slot="hotspot-module-1" data-position="-0.02 0.36 -0.015" data-normal="0 0 -1">
         <div class="annotation">M1</div>
    </button>
     <button class="hotspot" slot="hotspot-module-2" data-position="0.13 0.36 0.05" data-normal="0 0 -1">
         <div class="annotation">M4</div>
    </button>
        <button class="hotspot" slot="hotspot-module-3" data-position="-0.09 0.36 0.13" data-normal="0 0 -1">
         <div class="annotation">M3</div>
    </button>
        <button class="hotspot" slot="hotspot-module-4" data-position="0.06 0.36 0.2" data-normal="0 0 -1">
         <div class="annotation">M2</div>
    </button>
</model-viewer>
</html>

## Physical Propeller Configuration

The ATMOS platform uses a 4-motor planar configuration, with each motor offset by 90 degrees along the perimeter of the base plate. 

![Propeller Configuration](/assets/propeller/prop_plate_config.png) 

The vehicle operates using the standard **FLU (Front, Left, Up)** coordinate frame. Because the motors are mounted in a fixed, opposing layout, sending a positive (`+`) command generates thrust that pushes the vehicle in the following directions:

#### 1. X-Axis (Front and Back Movement)
* **Motor 1:** A positive command pushes the ATMOS to move **backward** (-X direction).
* **Motor 2:** A positive command pushes the ATMOS to move **forward** (+X direction).

#### 2. Y-Axis (Left and Right Movement)
* **Motor 3:** A positive command pushes the ATMOS to move **right** (-Y direction).
* **Motor 4:** A positive command pushes the ATMOS to move **left** (+Y direction).

---

## Aluminium Profiles

Lastly, install the aluminium profiles in the middle plate. Each aluminium profile should have a length of 15cm. The profiles are attached to the plate using M4 screws and nuts. The assembly can be seen in the 3D model below. At this stage, your propeller plate is complete.

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/2.1 Middle Plate Propeller/2_1_f.glb" 
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