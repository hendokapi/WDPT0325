const eleDisplay = document.querySelector('#display');
const btnIncrement = document.querySelector('#btn-increment');
const btnDecrement = document.querySelector('#btn-decrement');
const btnMult = document.querySelector('#btn-mult');
const btnPow = document.querySelector('#btn-pow');

let counter = 0;

btnIncrement.addEventListener('click', function () {
    counter++;
    eleDisplay.innerText = counter;
});

btnDecrement.addEventListener('click', function () {
    counter--;
    eleDisplay.innerText = counter;
});

btnMult.addEventListener('click', function () {
    counter = counter * 10;
    eleDisplay.innerText = counter;
});

btnPow.addEventListener('click', function () {
    counter = counter * counter;
    eleDisplay.innerText = counter;
});
