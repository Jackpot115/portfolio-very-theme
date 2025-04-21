//This will be the creation of how the banner will look.

import { LitElement, html, css } from 'lit';

class YourBanner extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: green;
      position: fixed;
      top: 50px;
      left: 0;
      height: 100px;
      right: 0;
      z-index: 1;
      border-color: red;
      border-style: solid;
      border-width: 2px;
    }
    .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
  
  `;

  render() {
    return html`
    <div class="wrapper">
    
      <slot></slot>
      
      </div>`;
  }
}

customElements.define('your-banner', YourBanner);
