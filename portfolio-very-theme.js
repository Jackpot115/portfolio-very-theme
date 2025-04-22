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
      }
      .wrapper {
        padding: var(--ddd-spacing-4);
      }

      div {
        padding: 100px;
        overflow-x: hidden;
        height: 100vh;
        background-color: grey;
      }

      .grey {
        background-color: grey;
        padding: 20px;
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
  //NEED TO PUT EACH DIV INSIDE THE WRAPPER DIV
  render() {
    return html`

      <div class="wrapper">

    
      <slot></slot>

      </div>
  
      <div class="grey">
        <a name="Home"></a>
        <h1>Page 2</h1>
      </div>

      <div class="grey">
          <a name="About"></a>
          <h1>Page 3</h1>
      </div>

      <div class="grey">
          <a name="Project"></a>
          <h1>Page 4</h1>
      </div>

      <div class="Contact">
          <a name="5"></a>
          <h1>Page 5</h1>
      </div>
  
    </div>

  <scroll-button></scroll-button>

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

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);