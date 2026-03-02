function createProductCard(product) {
    const productCard = document.createElement('div');

    productCard.className = 'trigger w-50 h-53 rounded-2xl flex flex-col bg-yellow-100 gap-1 items-left p-2 hover:shadow-lg transition duration-300 text-center rounded-bl-4xl rounded-br-4xl';
    productCard.innerHTML = `
        <div class="product-image w-full md:h-30 bg-white rounded-2xl grid items-center justify-center">
            <img src="${product.image}" alt="${product.name}" class= "h-24 object-contain">
            <div class="add-product z-10 hidden bg-amber-300">
                <button class="btn-plus"><img src="assets/plus.png" alt="Plus" class="hidden w-4 h-4 cursor-pointer"/></button>
                <button 
                    class="w-20 cursor-pointer">
                    <span class="add-to-cart text-sm font-medium" data-id="${product.id}">Add to Cart</span>
                </button>
                <button class="btn-minus"><img src="assets/minus.png" alt="Minus" class="hidden w-4 h-4 cursor-pointer"/></button>
            </div>
        </div>
        <span class="text-md font-medium">${product.name}</span>
        <span class="text-xs">Fresh ${product.name} | ${product.quantity}</span>
        <span class="text-sm font-medium">Rs. ${product.price}</span>

    `;
    return productCard;
}

function renderProducts(containerSelector, productsArray) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.warn(`Container "${containerSelector}" not found.`);
        return;
    }

    container.innerHTML = '';
    productsArray.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}