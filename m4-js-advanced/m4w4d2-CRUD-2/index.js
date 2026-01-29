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
                            <a href="/edit-product.html?id=${product._id}" class="btn btn-warning">Edita</a>
                            <button data-product-id="${product._id}" class="btn-delete btn btn-danger">Elimina</button>
                        </div>
                    </div>
                </div>
            `,
    );

    eleProductsList.innerHTML = cards.join('');

    eleProductsList.querySelectorAll('.btn-delete').forEach((btn) =>
        btn.addEventListener('click', async function () {
            const productId = this.dataset.productId;
            await fetch(baseApiUrl + '/product/' + productId, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
                },
            });

            fetchProducts();
        }),
    );
}
