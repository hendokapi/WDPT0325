const nomi = [];
let min = 1;
let max = 100;
const random = randomInt(1, 100);
console.log(random);

for (let i = 1; i <= random; i++) {
    nomi.push(randomInt(1, 100));
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function salutami() {
    console.log('Hey ciao come stai');
}

salutami();
salutami();
salutami();
salutami();
salutami();
salutami();
salutami();
salutami();
