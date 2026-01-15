console.log(this);
// window.console.log('ciao');
// miaVar = 10;
// var miaVar2 = 20;
// console.log(miaVar);

const btnFunc = document.querySelector('#func');
const btnArrow = document.querySelector('#arrow');

const callbackArrow = () => {
    console.log('hai cliccato callbackArrow');
    console.log(this);
};

btnArrow.addEventListener('click', callbackArrow);
btnFunc.addEventListener('click', callbackFunction);

function callbackFunction() {
    console.log('hai cliccato callbackFunction');
    console.log(this);

    const callbackArrow = () => {
        console.log('hai cliccato callbackArrow');
        console.log(this);
    };

    callbackArrow();
}

const person = {
    nome: 'Gigi',
    age: 30,
};
console.log(person.toString());

const myArr1 = [1, 2, 3];
console.log(myArr1);

const student = {
    nome: 'Pinco',
    age: 30,
    saluta: function () {
        console.log('ciao sono ' + this.nome);
    },
};
