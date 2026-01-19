const eleContent = document.querySelector('#content');

const searchString = window.location.search;
const params = new URLSearchParams(searchString);
console.log(params);
const characterId = params.get('id');

fetch('https://rickandmortyapi.com/api/character/' + characterId)
    .then((res) => res.json())
    .then((character) => {
        console.log(character);
        eleContent.innerHTML = `
            <h1>${character.name}</h1>
            <img src="${character.image}" alt="${character.name}">
            <ul>
                <li>Status: ${character.status}</li>
                <li>Species: ${character.species}</li>
                <li>Gender: ${character.gender}</li>
                <li>Origin: ${character.origin.name}</li>
                <li>Location: ${character.location.name}</li>
            </ul>
            <h2>Episodes</h2>
            <ul>
                ${character.episode
                    .map((episode) => {
                        const splitText = episode.split('/');
                        return `<li>${splitText[splitText.length - 1]}</li>`;
                    })
                    .join('')}
            </ul>
        `;
    });
