import { LitElement, html, css } from "lit";

class YourBanner extends LitElement {
  static get tag() {
    return "your-banner";
  }

  static styles = css`
    :host {
      display: inline-flex;
      color: var(--ddd-theme-primary);
      background-color: var(--ddd-theme-accent);
      font-family: var(--ddd-font-navigation);
    }
    .wrapper {
    padding: var(--ddd-spacing-4);
    margin: var(--ddd-spacing-2);
    position: fixed;
    width: 100%;
    height: auto;
    background-color: var(--ddd-theme-default-slateGray);
    text-align: center;
    word-spacing: var(--ddd-spacing-3);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--ddd-spacing-3);
    }

    .top-bar-buttons a {
      color: var(--ddd-theme-primary);
      font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      padding: var(--ddd-spacing-3);
      border-radius: var(--ddd-radius-sm);
      cursor: pointer;
      text-decoration: none;
    }
  `;

  render() {
    return html`
      <div class="wrapper">
        <div class="top-bar-buttons">
          <a @click=${() => this.scrollToPage(1)}>Home</a>
          <a @click=${() => this.scrollToPage(2)}>About</a>
          <a @click=${() => this.scrollToPage(3)}>Projects</a>
          <a @click=${() => this.scrollToPage(4)}>Donate</a>
          <a @click=${() => this.scrollToPage(5)}>Contact</a>
        </div>
      </div>
    `;
  }

  scrollToPage(num) {
    const target = document.querySelector(`[pagenumber="${num}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState({ page: 'new' }, 'New Page Title', `#screen-${num}`);
    }
  }
}



globalThis.customElements.define(YourBanner.tag, YourBanner);
