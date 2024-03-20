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
      background-color: var(--var-background-element);
      border-radius: var(--var-radius);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 180px;
      color: var(--var-text-primary);
    }

    button:hover {
      filter: brightness(var(--var-focus));
    }

    .danger {
      background-color: var(--var-danger);
    }

    .primary {
      color: var(--var-background-secondary);
      background-color: var(--var-primar);
    }

    .active {
      color: var(--var-text-primary);
      background-color: var(--var-success);
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
