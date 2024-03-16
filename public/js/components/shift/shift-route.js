import { LitElement, css, html } from "../../lit-all.min.js";
import "../view-button.js";

/**
 * @typedef {Object} Shift
 * @property {string} from
 * @property {string} to
 * @property {ShiftSlot[]} slots
 */

/**
 * @typedef {Object} ShiftSlot
 * @property {number} publisherId
 * @property {string} publisherName
 */

export class ShiftRoute extends LitElement {
  static properties = {
    currentPublisherId: { type: Number },
    routeName: { type: String },
    date: {
      /**
       * @param {string} value
       * @returns {Date}
       */
      converter(value) {
        return new Date(value);
      },
    },
    shifts: { type: Array },
    editable: { type: Boolean },
  };

  static styles = css`
    table {
      margin-top: 20px;
    }

    th {
      background-color: #d5c8e4;
      text-align: left;
      padding: 10px;
      font-size: 17px;
      color: var(--foo-color);
    }

    tr:nth-child(even) {
      background-color: var(--background-color);
    }

    tfoot tr td {
      background-color: #d5c8e4;
      padding: 6px;
    }
  `;

  constructor() {
    super();
    this.currentPublisherId = 0;
    this.routeName = "";
    this.shiftStart = "";
    /** @type {Shift[]} */
    this.shifts = [];
    this.date = new Date();
    this.editable = false;
  }

  /**
   * @param {PointerEvent} event
   * @returns {void}
   */
  _clickPublisherContact(event) {
    this.dispatchEvent(
      new CustomEvent("publisher-contact", {
        bubbles: true,
        composed: true,
        detail: {
          publisherId: event.target.getAttribute("publisher-id"),
          editable: event.target.getAttribute("editable"),
        },
      })
    );
  }

  /**
   * @param {PointerEvent} event
   * @returns {void}
   */
  _clickShiftApplication(event) {
    this.dispatchEvent(
      new CustomEvent("shift-application", {
        bubbles: true,
        composed: true,
        detail: {
          publisherId: event.target.getAttribute("publisher-id"),
          editable: event.target.getAttribute("editable"),
        },
      })
    );
  }

  /**
   * @returns {string}
   */
  buttonTemplate() {
    if (this.editable) {
      return html`<view-button type="flex">
        <i class="fa-solid fa-pencil"></i>
        Edit
      </view-button>`;
    }
    return "";
  }

  /**
   * @returns {string}
   */
  render() {
    return html`
      <link rel="stylesheet" href="css/fontawesome.min.css" />
      <table>
        <thead>
          <tr>
            <th colspan="2">${this.date.toDateString()} - ${this.routeName}</th>
          </tr>
        </thead>
        <tbody>
          ${this.shifts.map(
            (shift) => html`
              <tr>
                <td>${shift.from} - ${shift.to}</td>
                <td>
                  ${shift.slots.map((slot) => {
                    if (slot.publisherId === this.currentPublisherId) {
                      return html`<view-button
                        publisher-id="${slot.publisherId}"
                        editable="true"
                        type="primary"
                        @click="${this._clickPublisherContact}"
                      >
                        <i class="fa-regular fa-user"></i>
                        ${slot.publisherName}
                      </view-button>`;
                    }
                    if (slot.publisherName) {
                      return html`
                        <view-button
                          publisher-id="${slot.publisherId}"
                          editable="false"
                          type="primary"
                          @click="${this._clickPublisherContact}"
                        >
                          <i class="fa fa-info-circle"></i>
                          ${slot.publisherName}
                        </view-button>
                      `;
                    }
                    return html`<view-button
                      @click="${this._clickShiftApplication}"
                    >
                      <i class="fa-regular fa-pen-to-square"></i>
                      apply
                    </view-button>`;
                  })}
                </td>
              </tr>
            `
          )}
        </tbody>

        <tfoot>
          <tr>
            <td colspan="2">${this.buttonTemplate()}</td>
          </tr>
        </tfoot>
      </table>
    `;
  }
}
customElements.define("shift-route", ShiftRoute);
