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
            width: 95%;
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

            .active span {
        
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
        
        <div class="column">
            <div class="tabs-form-admin">
                <form>
                    <div class="tabs-container-admin">
                        <div class="two-columns title-tabs-container-admin">
                            <div class="tabs-side">
                                <div class="tabs-admin active" data-tab="one">
                                </div>
                                <div class="tabs-admin" data-tab="two">
                                </div>
                            </div>    
                        </div>
                        <div class="info-tabs-container-admin">
                            <div class="tab-contents-admin active" data-tab="one">
                            </div>
                        </div>    
                    </div>
                </form>
            </div>
        </div>
        `;	

        const formElements = await this.setFormStructure();

        // Tabs

        let tabsContainer = this.shadowRoot.querySelector('.tabs-admin');
        let tab = document.createElement('span');
        tab.innerHTML = formElements.tabs.main.label;
        tabsContainer.appendChild(tab);

        // Form

        let formContents = this.shadowRoot.querySelectorAll('.tab-contents-admin');

        formContents.forEach(element => {

            // row1

            let nameForm = document.createElement('div');
            nameForm.innerHTML = `<label>${formElements.tabsContent.main.rows.row1.formElements.name.label}</label>` + 
            `<${formElements.tabsContent.main.rows.row1.formElements.name.element} type="${formElements.tabsContent.main.rows.row1.formElements.name.type}">`;
            element.appendChild(nameForm);

            let emailForm = document.createElement('div');
            emailForm.innerHTML = `<label>${formElements.tabsContent.main.rows.row1.formElements.email.label}</label>` + 
            `<${formElements.tabsContent.main.rows.row1.formElements.email.element} type="${formElements.tabsContent.main.rows.row1.formElements.email.type}"> `
            element.appendChild(emailForm);

            // row2


            let passwordForm = document.createElement('div');
            passwordForm.innerHTML = `<label>${formElements.tabsContent.main.rows.row2.formElements.password.label}</label>` +
            `<${formElements.tabsContent.main.rows.row2.formElements.password.element} type="${formElements.tabsContent.main.rows.row2.formElements.password.type}">`
            element.appendChild(passwordForm);

            let passwordConfirmationForm = document.createElement('div');
            passwordConfirmationForm.innerHTML = `<label>${formElements.tabsContent.main.rows.row2.formElements.repeatPassword.label}</label>` +
            `<${formElements.tabsContent.main.rows.row2.formElements.repeatPassword.element} type="${formElements.tabsContent.main.rows.row2.formElements.repeatPassword.type}">`
            element.appendChild(passwordConfirmationForm);
            
            // row3

            let roleForm = document.createElement('div');
            roleForm.innerHTML = `<label>${formElements.tabsContent.main.rows.row3.formElements.permissions.label}</label>`;
            element.appendChild(roleForm);

            for (let i = 0; i < formElements.tabsContent.main.rows.row3.formElements.permissions.options.length; i++) {
                let option = document.createElement('label');
                option.innerHTML = formElements.tabsContent.main.rows.row3.formElements.permissions.options[i].label;
                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('value', formElements.tabsContent.main.rows.row3.formElements.permissions.options[i].value);
                option.appendChild(input);
                roleForm.appendChild(option);
            }

            // row4

            let permissionsForm = document.createElement('div');
            permissionsForm.innerHTML = `<label>${formElements.tabsContent.main.rows.row4.formElements.permissions.label}</label>`;
            element.appendChild(permissionsForm);

            for (let i = 0; i < formElements.tabsContent.main.rows.row4.formElements.permissions.options.length; i++) {
                let option = document.createElement('label');
                option.innerHTML = formElements.tabsContent.main.rows.row4.formElements.permissions.options[i].label;
                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('value', formElements.tabsContent.main.rows.row4.formElements.permissions.options[i].value);
                option.appendChild(input);
                element.appendChild(option);
            }


        });

    }

    setFormStructure = async () => {
        
        let url = this.getAttribute('url');

        switch (url) {

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
                                            type: 'tel',
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
                        }
                    }
                }
            }
        };
    
}

customElements.define('form-component', Form);