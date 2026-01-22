const eleCharacters = document.querySelector('#characters');
const eleTheme = document.querySelector('#theme-selector');
const eleSpinner = document.querySelector('#spinner');

// const currentTheme = localStorage.getItem('theme') ?? 'light';
let currentTheme = localStorage.getItem('theme');
if (!['light', 'dark'].includes(currentTheme)) {
    localStorage.setItem('theme', 'light');
    currentTheme = 'light';
}
document.body.dataset.bsTheme = currentTheme;
eleTheme.value = currentTheme;

eleTheme.addEventListener('change', function () {
    // console.log(this.value);
    const newTheme = this.value;
    document.body.dataset.bsTheme = newTheme;
    localStorage.setItem('theme', newTheme);
});

// il local storage converte tutto in stringa
localStorage.setItem('stringa', 'ciao');
localStorage.setItem('vero', 1);
localStorage.setItem('falso', '');
localStorage.setItem('number', 125);
localStorage.setItem('array', JSON.stringify(['a', 'buuu', 125])); // a,buuu,125
localStorage.setItem(
    'oggetto',
    JSON.stringify({
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    }),
);

console.log(localStorage.getItem('stringa'));
console.log(!!localStorage.getItem('vero'));
console.log(!!localStorage.getItem('falso'));
console.log(parseInt(localStorage.getItem('number')) + 5);
console.log(JSON.parse(localStorage.getItem('array'))[1]);
console.log(JSON.parse(localStorage.getItem('oggetto')).title);

// ASINCRONO
// fetch('https://rickandmortyapi.com/api/character', {
//     // headers: {
//     //     Authorization: 'Bearer <token>',
//     // },
//     method: 'GET', // opzionale per la GET
// })
//     .then((response) => {
//         // console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         // console.log(data);
//         const characters = data.results;
//         // console.log(characters);
//         const htmls = characters.map(
//             // ALT 96 per i backtick
//             (character) => `
//                 <div class="col">
//                     <div class="card h-100">
//                         <img src="${character.image}" class="card-img-top" alt="${character.name}">
//                         <div class="card-body">
//                             <h5 class="card-title">${character.name}</h5>
//                             <p class="card-text">${character.status} - ${character.species} - ${character.gender}</p>
//                             <a href="/details.html?id=${character.id}" class="btn btn-primary">Dettagli</a>
//                         </div>
//                     </div>
//                 </div>
//             `,
//         );
//         // console.log(htmls.join(''));
//         eleCharacters.innerHTML = htmls.join('');
//     });

// se non c'è type="module" nel tag dello script seve la funzione
// async function fetchCharacters() {
//     // qui il codice con await
// }
// fetchCharacters();

try {
    eleSpinner.classList.remove('d-none');
    const response = await fetch('https://rickandmortyapi.com/api/character');
    console.log(response);
    // if (response.status === 404) throw new Error('Non trovato');

    if (response.status === 404) {
        eleCharacters.innerHTML =
            '<div class="col h2">Pagina non trovata</div>';
    } else {
        const data = await response.json();
        console.log(data);
        const characters = data.results;
        console.log(characters);
        const htmls = characters.map(
            // ALT 96 per i backtick
            (character) => `
            <div class="col">
                <div class="card h-100">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">${character.status} - ${character.species} - ${character.gender}</p>
                        <a href="/details.html?id=${character.id}" class="btn btn-primary">Dettagli</a>
                    </div>
                </div>
            </div>
        `,
        );
        // console.log(htmls.join(''));
        eleCharacters.innerHTML = htmls.join('');
    }
} catch (error) {
    console.log(error);
    eleCharacters.innerHTML = '<div class="col h2">Errore del server</div>';
} finally {
    eleSpinner.classList.add('d-none');
}
