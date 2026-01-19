const eleCharacters = document.querySelector('#characters');

fetch('https://rickandmortyapi.com/api/character', {
    // headers: {
    //     Authorization: 'Bearer <token>',
    // },
    method: 'GET', // opzionale per la GET
})
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
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
    });

// codice
