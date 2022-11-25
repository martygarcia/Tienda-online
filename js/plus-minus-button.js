export let renderPlusMinusButton = () => {

    let buttonMinuses = document.querySelectorAll('.custom-button-minus');
    let buttonPluses = document.querySelectorAll('.custom-button-plus');

    buttonMinuses.forEach(buttonMinus => {

        buttonMinus.addEventListener("click", () => {

            let amount = buttonMinus.closest('.amount-item-plus-minus-button').querySelector('.custom-button-input');

            if (amount.value > 1) {
                amount.value--;
            }
        });
    });


    buttonPluses.forEach(buttonPlus => {

        buttonPlus.addEventListener("click", () => {

            let amount = buttonPlus.closest('.amount-item-plus-minus-button').querySelector('.custom-button-input');

            amount.value++;

        });
    });
}