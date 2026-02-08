const mostBoughtProducts = [
    {id: 1, name: "Mango", price: 350, quantity: 5, image: "https://picsum.photos/100/100"},
    {id: 2, name: "Apples", price: 280, quantity: 10, image: "https://picsum.photos/100/100"},
    {id: 3, name: "Potato", price: 150, quantity: 15, image: "https://picsum.photos/100/100"},
    {id: 4, name: "Bread", price: 200, quantity: 8, image: "https://picsum.photos/100/100"},
    {id: 5, name: "Milk", price: 120, quantity: 20, image: "https://picsum.photos/100/100"},
    {id: 6, name: "Eggs", price: 180, quantity: 12, image: "https://picsum.photos/100/100"},
]

function createProductCard(mostBoughtProducts){
    const productCard = document.createElement('div');
    productCard.className = 'w-60 h-50 rounded-xl flex flex-col gap-1 items-left p-2 hover:shadow-lg transition duration-300 cursor-pointer';
    productCard.innerHTML = `
        <img src="${mostBoughtProducts.image}" alt="${mostBoughtProducts.name}" class="w-full h-32 object-cover rounded-tl-xl rounded-tr-xl">
        <span class="text-md font-medium">${mostBoughtProducts.name}</span>
        <p class="text-sm">Price: ${mostBoughtProducts.price}</p>
        <p class="text-sm">Quantity: ${mostBoughtProducts.quantity}</p>
    `;
    return productCard;
}

function renderProducts(containerSelector, productsArray){
    const container = document.querySelector(containerSelector);
    productsArray.forEach(products => {
        const productCard = createProductCard(products);
        container.appendChild(productCard);
    })
};

document.addEventListener('DOMContentLoaded', () => {
    renderProducts('#products-container', mostBoughtProducts);
})
