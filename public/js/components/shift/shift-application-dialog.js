import { html, css, until } from "../../lit-all.min.js";
import { ViewDialog } from "../view-dialog.js";

export class ShiftApplicationDialog extends ViewDialog {
  static properties = {
    publisherId: { type: Number },
  };

  static styles = [
    ViewDialog.styles,
    css`
      select {
        width: 100%;
        touch-action: manipulation;
        cursor: pointer;
        margin-bottom: 4px;
        padding: 6px 12px;
      }
    `,
  ];

  constructor() {
    super();
    this.publisherId = 0;
  }

  /**
   * @returns {string}
   */
  contentTemplate() {
    const publishers = fetch(`/api/publishers.json?active=true`).then(
      (response) => response.json()
    );
    return html`
      <div>
        <p>Error Message</p>
        <select>
          ${until(
            publishers.then((publishers) =>
              publishers.map(
                (publisher) =>
                  html`<option value="${publisher.id}">
                    ${publisher.firstname} ${publisher.lastname}
                  </option>`
              )
            ),
            html`<span>Loading...</span>`
          )}
        </select>
        <shift-dialog-selectmenu-publishers
          default-publisher-id="${this.publisherId}"
        ></shift-dialog-selectmenu-publishers>
        <view-button type="primary wide">
          <i class="fa-solid fa-check"></i>
          Apply
        </view-button>
      </div>
    `;
  }
}
customElements.define("shift-application-dialog", ShiftApplicationDialog);
