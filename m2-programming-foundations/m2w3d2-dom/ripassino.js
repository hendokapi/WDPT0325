console.log('sono collegato');

const parole = ['ciao', 'cOMe', 'state', 'tutti', 'QUAnti', 'VOI'];

console.log(parole);

// trasformiamo tutte le iniziali in maiuscole

const paroleSistemate = [];
for (let parola of parole) {
    const nuovaParola = normalizzaParola(parola);
    paroleSistemate.push(nuovaParola);
    console.log(paroleSistemate);
}

console.log(paroleSistemate.join(' '));
console.log(parole);

function normalizzaParola(parola) {
    const nuovaParola =
        parola[0].toUpperCase() + parola.slice(1).toLocaleLowerCase();
    return nuovaParola;
}
