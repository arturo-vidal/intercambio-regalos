import { LitElement, html, css } from "lit";

export class Footer extends LitElement{
  
  static styles= css`
    .app-footer {
        font-size: 25px;
        align-items: center;
        margin: 30px;
      }
  `;

  render(){
    return html`
      <footer class="app-footer">
        <hr/>
        <p>Code by Arturo Vidal</p> 
      </footer>
    `;
  }

}

customElements.define("footer-template", Footer);