// for (inizializzazione; condizione; variazione) {
//     // codice da ripetere
// }

// console.log('ciao')
// console.log('ciao')
// console.log('ciao')
// console.log('ciao')
// console.log('ciao')

for (let i = 1; i <= 5; i++) {
    console.log(i + ' - ciao');
}

console.log('due a due');
for (let i = 1; i <= 5; i += 2) {
    console.log(i + ' - ciao');
}

console.log('al contrario');
for (let i = 5; i > 0; i--) {
    if (i === 3) continue;
    console.log(i + ' - ciao');
}

// console.log(i); // qui i non esiste

console.log('fuori dal ciclo');

let min = 1;
let max = 100;
let number = 0;
while (number !== 20) {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(number);
}
