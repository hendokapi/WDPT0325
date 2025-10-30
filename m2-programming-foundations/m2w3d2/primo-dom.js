// console.log(document.getElementById('titolone'));
// console.log(document.getElementsByClassName('primi'));
// console.log(document.getElementsByTagName('li'));

function formatta() {
    const titolo = document.querySelector('h1');
    titolo.textContent = 'Sono stato modificato';
    titolo.style.color = 'red';
    // titolo.style.backgroundColor = '#256782';
    // titolo.style.display = 'none';
    // titolo.classList.add('sfondo');
    // titolo.classList.remove('primi');
    titolo.classList.toggle('sfondo');

    const primiLi = document.querySelectorAll('li.primi');
    console.log(primiLi);

    for (let li of primiLi) {
        li.textContent = 'M';
    }

    // alert('Ciao belli');

    const nome = prompt('Chi sei?');
    titolo.textContent = 'Ciao ' + nome;
}

function aggiungi() {
    const lista = document.querySelector('#lista');

    // lista.innerHTML += `
    //     <li>
    //         <a href="https://www.google.com">Un link a Google</a>
    //     </li>
    // `;

    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = 'https://www.google.com';
    link.textContent = 'Un link a Google';

    li.appendChild(link);
    lista.appendChild(li);
}
