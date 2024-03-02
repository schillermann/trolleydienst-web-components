import { LitElement, css, html } from "../../lit-core.min.js";
import "./shift-button-apply-shift.js";
import "./shift-button-edit-day.js";
import "./shift-button-publisher-contact.js";
import "./shift-button-shift-action.js";

export class ShiftCalendarDay extends LitElement {
  static properties = {
    name: {},
  };

  static styles = css`
    :host {
      background-color: blue;
    }
  `;

  constructor() {
    super();
    this.name = "World";
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th colspan="2" style="background-color: #d5c8e4">
              Sonntag, 03.03.2024 - Route 1
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>09:00 - 11:00</td>
            <td>
              <shift-button-shift-action
                publisherName="Jane Doe"
              ></shift-button-shift-action>
              <shift-button-apply-shift></shift-button-apply-shift>
              <shift-button-publisher-contact publisherName="John Doe">
              </shift-button-publisher-contact>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colspan="2">
              <shift-button-edit-day>Edit</shift-button-edit-day>
            </td>
          </tr>
        </tfoot>
      </table>
    `;
  }
}
customElements.define("shift-calendar-day", ShiftCalendarDay);
