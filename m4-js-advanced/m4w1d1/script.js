console.log('script loaded');

const gigiObj = {
    nome: 'Gigi',
    cognome: 'La Trottola',
    annoNascita: '1990',
    telefono: '001122333444',
};

console.log(gigiObj);

const gigiJSON = JSON.stringify(gigiObj);
console.log(gigiJSON);

// serializzazione di oggetti JS in JSON

// spedizione dei dati in formato stringa

// deserializzazione (o parsing) della stringa JSON nella struttura dati oggetto JS

const ilMioJSON = `
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    }
`;

console.log(ilMioJSON.id);

const JSONParsato = JSON.parse(ilMioJSON);

console.log(JSONParsato);

console.log(JSONParsato.id);

// chiedere i dati della pagina

// creare l'HTML con i dati arrivati
