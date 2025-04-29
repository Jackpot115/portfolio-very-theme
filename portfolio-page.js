/**
 * Copyright 2025 Matt C
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";


/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioPage extends DDDSuper((LitElement)) {

  static get tag() {
    return "portfolio-page";
  }

  constructor() {
    super();
    this.pagenumber=null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pagenumber: { type: Number }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`

    :host {
    background-color: var(--ddd-theme-accent);
    font-family: var(--ddd-font-navigation);
    width: 100%; 
    height: 100vh;  
    display: block;
    }

    img {
  max-width: 100%;
  height: auto;
  display: block;
}



`];
}

  // Lit render the HTML

  render() {
    return html`
      <div class="wrapper" @click="${this.thing}">
      <slot></slot>
      </div> 

</div>`;
  }

}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);