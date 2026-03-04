---
title: ATMOS in the Wild
author: Pedro Roque
date: 2022-02-04
category: Jekyll
layout: post
---
<style>
.logo-track-wrap {
  overflow: hidden;
  width: 100%;
  margin: 0 0 30px;
  /* fade edges */
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.logo-track {
  display: flex;
  width: max-content;
  animation: logo-scroll 20s linear infinite;
}

.logo-track:hover {
  animation-play-state: paused;
}

@keyframes logo-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.logo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 160px;
  padding: 10px 20px;
  flex-shrink: 0;
}

.logo-item img {
  max-height: 60px;
  max-width: 120px;
  width: auto;
  height: auto;
  object-fit: contain;
  /* opacity: 0.7; */
  transition: opacity 0.2s;
}

.logo-item img:hover {
  opacity: 1;
}
</style>

<!--
  Items are duplicated so the loop is seamless.
  animation translates by -50% (one full set), then snaps back to 0.
-->
<div class="logo-track-wrap">
  <div class="logo-track">
    <!-- original set -->
    <div class="logo-item"><img src="/assets/universities/ist-ul.png" alt="IST"></div>
    <div class="logo-item"><img src="/assets/universities/ulux.png"  alt="ULUX"></div>
    <div class="logo-item"><img src="/assets/universities/kth.png"   alt="KTH"></div>
    <div class="logo-item"><img src="/assets/universities/usc.png"   alt="USC"></div>
    <div class="logo-item"><img src="/assets/universities/nyu.png"   alt="NYU"></div>
    <div class="logo-item"><img src="/assets/universities/mit.png"   alt="MIT"></div>
    <div class="logo-item"><img src="/assets/universities/uiuc.webp" alt="UIUC"></div>
    <div class="logo-item"><img src="/assets/universities/icarus.svg" alt="Icarus"></div>
    <!-- duplicate set for seamless loop -->
    <div class="logo-item"><img src="/assets/universities/ist-ul.png" alt="IST"></div>
    <div class="logo-item"><img src="/assets/universities/ulux.png"  alt="ULUX"></div>
    <div class="logo-item"><img src="/assets/universities/kth.png"   alt="KTH"></div>
    <div class="logo-item"><img src="/assets/universities/usc.png"   alt="USC"></div>
    <div class="logo-item"><img src="/assets/universities/nyu.png"   alt="NYU"></div>
    <div class="logo-item"><img src="/assets/universities/mit.png"   alt="MIT"></div>
    <div class="logo-item"><img src="/assets/universities/uiuc.webp" alt="UIUC"></div>
    <div class="logo-item"><img src="/assets/universities/icarus.svg" alt="Icarus"></div>
  </div>
</div>

<div style="height: 30px;"></div>

On this page, you find a collection of laboratories using ATMOS and/or PX4Space. Below you can see the platforms used in each laboratory.

## KTH Royal Institute of Technology
At KTH's Space Robotics Laboratory, ATMOS is the platform currently being used:

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/full_assy_wAttachments.glb" 
              alt="A 3D model" 
              ar 
              auto-rotate 
              camera-controls 
              shadow-intensity="1">
</model-viewer>

<style>
model-viewer { width: 100%; height: 500px; background-color: var(background-color, #ffffff); }
</style>

## University of Southern California
At USC's Laboratory for Autonomous Systems in Exploration and Robotics (LASER) led by [Keenan Albee](https://albee.github.io), starting in Summer 2025, ATMOS will be used for multi-agent controls:

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/full_assy.glb" 
              alt="A 3D model" 
              ar 
              auto-rotate 
              camera-controls 
              shadow-intensity="1">
</model-viewer>

<style>
model-viewer { width: 100%; height: 500px; background-color: var(background-color, #ffffff); }
</style>

## New York University
At NYU's Riviere Robot Lab (RRL) led by [Ben Riviere](https://sites.google.com/view/riviere-robot-lab/home), starting in Autumn 2025, ATMOS will be used for multi-agent controls and artificial intelligence research:

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/3D/full_assy.glb" 
              alt="A 3D model" 
              ar 
              auto-rotate 
              camera-controls 
              shadow-intensity="1">
</model-viewer>

<style>
model-viewer { width: 100%; height: 500px; background-color: var(background-color, #ffffff); }
</style>

## Icarus Robotics
At [Icarus Robotics](https://www.icarusrobotics.com/), the ATMOS base is used as a test platform for microgravity robotics, simulating the microgravity dynamics of Icarus free-flyer. Below, we show the base platform used by Icarus.

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/assets/universities/icarus.glb" 
              alt="A 3D model" 
              ar 
              auto-rotate 
              camera-controls 
              shadow-intensity="1">
</model-viewer>

<style>
model-viewer { width: 100%; height: 500px; background-color: var(background-color, #ffffff); }
</style>

## Instituto Superior Técnico - University of Lisbon
At IST's Institute for Systems and Robotics, the Space Cobot team led by [Rodrigo Ventura](https://wp.isr.tecnico.ulisboa.pt/rventura/) use PX4Space in the [Space Cobot](https://space-cobot.isr.tecnico.ulisboa.pt/) free-flyer:

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/assets/universities/Space Cobot.glb" 
              alt="A 3D model" 
              ar 
              auto-rotate 
              camera-controls
              camera-orbit="45deg 30deg 4m"
              shadow-intensity="1">
</model-viewer>

<style>
model-viewer { width: 100%; height: 500px; background-color: var(background-color, #ffffff); }
</style>

## University of Luxembourg
At UL's Interdisciplinary Centre for Security, Reliability and Trust (SnT), a modified ATMOS is used currently being built for microgravity research in the [SpaceR group](https://wwwen.uni.lu/snt/research/space_research_group), led by
[Miguel Olivares Mendez](https://www.uni.lu/snt-en/people/miguel-angel-olivares-mendez/):

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/assets/universities/ULXv2.glb" 
              alt="University of Luxembourg Platform" 
              ar 
              auto-rotate 
              camera-controls
              camera-orbit="10deg 60deg 2m"
              shadow-intensity="1">
</model-viewer>

<style>
model-viewer { width: 100%; height: 500px; background-color: var(background-color, #ffffff); }
</style>
