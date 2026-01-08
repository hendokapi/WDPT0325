// far passare 3 secondi
// aprire l'alert

// setTimeout(callback, 3000);

// console.log('Io non aspetto');

// function callback() {
//     console.log('ora è il mio turno');
//     alert('ciao');
// }

// callback hell
setTimeout(function () {
    console.log('primo');
    setTimeout(() => {
        console.log('secondo');
        setTimeout(() => {
            console.log('terzo');
            setTimeout(() => {
                console.log('quarto');
            }, 2000);
        }, 5000);
    }, 2000);
}, 3000);

setInterval(() => {
    console.log('ciao');
}, 1000);
