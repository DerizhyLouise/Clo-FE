fetch('../json/dataExample1.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(data => {
            generateTroli(data);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
    
function generateTroli(data) {
    const productContainer = document.getElementById('productContainer');
    const productDiv = document.createElement('div');
    productDiv.classList.add('item');

    const colorToBackgroundColor = {
        "Red": "red",
        "Blue": "blue",
        "Green": "green",
    };

    // Default color
    const backgroundColor = colorToBackgroundColor[data.color] || "gray";

    productDiv.innerHTML = `
        <div class="itemContent1">
            <img src="${data.product_img}" alt="${data.product_img}">
        </div>
        <div class="itemContent2">
            <div class="detailCheckout">
                <div class="prod-name">${data.product_name}</div>
                <div class="prod-price">IDR ${data.price}</div>
                <div class="prod-color">
                    <div class="color">${data.color} <span class="color-child" style="background-color: ${backgroundColor};"></span></div>
                </div>
                <div class="cancel-order">
                    <button class="cancel-order-button" onclick="order()">Delete Order</button>
                </div>
            </div>
        </div>
    `;
    productContainer.appendChild(productDiv);
}