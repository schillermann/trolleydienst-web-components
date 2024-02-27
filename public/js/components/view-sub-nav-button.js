import { LitElement, css, html } from "../lit-core.min.js";

export class ViewSubNavButton extends LitElement {
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
    return html` <button>New Shift</button> `;
  }
}
customElements.define("view-sub-nav-button", ViewSubNavButton);
