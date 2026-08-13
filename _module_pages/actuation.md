---
title: Actuation Plate
author: Pedro Roque, Elias Krantz
date: 2024-11-22
order_no: 3
nav_id: actuation
category: Jekyll
layout: post
---

The actuation plate is the second layer in the free-flyer, sitting between the base plate and the avionics plate. It carries whatever produces thrust. The mounting interface is the same for every variant so the plates are interchangeable, and more than one can be stacked on the same robot. The currently available variants are listed below.

<style>
.actuation-variant {
	font-size: 2.15rem;
	margin: 0.0em 0 0.0em;
}
.actuation-variant a {
	color: inherit;
}
</style>

## [DISCOWER Thruster Plate](/module_pages/discower_thruster_plate/){: .actuation-variant}

Eight PWM-controlled solenoid valves fed from the compressed-air supply on the base plate, arranged as four modules of two thrusters each. Thrust is impulsive: each valve is either open or closed, so control is done by modulating pulse width. Should be mounted directly above the base plate for easy access to air supply.

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

## [DISCOWER Propeller Plate](/module_pages/discower_propeller_plate/){: .actuation-variant}

Four bidirectional brushless motors, each driven by its own VESC 6 EDU over a CAN bus. Thrust is continuous and reversible, which makes the plate a better fit for experiments that need smooth force profiles. It draws from the battery rather than the air tanks, allowing longer running experiments.

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
---