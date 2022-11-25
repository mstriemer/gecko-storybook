/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { html } from "../vendor/lit.all.mjs";
import { MozLitElement } from "../lit-utils.mjs";

export const PLATFORM_LINUX = "linux";
export const PLATFORM_MACOS = "macosx";
export const PLATFORM_WINDOWS = "win";

export default class MozButtonGroup extends MozLitElement {
  static LOCAL_NAME = "moz-button-group";

  static properties = {
    platform: { type: String },
  };

  constructor() {
    super();
    this.#detectPlatform();
  }

  #detectPlatform() {
    if (typeof AppConstants !== "undefined") {
      this.platform = AppConstants.platform;
    } else if (navigator.platform.includes("Linux")) {
      this.platform = PLATFORM_LINUX;
    } else if (navigator.platform.includes("Mac")) {
      this.platform = PLATFORM_MACOS;
    } else {
      this.platform = PLATFORM_WINDOWS;
    }
  }

  render() {
    return html`
      <link rel="stylesheet" href=${this.constructor.stylesheetUrl} />
      ${this.platform == PLATFORM_WINDOWS
        ? html`
            <slot name="primary"></slot><slot></slot>
          `
        : html`
            <slot></slot><slot name="primary"></slot>
          `}
    `;
  }
}
customElements.define("moz-button-group", MozButtonGroup);
