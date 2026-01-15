# Javascript e la prototype chain

**Obiettivo**: costruire degli oggetti con la stessa struttura (negli esempi una struttura che rappresenta delle auto)

## Step 1: da suicidio

Creare gli oggetti manualmente con tutte le proprietà e i metodi scritti (e riscritti) a mano

**Problemi**:

-   copia e incolla della struttura
-   prestazioni (metodi non condivisi, vengono duplicati in ciascun oggetto)

```js
const carPlayer1 = {
    color: 'rosso',
    type: 'tesla',
    speed: 0,
    fuel: 100,
    roar: function () {
        console.log('bruuuuuu!!!');
    },
};

const carPlayer2 = {
    color: 'nero',
    type: 'ferrari',
    speed: 0,
    fuel: 100,
    roar: function () {
        console.log('bruuuuuu!!!');
    },
};

const carPlayer3 = {
    color: 'blu',
    type: 'alfa romeo',
    speed: 0,
    fuel: 100,
    roar: function () {
        console.log('bruuuuuu!!!');
    },
};
```

## Step 2: un po' meglio

Creare una funzione che costruisce l'oggetto per noi, non c'è più il copia e incolla ma il problema delle prestazioni rimane (i metodi sono ancora duplicati in ciascun oggetto)

```js
function CarCreator(_color, _type) {
    const car = {
        color: _color,
        type: _type,
        speed: 0,
        fuel: 100,
        roar: function () {
            console.log('bruuuuuu!!!');
        },
    };
    return car;
}

const carPlayer4 = CarCreator('rosso', 'tesla');
const carPlayer5 = CarCreator('nero', 'ferrari');
const carPlayer6 = CarCreator('blu', 'alfa romeo');
```

## Step 3: niente più metodi duplicati!!!!

I metodi (ma anche le proprietà con valore condiviso) vengono messi in un oggetto separato che viene aggiunto alla catena dei prototipi dell'oggetto che stiamo creando usando la funzione `Object.create(prototype_object)` così quando si chiede il metodo .roar ad una car, js lo cerca prima nell'oggetto stesso e se non lo trova lì va a cercarlo nel prototipo che in questo caso è l'oggetto carMethods

```js
function CarCreator(_color, _type) {
    const car = Object.create(carMethods); // crea un oggetto vuoto e setta il suo [[prototype]]
    car.color = _color;
    car.type = _type;
    car.speed = 0;
    car.fuel = 100;
    return car;
}

const carMethods = {
    roar: function () {
        console.log('bruuuuuu!!!');
    },
};

const carPlayer7 = CarCreator('rosso', 'tesla');
const carPlayer8 = CarCreator('nero', 'ferrari');
const carPlayer9 = CarCreator('blu', 'alfa romeo');
```

## Step 4: js ci ha già pensato

Perchè non mettere i metodi condivisi in un oggetto
standard anzichè inventarne uno nostro? Usiamo il `.prototype` della funzione costruttore!
Tutte le funzioni sono anche oggetti in js ed hanno questa proprietà standard chiamata `.prototype`.

La proprietà `.prototype` di default è un oggetto vuoto e vine usata dal meccanismo del `new` (step successivo).

Attenzione a non confondere `.prototype` che è una proprietà standard delle funzioni con `[[prototype]]` che è una proprietà interna di tutti gli oggetti in js.

```js
function CarCreator(_color, _type) {
    const car = Object.create(CarCreator.prototype);
    car.color = _color;
    car.type = _type;
    car.speed = 0;
    car.fuel = 100;
    return car;
}

// usiamo la proprietà standard .prototype
// invece di inventarci il nostro oggetto
CarCreator.prototype.roar = function () {
    console.log('bruuuuuu!!!');
};

const carPlayer10 = CarCreator('rosso', 'tesla');
const carPlayer11 = CarCreator('nero', 'ferrari');
const carPlayer12 = CarCreator('blu', 'alfa romeo');
```

## Step 5: codice più conciso usando la parola chiave `new`

`new` fa 4 cose:

-   crea per noi un oggetto vuoto
-   collega il `[[prototype]]` dell'oggetto creato alla proprietà `.prototype` della funzione costruttore (nella quale metteremo metodi e proprietà condivisi). Questo significa che non serve più la riga `const car = Object.create(CarCreator.prototype);`
-   fa puntare la variabile speciale `this` all'oggetto vuoto appena creato. Non creando più l'oggetto car manualmente non avremmo più un nome di variabile da usare nelle righe che seguono, e invece js ha risolto il problema assegnando il valore dell'oggetto creato al `this`
-   ritorna automaticamente l'oggetto (non serve più la riga `return car;`)

```js
function CarCreator(_color, _type) {
    this.color = _color;
    this.type = _type;
    this.speed = 0;
    this.fuel = 100;
}

CarCreator.prototype.roar = function () {
    console.log('bruuuuuu!!!');
};

const carPlayer13 = new CarCreator('rosso', 'tesla');
const carPlayer14 = new CarCreator('nero', 'ferrari');
const carPlayer15 = new CarCreator('blu', 'alfa romeo');
```

## Step 6: le classi ooooooooh

Sintassi moderna più elegante perchè ora è tutto contenuto nel blocco della classe (anche i metodi!).
Inoltre le classi rendono l'ereditarietà molto più semplice e pulita.

```js
class Car {
    constructor(_color, _type) {
        this.color = _color;
        this.type = _type;
        this.speed = 0;
        this.fuel = 100;
    }

    roar() {
        console.log('bruuuuuu!!!');
    }
}

const carPlayer16 = new Car('rosso', 'tesla');
const carPlayer17 = new Car('nero', 'ferrari');
const carPlayer18 = new Car('blu', 'alfa romeo');
```
