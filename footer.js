//This will be the creation of how the banner will look.

/**
 * Copyright 2025 Matt C
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";


class footer extends LitElement {
    
    static get tag() {
    return "footer";
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  static styles = css`
    :host {
      display: block;
      color: var(--ddd-theme-primary);
      background-color: var(--ddd-theme-accent);
      font-family: var(--ddd-font-navigation);
    }

    .wrapper {
      padding: var(--ddd-spacing-4);
      margin: var(--ddd-spacing-2);
    }
    
  
    `;

  render() {
    return html`
    <div class="wrapper">
     
    <slot></slot>


      </div>
    </div>`;
  }
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(footer.tag, footer);