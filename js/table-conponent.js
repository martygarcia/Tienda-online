import  {API_URL} from '../config/config.js';

class Table extends HTMLElement {

    constructor() {
        super(); 
        this.shadow = this.attachShadow({ mode: 'open' });
        this.url = this.getAttribute('url');
        this.edit = this.getAttribute('edit');
        this.data = [];
    }

    static get observedAttributes() { return ['url']; }

    connectedCallback() {
        
        document.addEventListener("newUrl",( event =>{
            this.setAttribute('url', event.detail.url);
        }));
        
        document.addEventListener("refreshTable",( event =>{
            this.loadData().then( () => this.render());
        }));
    }

    attributeChangedCallback(name, oldValue, newValue){

        this.loadData().then( () => this.render());
    }

    async loadData() {

        let url = `${API_URL}${this.getAttribute('url')}`;

        let result = await fetch(url,{  
            headers: {
                'Authorization': 'Bearer ' +  sessionStorage.getItem('accessToken'),
            },
        });

        let data = await result.json();
        this.data = data.rows;
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>

        .table {
            
            display: flex;
            flex-direction: column;
            background-color: white;
        }
        
        .table h5{

            padding-right:0.3rem;
            font-size: 1.15rem;
            margin: 0;
            color: #02A8B1;
            font-weight: 600;
        }

        .table span {
            font-size: 1.15rem; 
        }

        .table-element {
            border-bottom: 2px solid rgb(212, 212, 212);
            display: flex;
            justify-content: space-between;
            padding: 1rem;
        }

        .table-text {
            display: flex;
            flex-direction: row;
            background-color: white;
        }


        .table {
            
        }

        .edit-or-bin {
            padding: 0.5rem;
        }

        .img-edit {
            cursor: pointer;
            color: #636363;
        }

        .img-edit:hover {
            color: #02A8B1;
        }

        .img-bin {
            cursor: pointer;
            color: #636363;
        }

        .img-bin:hover {
            color: #02A8B1;nnnn
        }

        .text {
            margin-left: 2rem;
            padding: 0.5rem;    
        }
        
        </style>

        <div class="table">
            
        </div>
        `;	

        let tableStructure = this.setTableStructure();

        let table = this.shadow.querySelector(".table");
    
        this.data.forEach(element => {
    
            let tableElement = document.createElement("div");
            tableElement.classList.add("table-element");

            let tableTextContainer = document.createElement("div");
            tableTextContainer.classList.add("table-text-container");
            tableElement.append(tableTextContainer);
    
            for (const [key , value] of Object.entries(element)) {

                if (Object.keys(tableStructure.headers).includes(key)) {
                    tableTextContainer.innerHTML += `<div class="table-text"><h5>${tableStructure.headers[key].label}:</h5> <span>${element[key]}</span></div>`;
                }
            }

            let editOrBin = document.createElement("div");
            editOrBin.classList.add("edit-or-bin");
            editOrBin.innerHTML = `<svg id="edit" class="img-edit" data-id="${element.id}" style="width:26px;height:26px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.36,15.34L4.25,15.04Z" />
                                    </svg>
                                    <svg id="remove" class="img-bin" data-id="${element.id}"  style="width:26px;height:26px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z" />
                                    </svg>`;

            tableElement.appendChild(editOrBin);
    
            table.append(tableElement);
    
        });

        this.renderButtons();

    }
    
    async renderButtons() {

        let removeButtons = this.shadow.querySelectorAll(".img-bin");

        removeButtons.forEach(element => {
                
            element.addEventListener("click", () => {

                console.log(element.dataset.id)


                document.dispatchEvent(new CustomEvent("showDeleteModal", {
                    detail: {
                        id: element.dataset.id
                    }
                }));
            });
        });

        let editButtons = this.shadow.querySelectorAll(".img-edit");

        editButtons.forEach(element => {

            element.addEventListener("click", () => {

                document.dispatchEvent(new CustomEvent("showElement", {
                    detail: {
                        id: element.dataset.id
                    }
                }));
            });
        });

        
        
    }  

    setTableStructure() {

        let url = this.getAttribute('url');
    
        switch (url) {
    
            case '/api/admin/users':
    
                return {
                    headers:{
                        email: {
                            label: 'Email',
                        },
                        name: {
                            label: 'Nombre',
                        }
                    },
                    buttons: {
                        edit: true,
                        remove: true
                    }
                };
    
            case '/api/admin/taxes':
    
                return {
                    headers:{
                        type: {
                            label: 'Tipo',
                        }
                    },
                    buttons: {
                        edit: true,
                        remove: true
                    }
                };
        }
    };
}

customElements.define('table-component', Table);