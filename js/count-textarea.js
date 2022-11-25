export let renderCountTextarea = () => {
    
    let textarea = document.querySelector('textarea');
    let counter = document.querySelector('.counter');

    textarea.addEventListener('input', () => {
    counter.textContent = textarea.value.length;
});

}
