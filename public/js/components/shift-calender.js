import { LitElement, until, html } from "../lit-all.min.js";
import "./shift/shift-route.js";
import "./view-dialog.js";

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
    /** @type {ShadowRoot} */
    this.renderRoot
      .getElementById("publisher-contact")
      .setAttribute("open", "true");
  }

  _clickDelete() {
    /** @type {ShadowRoot} */
    this.renderRoot.getElementById("publisher-contact").removeAttribute("open");
  }

  render() {
    const routes = fetch(`/api/calendars/${this.calendarId}/routes.json`).then(
      (response) => response.json()
    );
    return html` <view-dialog id="publisher-contact" title="Publisher Contact">
        <h3>${this.firstname} ${this.lastname}</h3>
        <address>
          <dl>
            <dt>Email:</dt>
            <dd>
              <a href="mailto:${this.email}">${this.email}</a>
            </dd>
            <dt>Phone:</dt>
            <dd><a href="tel:${this.phone}">${this.phone}</a></dd>
            <dt>Mobile:</dt>
            <dd><a href="tel:${this.mobile}">${this.mobile}</a></dd>
          </dl>
        </address>
        <h4>Info From Publisher</h4>
        <p>${this.publisherNote}</p>
        <view-button type="danger wide" @click="${this._clickDelete}">
          <i class="fa fa-times-circle"></i>
          Delete
        </view-button>
      </view-dialog>
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
