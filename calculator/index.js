let calValue = '';
const calculatorResult = document.getElementById('calculatorResult');
const buttonElement = document.querySelectorAll('.calculator__btn');

Array.from(buttonElement).forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerHTML == '=') {
                calValue = eval(calValue);
                calculatorResult.value = calValue;
        }
        else if (btn.innerHTML == 'CE') {
            calValue = '';
            calculatorResult.value = calValue;
        }
        else if (btn.innerHTML == 'DEL') {
            calValue = calculatorResult.value.slice(0,-1);
            calculatorResult.value = calValue;
        }
        else {
            calValue = calValue + btn.innerHTML;
            calculatorResult.value = calValue;
        }
    })
});
