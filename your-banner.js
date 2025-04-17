//This will be the creation of how the banner will look.

import { LitElement, html, css } from 'lit';

class YourBanner extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #00000066;
      position: fixed;
      top: 50px;
      left: 0;
      height: 100px;
      right: 0;
      z-index: 1;
    }
    a {
      border: 2px solid green;
      padding: 10px;
      display: inline-block;
      margin: 10px;
      background-color: green;
      color: white;
      text-decoration: none;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('your-banner', YourBanner);
