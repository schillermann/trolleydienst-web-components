import { LitElement, html } from "../lit-core.min.js";
import { Task } from "https://cdn.jsdelivr.net/npm/@lit/task@1.0.0/+esm";
import "./shift/shift-route.js";

export class ShiftCalendar extends LitElement {
  static properties = {
    calendarId: { type: Number },
  };

  constructor() {
    super();
  }

  _routesTask = new Task(this, {
    task: async ([calendarId], { signal }) => {
      const response = await fetch(`/api/calendars/${calendarId}/routes.json`, {
        signal,
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    },
    args: () => [this.calendarId],
  });

  render() {
    return this._routesTask.render({
      pending: () => html`<p>Loading routes...</p>`,
      complete: (routes) =>
        routes.map(
          (route) => html`
            <shift-route
              currentPublisherId="1"
              routeName="${route.routeName}"
              shiftStart="${new Date().toISOString()}"
              shifts="${JSON.stringify(route.shifts)}"
            ></shift-route>
          `
        ),
      error: (e) => html`<p>Error: ${e}</p>`,
    });
  }
}
customElements.define("shift-calendar", ShiftCalendar);
