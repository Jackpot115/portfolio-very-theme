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
    this.pages= [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array },
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
        background-color: var(--ddd-theme-default-navy65);
      }
      .wrapper {
        padding: var(--ddd-spacing-4);
      }

      .scroll-button {
        position: fixed;
        margin: var(--ddd-spacing-4);
        bottom: var(--ddd-spacing-0); 
        right: var(--ddd-spacing-0);
      }

      a {
        color: white;
        font-size: var(--ddd-font-size-m);
      }
      scroll-button {
          position: fixed;
          right: var(--ddd-spacing-5);
          bottom: var(--ddd-spacing-5);
        }

        @media (max-width: 768px) {
  your-banner .top-bar-buttons {
    flex-direction: column;
    align-items: center;
  }

  your-banner .top-bar-buttons a {
    display: block;
    margin: 5px 0;
  }
}



    `];
  }

  // Lit render the HTML

  render() {
    return html`
      <your-banner>
    <ul>
       ${this.pages.map((page, index) => html`<li><a href="#${page.number}" @click="${this.linkChange}" data-index="${index}">${page.title}</a></li>`)}
    </ul>
      </your-banner>
      <div class="wrapper" @page-added="${this.addPage}">
      <slot></slot>
      <scroll-button></scroll-button>
    </div>`;
  }

  linkChange(e) {
    let number = parseInt(e.target.getAttribute('data-index'));
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addPage(e) {
    const element = e.detail.value
    const page = {
      number: element.pagenumber,
      title: element.title,
      element: element,
    }
    this.pages = [...this.pages, page];
  }

}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);