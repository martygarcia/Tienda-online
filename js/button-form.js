import {renderRegex} from './regex.js'

export let renderButtonForm =  () => {

    let form = document.querySelector('.contact-form');
    let formInputs = form.elements;
    let contactFormButton = document.querySelector('.send-form-button');

    if(contactFormButton) { 
        
        contactFormButton.addEventListener('click', event => {

            event.preventDefault();

            for (let i = 0; i <  formInputs.length; i++) {

                console.log(formInputs[i].value);

                renderRegex();
            }  
        })
    }
}