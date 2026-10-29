---
title: Bill of Materials (BoM)
author: Pedro Roque, Elias Krantz, Prasetyo WL Sanjaya
date: 2024-10-28
order_no: 1
category: Jekyll
layout: post
---

In this page we provide a list of materials used in the construction of the DISCOWER Freeflyer platform. The list is divided into three categories: Electronics, Mechanical, and Pneumatics. The list is not exhaustive and may be updated as the project progresses. In case you find any missing information or have any questions, please contact us.

**Approximate cost for the default configuration:** 7000 EUR<span class="bom-default-star" aria-hidden="true">*</span>

<small><span class="bom-default-star" aria-hidden="true">*</span> Estimate from 2025.</small>

### Configuration

Select your modules and item packs. The BoM table updates automatically.

<html>
<link rel="stylesheet" href="{{ '/assets/css/bom.css' | relative_url }}">
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<div id="bom-config" class="bom-config" aria-label="Freeflyer configuration">
{% for group in site.data.bom.configuration %}
	<fieldset class="bom-config-group">
		<legend>{{ group.title | escape }}</legend>
		<div class="bom-choice-grid">
			{% for choice in group.choices %}
			<button type="button" class="bom-config-choice" data-module="{{ choice.id | escape }}" aria-pressed="{% if choice.default %}true{% else %}false{% endif %}">
				<span class="bom-choice-preview" aria-hidden="true">
					{% if choice.model %}
					<model-viewer class="bom-config-model" src="{{ choice.model | relative_url }}" alt="" loading="lazy" auto-rotate rotation-per-second="8deg" shadow-intensity="1"></model-viewer>
					{% elsif choice.icon %}
					<span class="bom-choice-icon">{{ choice.icon | escape }}</span>
					{% endif %}
				</span>
				<span class="bom-choice-label">{{ choice.label | escape }}{% if choice.default %}<span class="bom-default-star" aria-hidden="true">*</span>{% endif %}</span>
			</button>
			{% endfor %}
		</div>
	</fieldset>
{% endfor %}
</div>
<div class="bom-config-actions">
	<p class="bom-default-note"><span aria-hidden="true">*</span> Default</p>
	<button type="button" id="bom-reset" class="bom-reset-button">Reset to defaults</button>
</div>
</html>

### BoM Table

<html>
<div class="bom-toolbar">
	<p id="bom-count" aria-live="polite"></p>
	<div id="bom-market" class="bom-market-control" role="group" aria-label="Link market">
		<span class="bom-toolbar-label">Show links for</span>
		<button type="button" class="bom-market-button" data-market="all" aria-pressed="true">All markets</button>
		<button type="button" class="bom-market-button" data-market="EU" aria-pressed="false">🇪🇺 EU</button>
		<button type="button" class="bom-market-button" data-market="US" aria-pressed="false">🇺🇸 US</button>
	</div>
</div>
<div id="bom-results"></div>
<script id="bom-data" type="application/json">{{ site.data.bom | jsonify }}</script>
<script src="{{ '/assets/js/bom.js' | relative_url }}" defer></script>
</html>
