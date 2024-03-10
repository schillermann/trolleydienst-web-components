import { LitElement, html } from "../../lit-all.min.js";

export class ShiftDialogPublisherContact extends LitElement {
  static properties = {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    phone: { type: String },
    mobile: { type: String },
    publisherNote: { type: String },
    open: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.phone = "";
    this.mobile = "";
    this.publisherNote = "";
    this.open = false;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    if (name === "open") {
      const dialog = this.renderRoot.querySelector("dialog");
      newval === "true" ? dialog.showModal() : dialog.close();
    }
  }

  _clickClose(e) {
    this.open = false;
  }

  render() {
    return html`
      <dialog>
        <header>
          <h2>Publisher Contact</h2>
        </header>
        <div>
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
        </div>
        <div>
          <shift-button type="wide" @click="${this._clickClose}">
            <i class="fa fa-times-circle"></i>
            Close
          </shift-button>
        </div>
      </dialog>
    `;
  }
}
customElements.define(
  "shift-dialog-publisher-contact",
  ShiftDialogPublisherContact
);
