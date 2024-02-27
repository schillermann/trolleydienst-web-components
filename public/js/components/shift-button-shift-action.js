import { LitElement, css, html } from "../lit-core.min.js";

export class ShiftButtonShiftAction extends LitElement {
  static properties = {
    publisherName: { type: String },
  };

  static styles = css`
    button {
      color: white;
      background-color: #604a7b;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html` <button>${this.publisherName}</button> `;
  }
}
customElements.define("shift-button-shift-action", ShiftButtonShiftAction);
