import { LitElement, css, html } from "../../lit-all.min.js";

export class ShiftDialogPublisherContact extends LitElement {
  static properties = {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    phone: { type: String },
    mobile: { type: String },
    publisherNote: { type: String },
    open: {
      type: Boolean,
      reflect: true,
    },
  };

  static styles = css`
    dialog::backdrop {
      background: rgba(0, 0, 0, 0.6);
    }
  `;

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

  set open(val) {
    if (this.renderRoot) {
      const dialog = this.renderRoot.querySelector("dialog");
      val ? dialog.showModal() : dialog.close();
    }

    this._open = val;
  }

  get open() {
    return this._open;
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
