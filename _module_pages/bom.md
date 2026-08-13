---
title: Bill of Materials (BoM)
author: Pedro Roque, Elias Krantz, Prasetyo WL Sanjaya
date: 2024-10-28
order_no: 1
category: Jekyll
layout: post
---

In this page we provide a list of materials used in the construction of the DISCOWER Freeflyer platform. The list is divided into three categories: Electronics, Mechanical, and Pneumatics. The list is not exhaustive and may be updated as the project progresses. In case you find any missing information or have any questions, please contact us.

**Approximate cost:** 7000 EUR

### Configuration

The Freeflyer is modular: it is built from a base plate, one or more actuation plates, and an avionics plate, plus an optional payload of your own. Select the plates for your build and the bill of materials below updates automatically. Structural and common hardware is always included.

<html>
{% raw %}
<div id="bom-config">
	<p><strong>Base plate</strong> (pick one)</p>
	<label><input type="checkbox" name="bom-base" data-single value="discower-base" checked>
		DISCOWER base plate</label>

	<p><strong>Actuation plate(s)</strong> (pick one or more)</p>
	<label><input type="checkbox" name="bom-act" value="discower-thruster" checked>
		DISCOWER thruster plate</label>
	<label><input type="checkbox" name="bom-act" value="discower-prop">
		DISCOWER propeller plate</label>

	<p><strong>Avionics plate</strong> (pick one)</p>
	<label><input type="checkbox" name="bom-avionics" data-single value="discower-avionics" checked>
		DISCOWER avionics plate</label>
</div>

<p id="bom-count"></p>
</html>

### BoM Table

<html>
<div id="bom-results"></div>

<style>
#bom-config p { margin: 0.8em 0 0.2em; }
#bom-config label { display: block; margin: 0.15em 0; cursor: pointer; }
#bom-config input { margin-right: 0.45em; }

#bom-count { font-weight: bold; }

.bom-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
.bom-table th { text-align: left; border-bottom: 2px solid #000000;
								padding: 0.4em 0.5em; }
.bom-table th.bom-col-id   { width: 9%; }
.bom-table th.bom-col-name { width: 28%; }
.bom-table th.bom-col-desc { width: 38%; }
.bom-table th.bom-col-mod  { width: 25%; }
.bom-table td { border-bottom: 1px solid #cccccc; padding: 0.45em 0.5em;
								vertical-align: top; overflow-wrap: break-word; }
