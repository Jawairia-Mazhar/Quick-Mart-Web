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
    productCard.className = 'w-50 h-48 rounded-2xl flex flex-col bg-yellow-100 gap-1 items-left p-2 hover:shadow-lg transition duration-300 cursor-pointer text-center';
    productCard.innerHTML = `
        <div class="w-full h-24 bg-white rounded-2xl flex items-center justify-center">
            <img src="${product.image}" alt="${product.name}" class="h-24 object-contain">
        </div>
        <span class="text-md font-medium">${product.name}</span>
        <span class="text-xs">Fresh ${product.name} | ${product.quantity}</span>
        <span class="text-sm font-medium mt-2">Rs. ${product.price}</span>
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
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('#products-container', mostBoughtProducts);
    renderCategories('#categories-container', featuredCategories);
})