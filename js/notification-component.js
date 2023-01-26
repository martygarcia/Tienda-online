class adminNotidication extends HTMLElement {

    constructor() {
        super(); 
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        
        document.addEventListener("openEvent",( event =>{
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
        .notification-form-admin {
            position: absolute;
            padding: 0.7rem 3%;
            background-color: green;
            font-size: 1.2rem;
            color: black;
            margin-top: 2rem;
            opacity: 1;
            transition: opacity 0.3s;
            margin-top: 33%;
            margin-left: -40rem;
        }
        
        .notification-form-admin.active {
            opacity: 1;
        }
        
        .notification-form-admin.error {
            border-top: solid 1rem rgb(184, 33, 33);
        }
        
        .notification-form-admin.success {
            border-top: solid 1rem rgb(30, 129, 30);
        }
        </style>

        <div class="notification-form-admin">
            <span id="notification-message-admin">El formulario se ha enviado correctamente</span>
        </div>
        `;	
    }

}

customElements.define('admin-notification', adminNotidication);