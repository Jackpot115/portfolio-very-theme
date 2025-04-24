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
      width: 1375px;
      height: 15px;
      background-color:#D2B48C;
      text-align: center;
      word-spacing: 10px;
    }
    .top-bar-buttons a {
      color: var(--ddd-theme-primary);
      font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      padding: 10px;
      border-radius: 5px;
    }
  
    `;

  render() {
    return html`
    <div class="wrapper">
      <div class="top-bar-buttons">
    <a href="#1">Home</a>
    <a href="#2">About</a>
    <a href="#3">Projects</a>
    <a href="#4">Donate</a>
    <a href="#5">Contact</a>
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

globalThis.customElements.define(YourBanner.tag, YourBanner);