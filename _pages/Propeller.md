---
title: Motor & Propeller Setup
author: Prasetyo W. L. Sanjaya
date: 2026-03-09
category: Jekyll
layout: post
---

This guide details the software configuration process for setting up the propeller actuation layer on the DISCOWER ATMOS Platform using the VESC ecosystem and PX4 (via QGroundControl).

<html>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<model-viewer src="/assets/propeller/actuator_plate.glb" 
              alt="Actuator Plate" 
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


## Requirements

### Hardware Requirements
* **Motor Controller:** [VESC SIX EDU](https://trampaboards.com/vesc-six-education--with-imu-p-34332.html)
* **CAN/Logging Interface:** [VESC Express](https://trampaboards.com/vesc-express-with-canbus-power-cable-p-35245.html)
* **Brushless Motor:** [T-Motor VELOX V2208 V2](https://www.t-hobby.com/products/fpv-brushless-motor-v2208-v2-for-freestyle-drones?variant=0175cb64-e358-43de-bfa5-cd86da11b202)
* **Power:** 6S Battery
* **Cables:** Micro-USB Data Cable
* **Pixhawk PX4** 
* **CAN HUB:** [Holybro CAN Hub](https://holybro.com/products/can-hub?srsltid=AfmBOoqFdTyuq583F9LTZAb38almERX48EPLFEsKkp_eh8mmc-xa2V7M) 
<!-- * or [PWM Extension](https://holybro.com/products/pwm-ext-board?_pos=1&_psq=pwm-ext&_ss=e&_v=1.0) (for PWM command) -->


### Wiring Diagram
<b>Using CAN Command</b>

![Wiring diagram for using CAN command](/assets/propeller/wiring_propeller_CAN.png)

<!-- <details markdown="1"> -->

<!-- <summary>Using PWM Command</summary>

![Wiring diagram for using PWM command](/assets/propeller/wiring_propeller_PWM.png)

</details> -->

### Software Requirements
* **VESC Tool Free** ([Download](https://vesc-project.com/vesc_tool))

* **Config Files For Using CAN Command**

  * **Motor Configuration File:** [26032026_vesc_mcconf_CAN.xml](/assets/propeller/26032026_vesc_mcconf_CAN.xml)
  * **App Configuration File:** [26032026_vesc_appconf_CAN.xml](/assets/propeller/26032026_vesc_appconf_CAN.xml)
  

<!-- * <details markdown="1">
  <summary><b>Config Files For Using PWM Command</b></summary>

  * **Motor Configuration File:** [VESC6_TunedFOC.xml](/assets/propeller/VESC6_TunedFOC_9Mar26.xml)
  * **App Configuration File:** [v2208_APP_PPM.xml](/assets/propeller/v2208_APP_PPM_9Mar26.xml)
  
  </details> -->


### Physical Propeller Configuration

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

>## ⚠️ CRITICAL SAFETY WARNINGS
>
>1. **REMOVE THE PROPELLER:** If possible, do not perform these setup steps with a propeller attached to the motor. Unexpected throttle spikes during configuration can cause severe injury or damage equipment. 
>2. **BEWARE THE GRID GROUND LOOP:** If your PC and your VESC are both grounded to the wall grid, massive currents can travel through the USB cable and destroy your hardware. **Always run your laptop on battery power (unplug the charger from the wall)** when connecting via USB to a live VESC. 
>       - More on the ground loop: [VESC Documentation](https://trampaboards.com/vesc-six-education--with-imu-p-34332.html)
>       ![Guide on Avoiding Ground Loop from VESC](/assets/propeller/VESC_GroundLoop.png)
{: .block-warning }


---

## Setup Guide

### Step 1: Power & Connection
1. Ensure you have read and acknowledged the safety warnings above.
2. Power the VESC by plugging in the main 6S battery.
3. Connect the VESC to your computer using the Micro-USB cable. *(Verify your laptop charger is unplugged!)*
4. Open the **VESC Tool** on your computer.
5. Click the **Connect** button in the VESC Tool (usually auto-detects the COM port) to establish a connection with the VESC.

### Step 2: Uploading XML Configurations
Instead of running the manual setup wizards, we will load pre-calibrated XML files for the motor parameters and app routing (Specific to use with the T-Motor VELOX V2208 V2).

1. **Load Motor Config:**
   * Navigate to `File` -> `Load Motor Configuration XML`.
   * Select your downloaded Motor Config XML file.
   * Click the **Write Motor Configuration** button (the 'M' down-arrow icon on the right toolbar) to flash these settings to the VESC.
2. **Load App Config:**
   * Navigate to `File` -> `Load App Configuration XML`.
   * Select your downloaded App Config XML file.
   * Click the **Write App Configuration** button (the 'A' down-arrow icon on the right toolbar) to flash these settings to the VESC.

### Step 3: Activating Real-Time Monitoring
To verify the VESC is receiving signals from the flight controller, we need to turn on the live data feed.

1. Look at the vertical toolbar on the far right side of the VESC Tool.
2. Click the **RT APP** button (Real-Time App Data) and (optional) **Stream Real Data** button (right above RT APP). 
3. You can observe current, temperature, RPM, etc using the **Data Analysis** -> **Realtime Data** menu.

![Real Time Monitoring on VESC Tool](/assets/propeller/VESCTool_monitoring.png)

### Step 4: Testing via QGroundControl
We can also use QGroundControl to test the motors. Ensure your PX4 is powered and connected to your PC.

1. Open **QGroundControl**.
2. Navigate to **Vehicle Setup** -> **Actuators**.
3. Scroll down to the **Actuator Testing** section.
4. Toggle the safety switch to **Enable Sliders** (Acknowledge the "Propellers are removed" warning).
5. Slowly drag the slider for your specific motor upwards.
6. **Observe the Motor:** The motor should begin spinning smoothly.
7. **Observe the VESC Tool:** Switch back to the VESC Tool. You should see the live signal bar reacting in sync with your QGroundControl slider movements.

<!-- TODO: UPDATE CONFIG USING CAN SCREENSHOT -->
![QGroundControl Actuator Testing](/assets/propeller/QGround_config.png)

### Step 5: ROS Integration

Once the hardware and low-level firmware (VESC & PX4) are configured and successfully tested, the next step is linking the actuation layer to high-level ROS 2 stack. 

The ATMOS platform uses a dedicated ROS node to translate vehicle-level movement commands into the specific motor signals required by PX4.

Instead of passing generic velocity commands to PX4, this node performs **Direct Actuator Control**. It calculates the normalized signal needed to achieve a specific physical force, and sends it directly to the VESCs. 

#### Important ROS Topics:
* **[Subscriber] `prop_plate/external_motor_cmd`** (`std_msgs/Float32MultiArray`)
  * **Function:** This is the input topic where your control algorithm sends its desired motor forces (in Newtons). It expects an array of 4 float values corresponding to Motors 1 through 4.
* **[Publisher] `fmu/in/vehicle_command`** (`px4_msgs/VehicleCommand`)
  * **Function:** The node publishes the translated, normalized signals here. The PX4 microRTPS / XRCE-DDS bridge automatically catches this topic and forwards it to the Pixhawk. It specifically uses the `VEHICLE_CMD_DO_SET_ACTUATOR` command flag to completely bypass PX4's internal PID mixer.

#### How to Set Up:

1. **Get the Interface Package:** Clone the interface package into your ROS workspace:
   [DISCOWER/atmos_propeller_plate_interface](https://github.com/DISCOWER/atmos_propeller_plate_interface/tree/main)

2. **Configure the Thrust Curves (`parameters.yaml`):**
   Inside the package, the most critical configuration is the parameters file. This file contains the calibration polynomials that map the theoretical desired thrust to the actual physical output of the T-Motors.

   Because drone propellers are asymmetric (they generate thrust very differently when spinning forward versus backward), the node requires two separate sets of coefficients:
   * **`positive_thrust_curve`**: The polynomial array for standard forward thrust mapping.
   * **`negative_thrust_curve`**: The polynomial array for reverse/downward thrust mapping.

   *Example parameter structure:*
   ```yaml
   propeller_plate_iface_node:
     ros__parameters:
       positive_thrust_curve:
         [
           0.023632,
           1.8759265385,
           -3.1837536850,
           2.7998911919,
           -1.1203148010,
           0.1646818003,
         ]
       negative_thrust_curve:
         [
           -0.044404,
           2.1427336227,
           4.5752112322,
           5.3259397733,
           2.8291793599,
           0.5544980303,
         ]
   ```