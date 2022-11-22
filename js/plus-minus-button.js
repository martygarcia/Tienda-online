export let renderPlusMinusButton = () => {

    let minusButton = document.querySelectorAll(".custom-button-minus");
    let valueButton = document.querySelectorAll(".custom-button-input");
    let plusButton = document.querySelectorAll(".custom-button-plus");

    plusButton.addEventListener("click", () => {
        valueButton.value++;
    });

    minusButton.addEventListener("click", () => {

        if(valueButton.value > 1){
            valueButton.value--;
        }
    });
}