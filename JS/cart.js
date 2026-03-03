let cart = {};
let cartItems = null;

const cartBtn = document.getElementById('cart-btn');

cartBtn.addEventListener('click', () => {
    cartItems = document.createElement('div');
    cartItems.className = 'fixed top-0 z-70 right-0 bg-white w-64 h-full overflow-y-auto'
    cartItems.innerHTML = `
    <button id="close-cart" class="flex flex-col px-3 py-2 cursor-pointer" aria-label="Close cart" aria-expanded="true">
        <img src="assets/close.png" alt="Close cart" class=" w-5 h-5">
    </button>
    <h2 class="p-4 text-xl font-semibold">Cart</h2>
    <div id="cart-items" class="p-4">  </div>
    <div id="cart-total" class="p-4 text-xl font-medium absolute bottom-0">   </div>
    `
    document.body.appendChild(cartItems);
    if (cartItems) return; //This checks if cart has a value, function immediately exits then.

    renderCart();
})

function addToCart(productId){
    const product = mostBoughtProducts.find(p => p.id === Number(productId));

    if (!product) {    // If no product is found, log an error and stop the function
    console.error('Product not found:', productId);
    return;
  }

    if (!cart[product.id]) { //if the product does not exist in the cart, add it in the cart
        cart[product.id] = { ...product, qty: 1 }; //spread the product details and add initial quantity of 1
    } else {
        cart[product.id].qty += 1; // if the product exists already in the cart, then increase the quantity by 1
    }

    const close = cartItems.querySelector('#close-cart');
    close.addEventListener('click', () => {
        cartItems.remove(); //updates the UI by removing the cart items.
        cartItems = null; //resets the memory to null.
        document.body.style.overflow = ''; //restore default scrolling
    });
    renderCart(); 
}

function removeFromCart(productId) {
    if (cart[productId]) {
        delete(cart[productId]);
        console.log(`Product ${productId} removed from cart.`);
        renderCart();
    }
}

// Event Delegation for Add to Cart buttons
document.addEventListener('click', function(e){
    if(e.target.classList.contains('add-to-cart')){
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
    }
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

  if (!cartContainer || !cartTotal) return; // prevents "cannot set properties of null"

    cartContainer.innerHTML = '';
    let total = 0;

  Object.values(cart).forEach(item => { //Returns an array of cart object values, then iterate over each
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 0;
    const lineTotal = price * qty;
    total += lineTotal; //Each items total is added to overall total price of the cart.

    cartContainer.innerHTML += `
      <div class="flex justify-between mb-2 items-center">
        <img src="${item.image}" alt="${item.name}" class="w-10 h-10 object-contain">
        <span>${item.name || 'Unknown item'} x ${qty}</span>
        <span>Rs ${lineTotal}</span>
        <img src="assets/trash.png" alt="Remove Item" 
            class="w-4 h-4 cursor-pointer remove-item" 
            data-id="${item.id}">
      </div>
    `; 
});
    cartTotal.innerHTML = `<span class="text-sm">Total: Rs ${total.toFixed(2)}</span>`;
}

