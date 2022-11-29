export let renderRegex = () => {

    let correctSend = document.querySelector('correct-send');
    let sendForm = document.querySelector('.send-form');
    let phoneErrorNumber = document.querySelector('.phone-error-number');
    let emailErrorText = document.querySelector('.email-error-text');
    let letersErrorText = document.querySelector('.leters-error-text');
    let surnameErrorText = document.querySelector('.surname-error-text');
    let form = document.querySelector('.contact-form');
    let leters = document.querySelector('.leters-only-regex').value;
    let surnames = document.querySelector('.surnames-leters-only-regex').value;
    let email = document.querySelector('.email-regex').value;
    let phone = document.querySelector('.phone-regex').value;

    if (form) {

        if(leters) {

            let regex = /^[a-zA-Z\s]+$/g;
            console.log(leters.match(regex));
    
            if(leters.match(regex) == null){
    
                letersErrorText.classList.add("active");
            }else{
    
                letersErrorText.classList.remove("active");
            }
        }

        if(surnames) {
            
            let regex = /^[a-zA-Z\s]+$/g;
            console.log(surnames.match(regex));
    
            if(surnames.match(regex) == null){
    
                surnameErrorText.classList.add("active");
            }else{
    
                surnameErrorText.classList.remove("active");
            }
        }

        if(email) {

            let regex = /\w+@\w+\.\w+/g;
            console.log(email.match(regex));

            if(email.match(regex) == null) {

                emailErrorText.classList.add("active")
            }else {

                emailErrorText.classList.remove("active")
            }
        }

        if(phone) {

            let regex = /^\d{9}$/g;
            console.log(phone.match(regex));

            if(phone.match(regex) == null) {

                phoneErrorNumber.classList.remove("active");
            }else {
                phoneErrorNumber.classList.add('active')
            }
        }
    }

}