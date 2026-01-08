const btnNext = document.querySelector('#next');
const elePostId = document.querySelector('#post-id');
const eleTitle = document.querySelector('#post-title');
const eleContent = document.querySelector('#post-content');

let postId = 1;

// chiediamo il json al server
const jsonString = fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then((response) => response.json()) // arrow function
    .then((postObj) => {
        console.log(postObj);
        // qui ci va il codice che lavora con la risposta dopo essere arrivata
        //const postObj = JSON.parse(jsonString);
        elePostId.textContent = postObj.id;
        eleTitle.textContent = postObj.title;
        eleContent.textContent = postObj.body;
    })
    .then((saluto) => console.log(saluto));
