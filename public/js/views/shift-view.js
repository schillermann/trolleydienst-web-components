import { LitElement, css, html } from "../lit-core.min.js";
import "../components/view-header.js";
import "../components/view-sub-nav.js";
import "../components/shift-info-box.js";
import "../components/shift-calender.js";

export class ShiftView extends LitElement {
  static styles = css`
    :host {
      color: black;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <view-header>Trolley Schichten</view-header>
      <shift-info-box></shift-info-box>
      <view-sub-nav></view-sub-nav>
      <shift-calendar></shift-calendar>
    `;
  }
}
customElements.define("shift-view", ShiftView);
