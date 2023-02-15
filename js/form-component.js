import  {API_URL} from '../config/config.js';

class Form extends HTMLElement {

    constructor() {
        super(); 
        this.shadow = this.attachShadow({ mode: 'open' });
        this.url = this.getAttribute('url');
    }

    static get observedAttributes() { return ['url']; }


    connectedCallback() {
        document.addEventListener("newUrl",( event =>{
            this.setAttribute('url', event.detail.url);
        }));  

        document.addEventListener("showElement",( event =>{
            this.showElement(event.detail.id);
            this.setAttribute('id', event.detail.id);
            
        }));   
    }

    attributeChangedCallback(name, oldValue, newValue){

        this.render();
    }

    async render() {

        this.shadow.innerHTML = 
        `
        <style>

            .tabs-form-admin {
                background-color: white;
                width: %;
            }

            svg {
                cursor: pointer;
                color: #636363;
            }
            svg:hover {
        
                color: #02A8B1;
            }

            .save-clean-on-off {
                width: 95%;
                margin-top: 0.5vh;
                display: flex;
                
            }

            .title-tabs-container-admin {
        
                background-color: #b7b5b5;
            }

            .tabs-admin {
                cursor: pointer;
            }
        
            .tabs-side {
                display: flex;
            }  
        
            span {
                color: white;
                font-weight: 600;
                padding: 1rem ;
                display: block;
            }
            
        
            .tab-panel{
                display: none;
            } 

            .tab-panel.active {
                display: block;
            }
    
            .info-tabs-container .active {
                display: inline;
            } 
        
            .info-tabs-container-admin {
                margin-top: 2vh;
                padding: 2rem;
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
                border-bottom: 2px solid #b7b5b5; 
                width: 100%;
            }
        
        
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

            .row {
                display: flex;
                justify-content: center;
                gap: 2rem;
            }

            .form-element {
                margin-top: 3vh;
                width: 100%;
            }

            .radio-container, .checkbox-container {
                display: flex;
            }
        
            span {
                cursor: pointer;
                color: white;
                font-weight: 600;
                padding: 1.06rem;
            }

            span:hover {

                background-color: #02A8B1;
                padding: 1rem;
                cursor: pointer;
            }

            span.active{
        
                background-color: #02A8B1;
                padding: 1.06rem;
            }
        
            .language-contents {
        
                margin-left: 1.5rem;
                margin-top: 3vh; 
            }
        
            .contents-label  {
    
                margin-bottom: 0.5rem;
            }

            label {
                color: grey;
                font-size: 1.4rem;
                font-weight: 600;
            }
            
            input {

                border: none;
                border-bottom: #b7b5b5 solid 2px;
                margin-top: 1vh;
                width: 100%;
            }

            .contents-textarea-label {
    
                margin-top: 2vh;
            }
    
            label {
                color: grey;
                font-weight: 600;
                font-size: 1.4rem;
            }
            
    
            .contents-textarea {
    
                margin-top: 2vh;
            } 
    
            textarea  {

                border: 2px solid #b7b5b5;
                height: 10rem;
                width: 100%;
            }

            .two-columns{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                width: 100%;
            }

            .error {
                color: red;
                font-size: 1.2rem;
                font-weight: 600;
                margin-top: 2vh;
                margin-bottom: 2vh;
                opacity: 0;
                position: absolute;
                top: 20vh;
            }

            .error.active {
                opacity: 1;
                transition: all 0.5s ease;
            }

        </style>
        
        <div class="column">
            <div class="tabs-form-admin">
                <form>
                    <div class="tabs-container-admin">
                        <div class="two-columns title-tabs-container-admin">
                            <div class="column">
                                <div class="tabs-side">
                                
                                </div>
                            </div>  
                            <div class="column">
                                <div class="save-clean-on-off">
                                <div class="send-form-button" id="img-save">
                                    <svg style="width:40px;height:40px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
                                    </svg>
                                </div>
                                <div id="img-clean">
                                    <svg style="width:40px;height:40px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        </div>
                        <div class="info-tabs-container-admin">
                            
                        <p class="error">El formulario no esta correcto, revisalo</p>
                        </div>   
                    
                    </div>


                </form>
            </div>
        </div>
        `;	

        this.formStructure = await this.setFormStructure();

        const form = this.shadow.querySelector('form');
        const tabsContainerItems = this.shadow.querySelector('.tabs-side'); 
        const tabsContainerContent = this.shadow.querySelector('.info-tabs-container-admin'); 

        for(let tab in this.formStructure.tabs) {

            const tabElement = document.createElement('span');
            tabElement.classList.add('tab-item');            
            tabElement.dataset.tab = tab;
            tabElement.innerHTML = this.formStructure.tabs[tab].label;
            tabsContainerItems.append(tabElement);

            const tabPanel = document.createElement('div');
            tabPanel.dataset.tab = tab;
            tabPanel.classList.add('tab-panel');
            tabsContainerContent.append(tabPanel);

            for (let row in this.formStructure.tabsContent[tab].rows) {

                const tabPanelRow = document.createElement('div');
                tabPanelRow.classList.add('row');

                for(let field in this.formStructure.tabsContent[tab].rows[row].formElements) {

                    let formElement = this.formStructure.tabsContent[tab].rows[row].formElements[field];

                    const formElementContainer = document.createElement('div');
                    const formElementLabel = document.createElement('div');
                    const formElementInput = document.createElement('div');
                    formElementContainer.append(formElementLabel);
                    formElementContainer.append(formElementInput);
        
                    formElementContainer.classList.add('form-element');
                    formElementLabel.classList.add('lab');
                    formElementInput.classList.add('input-form-admin');
        
                    if(formElement.label){
                        const label = document.createElement('label');
                        label.innerText = formElement.label;
                        label.setAttribute('for', field);
                        formElementLabel.append(label);
                    }
    
                    if (formElement.element === 'input') {
        
                        switch (formElement.type) {

                            case 'hidden': {

                                const input = document.createElement('input');
                                input.type = formElement.type;
                                input.name = field;
                                input.value = formElement.value || '';

                                form.append(input);

                                continue;
                            }

                            case 'checkbox':
                            case 'radio': {
        
                                const inputContainer = document.createElement('div');
                                inputContainer.classList.add(`${formElement.type}-container`);
                
                                formElement.options.forEach(option => {
                                    const input = document.createElement('input');
                                    const inputLabel = document.createElement('label');
                                    inputLabel.innerText = option.label;
                                    input.id = field;
                                    input.type = formElement.type;
                                    input.name = field;
                                    input.value = option.value || '';
                                    input.checked = option.checked || false;
                                    input.disabled = option.disabled || false;

                                    inputContainer.append(inputLabel);
                                    inputContainer.append(input);
                                });

                                formElementInput.append(inputContainer);

                                break;
                            }

                            case 'range': {

                                const rangeContainer = document.createElement('div');
                                rangeContainer.classList.add('range-container');
                
                                const input = document.createElement('input');
                                input.id = field;
                                input.type = formElement.type;
                                input.name = field;
                                input.min = formElement.min || '';
                                input.max = formElement.max || '';
                                input.step = formElement.step || '';
                                input.value = formElement.value || '';
                                rangeContainer.append(input);

                                const rangeValue = document.createElement('div');
                                rangeValue.classList.add('range-value');
                                rangeValue.innerText = formElement.value;
                                rangeContainer.append(rangeValue);

                                input.addEventListener('input', () => {
                                    rangeValue.innerText = input.value;
                                });

                                formElementInput.append(rangeContainer);

                                break;
                            }

                            case 'number':
                            case 'date':
                            case 'time':
                            case 'datetime-local':
                            case 'month':
                            case 'week': {
                                const input = document.createElement('input');
                                input.id = field;
                                input.type = formElement.type;
                                input.name = field;
                                input.min = formElement.min || '';
                                input.max = formElement.max || '';
                                input.step = formElement.step || '';
                                input.placeholder = formElement.placeholder || '';
                                input.value = formElement.value || '';
                                input.readOnly = formElement.readOnly || false;
                                input.dataset.validate = formElement.validate || '';

                                formElementInput.append(input);
                            
                                break;
                            }

                            case 'file': {

                                if(!this.shadow.querySelector('image-gallery-component')){
                                    const imageGallery = document.createElement('image-gallery-component');
                                    this.shadow.append(imageGallery);
                                }

                                const input = document.createElement('upload-image-button-component');
                                input.id = field;
                                input.setAttribute("name", field);
                                input.setAttribute("languageAlias", "es");
                                input.setAttribute("quantity", formElement.quantity);

                                // input.accept = formElement.accept || '';
                                // input.multiple = formElement.multiple || false;
                                // input.required = formElement.required || false;
                                // input.dataset.validate = formElement.validate || '';

                                formElementInput.append(input);

                                break;
                            }

                            default: {
                                
                                const input = document.createElement('input');
                                input.id = field;
                                input.type = formElement.type;
                                input.name = field;
                                input.value = formElement.value || '';
                                input.placeholder = formElement.placeholder || '';
                                input.dataset.validate = formElement.validate || '';
                            
                                if(formElement.maxLength){

                                    input.maxLength = formElement.maxLength || '';
                                    const counter = document.createElement('div');
                                    formElementLabel.append(counter);

                                    input.addEventListener('input', () => {
                                        if(input.value.length > 0){
                                            counter.textContent = input.value.length + ' / ' + input.maxLength;                            
                                        }else{
                                            counter.textContent = '';
                                        }
                                    });
                                }
            
                                formElementInput.append(input);

                                break;
                            }
                        }
                    }

                    if (formElement.element === 'textarea') {

                        const textarea = document.createElement('textarea');
                        textarea.id = field;
                        textarea.name = field;
                        textarea.disabled = formElement.disabled || false;
                        textarea.readOnly = formElement.readOnly || false;
                        textarea.value = formElement.value || '';
                        textarea.cols = formElement.cols || '';
                        textarea.rows = formElement.rows || '';
                        textarea.wrap = formElement.wrap || '';
                        textarea.placeholder = formElement.placeholder || '';
                        textarea.dataset.validate = formElement.validate || '';
                        
                        if(formElement.maxLength){

                            textarea.maxLength = formElement.maxLength || '';
                            const counter = document.createElement('div');
                            formElementLabel.append(counter);

                            textarea.addEventListener('input', () => {
                                if(textarea.value.length > 0){
                                    counter.textContent = textarea.value.length + ' / ' + textarea.maxLength;                            
                                }else{
                                    counter.textContent = '';
                                }
                            });
                        }

                        formElementInput.append(textarea);
                    }
        
                    if (formElement.element === 'select') {
        
                        const select = document.createElement('select');
                        select.id = field;
                        select.name = field;
                        select.disabled = formElement.disabled || false;
                        select.required = formElement.required || false;
                        select.multiple = formElement.multiple || false;
        
                        formElement.options.forEach(option => {
                            const optionElement = document.createElement('option');
                            optionElement.value = option.value;
                            optionElement.innerText = option.label;
                            select.append(optionElement);
                        });
        
                        formElementInput.append(select);
                    }

                    tabPanelRow.append(formElementContainer);
                };

                tabPanel.append(tabPanelRow);
            };
        }

        this.renderTabs();
        this.renderButtons();
    }

