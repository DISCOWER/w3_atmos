---
title: Motor & Propeller Setup
author: Prasetyo W. L. Sanjaya
date: 2026-04-09
category: Jekyll
layout: post
---

This guide details the software configuration process for setting up the propeller actuation layer on the DISCOWER ATMOS Platform using the VESC ecosystem and PX4 (via QGroundControl).

## Requirements

### Hardware Requirements
* **Motor Controller:** [VESC SIX EDU](https://trampaboards.com/vesc-six-education--with-imu-p-34332.html)
* **CAN/Logging Interface:** [VESC Express](https://trampaboards.com/vesc-express-with-canbus-power-cable-p-35245.html)
* **Brushless Motor:** [T-Motor VELOX V2208 V2](https://www.t-hobby.com/products/fpv-brushless-motor-v2208-v2-for-freestyle-drones?variant=0175cb64-e358-43de-bfa5-cd86da11b202)
* **Power:** 6S Battery
* **Cables:** Micro-USB Data Cable
* **PX4** with [PWM Extension](https://holybro.com/products/pwm-ext-board?_pos=1&_psq=pwm-ext&_ss=e&_v=1.0) (for PWM command) or [CAN Hub](https://holybro.com/products/can-hub?srsltid=AfmBOoqFdTyuq583F9LTZAb38almERX48EPLFEsKkp_eh8mmc-xa2V7M) (for CAN command)

### Wiring Diagram
* Using PWM Command
![Wiring diagram for using PWM command](/assets/propeller/wiring_propeller_PWM.png)

<!-- TO DO -->
<!-- * Using CAN Command
![Wiring diagram for using CAN command](/assets/propeller/wiring_propeller_CAN.png) -->

### Software Requirements
* **VESC Tool Free** ([Download](https://vesc-project.com/vesc_tool))
* **Motor Configuration File:** [VESC6_TunedFOC.xml](/assets/propeller/VESC6_TunedFOC_9Mar26.xml)
* **App Configuration File:** [v2208_APP_PPM.xml](/assets/propeller/v2208_APP_PPM_9Mar26.xml)

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
3. Navigate to **App Settings** -> **PPM** -> **Mapping**. You should now see the signal bars actively waiting for input.
4. You can also observe current, temperature, RPM, etc using the **Data Analysis** -> **Realtime Data** menu.

![Real Time Monitoring on VESC Tool](/assets/propeller/VESCTool_monitoring.png)

### Step 4: Testing via QGroundControl
We can also use QGroundControl to test the motors. Ensure your PX4 is powered and connected to your PC.

1. Open **QGroundControl**.
2. Navigate to **Vehicle Setup** -> **Actuators**.
3. Scroll down to the **Actuator Testing** section.
4. Ensure the **Disarmed, Minimum, and Maximum** settings on **PWM MAIN** (or PWM AUX if you are using PWM AUX port) are as configured in the image below.
5. Toggle the safety switch to **Enable Sliders** (Acknowledge the "Propellers are removed" warning).
6. Slowly drag the slider for your specific motor upwards.
7. **Observe the Motor:** The motor should begin spinning smoothly.
8. **Observe the VESC Tool:** Switch back to the VESC Tool. You should see the live signal bar reacting in sync with your QGroundControl slider movements.

![QGroundControl Actuator Testing Configuration](/assets/propeller/QGround_config.png)

<!-- TO DO -->
<!-- - CAN Connection and Set Up -->