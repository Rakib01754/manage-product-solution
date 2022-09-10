const inputValue = (id) => {
    const input = document.getElementById(id);
    const inputValue = input.value;
    input.value = '';
    return inputValue;
}

const addProduct = () => {
    // const cartArr = JSON.parse(localStorage.getItem('localData')) || []
    const product_name = inputValue("product-name");
    if (!isNaN(product_name) || product_name === '') {
        alert('please input valid name')
        return;
    }
    const product_quantity = parseFloat(inputValue("product-quantity"));
    if (isNaN(product_quantity) || product_quantity < 0) {
        alert('please input the valid value')
        return;
    }
    const productCart = {
        name: product_name,
        quantity: product_quantity
    }
    const data = localStorage.getItem('localData')

    if (data === null) {
        cartArr = []
    }
    else {
        cartArr = JSON.parse(data)
    }
    cartArr.push(productCart)

    localStorage.setItem('localData', JSON.stringify(cartArr))
    displayOnUi()


}

const displayOnUi = () => {
    // const cartArr = JSON.parse(localStorage.getItem('localData')) || []
    const data = localStorage.getItem('localData')
    if (data === null) {
        cartArr = []
    }
    else {
        cartArr = JSON.parse(data)
    }

    const productContainer = document.getElementById('all-products')
    productContainer.innerHTML = '';
    cartArr.forEach(cart => {
        console.log(cart)
        const newDiv = document.createElement('div')
        newDiv.classList.add('shadow-sm', 'p-3', 'mb-2', 'bg-body', 'rounded')
        newDiv.innerHTML = `
        <span class="fs-1">${cart.name}</span>
        Quantity:<small class="fw-bold">
            ${cart.quantity}
        </small>
        `
        productContainer.appendChild(newDiv)

    });
}
displayOnUi()

