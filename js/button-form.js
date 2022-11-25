export let renderButtonForm =  () => {

    let form = document.querySelector('form');
    let formInputs = form.elements;
    let contactFormButton = document.querySelector('send-form-button')

    for (let i = 0; i <  formInputs.length; i++) {

        contactFormButton.addEventListener('click', event => {
            event.preventDefault();
            console.log(formInputs[i].value);
        });
    }
}