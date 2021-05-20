class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getStyles() {
    return `
      :host {
        background-color: #F4F4F4;
        width: 250px;
        height: 500px;
        color: #101010;
        display: block;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container__card {
        
      }
    `;
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <style>${this.getStyles()}</style>
    <div class="card">
        <div class="card_inner product1">
          <!--Card's Front-face-->
          <div class="card_face card_face-front">
            <!--Adding Products Buttom-->
            <div class="msgAdded">
              <h5>Agregado al carrito</h5>
            </div>
            <div class="addBtn" id="msg1">
              <img class="plus" src="./img/plus-solid.svg" alt="boton añadir" />
            </div>
              <img src="./img/${this.img}" alt="${this.seo}" />
            <div class="card_description">
              <h3 class="product_name">${this.thename}</h3>
              <p class="product_price">Precio: $${this.price}</p>
            </div>
          </div>
          <!--Card's Back-face-->
          <div class="card_face card_face-back">
            <p class="card_caption">
              ${this.description}
            </p>
          </div>
        </div>
      </div>
    
    `;
    return template;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
    console.log("working");
  }
}

customElements.define("project-card", ProjectCard);
