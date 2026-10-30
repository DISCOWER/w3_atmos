(function () {
	"use strict";

	var dataElement = document.getElementById("bom-data");
	if (!dataElement) return;

	var bom = JSON.parse(dataElement.textContent);
	var moduleLabels = Object.create(null);
	var defaultModules = Object.create(null);
	bom.configuration.forEach(function (group) {
		group.choices.forEach(function (choice) {
			moduleLabels[choice.id] = choice.label;
			defaultModules[choice.id] = Boolean(choice.default);
		});
	});

	var configState = Object.assign({}, defaultModules);
	var selectedAlternatives = Object.create(null);
	var selectedMarket = "all";
	var regionInfo = {
		EU: { icon: "🇪🇺", className: "eu", title: "EU item link" },
		US: { icon: "🇺🇸", className: "us", title: "US item link" },
		world: { icon: "🌐", className: "world", title: "World item link" }
	};

	function selectedModules() {
		return Object.keys(configState).filter(function (key) { return configState[key]; });
	}

	function escapeHtml(value) {
		var replacements = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
		return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
			return replacements[character];
		});
	}

	function productAlternatives(item) {
		return (item.alternatives || []).map(function (alternative) {
			return {
				name: alternative.name,
				note: alternative.note || "",
				links: (alternative.links || []).map(function (link) {
					return {
						name: link.name,
						region: link.region === "EU" || link.region === "US" ? link.region : "world",
						url: link.url || ""
					};
				})
			};
		});
	}

	function selectionFor(item) {
		var alternatives = productAlternatives(item);
		var index = selectedAlternatives[item.id] || 0;
		if (index >= alternatives.length) index = 0;
		return { alternatives: alternatives, index: index, alternative: alternatives[index] || { links: [] } };
	}

	function alternativeCell(item, selection) {
		var note = selection.alternative.note
			? '<span class="bom-alternative-note">' + escapeHtml(selection.alternative.note) + '</span>'
			: "";
		if (selection.alternatives.length < 2) {
			return '<span class="bom-alternative-single" aria-label="No alternative">&mdash;</span>' + note;
		}
		var choices = selection.alternatives.map(function (alternative, index) {
			return '<option value="' + index + '"' + (index === selection.index ? " selected" : "") + '>' +
				escapeHtml(alternative.name) + '</option>';
		}).join("");
		return '<div class="bom-alternative-control"><select class="bom-alternative-select" data-item-id="' + escapeHtml(item.id) + '"' +
			' aria-label="Alternatives for ' + escapeHtml(item.name) + '">' + choices + '</select>' + note + '</div>';
	}

	function itemLinksCell(alternative) {
		var links = alternative.links || [];
		if (!links.length) return '<span class="bom-no-link">No source link listed</span>';
		var visibleLinks = links.filter(function (link) {
			return selectedMarket === "all" || link.region === selectedMarket || link.region === "world";
		});
		if (!visibleLinks.length) return '<span class="bom-no-link">No item link listed for this market</span>';
		var linkMarkup = visibleLinks.map(function (link) {
			var info = regionInfo[link.region] || regionInfo.world;
			return '<a class="bom-item-link" href="' + escapeHtml(link.url) + '" target="_blank" rel="noopener"' +
				' aria-label="Open ' + escapeHtml(link.name) + ', ' + escapeHtml(info.title) + '">' +
				'<span class="bom-link-market bom-region-' + info.className + '" title="' + escapeHtml(info.title) + '">' +
				escapeHtml(info.icon) + '</span><span>' + escapeHtml(link.name) + '</span></a>';
		}).join("");
		return '<div class="bom-item-links">' + linkMarkup + '</div>';
	}

	function moduleCell(item, selected) {
		var labels = item.modules.filter(function (module) { return selected.indexOf(module) !== -1; });
		return '<div class="bom-module-list">' + labels.map(function (module) {
			return '<span class="bom-module-tag">' + escapeHtml(moduleLabels[module] || module) + '</span>';
		}).join("") + '</div>';
	}

	function rowHtml(item, selected) {
		var selection = selectionFor(item);
		return '<tr class="' + (item.parent ? "bom-sub" : "") + '">' +
			'<td class="bom-id">' + escapeHtml(item.id) + '</td>' +
			'<td><span class="bom-item-name">' + escapeHtml(item.name) + '</span>' +
			'<p class="bom-item-desc">' + escapeHtml(item.description) + '</p></td>' +
			'<td>' + alternativeCell(item, selection) + '</td>' +
			'<td>' + itemLinksCell(selection.alternative) + '</td>' +
			'<td>' + moduleCell(item, selected) + '</td></tr>';
	}

	function render() {
		var selected = selectedModules();
		var rows = "";
		var count = 0;
		bom.categories.forEach(function (category) {
			var items = bom.items.filter(function (item) {
				return item.category === category && item.modules.some(function (module) {
					return selected.indexOf(module) !== -1;
				});
			});
			if (!items.length) return;
			count += items.length;
			rows += '<tr class="bom-cat bom-cat-' + category.toLowerCase() + '"><th scope="rowgroup" colspan="5">' +
				escapeHtml(category) + '<span class="bom-category-count">' + items.length + ' parts</span></th></tr>' +
				items.map(function (item) { return rowHtml(item, selected); }).join("");
		});

		var results = document.getElementById("bom-results");
		var scrollLeft = results.scrollLeft;
		results.innerHTML = '<table class="bom-table"><thead><tr>' +
			'<th class="bom-col-id" title="Part number">Part</th>' +
			'<th class="bom-col-item">Component</th>' +
			'<th class="bom-col-alternatives">Alternatives</th>' +
			'<th class="bom-col-links">Item links</th>' +
			'<th class="bom-col-mod">Required for</th>' +
			'</tr></thead><tbody>' + rows + '</tbody></table>';
		results.scrollLeft = scrollLeft;
		document.getElementById("bom-count").textContent = count + " parts in this configuration · " +
			(selectedMarket === "all" ? "all item links" : selectedMarket + " item links");
		Array.from(document.querySelectorAll("#bom-market .bom-market-button")).forEach(function (button) {
			button.setAttribute("aria-pressed", button.getAttribute("data-market") === selectedMarket ? "true" : "false");
		});
	}

	function syncConfigurationButtons() {
		document.querySelectorAll("#bom-config .bom-config-choice").forEach(function (button) {
			button.setAttribute("aria-pressed", configState[button.getAttribute("data-module")] ? "true" : "false");
		});
	}

	document.getElementById("bom-config").addEventListener("click", function (event) {
		var button = event.target.closest(".bom-config-choice");
		if (!button) return;
		var key = button.getAttribute("data-module");
		configState[key] = !configState[key];
		button.setAttribute("aria-pressed", configState[key] ? "true" : "false");
		render();
	});

	document.getElementById("bom-reset").addEventListener("click", function () {
		configState = Object.assign({}, defaultModules);
		syncConfigurationButtons();
		render();
	});

	document.getElementById("bom-results").addEventListener("change", function (event) {
		if (!event.target.classList.contains("bom-alternative-select")) return;
		selectedAlternatives[event.target.getAttribute("data-item-id")] = Number(event.target.value);
		render();
	});

	document.getElementById("bom-market").addEventListener("click", function (event) {
		var button = event.target.closest(".bom-market-button");
		if (!button) return;
		selectedMarket = button.getAttribute("data-market");
		render();
	});

	if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		document.querySelectorAll("#bom-config model-viewer").forEach(function (model) {
			model.removeAttribute("auto-rotate");
		});
	}

	render();
})();