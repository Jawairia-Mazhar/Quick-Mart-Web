const mostBoughtProducts = [
    {id: 1, name: "Mango", price: 350, quantity: "500gm", image: "assets/mango.png"},
    {id: 2, name: "Apples", price: 280, quantity: "500gm", image: "assets/apple.png"},
    {id: 3, name: "Potato", price: 150, quantity: "1 kg", image: "assets/potato.png"},
    {id: 4, name: "Bread", price: 200, quantity: "Medium", image: "assets/bread.png"},
    {id: 5, name: "Milk", price: 120, quantity: "500 ML", image: "assets/milk.png"},
    {id: 6, name: "Eggs", price: 180, quantity: "6", image: "assets/egg.png"},
]

const featuredCategories = [
    {id: 1, name: "Vegetables", image: "assets/vegetables.png"},
    {id: 2, name: "Fruits", image: "assets/fruit.png"},
    {id: 3, name: "Bakery", image: "assets/bakery.png"},
    {id: 4, name: "Meat", image: "assets/meat.png"},
    {id: 5, name: "Milk & Dairy", image: "assets/milk-dairy.png"},
]

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'w-50 h-53 rounded-2xl flex flex-col bg-yellow-100 gap-1 items-left p-2 hover:shadow-lg transition duration-300 text-center rounded-bl-4xl rounded-br-4xl';
    productCard.innerHTML = `
        <div class="w-full md:h-24 bg-white rounded-2xl flex items-center justify-center">
            <img src="${product.image}" alt="${product.name}" class="h-24 object-contain">
        </div>
        <span class="text-md font-medium">${product.name}</span>
        <span class="text-xs">Fresh ${product.name} | ${product.quantity}</span>
        <span class="text-sm font-medium">Rs. ${product.price}</span>
        <button 
        class=" flex-1 place-items-end mr-[5%] mt-0"
       >
            <img src="assets/add-to-cart.png" alt="Add to Cart" 
            class="add-to-cart w-8 h-8 cursor-pointer items-end self-end mr-[8%] rounded-xl"
            data-id="${product.id}">
        </button>
    `;
    return productCard;
}
let cart = [];

function addToCart(productId){
    const product = mostBoughtProducts.find(p => p.id === Number(productId));
    if (!product) {
    console.error('Product not found:', productId);
    return;
  }

    if (!cart[product.id]) {
        cart[product.id] = { ...product, qty: 1 };
    } else {
        cart[product.id].qty += 1;
    }

    renderCart(); 
}

// Event Delegation for Add to Cart buttons
document.addEventListener('click', function(e){
    if(e.target.classList.contains('add-to-cart')){
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
    }
});

let cartItems = null;

const cartBtn = document.getElementById('cart-btn');
cartBtn.addEventListener('click', () => {
    cartItems = document.createElement('div');
    cartItems.className = 'fixed top-0 z-70 right-0 bg-white w-64 h-full overflow-y-auto'
    cartItems.innerHTML = `
    <h2 class="p-4 text-xl font-semibold">Cart</h2>
    <div id="cart-items" class="p-4">  </div>
    `
    document.body.appendChild(cartItems);
})

function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  if (!cartContainer) return; // prevents "cannot set properties of null"

  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 0;
    const lineTotal = price * qty;
    total += lineTotal;

    cartContainer.innerHTML += `
      <div class="flex justify-between mb-2">
        <img src="${item.image}" alt="${item.name}" class="w-10 h-10 object-contain">
        <span>${item.name || 'Unknown item'} x ${qty}</span>
        <span>Rs ${lineTotal}</span>
      </div>
      <div>
      </div>
    `;
  });
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

function createCategoryCard(category) {
    const categoryCard = document.createElement('div');
    categoryCard.className = "w-35 md:w-42 h-22 bg-yellow-100 rounded-xl";
    categoryCard.innerHTML = `
    <span class="p-2 text-md font-medium">${category.name}</span>
    <img src="${category.image}" alt="${category.name}" class="w-full h-16 object-contain rounded-tl-xl rounded-tr-xl">
    `;
    return categoryCard;
}

function renderCategories(containerSelector, categoriesArray) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    categoriesArray.forEach(categories => {
        const categoryCard = createCategoryCard(categories);
        container.appendChild(categoryCard);
    })
}

/* product cards scrolling */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('#products-container', mostBoughtProducts);
    renderCategories('#categories-container', featuredCategories);

    const track = document.querySelector('#products-container');
    if (!track) return;

    const viewport = track.parentElement;
    requestAnimationFrame(() => {
        const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
        track.style.setProperty('--scroll-end', `-${distance}px`);
    });
})

const togBtn = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')

let toggleMenu = null; // store menu reference

// upon clicking the toggle button create a div having the ul list items of the menu. floating on the right side of the screen. The div should have a close button to hide the menu when clicked.
togBtn.addEventListener('click', () => {
    if (toggleMenu) { return; }
    toggleMenu = document.createElement('div');
    toggleMenu.className = 
    'fixed right-0 top-0 z-[60] mt-12 bg-white w-64 h-[calc(100vh-4rem)] overflow-y-auto shadow-lg transition-transform transform ease-in-out duration-300';
    toggleMenu.innerHTML = `
        <button id="close-menu" class="toggle-btn flex flex-col md:hidden px-3 py-2 cursor-pointer" aria-label="Close menu" aria-expanded="true">
            <img src="assets/close.png" alt="Close Menu" class=" w-5 h-5">
        </button>
        <ul class="flex flex-col gap-4 p-4 ">
            <li><a href="#home-page" class="text-black hover:text-orange-500 hover:font-semibold">Home</a></li>
            <li><a href="#products" class="text-black hover:text-orange-500 hover:font-semibold">Products</a></li>
            <li><a href="#about-us" class="text-black hover:text-orange-500 hover:font-semibold">About Us</a></li>
        </ul>
    `;    
    document.body.appendChild(toggleMenu);
    document.body.style.overflow = 'hidden';

    const closeBtn = toggleMenu.querySelector('#close-menu');
    closeBtn.addEventListener('click', () => {
        toggleMenu.remove();
        toggleMenu = null;
        document.body.style.overflow = '';
    });
});
