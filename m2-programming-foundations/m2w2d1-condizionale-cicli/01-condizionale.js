let coloreOcchi = 'green';
console.log(coloreOcchi);

coloreOcchi = 'brown';
console.log(coloreOcchi);

// if (condizione) {
//     // blocco del vero
// }

// if (condizione) {
//     // blocco del vero
// } else {
//     // blocco del falso
// }

if (coloreOcchi === 'brown') {
    console.log('che begli occhi gialli');
} else {
    console.log('che begli occhi lo stesso');
}

let age = 25;

if (age === 18) {
    console.log('sei appena diventato maggiorenne');
    console.log('e ormai sei vecchio');
} else {
    console.log('non so cosa sei');
}

if (age >= 18) {
    console.log('sei maggiorenne');
} else if (age < 0) {
    console.log('sei un mostro');
} else {
    console.log('sei minorenne');
}

if (age > 20 && coloreOcchi == 'brown') {
    console.log('sei un modello');
} else {
    console.log('non sei nessuno');
}

// age = 25 // truthy
// if (age) {
//     console.log('ma che hai scritto?')
// }

// short circuiting
console.log(0 && nome);

// *********************************************

// expressions vs statements
// expressions restituiscono un risultato (ex ternario, operatori aritmetici)
// statements non restituiscono un risultato (ex if, for, while)

age = 25;

let messaggio;
if (age >= 18) {
    messaggio = 'sei maggiorenne';
} else {
    messaggio = 'sei minorenne';
}

let messaggioTernario = age >= 18 ? 'sei maggiorenne' : 'sei minorenne';
let messaggioTernario2 =
    age >= 18 ? 'sei maggiorenne' : age < 0 ? 'sei un mostro' : 'sei minorenne';

console.log(messaggio);
console.log(messaggioTernario);
