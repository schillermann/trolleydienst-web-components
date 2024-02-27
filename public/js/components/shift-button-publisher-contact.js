import { LitElement, css, html } from "../lit-core.min.js";

export class ShiftButtonPublisherContact extends LitElement {
  static properties = {
    publisherName: { type: String },
  };

  static styles = css`
    button {
      background-color: #9bcc66;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html` <button>${this.publisherName}</button> `;
  }
}
customElements.define(
  "shift-button-publisher-contact",
  ShiftButtonPublisherContact
);
