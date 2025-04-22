//This will be the creation of how the banner will look.

/**
 * Copyright 2025 Matt C
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

class YourBanner extends LitElement {
  static get tag() {
    return "your-banner";
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
      position: fixed;
      width: 1415px;
      height: 50px;
      background-color:#ba9e3c;
      text-align: center;
      word-spacing: 10px;
    }

    .wrapper:text {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
  

    `;

  render() {
    return html`
    <div class="wrapper">
    
      <slot></slot>
      
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

globalThis.customElements.define(YourBanner.tag, YourBanner);