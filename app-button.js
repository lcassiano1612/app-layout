import { LitElement, html } from 'lit-element';

export class AppButton extends LitElement {
  constructor() {
    super();
  }
  static get properties() {
    return {
      name: String
    };
  }
  render() {
    return html`
      <button>Meu Botao</button>
    `;
  }
}

customElements.define('app-button', AppButton);