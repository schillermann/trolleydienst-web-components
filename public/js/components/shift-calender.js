import { LitElement, until, html } from "../lit-all.min.js";
import "./shift/shift-route.js";

export class ShiftCalendar extends LitElement {
  static properties = {
    calendarId: { type: Number },
  };

  constructor() {
    super();
  }

  render() {
    const routes = fetch(`/api/calendars/${this.calendarId}/routes.json`).then(
      (response) => response.json()
    );
    return html`${until(
      routes.then((routes) =>
        routes.map(
          (route) => html` <shift-route
            currentPublisherId="1"
            routeName="${route.routeName}"
            date="${route.date}"
            shifts="${JSON.stringify(route.shifts)}"
          ></shift-route>`
        )
      ),
      html`<span>Loading...</span>`
    )}`;
  }
}
customElements.define("shift-calendar", ShiftCalendar);
