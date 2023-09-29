fetch('../json/dataExample2.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(data => {
            generateProduct(data);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
    
function generateProduct(data) {
    const productContainer = document.getElementById('productList');
    const productDiv = document.createElement('div');
    productDiv.classList.add('item');

    productDiv.innerHTML = `
        <div class="item-image">
            <img src="${data.product_img}" alt="${data.product_img}">
        </div>
        <div class="item-name">${data.product_name}</div>
        <div class="item-price">IDR ${data.price}</div>
        <div class="item-button">
            <button onclick="window.location.href = 'detailProduct.html';">Add to Cart</button>
        </div>
    `;
    productContainer.appendChild(productDiv);
}