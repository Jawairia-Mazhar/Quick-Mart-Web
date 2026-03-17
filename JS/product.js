import { mostBoughtProducts } from '../JS/data.js';

function createProductCard(product) {
    const productCard = document.createElement('div');

    productCard.className = 'trigger w-50 h-53 rounded-2xl flex flex-col bg-yellow-100 gap-1 items-left p-2 hover:shadow-md shadow-orange-400 transition duration-300 text-center rounded-bl-4xl rounded-br-4xl';
    productCard.innerHTML = `
        <div class="product-image w-full md:h-30 bg-white rounded-2xl grid items-center justify-center">
            <img src="${product.image}" alt="${product.name}" class= "h-24 object-contain">
            <button 
                class="add-to-cart w-26 cursor-pointer z-10 hidden bg-orange-400" data-id="${product.id}">
                <span class=" text-sm font-medium text-white" >Add to Cart</span>
            </button>
                <div class="quantity-controls justify-between rounded-xl w-20 overflow-hidden border border-gray-300 " id="quantity-ctrl">
                <button class="btn-plus"><img src="assets/plus.png" alt="Plus" class="w-5 h-5 cursor-pointer pt-0.5 bg-orange-400"/> </button>
                <input type="text" class="text-sm font-medium w-8 text-center items-center" data-id=${product.id} min="1" value="1">
                <button class="btn-minus"><img src="assets/minus.png" alt="Minus" class="w-5 h-5 cursor-pointer pt-0.5 bg-orange-400"/></button>
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

        const quantityControls = productCard.querySelector('.quantity-controls');
        const addCartBtn = productCard.querySelector('.add-to-cart');
    
        if (cart[product.id]) {
            const qty = cart[product.id].qty;
            addCartBtn.style.display = 'none';
            quantityControls.classList.remove('hidden');
            quantityControls.style.display = 'flex';
            quantityControls.querySelector('input').value = qty;
        } else {
            addCartBtn.style.display = ''; // let CSS hover control it
            quantityControls.classList.add('hidden');
        }

        container.appendChild(productCard);
    }
    );};
