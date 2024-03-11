import { LitElement, css, html } from "../lit-all.min.js";

export class ViewButton extends LitElement {
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

    button:hover {
      background-color: var(--primary-background-color-hover);
    }

    .danger {
      color: #fff;
      background-color: #c82333;
    }
    .danger:hover {
      background-color: #a12632;
    }

    .primary {
      background-color: var(--primary-background-color);
    }

    .wide {
      width: 100%;
    }

    .flex {
      width: auto;
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
customElements.define("view-button", ViewButton);
