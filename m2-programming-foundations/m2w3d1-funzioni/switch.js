// ALT + 96 => `

// let num = -9;

// console.log(`INIZIO`);

// if (num >= 0) {
//     console.log(`Il numero ${num} è positivo`);
// } else {
//     console.log('Il numero ' + num + ` è negativo`);
// }

// console.log(`FINE`);

// -----------------

let mario = {
    coloreCapelli: 'rosa',
    eta: 19,
    coloreOcchi: 'verdi',
};

let saluto;
if (mario.coloreCapelli == 'rossi') {
    saluto = 'ciao';
    // console.log(saluto);
    console.log('Buttafuori: entra dentro');
    console.log('Mario: sono contento');
} else if (mario.coloreCapelli == 'verdi') {
    saluto = 'buona sera';
    console.log('Buttafuori: aspetta che chiedo');
    console.log('Mario: va bene');
} else {
    saluto = 'ma va ffffffa***';
    console.log('Buttafuori: stai fuori, brutto');
    console.log('Mario: Non penso proprioh!1');
}

// saluto = 'e basta adesso voi due';
console.log(saluto);

switch (mario.coloreCapelli) {
    case 'rossi':
        console.log('Buttafuori: entra dentro');
        console.log('Mario: sono contento');
        break;
    case 'verdi':
        console.log('Buttafuori: aspetta che chiedo');
        console.log('Mario: va bene');
        break;
    default:
        console.log('Buttafuori: stai fuori, brutto');
        console.log('Mario: Non penso proprioh!1');
}

// const nome = 'Gigi';

// nome = 'Pinco';
