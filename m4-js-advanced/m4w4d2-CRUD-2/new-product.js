const eleForm = document.querySelector('form');
const eleError = document.querySelector('#error');
const eleSuccess = document.querySelector('#success');
const eleSubmitButton = document.querySelector('#btn-submit');

eleForm.addEventListener('submit', (event) => {
    event.preventDefault();
    new FormData(eleForm);
});
eleForm.addEventListener('formdata', createProduct);

async function createProduct(event) {
    console.log('submittato');
    const formData = event.formData;
    const newProduct = {
        name: formData.get('name'),
        brand: formData.get('brand'),
        imageUrl: formData.get('imageUrl'),
        price: formData.get('price'),
        description: formData.get('description'),
    };
    // console.log(newProduct);

    try {
        eleSubmitButton.disabled = true;
        eleSubmitButton.querySelector('.spinner').classList.remove('d-none');

        const res = await fetch(baseApiUrl + '/product', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });

        if (!res.ok) throw new Error();

        const data = await res.json();

        eleSuccess.classList.remove('d-none');
        eleError.classList.add('d-none');
        eleSuccess.querySelector('span').innerHTML =
            `Post creato: <a href="/dettagli.html?id=${data._id}">Dettagli</a>`;
        eleForm.reset();
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
