// GET https://striveschool-api.herokuapp.com/api/v1/users
// GET https://striveschool-api.herokuapp.com/api/v1/users/:id_utente
// POST https://striveschool-api.herokuapp.com/api/v1/users
// PUT https://striveschool-api.herokuapp.com/api/v1/users/:id_utente
// DELETE https://striveschool-api.herokuapp.com/api/v1/users/:id_utente

// GET https://striveschool-api.herokuapp.com/api/v1/posts
// GET https://striveschool-api.herokuapp.com/api/v1/posts/:id_post
// POST https://striveschool-api.herokuapp.com/api/v1/posts
// PUT https://striveschool-api.herokuapp.com/api/v1/posts/:id_post
// DELETE https://striveschool-api.herokuapp.com/api/v1/posts/:id_post

const bearerToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODdiNGEyYjQwMTRhZjAwMTVmMGM1NjAiLCJpYXQiOjE3Njk0NTE0OTIsImV4cCI6MTc3MDY2MTA5Mn0.WEuo3yiJfafg2VQ57oD5CYr0VEvE6L8GykGzlWTG1wk';
const baseApiUrl = 'https://striveschool-api.herokuapp.com/api';

const eleProductsList = document.querySelector('#products-list');

// fetch(`${baseApiUrl}/product/`, {
//     headers: {
//         Authorization: `Bearer ${bearerToken}`,
//     },
// })
//     .then((res) => res.json())
//     .then((data) => {
//         const cards = data.map(
//             (product) => `
//                 <div class="col">
//                     <div class="card">
//                         <img src="${product.imageUrl}" class="card-img-top">
//                         <div class="card-body">
//                             <h5 class="card-title">${product.name}</h5>
//                             <a href="/product.html?id=${product._id}" class="btn btn-primary">Dettagli</a>
//                         </div>
//                     </div>
//                 </div>
//             `,
//         );

//         eleProductsList.innerHTML = cards.join('');
//     });

fetchProducts();
async function fetchProducts() {
    const res = await fetch(`${baseApiUrl}/product/`, {
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    });

    const data = await res.json();

    const cards = data.map(
        (product) => `
                <div class="col">
                    <div class="card">
                        <img src="${product.imageUrl}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <a href="/product.html?id=${product._id}" class="btn btn-primary">Dettagli</a>
                        </div>
                    </div>
                </div>
            `,
    );

    eleProductsList.innerHTML = cards.join('');
}
