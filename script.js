const mostBoughtProducts = [
    {id: 1, name: "Mango", price: 350, quantity: "500gm", image: "assets/mango.png"},
    {id: 2, name: "Apples", price: 280, quantity: "500gm", image: "assets/apple.png"},
    {id: 3, name: "Potato", price: 150, quantity: "1 kg", image: "assets/potato.png"},
    {id: 4, name: "Bread", price: 200, quantity: "Medium", image: "assets/bread.png"},
    {id: 5, name: "Milk", price: 120, quantity: "500 ML", image: "assets/milk.png"},
    {id: 6, name: "Eggs", price: 180, quantity: "6", image: "assets/egg.png"},
]

const featuredCategories = [
    {id: 1, name: "Vegetables", image: "https://picsum.photos/100/50"},
    {id: 2, name: "Fruits", image: "https://picsum.photos/100/50"},
    {id: 3, name: "Bakery", image: "https://picsum.photos/100/50"},
    {id: 4, name: "Meat", image: "https://picsum.photos/100/50"},
    {id: 5, name: "Milk & Dairy", image: "https://picsum.photos/100/50"},
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
        <div class="flex-1 place-items-end mr-[5%] mt-0">
            <img src="assets/add-to-cart.png" alt="Add to Cart" class="w-8 h-8 cursor-pointer items-end self-end mr-[8%] rounded-xl">
        </div>
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
    const toggleMenu = document.createElement('div');
    toggleMenu.className = 
    'absolute right-1 top-2 bg-white w-56 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300';
    toggleMenu.innerHTML = `
        <button id="close-menu" class="toggle-btn flex flex-col md:hidden px-3 py-2 cursor-pointer" aria-label="Close menu" aria-expanded="true">
            <img src="assets/close.png" alt="Close Menu" class=" w-5 h-5">
        </button>
        <ul class="flex flex-col gap-4 p-4 ">
            <li><a href="#" class="text-black hover:text-orange-500 hover:font-semibold">Home</a></li>
            <li><a href="#" class="text-black hover:text-orange-500 hover:font-semibold">Products</a></li>
            <li><a href="#" class="text-black hover:text-orange-500 hover:font-semibold">Categories</a></li>
        </ul>
    `;    
    document.body.appendChild(toggleMenu);

    const closeBtn = toggleMenu.querySelector('#close-menu');
    closeBtn.addEventListener('click', () => {
        toggleMenu.remove();
        toggleMenu = null;
    });
});
