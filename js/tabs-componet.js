import  {API_URL} from '../config/config.js';

class Tabs extends HTMLElement {

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

        .tabs-form-admin {
            background-color: white;
            width: 95%;
        }
        
            }

            svg {
                cursor: pointer;
                color: #636363;
            }
            svg:hover {
        
                color: #02A8B1;
            }
    
            .tabs-container-admin {
        
                height: 70vh; }

            .save-clean-on-off {
                width: 95%;
                margin-top: 0.5vh;
                display: flex;
                justify-content: flex-end;
            }

            .title-tabs-container-admin {
        
                background-color: #b7b5b5;
            }

            .tabs-admin {
                cursor: pointer;}
        
            .tabs-side {
        
                display: flex;
        
            }  
        
            span {
                color: white;
                font-weight: 600;
                padding: 1rem ;
                display: block;
            }
            
        
            .tabs-admin:hover {
                
                
            }

            span {
                background-color:  #02A8B1;
            }
        
            span {
                background-color: #02A8B1;;
            }

            }
        
                .tab-contents-admin{
                    display: none;
                } 
        
                .tab-contents-admin.active {
                    display: inline;
                } 
        
            .info-tabs-container-admin {
                margin-top: 2vh;
                margin-left: 5rem;
            }    
        
            label {

                font-size: 1.2rem;
                font-weight: 600;
                color: #b7b5b5;
            }

        
            select {
                border-radius: 0;
                margin-top: 1vh;
                border: none;
                padding: 0.2rem 10rem;
                border-bottom: 2px solid #b7b5b5; }
        
        
            h4 {
                color: #b7b5b5;
                font-size: 2rem;
                margin-top: 7vh;
                margin-bottom: 5vh;
            }
        
            .add-img {
    
                width: 80%;
                margin-left: 3rem;
                margin-top: 3vh;
                border: #02A8B1 3px dotted;
                height: 20rem;
    
                
            }

            .button-add-img {
    
                text-align: center;
                margin-top: 25%;
            }
            
        
        // language
        
        
            
            .title-bar-language  {
        
                background-color: #b7b5b5;
                margin-top: 4vh;
                width: 80%;
                padding: 1rem;
        
                .title-language {
        
                    span {
                        cursor: pointer;
                        color: white;
                        font-weight: 600;
                        margin-left: -1rem;
                        padding: 1.06rem;
                    }
        
                    span:hover {
        
                        background-color: #02A8B1;
                        padding: 1.06rem;
                    }
            
                }
                .active {
        
                    span {
        
                        background-color: #02A8B1;
                        padding: 1.06rem;
                    }
                }
            }
        
            .language-contents {
        
                margin-left: 1.5rem;
                margin-top: 3vh; 
            }
        
                .contents-label  {
        
                    margin-bottom: 0.5rem;
                }

                label {
                    color: #b7b5b5;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
                
                input {
    
                    border: none;
                    border-bottom: #b7b5b5 solid 2px;
                    padding: 0 30%;
                }
        
                .contents-textarea-label {
        
                    margin-top: 2vh;
                }
        
                label {
                    color: #b7b5b5;
                    font-weight: 600;
                    font-size: 1.2rem;
                }
                
        
                .contents-textarea {
        
                    margin-top: 2vh;
                } 
        
                textarea  {
    
                    border: 2px solid #b7b5b5;
                    padding: 0 27%;
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
        
        <div class="info-tabs-container-admin">
            <div class="tab-contents-admin active" data-tab="one">
                <div class="two-columns">
                    <div class="column">
                        <div class="label-form-admin">
                            <label> Categoria</label>
                        </div>
                        <div class="input-form-admin">
                            <select name="" id="">
                                <option>lorem</option>
                                <option>lorem</option>
                                <option>lorem</option>
                                <option>lorem</option>
                                <option>lorem</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="label-form-admin">
                            <label> Categoria</label>
                        </div>
                        <div class="input-form-admin">
                            <select name="" id="">
                                <option>lorem</option>
                                <option>lorem</option>
                                <option>lorem</option>
                                <option>lorem</option>
                                <option>lorem</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="tabs-language">
                        <div class="title-bar-language">
                            <div class="column">
                                    <div class="title-language active" data-tab=""="one">
                                        <span>Español</span>
                                    </div>
                            </div>
                        </div>
                        <div class="language-contents" data-tab="one">
                            <div class="contents-label">
                                <label for="">Titulo</label>
                            </div>
                            <div class="contents-input">
                                <input type="text">
                            </div>
                            <div class="contents-textarea-label">
                                <label for="">Descripcion</label>
                            </div>
                            <div class="contents-textarea">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-contents-admin" data-tab="two">
                <div class="title-contents-admin">
                    <h4>Subir foto</h4>
                </div>
                <div class="add-img">
                    <div class="button-add-img">
                        <button type="file">Añade una imagen</button>
                    </div>
                </div>
            </div>
        </div>
        `;	

    }
    
}

customElements.define('tabs-component', Tabs);