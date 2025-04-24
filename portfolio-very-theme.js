/**
 * Copyright 2025 Matt C
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';


/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
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

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        background-color: grey;
      }
      .wrapper {
        padding: var(--ddd-spacing-4);
      }

      .scroll-button {
        position: fixed;
        margin: var(--ddd-spacing-4);
        bottom: 0;
        right: 0;
      }


    `];
  }

  // Lit render the HTML

  render() {
    return html`
      <your-banner></your-banner>
      <div class="wrapper" @page-added="${this.addPage}">
      <slot></slot>
      <scroll-button></scroll-button>
    </div>`;
  }

  addPage(e) {
    console.log(e.detail.value.title);
  }

  
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);