    validation = () => {

        let inputs = this.shadow.querySelectorAll("input, textarea, select");
        let error = this.shadow.querySelector(".error");

        let validForm = true;
    
        let validators = {
            "only-letters": /^[a-zA-Z\s]+$/g,
            "only-numbers": /\d/g,
            "telephone": /^\d{9}$/g,
            "email": /\w+@\w+\.\w+/g,
            "web": /^(http|https):\/\/\w+\.\w+/g,
            "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
            "date": /^\d{4}-\d{2}-\d{2}$/g,
            "time": /^\d{2}:\d{2}$/g
        }


        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].dataset.validate && inputs[i].value.match(validators[inputs[i].dataset.validate]) == null) {
                error.classList.add("active");
                validForm = false;
            }else{
                validForm = true;
            }
        }
        
        return validForm;
    }


    renderTabs = () => {

        this.shadow.querySelector(".tab-item").classList.add('active');
        this.shadow.querySelector(".tab-panel").classList.add('active');

        let tabs = this.shadow.querySelectorAll(".tab-item")
        let contents = this.shadow.querySelectorAll(".tab-panel")

        tabs.forEach(tab => {

            tab.addEventListener("click", () => {

                tabs.forEach(tab => {
                    tab.classList.remove("active")
                });

                tab.classList.add("active")

                contents.forEach(content => {

                    if(tab.dataset.tab == content.dataset.tab) {
                        content.classList.add("active")
                    }
                    else{
                        content.classList.remove("active")
                    }
                });
            });

        });
    }

    renderButtons = () => {

        let save = this.shadow.querySelector("#img-save");
        let reset = this.shadow.querySelector("#img-clean");
        
        save.addEventListener("click", () => {
            
            let url = this.getAttribute('id') ?  API_URL + this.getAttribute('url') + '/' + this.getAttribute('id')  : API_URL + this.getAttribute('url');
            let method = this.getAttribute('id') ? "PUT" : "POST";

            let form = this.shadow.querySelector('form');
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());

            console.log("hoa")
            if(!this.validation()){
                return;
            }
    
            console.log("hoasss")

            fetch(url, {
                method: method,
                headers: {
                    'Authorization': 'Bearer ' +  sessionStorage.getItem('accessToken'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataJson)
            }).then(response => {
                if(response.ok){

                    this.render();
                    document.dispatchEvent(new CustomEvent('refreshTable'));

                }else{
                    console.log(response);
                }
            }).catch(error => {
                console.log(error);
            });
        });

        reset.addEventListener("click", () => {
            this.render();
            this.setAttribute('id', '');
        });
    }  


    showElement(id) {

        let url = API_URL + this.getAttribute('url') + '/' + id;
        
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' +  sessionStorage.getItem('accessToken'),
            }
        }).then(response => {
            return response.json();
        }).then(data => {
                
            for (let [key, value] of Object.entries(data)) {

                if(this.shadow.querySelector('#' + key)){
                    this.shadow.querySelector('#' + key).value = data[key];
                }
            }

        }).catch(error => {
            console.log(error);
        });
    }  

    setFormStructure = async () => {
        
        let url = this.getAttribute('url');

        switch (url) {

            case '/api/admin/books':

            return {
                

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    title: {
                                        label: 'Titulo',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    author: {
                                        label: 'Autor',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },  
                                }
                            },
                            row2: {
                                formElements:{
                                    isbn: {
                                        label: 'ISBN',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    pageCount: {
                                        label: 'Precio Base Total',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    publishedDate: {
                                        label: 'Fecha de Publicacion',
                                        element: 'input',
                                        type: 'date',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                            row3: {
                                formElements:{
                                    description: {
                                        label: 'Descripcion',
                                        element: 'textarea',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/trolley-details':

            return {
                

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    amount: {
                                        label: 'Cantidad',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    price: {
                                        label: 'Precio',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },    
                                }
                            },
                            row2: {
                                formElements:{
                                    unit_mesure: {
                                        label: 'Unidad de Medida',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    product_name: {
                                        label: 'Nombre del Producto',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    iva_tipe: {
                                        label: 'Tipo de IVA',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/taxes':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    type: {
                                        label: 'Tipo',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    valid: {
                                        label: 'Válido',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/sliders':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    name: {
                                        label: 'Nombre',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/sales':

            return {
                

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    reference: {
                                        label: 'Referencia',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    price_total: {
                                        label: 'Precio Total',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },    
                                }
                            },
                            row2: {
                                formElements:{
                                    price_base_total: {
                                        label: 'Precio Base Total',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    price_iv_total: {
                                        label: 'Precio IVA Total',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    emision_date: {
                                        label: 'Hora de Emision',
                                        element: 'input',
                                        type: 'week',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                            row3: {
                                formElements:{
                                    emision_hour: {
                                        label: 'Hora de Emision',  
                                        element: 'input',
                                        type: 'hour',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    iva_tipe: {
                                        label: 'Tipo de IVA',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                            row4: {
                                formElements:{
                                    unit_mesure: {
                                        label: 'Unidad de Medida',  
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    product_name: {
                                        label: 'Nombre del Producto',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/sale-errors':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    code_error: {
                                        label: 'Código de error',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    mesaje_error: {
                                        label: 'Mensaje de error',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/sale-details':

            return {
                

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    amount: {
                                        label: 'Cantidad',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    price: {
                                        label: 'Precio',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },  
                                    price_iva_total: {
                                        label: 'Precio IVA Total',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },  
                                }
                            },
                            row2: {
                                formElements:{
                                    unit_mesure: {
                                        label: 'Unidad de Medida',  
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    emision_date: {
                                        label: 'Fecha de Emision',
                                        element: 'input',
                                        type: 'week',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    emision_hour: {
                                        label: 'Hora de Emision',
                                        element: 'input',
                                        type: 'time',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                            row3: {
                                formElements:{
                                    product_name: {
                                        label: 'Nombre del Producto',  
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    iva_tipe: {
                                        label: 'Tipo de IVA',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/products':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    name: {
                                        label: 'Nombre',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    price: {
                                        label: 'Precio',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    outstanding: {
                                        label: 'Pendiente',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/product-categorys':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    name: {
                                        label: 'Nombre',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/payments':

            return {
                

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    references: {
                                        label: 'Referencias',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    price_total: {
                                        label: 'Precio Total',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },  
                                }
                            },
                            row2: {
                                formElements:{
                                    price_base_total: {
                                        label: 'Precio Base Total',
                                        element: 'input',
                                        type: 'number',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    emision_date: {
                                        label: 'Fecha de Emision',
                                        element: 'input',
                                        type: 'week',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    emision_hour: {
                                        label: 'Hora de Emision',
                                        element: 'input',
                                        type: 'time',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/payment-methods':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    option: {
                                        label: 'Opcion',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    value: {
                                        label: 'Valor',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/payment-details':

            return {
                

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    amount: {
                                        label: 'Cantidad',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    price: {
                                        label: 'Precio',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },  
                                }
                            },
                            row2: {
                                formElements:{
                                    unit_mesure: {
                                        label: 'Unidad de Medida',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    products_name: {
                                        label: 'Nombre de Productos',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    iva_tipe: {
                                        label: 'Tipo de Iva',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/menus':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    name: {
                                        label: 'Nombre',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    customUrl: {
                                        label: 'Url Personalizada',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    parentId: {
                                        label: 'Parent Id',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,

                                    },
                                            
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/locales':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    lenguage: {
                                        label: 'Lenguage',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    entity: {
                                        label: 'Entidad',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                            row2: {
                                formElements:{
                                    entityKey: {
                                        label: 'Clave de la entidad',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    key : {
                                        label: 'Clave',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    value: {
                                        label: 'Valor',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/finguerprints':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    finguerprint: {
                                        label: 'Finguerprint',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/faqs':

            return {

                tabs:{
                    main: {
                        label: 'Principal',
                    }
                },

                tabsContent: {

                    main: {
                        rows:{
                            row1: {
                                formElements:{
                                    answer: {
                                        label: 'Respuesta',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                    question: {
                                        label: 'Pregunta',
                                        element: 'input',
                                        type: 'text',
                                        placeholder: '',
                                        required: true,
                                        validate: 'only-letters'
                                    },
                                }
                            },
                        }
                    },
                }
            };

            case '/api/admin/contacts':

                return {

                    tabs:{
                        main: {
                            label: 'Principal',
                        }
                    },

                    tabsContent: {

                        main: {
                            rows:{
                                row1: {
                                    formElements:{
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        surname: {
                                            label: 'Surnames',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                    }
                                },
                                row2: {
                                    formElements:{
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        },
                                        phone: {
                                            label: 'Telefono',
                                            element: 'input',
                                            type: 'number',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-numbers'
                                        },
                                    }
                                },
                                row3: {
                                    formElements:{
                                        message: {
                                            label: 'Message',
                                            element: 'textarea',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                    }
                                }
                            }
                        }
                    },
                };

            case '/api/admin/conpany-datas':

                return {

                    tabs:{
                        main: {
                            label: 'Principal',
                        }
                    },

                    tabsContent: {

                        main: {
                            rows:{
                                row1: {
                                    formElements:{
                                        name: {
                                            label: 'Option',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        value: {
                                            label: 'Value',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                    }
                                }
                            }
                        }
                    },
                };

            case '/api/admin/customer':

                return {

                    tabs:{
                        main: {
                            label: 'Principal',
                        }
                    },

                    tabsContent: {

                        main: {
                            rows:{
                                row1: {
                                    formElements:{
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        name: {
                                            label: 'Apellidos',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                    }
                                },
                                row2: {
                                    formElements:{
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        },
                                        telefono: {
                                            label: 'Teléfono',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'phone'
                                        },
                                        
                                    }
                                },
                                row3: {
                                    formElements:{
                                        direccion: {
                                            label: 'Dirección',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'address'
                                        },
                                        cp: {
                                            label: 'Código Postal',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'cp'
                                        },
                                        ciudad: {
                                            label: 'Poblacion',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                    }
                                },
                            }
                        }
                    }
                } 
            
            
            case '/api/admin/users':
            
                return {

                    tabs:{
                        main: {
                            label: 'Principal',
                        }
                    },
                    
                    tabsContent: {

                        main: {
                            rows:{
                                row1: {
                                    formElements:{
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        }
                                    }
                                },
                                row2: {
                                    formElements:{
                                        password: {
                                            label: 'Contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true,
                                            validate: 'password'
                                        },
                                        password_confirmation: {
                                            label: 'Confirmar Contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true,
                                            validate: 'password'
                                        }
                                    }
                                }

                            }
                    
                        }
                    }
                }
            

            case '/api/admin/ejemplo':

                return {

                    tabs:{
                        main: {
                            label: 'Principal',
                        },
                        images: {
                            label: 'Imágenes',
                        }
                    },

                    tabsContent: {
                        
                        main: {
                            rows:{
                                row1: {
                                    formElements:{
                                        id:{
                                            element: 'input',
                                            type: 'hidden',
                                        },
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            maxLength: '10',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        }
                                    }
                                },
                                row2: {
                                    formElements:{
                                        password: {
                                            label: 'Contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        },
                                        repeatPassword: {
                                            label: 'Repita la contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row3: {
                                    formElements:{
                                        permissions: {
                                            label: 'Permisos',
                                            element: 'input',
                                            type: 'checkbox',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Crear',
                                                    value: 'create',
                                                    checked: true
                                                },
                                                {
                                                    label: 'Leer',
                                                    value: 'read'
                                                },
                                                {
                                                    label: 'Actualizar',
                                                    value: 'update'
                                                },
                                                {
                                                    label: 'Eliminar',
                                                    value: 'delete'
                                                }
                                            ]
                                        },
                                        sex: {
                                            label: 'Sexo',
                                            element: 'input',
                                            type: 'radio',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Masculino',
                                                    value: "M",
                                                    checked: true
                                                },
                                                {
                                                    label: 'Femenino',
                                                    value: "F"
                                                }
                                            ],
                                        }
                                    }
                                },
                                row4: {
                                    formElements:{
                                        color: {
                                            label: 'Color',
                                            element: 'input',
                                            type: 'color',
                                            placeholder: ''
                                        },
                                        role: {
                                            label: 'Rol',
                                            element: 'select',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Administrador',
                                                    value: 'admin'
                                                },
                                                {
                                                    label: 'Usuario',
                                                    value: 'user'
                                                }
                                            ]
                                        }
                                    }
                                },
                                row5: {
                                    formElements:{
                                        edad: {
                                            label: 'Edad',
                                            element: 'input',
                                            type: 'number',
                                            placeholder: '',
                                            required: true
                                        },
                                        telefono: {
                                            label: 'Teléfono',
                                            element: 'input',
                                            type: 'number',
                                            placeholder: '',
                                            required: true
                                        },
                                        url: {
                                            label: 'URL',
                                            element: 'input',
                                            type: 'url',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row6: {
                                    formElements:{
                                        creationDate: {
                                            label: 'Fecha de creación',
                                            element: 'input',
                                            type: 'date',
                                            placeholder: '',
                                            required: true,
                                            validate: 'date'
                                        },
                                        creationTime: {
                                            label: 'Hora de creación',
                                            element: 'input',
                                            type: 'time',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row7: {
                                    formElements:{
                                        reservationWeek: {
                                            label: 'Semana de reserva',
                                            element: 'input',
                                            type: 'week',
                                            placeholder: '',
                                            required: true
                                        },
                                        reservationMonth: {
                                            label: 'Mes de reserva',
                                            element: 'input',
                                            type: 'month',
                                            placeholder: '',
                                            required: true
                                        },
                                        reservationDateTime: {
                                            label: 'Fecha y hora',
                                            element: 'input',
                                            type: 'datetime-local',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row8: {
                                    formElements:{
                                        capital: {
                                            label: 'Capital',
                                            element: 'input',
                                            type: 'range',
                                            min: 0,
                                            max: 100,
                                            step: 1,
                                            value: 50,
                                            placeholder: ''
                                        },
                                    } 
                                    
                                },
                                row9: {
                                    formElements:{
                                        pdf: {
                                            label: 'Pdf',
                                            element: 'input',
                                            type: 'file',
                                            placeholder: '',
                                            required: true
                                        },
                                        search: {
                                            label: 'Buscar',
                                            element: 'input',
                                            type: 'search',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row10: {
                                    formElements:{
                                        description: {
                                            label: 'Descripción',
                                            element: 'textarea',
                                            maxLength: 100,
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                }
                            }
                        },
                        images: {
                            rows:{
                                row1: {
                                    formElements:{
                                        id:{
                                            element: 'input',
                                            type: 'hidden',
                                        },
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            maxLength: '10',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        
        
}

customElements.define('form-component', Form);