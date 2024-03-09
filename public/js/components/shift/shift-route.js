import { LitElement, html } from "../../lit-core.min.js";
import "./shift-button.js";

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
    shiftStart: { type: String },
    shifts: { type: Array },
  };

  constructor() {
    super();
    this.currentPublisherId = 0;
    this.routeName = "";
    this.shiftStart = "";
    /** @type {Shift[]} */
    this.shifts = [];
  }

  render() {
    return html`
      <link rel="stylesheet" href="css/fontawesome.min.css" />
      <table>
        <thead>
          <tr>
            <th colspan="2" style="background-color: #d5c8e4">
              ${new Date(this.shiftStart).toDateString()} - ${this.routeName}
            </th>
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
                      return html`<shift-button type="primary">
                        <i class="fa-regular fa-user"></i>
                        ${slot.publisherName}
                      </shift-button>`;
                    }
                    if (slot.publisherName) {
                      return html`
                        <shift-button type="primary">
                          <i class="fa fa-info-circle"></i>
                          ${slot.publisherName}
                        </shift-button>
                      `;
                    }
                    return html`<shift-button>
                      <i class="fa-regular fa-pen-to-square"></i>
                      apply
                    </shift-button>`;
                  })}
                </td>
              </tr>
            `
          )}
        </tbody>

        <tfoot>
          <tr>
            <td colspan="2">
              <shift-button type="action">
                <i class="fa-solid fa-pencil"></i>
                Edit
              </shift-button>
            </td>
          </tr>
        </tfoot>
      </table>
    `;
  }
}
customElements.define("shift-route", ShiftRoute);
