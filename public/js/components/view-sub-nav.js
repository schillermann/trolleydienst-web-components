import { LitElement, css, html } from "../lit-all.min.js";
import "./view-sub-nav-button.js";

export class ViewSubNav extends LitElement {
  static styles = css`
    nav {
      margin: 20px 0px 20px 0px;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <nav>
        <view-sub-nav-button></view-sub-nav-button>
      </nav>
    `;
  }
}
customElements.define("view-sub-nav", ViewSubNav);
