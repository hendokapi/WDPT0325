let nomi = [];

// nomi.push('Gigi');
// nomi.push('Pinco');
// nomi.push('Mario dai capelli rossi');

// let min = 1;
// let max = 100;
// const random = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(random);

// for (let i = 1; i <= random; i++) {
//     nomi.push(Math.floor(Math.random() * (max - min + 1)) + min);
// }

// console.log(nomi);

// disordinare i numeri da 1 al 20 senza doppioni

let numeri = [];
max = 100;
min = 1;

// for (let i = 1; i <= max; i++) {
//     let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     // se esiste già il numero passa oltre
//     if (numeri.includes(randomNum)) {
//         i--;
//         continue;
//     }
//     numeri.push(randomNum);
// }

// for (let i = 1; numeri.length < max; i++) {
//     let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (numeri.includes(randomNum)) continue;
//     numeri.push(randomNum);
// }

while (numeri.length < max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (numeri.includes(randomNum)) continue;
    numeri.push(randomNum);
}

console.log('length:', numeri.length);
console.log(numeri);
