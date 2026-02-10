const mostBoughtProducts = [
    {id: 1, name: "Mango", price: 350, quantity: 5, image: "https://picsum.photos/100/100"},
    {id: 2, name: "Apples", price: 280, quantity: 10, image: "https://picsum.photos/100/100"},
    {id: 3, name: "Potato", price: 150, quantity: 15, image: "https://picsum.photos/100/100"},
    {id: 4, name: "Bread", price: 200, quantity: 8, image: "https://picsum.photos/100/100"},
    {id: 5, name: "Milk", price: 120, quantity: 20, image: "https://picsum.photos/100/100"},
    {id: 6, name: "Eggs", price: 180, quantity: 12, image: "https://picsum.photos/100/100"},
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
    productCard.className = 'w-60 h-50 rounded-xl flex flex-col gap-1 items-left p-2 hover:shadow-lg transition duration-300 cursor-pointer';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover rounded-tl-xl rounded-tr-xl">
        <span class="text-md font-medium">${product.name}</span>
        <p class="text-sm">Price: ${product.price}</p>
        <p class="text-sm">Quantity: ${product.quantity}</p>
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
    <img src="${category.image}" alt="${category.name}" class="w-full h-16 object-cover rounded-tl-xl rounded-tr-xl">
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