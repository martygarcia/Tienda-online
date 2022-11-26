export let renderRegex = () => {

    let name = document.querySelector('.name-regex').value;
    // let surnames = document.querySelector('.surnames-regex').value;
    // let email = document.querySelector('.email-regex').value;
    // let phone = document.querySelector('.phone-regex').value;
    // let textarea = document.querySelector('.textarea-regex').value;

    if (name) {

        let regex = /^[a-zA-Z\s]+$/g;
        console.log(name.match(regex));

        if(name.match(regex) == null){
            console.log("no");
        }

    }
}