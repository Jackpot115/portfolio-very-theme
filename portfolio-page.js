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
export class PortfolioPage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-page";
  }

  constructor() {
    super();
    this.title = "";
    this.pagenumber=null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
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

    h1 {
    text-align: right;
    color: rgb(204, 204, 253);
    background-image: linear-gradient(to right, rgba(122, 43, 73, 0), rgba(122, 43, 73, 0.5));
    padding-right: 50px;
    }

    .image {
    width: 200px;
    height: 200px; 
    }

`];
}

  // Lit render the HTML

  render() {
    return html`
    <h1>${this.title}</h1>
      <div class="wrapper" @click="${this.thing}">
      <slot></slot>
      </div> 

</div>`;
  }

  
  thing (e) {
    console. log(e.target);
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    this.dispatchEvent(new CustomEvent('page-added', {
      bubbles: true,
      composed: true,
      detail: {
        value: this
      }
    }))
  }
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);