import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators'

@customElement('hello-world')
export class HelloWorldElement extends LitElement {
  @property() public name: string

  render() {
    return html`
      <h1>Hello, ${this.name ?? 'World'}</h1>
    `
  }
}
