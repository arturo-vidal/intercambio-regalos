import { LitElement, html, css } from 'lit';
import { Footer } from './footer';


export class IntercambioRegalos extends LitElement {
  static get properties() {
    return {
      persons: { type: String },
      parejas: {type: Array}
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--intercambio-regalos-background-color);
      }

      main {
        flex-grow: 1;
      }

      
    `;
  }

  constructor() {
    super();
    this.persons = [];
    this.parejas = [];
  }

  render() {
    return html`
      <main>
        <h1>Intercambio de regalos</h1>
        <h3>Lista de participantes: </h3>
        <ul>
          ${this.persons.length !== 0 ? this.persons.map((person)=>html`<li>${person}</li>`) : html`<p>Aún no hay participantes</p>`}
        </ul>
        <input type="text" placeHolder="Nuevo participante" id="newperson"/>
        <button @click=${this.addPerson}>Agregar</button>
        <br>
        <button @click=${this.getRandom}>Formar parejas</button>
        <ul>
          ${this.persons.length % 2 == 0 ? this.parejas.map((pareja)=>html`<li>${pareja[0]} con ${pareja[1]} </li>`) : html`<p>Agregar otra persona para continuar</p>`}
        </ul>
      </main>
      <footer-template></footer-template>
      
    `;
  }

  get input(){
    return this.renderRoot.querySelector("#newperson");
  }

  addPerson(){
    if(this.input.value !== ""){
      this.persons= [...this.persons, this.input.value];
      this.input.value= "";
      this.parejas = [];
    }
  }

  getRandom(){
    const randomList = [...this.persons];
    this.parejas = [];
    randomList.sort((a, b)=> Math.random()- 0.5);
    for(let i = 0; i < randomList.length; i += 2){
      this.parejas.push(new Array(randomList[i], randomList[i+1]));
      this.requestUpdate();
    }
  }
  
}

