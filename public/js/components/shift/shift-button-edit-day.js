import { LitElement, css, html } from "../../lit-core.min.js";

export class ShiftButtonEditDay extends LitElement {
  static properties = {
    publisherName: { type: String },
  };

  static styles = css`
    button {
      color: black;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html` <button>Edit</button> `;
  }
}
customElements.define("shift-button-edit-day", ShiftButtonEditDay);