.bom-table td.bom-id { font-family: monospace; }
.bom-table tr.bom-cat td { font-weight: bold; padding-top: 1.1em;
													 border-bottom: 1px solid #000000; }
.bom-table tr.bom-sub td.bom-id { padding-left: 1.3em; }
</style>

<script>
(function () {
	"use strict";

	/* Names shown in the Module column */
	var MODULE_LABEL = {
		"discower-base":     "DISCOWER base plate",
		"discower-thruster": "DISCOWER thruster plate",
		"discower-prop":     "DISCOWER propeller plate",
		"discower-avionics": "DISCOWER avionics plate",
		"general":      "General"
	};

	/* cat: Electronics | Mechanical | Pneumatics
		 mods: modules that need this item (an item may belong to several)
		 p: parent part number for sub-components */
	var ITEMS = [
		/* ---------- Electronics ---------- */
		{ id:"0001",  cat:"Electronics", mods:["discower-avionics"], name:"NVIDIA Orin Jetson NX",
			url:"https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/",
			desc:"Onboard computer. There exist different options for carrier boards." },
		{ id:"0001a", cat:"Electronics", mods:["discower-avionics"], p:"0001", name:"Connect Tech Boson Carrier Board",
			url:"https://connecttech.com/product/boson-for-framos-carrier-board-for-nvidia-jetson-orin-nx/",
			desc:"Carrier board for NVIDIA Orin Jetson NX" },
		{ id:"0001b", cat:"Electronics", mods:["discower-avionics"], p:"0001", name:"Ugreen USB Hub (2 USB-A and 2 USB-C)",
			url:"https://www.teknikdelar.se/produkt/ugreen-hub-usb-c-till-2x-usb-a-2-x-usb-c-20cm-gra",
			desc:"USB-C hub" },
		{ id:"0001c", cat:"Electronics", mods:["discower-avionics"], p:"0001", name:"Intel 8265NGW WiFi Card",
			url:"https://www.fruugo.se/dual-mode-ac8265-wireless-nic-module-support-24ghz5ghz-wifi-and-bluetooth-42-for-nano-kit/p-260936901-570900391",
			desc:"WiFi 802.11ac/a/b/g/n card for Jetson Orin NX" },
		{ id:"0001d", cat:"Electronics", mods:["discower-avionics"], p:"0001", name:"Kingston 500GB SSD",
			url:"https://www.webhallen.com/se/product/353791-Kingston-NV2-M-2-500GB",
			desc:"SSD for storing the Operating System - other M2 NVMe should also be compatible" },
		{ id:"0002",  cat:"Electronics", mods:["discower-avionics"], name:"Pixhawk 6X Mini",
			url:"https://holybro.com/products/pixhawk-6x?variant=44399078768829",
			desc:"Low-level controller" },
		{ id:"0003",  cat:"Electronics", mods:["discower-thruster"], name:"Buck Boost DC-DC Converter to 24V &gt;100W",
			url:"https://a.co/d/hgXubyN",
			desc:"DC/DC converter for thruster solenoid valves. Requires at least 96W output at 24V." },
		{ id:"0004",  cat:"Electronics", mods:["discower-avionics"], name:"Buck Converter Module, DC Voltage Step Down",
			url:"https://amzn.eu/d/5HJ4z21",
			desc:"Adjustable DC voltage regulator" },
		{ id:"0005",  cat:"Electronics", mods:["discower-avionics"], name:"6S Lipo Battery", url:"",
			desc:"10Ah Lipo battery 6S with XT60 connector" },
		{ id:"0006",  cat:"Electronics", mods:["discower-avionics"], name:"On-Off Power Switch",
			url:"https://se.rs-online.com/web/p/cam-switches/2714164",
			desc:"Manual power switch" },
		{ id:"0007",  cat:"Electronics", mods:["general"], name:"XT60 Power Cables", url:"",
			desc:"Power Cables with XT60 connectors" },
		{ id:"0008",  cat:"Electronics", mods:["general"], name:"XT60 Tarot Power Distribution Module",
			url:"http://www.tarotrc.com/Product/Detail.aspx?Lang=en&Id=f6a32e2d-7978-4ef2-b018-ccd127e8c25d",
			desc:"Power distribution module for XT60" },
		{ id:"0009",  cat:"Electronics", mods:["discower-avionics"], name:"RC Receiver/Remote",
			url:"https://docs.px4.io/main/en/getting_started/rc_transmitter_receiver.html",
			desc:"RC receiver and remote compatible with PX4" },
		{ id:"0010",  cat:"Electronics", mods:["discower-thruster"], name:"Adafruit Feather Proto",
			url:"https://www.adafruit.com/product/2884",
			desc:"PCB for Signal and Power Distribution" },
		{ id:"0011",  cat:"Electronics", mods:["discower-thruster"], name:"Wire-to-PCB Blocks",
			url:"https://www.amazon.nl/-/en/YIXISI-Terminal-Connector-Mounting-Arduino/dp/B082ZNRQMJ?th=1",
			desc:"Wire-to-PCB Blocks, 2P and 3P with 5mm pitch." },
		{ id:"0012",  cat:"Electronics", mods:["discower-prop"], name:"Holybro CAN HUB",
			url:"https://holybro.com/products/can-hub",
			desc:"CAN bus hub for aggregating VESC CAN lines to PX4" },
		{ id:"0013",  cat:"Electronics", mods:["discower-prop"], name:"Velox V2208 V2 BLDC Motor",
			url:"https://www.t-hobby.com/products/fpv-brushless-motor-v2208-v2-for-freestyle-drones?variant=0175cb64-e358-43de-bfa5-cd86da11b202",
			desc:"Brushless DC motor for propeller plate" },
		{ id:"0014",  cat:"Electronics", mods:["discower-prop"], name:"VESC 6 EDU",
			url:"https://trampaboards.com/vesc-six-education--with-imu-p-34332.html",
			desc:"Brushless motor controller with CAN bus output" },

		/* ---------- Mechanical ---------- */
		{ id:"0101", cat:"Mechanical", mods:["general"], name:"Polycarbonate plate, 8 mm thickness",
			url:"https://se.rs-online.com/web/p/plastic-sheets/2586629",
			desc:"Polycarbonate structural baseplates" },
		{ id:"0102", cat:"Mechanical", mods:["general"], name:"Aluminium Profile, 20x20 mm with 5 mm groove",
			url:"https://se.rs-online.com/web/p/tubing-and-profile-struts/8508489",
			desc:"Aluminium strut profile structure" },
		{ id:"0103", cat:"Mechanical", mods:["discower-base"], name:"Ball Mounting Screws",
			url:"https://www.newwayairbearings.com/catalog/product/13mm-diameter-ball-mounting-screws-round-end/",
			desc:"Air bearing ball mounting screws 13 mm Dia. / M10x.75 x 54 mm, S8013B06" },
		{ id:"0104", cat:"Mechanical", mods:["discower-base"], name:"Ball Retaining Clips",
			url:"https://www.newwayairbearings.com/catalog/product/13mm-ball-retaining-clips/",
			desc:"Air bearing 13 mm Ball retainer, S8013S01" },
		{ id:"0105", cat:"Mechanical", mods:["general"], name:"Angle Bracket, Strut Profile 20 mm",
			url:"https://se.rs-online.com/web/p/connecting-components/1809136",
			desc:"Angle bracket for strut profile 20 mm" },
		{ id:"0106", cat:"Mechanical", mods:["general"], name:"M4 T-Slot Nut, Strut Profile 20 mm",
			url:"https://se.rs-online.com/web/p/connecting-components/1809106",
			desc:"M4 T-Slot Nut Connecting Component, Strut Profile 20 mm, Groove Size 5mm" },
		{ id:"0107", cat:"Mechanical", mods:["general"], name:"Standoff, M5 Thread, 20mm",
			url:"https://se.rs-online.com/web/p/standoffs/2053072",
			desc:"Standoffs for baseplates" },
		{ id:"0108", cat:"Mechanical", mods:["general"], name:"Miscellanious screws, nuts and washers", url:"",
			desc:"Sizes M3, M4 and M5. Screws of lengths 8 mm, 16 mm, 20 mm, and 25 mm" },
		{ id:"0109", cat:"Mechanical", mods:["discower-prop"], name:"Gemfan 3545 Propeller", url:"https://hobbyking.com/en_us/gemfan-bull-nose-3545-grp-nylon-propellers-cw-ccw-set-black-2-pairs.html",
			desc:"3.5\"&times;4.5\" 2-blade bull nose propeller, glass reinforced nylon, 5mm hub" },

		/* ---------- Pneumatics ---------- */
		{ id:"0201", cat:"Pneumatics", mods:["discower-base"], name:"Dye Armotech Core Air Tank, 1.5 L",
			url:"https://www.tacticalstore.se/en/brands/dye-paintball/dye-armotech-core-air-tank-1-5l-90-4500",
			desc:"Air tanks of 1.5 L with 300 bar operating pressure" },
		{ id:"0202", cat:"Pneumatics", mods:["discower-base"], name:"Ninja Regulator Pro V3 4500psi HP",
			url:"https://www.tacticalstore.se/en/paintball/air-systems-co2/regulators/ninja-regulator-pro-v3-4500psi-hp/",
			desc:"Air tank regulator, step 1, output 60 bar" },
		{ id:"0203", cat:"Pneumatics", mods:["discower-base"], name:"Polarstar micro MR GEN2 Regulator",
			url:"https://www.powair6.com/en/hpa-regulator/10928-polarstar-micro-mr-gen2-regulator.html",
			desc:"Air tank regulator, step 2, adjustable output" },
		{ id:"0204", cat:"Pneumatics", mods:["discower-base"], name:"Polarstar Male Quick Disconnect Fitting",
			url:"https://polarstarairsoft.com/products/male-qd-fitting-assembly",
			desc:"Fitting for Polarstar regulator" },
		{ id:"0205", cat:"Pneumatics", mods:["discower-base"], name:"50 mm Flat Round Air Bearing",
			url:"https://www.newwayairbearings.com/catalog/product/50mm-flat-round-air-bearings/",
			desc:"Flat air bearings" },
		{ id:"0206", cat:"Pneumatics", mods:["discower-base"], name:"Festo Pressure regulator MS2-LR-QS6-D6-AR-BAR-B",
			url:"https://www.festo.com/se/en/a/8086638/",
			desc:"Pressure regulator for air bearings" },
		{ id:"0207", cat:"Pneumatics", mods:["discower-base"], name:"Festo Pressure regulator MS4-LR-1/4-D7-AS",
			url:"https://www.festo.com/us/en/a/529419/",
			desc:"Pressure regulator for thrusters" },
		{ id:"0208", cat:"Pneumatics", mods:["discower-base"], name:"Festo Push-in fitting QS-G1/4-6",
			url:"https://www.festo.com/us/en/a/186097/",
			desc:"Push in fitting for regulator MS4-LR-1/4-D7-AS" },
		{ id:"0209", cat:"Pneumatics", mods:["discower-thruster"], name:"Festo Solenoid Valve MHJ10-S-2,5-QS-6-HF",
			url:"https://www.festo.com/tw/en/a/567503/",
			desc:"Solenoid valve for thruster pulse control" },
		{ id:"0210", cat:"Pneumatics", mods:["general"], name:"Festo Plastic Tubing PEN-6X1-BL",
			url:"https://www.festo.com/us/en/a/551457/",
			desc:"6/4 mm tubing" },
		{ id:"0211", cat:"Pneumatics", mods:["discower-thruster"], name:"Legris Plastic Tubing 4 mm",
			url:"https://se.rs-online.com/web/p/air-hoses/1447836",
			desc:"4/2 mm tubing for nozzles" },
		{ id:"0212", cat:"Pneumatics", mods:["discower-thruster"], name:"Festo Push-in T-connector QSMT-6",
			url:"https://www.festo.com/ee/en/a/153367/",
			desc:"T-connector 6 mm" },
		{ id:"0213", cat:"Pneumatics", mods:["discower-base"], name:"Festo Push-in Y-connector QSY-6",
			url:"https://www.festo.com/us/en/a/153149/",
			desc:"Y-connector 6 mm" },
		{ id:"0214", cat:"Pneumatics", mods:["discower-base"], name:"Festo Push-in X-connector QSMX-6",
			url:"https://www.festo.com/us/en/a/153380/",
			desc:"X-connector 6 mm" },
		{ id:"0215", cat:"Pneumatics", mods:["discower-base"], name:"Festo Ball Valve QH-QS-6",
			url:"https://www.festo.com/us/en/a/153484/",
			desc:"Manual shut-off valve" },
		{ id:"0216", cat:"Pneumatics", mods:["discower-thruster"], name:"Festo Push-in connector QSM-6-4",
			url:"https://www.festo.com/us/en/a/153327/",
			desc:"6 mm to 4 mm tubing connector" },
		{ id:"0217", cat:"Pneumatics", mods:["discower-base"], name:"Festo Push-in connector QSM-M5-6-I",
			url:"https://www.festo.com/us/en/a/153317/",
			desc:"M5 thread to 6mm push-in tubing connector" }
	];

	var CATEGORIES = ["Electronics", "Mechanical", "Pneumatics"];

	function selectedModules() {
		var keys = ["general"];
		var checked = document.querySelectorAll("#bom-config input:checked");
		for (var i = 0; i < checked.length; i++) keys.push(checked[i].value);
		return keys;
	}

	/* Modules (among the selected ones) that need this item */
	function moduleCell(it, keys) {
		var labels = [];
		for (var i = 0; i < it.mods.length; i++) {
			if (keys.indexOf(it.mods[i]) !== -1) labels.push(MODULE_LABEL[it.mods[i]]);
		}
		return labels.join(",<br>");
	}

	function rowHtml(it, keys) {
		var link = it.url
			? '<a href="' + it.url + '" target="_blank" rel="noopener">' + it.name + '</a>'
			: it.name;
		return '<tr class="' + (it.p ? "bom-sub" : "") + '">' +
			'<td class="bom-id">' + it.id + '</td>' +
			'<td>' + link + '</td>' +
			'<td>' + it.desc + '</td>' +
			'<td>' + moduleCell(it, keys) + '</td></tr>';
	}

	function isNeeded(it, keys) {
		for (var i = 0; i < it.mods.length; i++) {
			if (keys.indexOf(it.mods[i]) !== -1) return true;
		}
		return false;
	}

	function render() {
		var keys = selectedModules();
		var rows = "";
		var count = 0;
		CATEGORIES.forEach(function (cat) {
			var items = ITEMS.filter(function (it) {
				return it.cat === cat && isNeeded(it, keys);
			});
			if (!items.length) return;
			count += items.length;
			rows += '<tr class="bom-cat"><td></td><td colspan="3">' + cat + '</td></tr>' +
				items.map(function (it) { return rowHtml(it, keys); }).join("");
		});
		document.getElementById("bom-results").innerHTML =
			'<table class="bom-table"><thead><tr>' +
			'<th class="bom-col-id">Part No.</th>' +
			'<th class="bom-col-name">Name</th>' +
			'<th class="bom-col-desc">Description</th>' +
			'<th class="bom-col-mod">Module</th>' +
			'</tr></thead><tbody>' + rows + '</tbody></table>';
		document.getElementById("bom-count").textContent =
			count + " parts in this configuration";
	}

	/* Groups marked data-single behave like radio buttons that can also be
	   unchecked: ticking one option unticks the others in the same group. */
	function enforceSingleChoice(input) {
		if (!input.hasAttribute("data-single") || !input.checked) return;
		var group = document.querySelectorAll(
			'#bom-config input[name="' + input.name + '"]');
		for (var i = 0; i < group.length; i++) {
			if (group[i] !== input) group[i].checked = false;
		}
	}

	document.getElementById("bom-config").addEventListener("change", function (e) {
		if (e.target && e.target.tagName === "INPUT") enforceSingleChoice(e.target);
		render();
	});

	render();
})();
</script>
{% endraw %}
</html>
