const plusIcon = new URL('/dist/assets/plus.png', import.meta.url).href;
const minusIcon = new URL('/dist/assets/minus.png', import.meta.url).href;

// import { mostBoughtProducts } from '/dist/JS/data.js';

function createProductCard(product) {
    const productCard = document.createElement('div');

    productCard.className = 'trigger w-50 h-53 flex-shrink-0 rounded-2xl flex flex-col bg-amber-100 gap-1 items-left p-2 hover:shadow-md shadow-orange-400 transition duration-300 text-center rounded-bl-4xl rounded-br-4xl';
    productCard.innerHTML = `
        <div class="product-image w-full md:h-30 bg-white rounded-2xl grid items-center justify-center">
            <img src="${product.image}" alt="${product.name}" class= "h-28 object-contain">
            <button 
                class="add-to-cart desktop-add-btn w-26 cursor-pointer z-10 hidden bg-orange-400" data-id="${product.id}">
                <span class=" text-sm font-medium text-white" >Add to Cart</span>
            </button>

            <button data-id="${product.id}"
            class="add-to-cart md:hidden absolute z-10 bottom-1 right-1 bg-orange-400 p-1 rounded-full">
                <img src="/dist/assets/basket.png" alt="md:hidden" class=" w-5 h-5 cursor-pointer filter brightness-0 invert">
            </button>

                <div class="quantity-controls justify-between rounded-xl w-18 overflow-hidden border border-gray-300 " id="quantity-ctrl">
                <button class="btn-plus w-6 h-5 bg-orange-400 text-white font-bold">
                    <img src="${plusIcon}" alt="Plus" class="w-full h-full object-contain brightness-0 invert">
                </button>
                <input type="text" class="text-sm font-medium w-8 text-center border-l border-r border-gray-200" data-id=${product.id} min="1" value="1" focus:outline-none>
                <button class="btn-minus w-6 h-5 bg-orange-400 font-bold">
                    <img src="${minusIcon}" alt="Minus" class="w-full h-full object-contain text-white brightness-0 invert">
                </button>
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
        const addCartBtns = productCard.querySelectorAll('.add-to-cart');
    
        if (cart[product.id]) {
            const qty = cart[product.id].qty;
            addCartBtns.forEach(btn => {
                btn.style.display = 'none';
            });
            quantityControls.classList.remove('hidden');
            quantityControls.style.display = 'flex';
            quantityControls.querySelector('input').value = qty;
        } else {
            addCartBtns.forEach(btn => {
                btn.style.display = ''; // let CSS hover control it
            });
            quantityControls.classList.add('hidden');
        }

        container.appendChild(productCard);
    });
        // Duplicate for infinite loop
    // container.innerHTML += container.innerHTML;
}

window.renderProducts = renderProducts;
window.QuantityControls = window.QuantityControls || function() { };

