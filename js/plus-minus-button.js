export let renderPlusMinusButton = () => {

    let buttonMinuses = document.querySelectorAll('.custom-button-minus');
    let buttonPluses = document.querySelectorAll('.custom-button-plus');

    if(buttonMinuses) {
        buttonMinuses.forEach(buttonMinus => {

            buttonMinus.addEventListener("click", () => {
    
                let amount = buttonMinus.closest('.amount-item-plus-minus-button').querySelector('.custom-button-input');
    
                if (amount.value > 1) {
                    amount.value--;
                }
            });
        });
    }

    if(buttonPluses) {
        
        buttonPluses.forEach(buttonPlus => {
    
            buttonPlus.addEventListener("click", () => {
    
                let amount = buttonPlus.closest('.amount-item-plus-minus-button').querySelector('.custom-button-input');
    
                amount.value++;
    
            });
        });
    }
}