console.log('sono collegato');

const inputName = document.querySelector('#name');
const inputCognome = document.querySelector('[name=cognome]');

// .dir serve a visualizzare l'elemento html come oggetto nella console
console.dir(inputName);

inputName.addEventListener('input', gestioneInput);
inputName.addEventListener('click', cliccato);
inputName.addEventListener('mouseenter', entrato);
inputName.addEventListener('mouseout', uscito);
inputCognome.addEventListener('change', gestioneInput);

function gestioneInput(event) {
    console.log("Stai scrivendo nell'input");
    console.dir(event.target.value);
}

function cliccato(event) {
    console.log('hai cliccato');
}

function entrato(event) {
    console.log('sei entrato');
}

function uscito(event) {
    console.log('sei uscito');
}
