// ----------------------------
// SELEZIONE ELEMENTI DEL DOM
// ----------------------------

const btnsNumbers = [];
for (let i = 0; i <= 9; i++) {
    btnsNumbers.push(document.querySelector('.btn-' + i));
}
// console.log(btnsNumbers);

const btnPlus = document.querySelector('.btn-plus');
const btnMinus = document.querySelector('.btn-minus');
const btnProduct = document.querySelector('.btn-product');
const btnDivision = document.querySelector('.btn-division');
const btnEqual = document.querySelector('.btn-equal');
const btnCanc = document.querySelector('.btn-canc');

const eleDisplay = document.querySelector('.display');

// ----------------------------
// VARIABILI DI STATO
// ----------------------------

let startNewNumber = true;
let numberOnDisplay = 0;
let operation = null;
let result = null;

// ----------------------------
// EVENT LISTENERS
// ----------------------------

for (btn of btnsNumbers) {
    btn.addEventListener('click', numberPressed);
}

btnCanc.addEventListener('click', function () {
    numberOnDisplay = 0;
    startNewNumber = true;
    operation = null;
    result = null;
    eleDisplay.textContent = numberOnDisplay;
    logStatus('canc click');
});

btnProduct.addEventListener('click', operatorPressed);
btnMinus.addEventListener('click', operatorPressed);
btnPlus.addEventListener('click', operatorPressed);
btnDivision.addEventListener('click', operatorPressed);

btnEqual.addEventListener('click', function (event) {
    startNewNumber = true;
    if (operation) {
        result = performOperation(result, numberOnDisplay, operation);
        numberOnDisplay = result;
        eleDisplay.textContent = numberOnDisplay;
    }
    logStatus('equal click');
});

document.addEventListener('keydown', function (event) {
    key = event.key;
    console.log(key);
    if (key == '*') btnProduct.click();
    if (key == '-') btnMinus.click();
    if (key == '+') btnPlus.click();
    if (key == '/') btnDivision.click();
    if (key == 'Enter') btnEqual.click();
    if (key == 'Backspace' || key == 'Delete') btnCanc.click();
    if ('0123456789'.includes(key)) btnsNumbers[key].click();
});

logStatus('START');

// ----------------------------
// FUNZIONI
// ----------------------------

function numberPressed(event) {
    const num = parseInt(event.target.textContent);
    if (startNewNumber) {
        startNewNumber = false;
        numberOnDisplay = 0;
    }
    numberOnDisplay = 10 * numberOnDisplay + num;
    eleDisplay.textContent = numberOnDisplay;
    logStatus('number click');
}

function operatorPressed(event) {
    operation = event.target.textContent;
    if (result === null) {
        result = numberOnDisplay;
    } else {
        if (!startNewNumber) {
            result = performOperation(result, numberOnDisplay, operation);
            numberOnDisplay = result;
            eleDisplay.textContent = numberOnDisplay;
        }
    }
    startNewNumber = true;
    logStatus('operation click');
}

function performOperation(num1, num2, operator) {
    console.log(num1, num2, operation);
    if (operator == '*') return num1 * num2;
    else if (operator == '-') return num1 - num2;
    else if (operator == '+') return num1 + num2;
    else if (operator == '/') return num1 / num2;
    else return null;
}

function logStatus(message) {
    console.log(
        message + ':',
        startNewNumber,
        numberOnDisplay,
        operation,
        result
    );
}
