const eleForm = document.querySelector('form');
const eleError = document.querySelector('#error');
const eleSuccess = document.querySelector('#success');
const eleSubmitButton = document.querySelector('#btn-submit');

const productId = new URLSearchParams(window.location.search).get('id');
console.log(productId);

fillForm();

function fillForm() {
    fetch(baseApiUrl + '/product/' + productId, {
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            // qui va popolato il form con i dati
            eleForm.querySelector(`[name=name]`).value = data.name;
            eleForm.querySelector(`[name=brand]`).value = data.brand;
            eleForm.querySelector(`[name=price]`).value = data.price;
            eleForm.querySelector(`[name=imageUrl]`).value = data.imageUrl;
            eleForm.querySelector(`[name=description]`).value =
                data.description;
        });
}

eleForm.addEventListener('submit', (event) => {
    event.preventDefault();
    new FormData(eleForm);
});
eleForm.addEventListener('formdata', updateProduct);

async function updateProduct(event) {
    console.log('submittato');
    const formData = event.formData;
    const editedProduct = {
        name: formData.get('name'),
        brand: formData.get('brand'),
        imageUrl: formData.get('imageUrl'),
        price: formData.get('price'),
        description: formData.get('description'),
    };
    // console.log(editedProduct);

    try {
        eleSubmitButton.disabled = true;
        eleSubmitButton.querySelector('.spinner').classList.remove('d-none');

        const res = await fetch(baseApiUrl + '/product/' + productId, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedProduct),
        });

        if (!res.ok) throw new Error();

        const data = await res.json();

        eleSuccess.classList.remove('d-none');
        eleError.classList.add('d-none');
        eleSuccess.querySelector('span').innerHTML =
            `Post modificato: <a href="/dettagli.html?id=${data._id}">Dettagli</a>`;
        fillForm();
    } catch (err) {
        console.log(err);
        eleError.classList.remove('d-none');
        eleSuccess.classList.add('d-none');
        eleError.querySelector('span').innerHTML = "C'è stato un errore";
    } finally {
        eleSubmitButton.disabled = false;
        eleSubmitButton.querySelector('.spinner').classList.add('d-none');
    }
}
