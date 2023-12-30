function appendOperator(operator) {
    let display = document.getElementsByName('display')[0];
    let currentValue = display.value;
    let lastChar = currentValue[currentValue.length - 1];
    if ('+-*/'.includes(lastChar)) {
        display.value = currentValue.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}
function handleInput(value) {
    let display = document.getElementsByName('display')[0];
    let currentValue = display.value;

    // Ensure that pressing '.' only adds it if there isn't already a decimal point
    if (value === '.' && currentValue.includes('.')) {
        return;
    }

    display.value += value;
}

function devide(value){
    if(value===0){
        display.value = 0;
    }
}
