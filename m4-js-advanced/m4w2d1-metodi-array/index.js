const numbers = [5, 20, 7, 40, 9];

const filteredNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 10) {
        filteredNumbers.push(numbers[i]);
    }
}

console.log(filteredNumbers); // [5, 7, 9]

const filterResult = numbers.filter(callback);

function callback(elemento) {
    // ritornare vero se l'elemento va incluso
    // falso se va escluso
    console.log(elemento);
    return elemento < 10;
}
console.log(filterResult);

const filteredArrow = numbers.filter((ele) => ele < 10);
console.log(filteredArrow);

// ESEMPIO NOMI
const names = ['Gigi', 'Pinco', 'Sprizzo', 'Mario', 'Kart', 'gargiulo'];

// filtrare i nomi con meno di 5 lettere
const shortNames = names.filter((e) => e.length < 5);
console.log(shortNames);

// filtrare solo i nomi che iniziano con la G

const startsWithG = names.filter((nome) => nome[0].toLowerCase() === 'g');
console.log(startsWithG);

const doppioFilter = names.filter(
    (nome) => nome[0].toLowerCase() === 'g' && nome.length < 5
);
console.log(doppioFilter);

const doppioSuper = names
    .filter((nome) => nome[0].toLowerCase() === 'g') // ['Gigi', 'gargiulo']
    .filter((e) => e.length < 5); // ['Gigi']
console.log(doppioSuper);

// raddoppiare gli elementi di un array
console.log(numbers);
const doubles = numbers.map((num) => num * 2).filter((num) => num % 3 === 0);
console.log(doubles);

const doublesResult = [];
numbers.forEach((num) => doublesResult.push(num * 2));
console.log(doublesResult);

// ridurre un array di numeri alla somma di tutti quanti
const somma = numbers.reduce((acc, ele) => acc + ele, 0);
console.log(somma);

const listaNomi = names.reduce((acc, ele) => acc + '-' + ele, '');
console.log(listaNomi);

const listaNomiFixata = names.reduce(
    (acc, ele, index, arrayOriginale) =>
        acc + ele + (index === arrayOriginale.length - 1 ? '' : '-'),
    ''
);
console.log(listaNomiFixata);

const sommaVisualizzata = numbers.reduce((acc, ele) => {
    console.log(acc);
    return acc * ele;
}, 1);
console.log(sommaVisualizzata);

// 'Gigi-Pinco-Sprizzo-Mario-Kart-gargiulo-'

console.log(
    numbers.map((num) => {
        return num * 2;
    })
);

const prodotti = [
    {
        nome: 'Bruschetta',
        quantity: 10,
        prezzo: 1,
    },
    {
        nome: 'Coca Cola',
        quantity: 2,
        prezzo: 5,
    },
    {
        nome: 'Pomodori',
        quantity: 3,
        prezzo: 2,
    },
];

const prezzoTotale = prodotti.reduce(
    (acc, ele) => acc + ele.prezzo * ele.quantity,
    0
);
console.log(prezzoTotale);

const ilVostoToken = 'ciaoasdjfalsfjasòfdk';
const apiResult = fetch('https://rickandmortyapi.com/api/character', {
    headers: {
        Authorization: ilVostoToken,
    },
})
    .then((res) => res.json())
    .then((data) => console.log(data));
