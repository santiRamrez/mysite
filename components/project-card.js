class ProjectCard extends HTMLElement {
  constructor() {
    super();

    //External stylesheet
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./components/project-card.css");
    this.appendChild(linkElem);
  }
  getTemplate() {
    const template = document.createTemplate();
  }
}

customElements.define("project-card", ProjectCard);
