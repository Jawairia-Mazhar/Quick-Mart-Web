function createCategoryCard(category) {
    const categoryCard = document.createElement('div');
    categoryCard.className = "w-26 h-26 md:w-32 md:h-28 place-items-center rounded-xl flex flex-col items-center justify-center p-2";
    categoryCard.innerHTML = `
    <img src="${category.image}" alt="${category.name}" class="icon-amber w-12 h-12 md:w-16 md:h-16 object-contain rounded-tl-xl rounded-tr-xl mb-2">
    <span class="text-sm font-medium">${category.name}</span>
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

