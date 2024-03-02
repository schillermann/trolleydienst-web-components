import { LitElement, css, html } from "../../lit-core.min.js";
import "./shift-calendar-day.js";

export class ShiftCalendar extends LitElement {
  static properties = {
    name: {},
  };

  static styles = css`
    :host {
      background-color: blue;
    }
  `;

  constructor() {
    super();
    this.name = "World";
  }

  render() {
    return html`
      <div>
        <shift-calendar-day></shift-calendar-day>
        <shift-calendar-day></shift-calendar-day>
        <shift-calendar-day></shift-calendar-day>
        <shift-calendar-day></shift-calendar-day>
      </div>
    `;
  }
}
customElements.define("shift-calendar", ShiftCalendar);
