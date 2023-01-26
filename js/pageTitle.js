class PageTitle extends HTMLElement {

    constructor() {
        super(); 
        this.shadow = this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title');
    }

    static get observedAttributes() { return ['title']; }

    connectedCallback() {
        
        document.addEventListener("newUrl",( event =>{
            this.setAttribute('title', event.detail.title);
        }));

        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){

        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            h1 {   
                color: white;
                font-size: 2.2rem;
                margin-top: 0.5vh;
                margin-left: 3rem;
            }
        </style>

        <h1>${this.title}</h1>
        `;	
    }
}

customElements.define('page-title-component', PageTitle);
// la palabra requiere un guion si o si 

