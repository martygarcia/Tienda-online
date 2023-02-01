class adminNotidication extends HTMLElement {

    constructor() {
        super(); 
        this.shadow = this.attachShadow({ mode: 'open' });
        this.text = this.getAttribute('text');
        this.type = this.getAttribute('type');
    }

    static get observedAttributes() { return ['text', 'type']; }


    connectedCallback() {
        
        document.addEventListener("message",( event =>{
            this.setAttribute('text', event.detail.text);
            this.setAttribute('type', event.detail.type);
        }));

        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        .notification-form-admin {
            position: absolute;
            padding: 0.7rem 3%;
            font-size: 1.2rem;
            color: black;
            margin-top: 2rem;
            opacity: 0;
            transition: opacity 0.3s;
            margin-top: 33%;
            margin-left: -40rem;
        }
        
        .notification-form-admin.error {
            border-top: solid 1rem rgb(184, 33, 33);
            opacity: 1;
        }
        
        .notification-form-admin.success {
            border-top: solid 1rem rgb(30, 129, 30);
            opacity: 1;
        }

        </style>

        <div class="notification-form-admin">
            <span id="notification-message-admin">${this.text}</span>
        </div>
        `;	
    }
}


customElements.define('admin-notification', adminNotidication);