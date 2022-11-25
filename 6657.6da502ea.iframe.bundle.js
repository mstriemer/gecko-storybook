"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[6657],{

/***/ 86657:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n# Page title\nabout-performance-title = Task Manager\n\n## Column headers\n\ncolumn-name = Name\ncolumn-type = Type\ncolumn-energy-impact = Energy Impact\ncolumn-memory = Memory\n\n## Special values for the Name column\n\nghost-windows = Recently closed tabs\n# Variables:\n#   $title (String) - the title of the preloaded page, typically 'New Tab'\npreloaded-tab = Preloaded: { $title }\n\n## Values for the Type column\n\ntype-tab = Tab\ntype-subframe = Subframe\ntype-tracker = Tracker\ntype-addon = Add-on\ntype-browser = Browser\ntype-worker = Worker\ntype-other = Other\n\n## Values for the Energy Impact column\n##\n## Variables:\n##   $value (Number) - Value of the energy impact, eg. 0.25 (low),\n##                     5.38 (medium), 105.38 (high)\n\nenergy-impact-high = High ({ $value })\nenergy-impact-medium = Medium ({ $value })\nenergy-impact-low = Low ({ $value })\n\n## Values for the Memory column\n##\n## Variables:\n##   $value (Number) - How much memory is used\n\nsize-KB = { $value } KB\nsize-MB = { $value } MB\nsize-GB = { $value } GB\n\n## Tooltips for the action buttons\n\nclose-tab =\n    .title = Close tab\nshow-addon =\n    .title = Show in Add-ons Manager\n\n# Tooltip when hovering an item of the about:performance table\n# Variables:\n#   $totalDispatches (Number) - how many dispatches occurred for this page since it loaded\n#   $totalDuration (Number) - how much CPU time was used by this page since it loaded\n#   $dispatchesSincePrevious (Number) - how many dispatches occurred in the last 2 seconds\n#   $durationSincePrevious (Number) - how much CPU time was used in the last 2 seconds\nitem =\n    .title =\n        Dispatches since load: { $totalDispatches } ({ $totalDuration }ms)\n        Dispatches in the last seconds: { $dispatchesSincePrevious } ({ $durationSincePrevious }ms)\n";

/***/ })

}]);