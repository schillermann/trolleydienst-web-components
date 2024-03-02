import { LitElement, css, html } from "../../lit-core.min.js";

export class ShiftButtonApplyShift extends LitElement {
  static properties = {
    name: {},
  };

  static styles = css`
    :host {
      color: black;
    }
  `;

  constructor() {
    super();
    this.name = "World";
  }

  render() {
    return html` <button>available</button> `;
  }
}
customElements.define("shift-button-apply-shift", ShiftButtonApplyShift);
