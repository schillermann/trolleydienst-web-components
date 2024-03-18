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
      background-color: var(--button-background);
      border-radius: var(--button-border-radius);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 180px;
      color: var(--color);
    }

    button:hover {
      filter: brightness(var(--button-hover-brightness));
    }

    .danger {
      background-color: var(--button-danger-background);
    }

    .primary {
      color: var(--button-primary-color);
      background-color: var(--button-primary-background);
    }

    .active {
      color: var(--button-active-color);
      background-color: var(--button-active-background);
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
