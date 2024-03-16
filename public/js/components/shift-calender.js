import { LitElement, until, html } from "../lit-all.min.js";
import "./shift/shift-route.js";
import "./shift/shift-contact-dialog.js";

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
      this._eventDialogPublisherContact
    );
  }
  disconnectedCallback() {
    window.removeEventListener(
      "dialog-publisher-contact",
      this._eventDialogPublisherContact
    );
    super.disconnectedCallback();
  }

  /**
   * @param {CustomEvent} event
   */
  _eventDialogPublisherContact(event) {
    /** @type {Element} */
    const shiftContactDialog = this.renderRoot.querySelector(
      "shift-contact-dialog"
    );
    shiftContactDialog.setAttribute("open", "true");
    shiftContactDialog.setAttribute("publisherId", event.detail.publisherId);
  }

  render() {
    const routes = fetch(`/api/calendars/${this.calendarId}/routes.json`).then(
      (response) => response.json()
    );
    return html` <shift-contact-dialog
        title="Publisher Contact"
      ></shift-contact-dialog>
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
