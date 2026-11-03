---
title: Onboard Computer Setup
author: Pedro Roque
date: 2025-02-04
category: Jekyll
layout: post
---
Setup routine and scripts for the ATMOS free-flyers' onboard computers (OBC). For ATMOS, we consider the NVIDIA Jetson Orin NX as the OBC, but these instructions can be roughly follower for other Ubuntu 22.04 OBCs.

# Jetson Setup

These instructions assume that the Jetson is running Ubuntu 22.04 on Jetpack 6. Then, install ROS 2 Humble:

1. Follow installation instructions at https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html

2. Source ROS 2 by default

   ```bash
   echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
   ```


Lastly, clone:
```bash
git clone git@github.com:DISCOWER/FF_OBC_Setup.git $HOME/FF_OBC_Setup
```

If cloning fails due to SSH authentication, make sure the OBC has GitHub SSH keys configured. See [GitHub's guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to generating SSH keys for instructions.

# Set the hostname

1. Change the hostname by replacing `<hostname>` with the desired name.
   ```bash
   sudo hostnamectl set-hostname <hostname>
   ```
2. Edit the /etc/hosts file.
   ```bash
   sudo vim /etc/hosts
   ```
   Find the line that starts with 127.0.0.1 or 127.0.1.1 followed by the old hostname (probably discower) and change it to the new hostname. Save and close the file.

# Set up ROS 2 Workspace

Here we provide an example of a workspace setup for the PX4 communication and the vehicle's odometry. Note that our interface was tested on a Qualisys motion capture setup using the repository in `https://github.com/DISCOWER/motion_capture_system`. For motion capture systems with different coordinates, you may need to adjust the `srl_vehicle_mocap_odom` package.

1. Set up workspace. Clone and build required ROS 2 packages. 
   ```bash
   mkdir -p ~/atmos_ws/src/
   cd ~/atmos_ws/src/
   git clone git@github.com:PX4/px4_msgs.git
   git clone git@github.com:DISCOWER/srl_vehicle_mocap_odom.git
   cd ~/atmos_ws
   colcon build
   ```

# Install Micro-XRCE-DDS-Agent
Install with snap-store
```bash
sudo snap install micro-xrce-dds-agent --edge
```

Set up Micro-XRCE-DDS-Agent as a service:
```bash
sudo snap set micro-xrce-dds-agent daemon=true
sudo snap set micro-xrce-dds-agent transport=udp4
sudo snap set micro-xrce-dds-agent port=8888
sudo systemctl enable snap.micro-xrce-dds-agent.daemon.service
```

For Serial Communication: for serial communication between PX4 and the onboard computer, change the transport to serial and set the corresponding parameters:
```bash
sudo snap set micro-xrce-dds-agent daemon=true
sudo snap set micro-xrce-dds-agent transport=serial
sudo snap set micro-xrce-dds-agent device=<obc-serial-port>
sudo snap set micro-xrce-dds-agent baudrate=<your-baudrate-from-PX4>
sudo systemctl enable snap.micro-xrce-dds-agent.daemon.service
```

# Add PX4 Rules for USB Mavlink interface

These rules assume that the PX4 is connected via USB to the onboard computer. To add the udev rules, run:

```bash
sudo cp $HOME/FF_OBC_Setup/rules/* /etc/udev/rules.d/
sudo udevadm control --reload-rules
sudo udevadm trigger
```


# Add MAVProxy and Mavlink Router

Follow these instructions to install the mavlink-router:
```bash
sudo apt install git meson ninja-build pkg-config gcc g++ systemd
sudo pip3 install meson
git clone git@github.com:mavlink-router/mavlink-router.git ~/mavlink_router
cd ~/mavlink_router
git submodule update --init --recursive
meson setup build .
sudo ninja -C build install
sudo mkdir -p /etc/mavlink-router/
sudo cp $HOME/FF_OBC_Setup/mavlink.conf/* /etc/mavlink-router/
```


# Add the startup service

These services will auto-start the motion capture odometry node and the mavlink-router on boot. Note that the **ROS2 node in** `srl_vehicle_mocap_odom` **might require modifications** for your application and laboratory setup.

```bash
sudo cp $HOME/FF_OBC_Setup/services/* /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable vehicle_mocap_odom
sudo systemctl start vehicle_mocap_odom
sudo systemctl enable mavlink-router
sudo systemctl start mavlink-router
```

# Add a Static IP for the PX4 Ethernet

Set a static IP-address for the PX4 ethernet connection. This is done via **NetworkManager** on the onboard computer. We are using `192.168.0.1`.

1. Open a terminal and check existing network connections:

   ```bash
   nmcli connection show
   ```

   Identify the connection used for the PX4.

2. Open the connection’s configuration file in a text editor:

   ```bash
   sudo vim /etc/NetworkManager/system-connections/<your-wired-connection>.nmconnection
   ```

   Replace `<your-wired-connection>` with the actual connection name.

3. Modify the configuration file to set a static IP. The settings should include:

   ```
   [connection]
   id=<your-wired-connection>
   uuid=<generated-uuid>
   type=ethernet

   [ipv4]
   address1=192.168.0.1/24,192.168.0.254
   method=manual

   [ipv6]
   addr-gen-mode=stable-privacy
   method=auto
   ```

4. Save the file and restart **NetworkManager**:

   ```bash
   sudo systemctl restart NetworkManager
   ```

# All set!

At this point, you can reboot the system and the services should start automatically. You can check if all ROS 2 topics are available with:
```bash
ros2 topic list
```

The FMU topics should be populated. You can check if the communication is successful by subscribing to vehicle_attitude:
```bash
ros2 topic echo /fmu/out/vehicle_attitude
```

Lastly, on the Ground Control Station (a personal laptop, for instance), open QGroundControl, add a TCP Comm Link to the IP of the vehicle (leave the port as default) and check for connection. QGroundControl should report the vehicle status.

<!-- # Optional: Set up SAM gripper

2. Add the startup service

   ```bash
   sudo cp /home/discower/FF_OBC_Setup/services/gripper_comm.service /etc/systemd/system/
   sudo systemctl daemon-reload
   sudo systemctl enable gripper_comm
   sudo systemctl start gripper_comm
   ```
 -->


<!-- # Setup WiFi 7 - Intel BE200

1. Install `iwlwifi-modules` with
   ```bash
   sudo apt install -y iwlwifi-modules
   ```
2. Setup boot support for the module
   ```bash
   echo iwlwifi | sudo tee -a /etc/modules
   ``` -->