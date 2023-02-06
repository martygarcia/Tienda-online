import  {API_URL} from '../config/config.js';

class Table extends HTMLElement {

    constructor() {
        super(); 
        this.shadow = this.attachShadow({ mode: 'open' });
        this.url = this.getAttribute('url');
        this.data = [];
    }

    static get observedAttributes() { return ['url']; }

    connectedCallback() {
        
        document.addEventListener("newUrl",( event =>{
            this.setAttribute('url', event.detail.url);
            console.log(event.detail.url);
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

        .ficha-info {
            margin-left: 2rem;
            border-top: 2px solid rgb(212, 212, 212);
            border-bottom: 2px solid rgb(212, 212, 212);
            background-color: white;
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
        
        .info-text-title {
            
            marlin-top: 1vh;
            display: flex;
        }
        
        .info-text-title h5{

            padding-right:0.3rem;
            font-size: 1.15rem;
            margin: 0;
            margin-left: -0.7rem;
            color: #02A8B1;
            font-weight: 600;
        }

        .info-text-title span {

            font-size: 1.15rem;
        }
        
            /* Columns */

        .five-columns{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;  
        }

        .five-columns > .column{
            width: 18%;
        }  

        .four-columns{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
        }

        .four-columns > .column{
            width: 22%;
        }

        .three-columns{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
        }

        .three-columns > .column{
            width: 30%;
        }

        .two-columns{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
        }

        .two-columns > .column{
            width: 48%;
        }

        .two-columns-aside{
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .two-columns-aside > .column-aside{
            width: 20%;
        }

        .two-columns-aside > .column-main{
            width: 75%;
        }

        .one-column{
            width: 100%;
        }

        .one-column > .column{
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .table-text {
            display: flex;
        }

        .table-text h5 {
            margin-top: 0.5vh;
        }

        .table-text span {
            margin-top: 0.7vh;
        }

        </style>

        <div class="ficha-info">
                            <div class="ficha">
                                <div class="info">
                                    <div class="two-columns">
                                        <div class="text">
                                            <div class="column">
                                                <!-- Ficha -->
                                                <div class="info-text">
                                                    <div class="info-text-title">
                                                        <h5></h5>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="edit-or-bin">
                                            <div class="column">
                                                <div class="img-edit" id="edit">
                                                    
                                                </div>
                                                <div class="img-bin" id="remove">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
        `;	

        let list = this.shadow.querySelector(".info-text-title");
        let tableStructure = this.setTableStructure();
    
        this.data.forEach(element => {
    
            let tableItem = document.createElement("div");
    
            for (const [key , value] of Object.entries(element)) {

                if (Object.keys(tableStructure.headers).includes(key)) {
                    tableItem.innerHTML += `<div class="table-text"><h5>${tableStructure.headers[key].label}:</h5> <span>${element[key]}</span></div>`;
                }
            }
    
            list.append(tableItem);
    
        });

        let Buttons = this.shadow.querySelectorAll(".edit-or-bin");

        Buttons.forEach(element => {

            let editButton = element.querySelector("#edit");
            let binButton = element.querySelector("#remove ");

            editButton.innerHTML = `<svg style="width:26px;height:26px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29" />
                                    </svg>`;

            binButton.innerHTML = `<svg style="width:26px;height:26px" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z" />
                                </svg>`;
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