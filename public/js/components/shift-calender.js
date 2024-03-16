import { LitElement, until, html } from "../lit-all.min.js";
import "./shift/shift-route.js";
import "./shift/shift-contact-dialog.js";
import "./shift/shift-application-dialog.js";

export class ShiftCalendar extends LitElement {
  static properties = {
    calendarId: { type: Number },
  };

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("publisher-contact", this._eventPublisherContact);
    this.addEventListener("shift-application", this._eventShiftApplication);
  }

  disconnectedCallback() {
    this.removeEventListener("publisher-contact", this._eventPublisherContact);
    this.removeEventListener("shift-application", this._eventShiftApplication);
    super.disconnectedCallback();
  }

  /**
   * @param {CustomEvent} event
   */
  _eventPublisherContact(event) {
    /** @type {Element} */
    const dialog = this.renderRoot.querySelector("shift-contact-dialog");
    dialog.setAttribute("open", "true");
    dialog.setAttribute("publisherId", event.detail.publisherId);
    if (event.detail.editable === "true") {
      dialog.setAttribute("editable", true);
    } else {
      dialog.removeAttribute("editable");
    }
  }

  /**
   * @param {CustomEvent} event
   */
  _eventShiftApplication(event) {
    /** @type {Element} */
    const dialog = this.renderRoot.querySelector("shift-application-dialog");
    dialog.setAttribute("open", "true");
    dialog.setAttribute("publisherId", event.detail.publisherId);
  }

  render() {
    const routes = fetch(`/api/calendars/${this.calendarId}/routes.json`).then(
      (response) => response.json()
    );
    return html`<shift-application-dialog
        title="Shift Application"
      ></shift-application-dialog>
      <shift-contact-dialog title="Publisher Contact"></shift-contact-dialog>
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
