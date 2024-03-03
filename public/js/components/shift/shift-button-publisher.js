import { LitElement, css, html } from "../../lit-core.min.js";

export class ShiftButtonPublisher extends LitElement {
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
      color: var(--black);
      margin-bottom: 4px;
      background-color: var(--background-color);
      border-radius: 5px;
      width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
      <button>
        <slot></slot>
      </button>
    `;
  }
}
customElements.define("shift-button-publisher", ShiftButtonPublisher);
