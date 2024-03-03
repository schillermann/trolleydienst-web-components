import { LitElement, css, html } from "../../lit-core.min.js";
import "./shift-button.js";
import "./shift-button-publisher.js";
import "./shift-button-publisher-primary.js";

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
      <link rel="stylesheet" href="fontawesome/css/all.min.css" />
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
              <shift-button-publisher-primary>
                <i class="fa-regular fa-user"></i>
                Jane Doe
              </shift-button-publisher-primary>
              <shift-button-publisher>
                <i class="fa-regular fa-pen-to-square"></i>
                apply2
              </shift-button-publisher>
              <shift-button-publisher-primary>
                <i class="fa fa-info-circle"></i>
                John Doe
              </shift-button-publisher-primary>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colspan="2">
              <shift-button>
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
customElements.define("shift-calendar-day", ShiftCalendarDay);
