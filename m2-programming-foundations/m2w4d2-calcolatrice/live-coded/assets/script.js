// ---------------------------
// SELEZIONE ELEMENTI DOM
// ---------------------------

const eleDisplay = document.querySelector('.display');
// const eleDisplay = document.getElementsByClassName('display')[0];

const btnProduct = document.querySelector('#btn-product');
const btnMinus = document.querySelector('#btn-minus');
const btnPlus = document.querySelector('#btn-plus');
const btnDivision = document.querySelector('#btn-division');
const btnEqual = document.querySelector('#btn-equal');
const btnCanc = document.querySelector('#btn-canc');

const btnsNumbers = [];
for (let i = 0; i <= 9; i++) {
    btnsNumbers.push(document.querySelector('#btn-' + i));
}
// console.log(btnsNumbers);

// ---------------------------
// VARIABILI DI STATO
// ---------------------------

let numberOnDisplay = 0;
let startNewNumber = true;
let operation = null;
let result = null;

// ---------------------------
// GESTIONE EVENTI
// ---------------------------

for (let i = 0; i <= 9; i++) {
    btnsNumbers[i].addEventListener('click', numberPressed);
}

btnCanc.addEventListener('click', function () {
    numberOnDisplay = 0;
    eleDisplay.textContent = 0;
});

btnProduct.addEventListener('click', operatorPressed);
btnMinus.addEventListener('click', operatorPressed);
btnPlus.addEventListener('click', operatorPressed);
btnDivision.addEventListener('click', operatorPressed);

// ---------------------------
// FUNZIONI
// ---------------------------

function numberPressed(event) {
    const num = parseInt(event.target.textContent);
    if (startNewNumber) {
        numberOnDisplay = 0;
        startNewNumber = false;
    }
    numberOnDisplay = numberOnDisplay * 10 + num;
    console.log(numberOnDisplay);
    eleDisplay.textContent = numberOnDisplay;
}

function operatorPressed() {
    startNewNumber = true;
}
