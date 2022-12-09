import {renderRegex} from './regex.js';

export let renderForm =  () => {

    let form = document.querySelector('form');
    let contactFormButton = document.querySelector('.send-form-button');

    contactFormButton.addEventListener('click', event => {

        event.preventDefault(); 
        
        let formData = new FormData(form);
        let formDataJson = Object.fromEntries(formData.entries());

        fetch('http://192.168.1.16:8080/api/admin/taxes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.getItem('accessToken')
            },
            body: JSON.stringify(formDataJson)
        }).then(response => {
            return response.json();
        }).then(data => {
            
            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));
    
        }).catch(error => {
            console.log(error);
        });
    })
}