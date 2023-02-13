import  {API_URL} from '../config/config.js';

class Delete extends HTMLElement {

    constructor() {
        super(); 
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() { return ['url']; }

    connectedCallback() {

        document.addEventListener("newUrl", event =>{
            this.setAttribute('url', event.detail.url);
        });  

        document.addEventListener("showDeleteModal", event => {

            this.setAttribute('id', event.detail.id); 
            this.showModal();
        });
    
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){

        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-container {
                background-color: white;
                padding: 2rem 0.5rem;
                border-radius: 10px;
                border: 2px solid #b7b5b5;
                position: absolute;
                left: 35%;
                top: 40%;
                width: 25%;
                transition: all 0.5s ease;
                opacity: 0;
                z-index: -1;
            }

            .modal-container.active {
                opacity: 1;
                z-index: 3000;
            }

            .modal-container h3 {
                align-self: center;
                font-size: 1.4rem;
                margin-bottom: 1rem;
                text-align: center;
            }

            .button-container {
                display: flex;
                justify-content: center;
            }

            .custom-btn {
                width: 130px;
                height: 40px;
                color: #fff;
                border-radius: 5px;
                padding: 10px 25px;
                font-family: 'Lato', sans-serif;
                font-weight: 500;
                background: transparent;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                display: inline-block;
                box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
                7px 7px 20px 0px rgba(0,0,0,.1),
                4px 4px 5px 0px rgba(0,0,0,.1);
                outline: none;
            }

            .btn-1 {
                background-color: rgb(2, 168, 177);
                background: linear-gradient(0deg, rgba(12,25,180,1)  1%,  rgb(2, 168, 177) 100%);
                border: none;
            }
            .btn-1:hover {
                background: rgb(0,3,255);
            background: linear-gradient(0deg, rgba(0,3,255,1) 10%, rgb(2, 168, 177) 100%);
            }
        </style>

        
        <div class="modal-container">
        <h3>Confirma si quieres borrar</h3>
            <div class="button-container">
                <div class="yes">
                    <button class="custom-btn btn-1">Sí</button>  
                </div>
                <div class="no">
                    <button class="custom-btn btn-1">No</button> 
                </div>    
            </div>
        </div>
        `;	

        this.renderButtons();
    }

    renderButtons() {

        let no = this.shadow.querySelector('.no');
        let yes = this.shadow.querySelector('.yes');

        no.addEventListener('click', () => {
            let modal = this.shadow.querySelector('.modal-container');
            modal.classList.remove('active');
        });

        yes.addEventListener('click', () => {

            let url = `${API_URL}${this.getAttribute('url')}/${this.getAttribute('id')}`;

            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' +  sessionStorage.getItem('accessToken'),
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                let modal = this.shadow.querySelector('.modal-container');
                modal.classList.remove('active');
                document.dispatchEvent(new CustomEvent('refreshTable'));
                
            }).catch(error => {
                console.log(error);
            });
        });
    }
    
    showModal() {

        let modal = this.shadow.querySelector('.modal-container');

        modal.classList.add('active');
    }
}

customElements.define('delete-modal', Delete);

