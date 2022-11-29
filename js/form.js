import {renderRegex} from './regex.js'

export let renderForm =  () => {

    let form = document.querySelector('.contact-form');
    let formInputs = form.elements;
    let contactFormButton = document.querySelector('.send-form-button');

    if(contactFormButton) { 

        contactFormButton.addEventListener('click', event => {

            event.preventDefault();

            for (let i = 0; i <  formInputs.length; i++) {

                if(form) {

                    renderRegex();
                }
            }  

            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));


        })
    }
}