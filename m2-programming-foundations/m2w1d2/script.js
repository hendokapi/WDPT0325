console.log(5 / 0);
console.log(0 / 0);
console.log(Math.sqrt(-1));

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(typeof 45);
console.log(typeof 45.78);

// -------------------------------------

let name1 = 'Gigi l\' "Trottola"';
let name2 = "Gigi' la Trottola ${name3}";
let name3 = `Gigi la Trottola`; // ALT + 96

let backtick = `
    ciao ${name3}
    come
    state
`;

console.log(name1);
console.log(name2);
console.log(name3);
console.log(backtick);

let phone = '00112222444';
console.log(typeof phone);

console.log(5 + '5'); // non esce 10

let textual = '584';

console.log(parseInt(textual));

parseInt('587.89');
parseInt('ciao587.89');
parseInt('587.89asdfdsf');

parseFloat('587.89');
parseFloat('ciao587.89');
parseFloat('587.89asdfdsf');

let saluto = '      Ciao come state?     ';

console.log(saluto + ' ' + name3);
console.log(`${saluto} ${name3}`);

console.log(saluto.toLowerCase());
console.log(saluto.toUpperCase());
console.log(saluto.trim());

// oggetti

let myFriend = {
    name: 'Gigi',
    age: 10,
    isMarried: false,
    hairInHead: null,
};

console.log(myFriend['name']);
console.log(myFriend.name);

let listaSpesa = ['patate', 'pasta', 'caffè', 'pizza'];

console.log(listaSpesa[2]);
