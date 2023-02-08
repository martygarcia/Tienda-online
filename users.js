setFormStructure = async () => {
        
    let url = this.getAttribute('url');

    switch (url) {

        case '/api/admin/users':

            return {

                formUsers:{
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
                    },formElements:{
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
                    
                }
            }
        }
    }