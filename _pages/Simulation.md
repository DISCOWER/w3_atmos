---
title: Simulation
author: Pedro Roque
date: 2025-02-04
category: Jekyll
layout: post
---
This guide outlines the steps to run Software-In-The-Loop (SITL) simulation with ATMOS and PX4 Autopilot.

## Running the Simulator

Before starting, ensure PX4 Autopilot is set up on your local machine as outlined in [PX4 Autopilot section]({{ site.url }}/pages/PX4/#px4-autopilot). It is also useful to have QGroundControl, outlined in [Setting up QGroundControl]({{ site.url }}/pages/PX4/#setting-up-qgroundcontrol).

The FreeFlyers with PX4 controller can be simulated using Gazebo. Gazebo should have been installed when setting up required packages for `PX4-Autopilot`. If not, installation instructions for Gazebo can be found [here](https://gazebosim.org/docs/harmonic/install_ubuntu/).

With Gazebo installed, navigate to your local PX4 Autopilot directory and run the simulation:

```bash
make px4_sitl_spacecraft gz_atmos
```

Optionally, to run with ROS 2 namespace:

```bash
PX4_UXRCE_DDS_NS=<namespace> make px4_sitl_spacecraft gz_atmos
```

## Running Micro-XRCE-DDS-Agent Locally

PX4 uses Micro-XRCE-DDS as middleware to allow its uORB messages to be published and subscribed to on a companion computer as though they were ROS 2 topics. Although the Micro-XRCE-DDS-Agent is preconfigured on the Jetson, we recommend installing it locally as well for simulation, testing, and development.

Install Micro-XRCE-DDS-Agent from snap-store:

```bash
sudo snap install micro-xrce-dds-agent --edge
```

Once installed, connect to the PX4 by running:

- **For Ethernet and Simulator connections:**
```bash
micro-xrce-dds-agent udp4 -p 8888
```
- **For Serial connections:**
```bash
micro-xrce-dds-agent serial --dev <serial-port>
```

## Subscribe to topics

Similarly to the hardware version, you should now see the SITL topics being published in ROS 2:
```bash
ros2 topic list
ros2 topic echo /fmu/out/vehicle_attitude
```
Make sure you have sourced the PX4-msgs before publishing and subscribing.

The hardware is now being mimicked in software!

## Try Control

In the [PX4-MPC](https://github.com/DISCOWER/px4-mpc) repository, we made available a few nonlinear model predictive controller examples for the spacecraft model. We encourage you to follow the steps there provided and try controlling ATMOS!

<!-- TODO: Add multi-agent simulation, maybe as launch files in PX4-MPC? -->
