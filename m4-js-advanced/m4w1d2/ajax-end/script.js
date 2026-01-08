const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const elePostId = document.querySelector('#post-id');
const eleTitle = document.querySelector('#post-title');
const eleContent = document.querySelector('#post-content');

let currentPostId = 0;

btnNext.addEventListener('click', function () {
    currentPostId += 1;
    fetch('https://jsonplaceholder.typicode.com/posts/' + currentPostId)
        .then((response) => response.json())
        .then((data) => {
            elePostId.textContent = data.id;
            eleTitle.textContent = data.title;
            eleContent.textContent = data.body;
        });
});
