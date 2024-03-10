import { LitElement, css, html } from "../../lit-all.min.js";

export class ShiftButton extends LitElement {
  static properties = {
    type: { type: String },
  };

  static styles = css`
    button {
      transition: box-shadow 0.28s;
      padding: 6px 12px;
      line-height: 1.4;
      font-size: 1rem;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      user-select: none;
      border: 1px solid rgba(189, 183, 181, 0.5);
      margin-bottom: 4px;
      background-color: var(--background-color);
      border-radius: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 180px;
    }

    .primary {
      background-color: var(--primary-background-color);
    }

    .flex {
      width: auto;
    }

    button:hover {
      background-color: var(--primary-background-color-hover);
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <button class="${this.type}">
        <slot></slot>
      </button>
    `;
  }
}
customElements.define("shift-button", ShiftButton);
