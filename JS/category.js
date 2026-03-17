function createCategoryCard(category) {
    const categoryCard = document.createElement('div');
    categoryCard.className = "w-35 h-22 bg-yellow-100 place-items-center rounded-md";
    categoryCard.innerHTML = `
    <span class="p-2 text-md ml-1">${category.name}</span>
    <img src="${category.image}" alt="${category.name}" class="icon-amber w-16 h-16 p-0.5 object-contain rounded-tl-xl rounded-tr-xl">
    `;
    return categoryCard;
}

function renderCategories(containerSelector, categoriesArray) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    categoriesArray.forEach(categories => {
        const categoryCard = createCategoryCard(categories);
        container.appendChild(categoryCard);
    });
}

window.renderCategories = renderCategories;

