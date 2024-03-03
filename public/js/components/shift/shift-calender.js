import { LitElement, css, html } from "../../lit-core.min.js";
import "./shift-calendar-day.js";

export class ShiftCalendar extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = "World";
  }

  render() {
    const shifts = [
      {
        from: "9:00",
        to: "11:00",
        slots: [
          {
            publisherId: 1,
            publisherName: "John Doe",
          },
          {
            publisherId: 2,
            publisherName: "Jane Doe",
          },
          {},
        ],
      },
      {
        from: "11:00",
        to: "13:00",
        slots: [
          {},
          {
            publisherId: 2,
            publisherName: "Jane Doe",
          },
          {},
        ],
      },
      {
        from: "13:00",
        to: "15:00",
        slots: [{}, {}, {}],
      },
    ];
    return html`
      <div>
        <shift-calendar-day
          currentPublisherId="1"
          routeName="Route 1"
          shiftStart="${new Date().toISOString()}"
          shifts="${JSON.stringify(shifts)}"
        ></shift-calendar-day>
        <shift-calendar-day
          currentPublisherId="1"
          routeName="Route 2"
          shiftStart="${new Date().toISOString()}"
          shifts="${JSON.stringify(shifts)}"
        ></shift-calendar-day>
        <shift-calendar-day
          currentPublisherId="1"
          routeName="Route 3"
          shiftStart="${new Date().toISOString()}"
          shifts="${JSON.stringify(shifts)}"
        ></shift-calendar-day>
        <shift-calendar-day
          currentPublisherId="1"
          routeName="Route 4"
          shiftStart="${new Date().toISOString()}"
          shifts="${JSON.stringify(shifts)}"
        ></shift-calendar-day>
      </div>
    `;
  }
}
customElements.define("shift-calendar", ShiftCalendar);
