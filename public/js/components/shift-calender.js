import { LitElement, until, html } from "../lit-all.min.js";
import "./shift/shift-dialog-publisher-contact.js";
import "./shift/shift-route.js";

export class ShiftCalendar extends LitElement {
  static properties = {
    calendarId: { type: Number },
  };

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(
      "dialog-publisher-contact",
      this._openPublisherContact
    );
  }
  disconnectedCallback() {
    window.removeEventListener(
      "dialog-publisher-contact",
      this._openPublisherContact
    );
    super.disconnectedCallback();
  }

  /**
   * @param {CustomEvent} event
   */
  _openPublisherContact(event) {
    this.shadowRoot
      .querySelector("shift-dialog-publisher-contact")
      .setAttribute("open", "true");
  }

  render() {
    const routes = fetch(`/api/calendars/${this.calendarId}/routes.json`).then(
      (response) => response.json()
    );
    return html`<shift-dialog-publisher-contact></shift-dialog-publisher-contact>
      ${until(
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
