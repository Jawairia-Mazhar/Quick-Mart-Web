window.cart = window.cart || {};
let cart = window.cart;
let cartItems = null;

const plusIcon = new URL('../assets/plus.png', import.meta.url).href;
const minusIcon = new URL('../assets/minus.png', import.meta.url).href;
const trashIcon = new URL('../assets/trash.png', import.meta.url).href;
const closeIcon = new URL('../assets/close.png', import.meta.url).href;

const cartBtn = document.getElementById('cart-btn');

cartBtn.addEventListener('click', () => {
    cartItems = document.createElement('div');
    cartItems.className = 'fixed top-0 z-70 right-0 bg-white w-64 h-full overflow-y-auto'
    cartItems.innerHTML = `
    <button id="close-cart" class="flex flex-col px-3 py-2 cursor-pointer" aria-label="Close cart" aria-expanded="true">
        <span class="text-2xl font-bold">×</span>
    </button>
    <h2 class="p-4 text-xl font-semibold">Cart</h2>
    <div id="cart-items" class="p-4">  </div>
    <div id="cart-total" class="p-4 text-xl font-medium absolute bottom-0">   </div>
    `
    document.body.appendChild(cartItems);
      const close = cartItems.querySelector('#close-cart');
    if (close && !close.dataset.bound) {
    close.dataset.bound = '1';
    close.addEventListener('click', () => {
      cartItems.remove();
      cartItems = null;
      document.body.style.overflow = '';
    });

    renderCart();}
})

function refreshUI() {
    renderProducts('#products-container', mostBoughtProducts);
    renderCart();
    QuantityControls();
}

function addToCart(productId){
    const product = mostBoughtProducts.find(p => p.id === Number(productId));

    if (!product) {
        return;
    }

    if (!cart[product.id]) {
        cart[product.id] = { ...product, qty: 1 };
    } else {
        cart[product.id].qty += 1; // if the product exists already in the cart, then increase the quantity by 1
    }

    refreshUI();
};

function removeFromCart(productId) {
    if (cart[productId]) {
        delete cart[productId];
        console.log(`Product ${productId} removed from cart.`);
        refreshUI();
    }
}

// Event Delegation for Add to Cart buttons
document.addEventListener('click', function(e){
    const addBtn = e.target.closest('.add-to-cart') //previously used e.target.classList.contains(...), so clicking the inner <span> fails.
    if (!addBtn) return;

    const productId = parseInt(addBtn.dataset.id, 10);
    addToCart(productId);
});
// Event delegation for Remove from Cart buttons
document.addEventListener('click', function(e){
    if(e.target.classList.contains('remove-item')){
        const productId = parseInt(e.target.dataset.id);
        removeFromCart(productId);
    }
});

function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
//   const qtycontrols = document.querySelectorAll('.quantity-controls');

  if (!cartContainer || !cartTotal) return; // prevents "cannot set properties of null"

    cartContainer.innerHTML = '';
    let total = 0;

  Object.values(cart).forEach(item => { //Returns an array of cart object values, then iterate over each
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 0;
    const lineTotal = price * qty;
    total += lineTotal; //Each items total is added to overall total price of the cart.

    cartContainer.innerHTML += `
      <div class="grid grid-cols-[1fr_3fr] gap-1 mb-2 items-center  border-b border-gray-300 pb-2">
        <div class="place-items-center w-12 h-12">
            <img src="${item.image}" alt="${item.name}" class=" object-contain">
        </div>
        <div class="flex flex-col">
            <span>${item.name || 'Unknown item'} | ${item.quantity || 'Unknown brand'}</span>
            <span class="ml-auto text-right w-full">Rs ${lineTotal.toFixed(1)}</span>
            <div class='flex justify-between items-center gap-2'>
                <div class="quantity-controls justify-between w-20 overflow-hidden " id="quantity-ctrl">
                    <button class="btn-plus w-7 h-7 bg-orange-400 text-white font-bold">+</button>
                    <input type="text" class="text-sm font-medium w-8 text-center border border-gray-300 rounded-md" data-id=${item.id} min="1" value="${qty}">
                    <button class="btn-minus w-7 h-7 bg-orange-400 text-white font-bold">-</button>
                </div>
                <img src="${trashIcon}" alt="Remove Item" 
                    class="w-4 h-4 cursor-pointer remove-item" 
                    data-id="${item.id}">
            </div>
        </div>
    </div>
            `; 
});
    QuantityControls(); // Call the function to attach event listeners to the buttons after rendering in the cart
    cartTotal.innerHTML = `<span class="text-sm">Total: Rs ${total.toFixed(2)}</span>`;
}


function QuantityControls() {
    document.querySelectorAll('.quantity-controls').forEach(control => {
        if (control.dataset.bound === '1') return; // avoid binding listeners multiple times
        control.dataset.bound = '1'; //This resolves the issue where clicking the plus button looked like it increased quantity unexpectedly.

        const decrementBtn = control.querySelector('.btn-minus');
        const incrementBtn = control.querySelector('.btn-plus');
        const quantityInput = control.querySelector('input');
        if (!decrementBtn || !incrementBtn || !quantityInput) return; //if any of the condition is false, whole condition becomes true
        const productId = Number(quantityInput.dataset.id);

    decrementBtn.addEventListener('click', () => {
        let currentQty = parseInt(quantityInput.value) || 1;
        currentQty = Math.max(0, currentQty - 1); // Ensure quantity doesn't go below 1
        quantityInput.value = currentQty;

    if (currentQty === 0) {
        delete cart[productId]; // Remove from cart entirely
        control.classList.add('hidden'); // hide quantity Controls
        control.style.display = ''; // let CSS hover control it, restored to default

        const addCartBtn = control.parentElement.querySelector('.add-to-cart');
        if (addCartBtn) addCartBtn.style.display = ''; // show Add to Cart button
        
    } else if (cart[productId]) {
        cart[productId].qty = currentQty;
    }

        refreshUI();
    });

    incrementBtn.addEventListener('click', () => {
        let currentQty = parseInt(quantityInput.value) || 1;
        currentQty += 1;
        quantityInput.value = currentQty

        if (cart[productId]) {
            cart[productId].qty = currentQty;
        }
        refreshUI();
    });

// Prevent manual entry of invalid values
    quantityInput.addEventListener('input', () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
            value = 1;
            quantityInput.value = 1; // Reset to 1 if invalid 
        }
        if (cart[productId]) { cart[productId].qty = value; }
        ``
        refreshUI();
    });
});
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.renderCart = renderCart;
window.QuantityControls = QuantityControls;
window.refreshUI = refreshUI;
 