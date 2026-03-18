const closeIcon = new URL('/dist/assets/close.png', import.meta.url).href;

/* product cards scrolling */
document.addEventListener('DOMContentLoaded', () => {
    const products = window.mostBoughtProducts || [];
    const categories = window.featuredCategories || [];

    console.log('toggledNav DOMContentLoaded', {
        hasRenderProducts: typeof renderProducts === 'function',
        hasQuantityControls: typeof QuantityControls === 'function',
        hasRenderCategories: typeof renderCategories === 'function',
        productsLength: products.length,
        categoriesLength: categories.length,
    });

    if (typeof renderProducts === 'function') {
        renderProducts('#products-container', products);
    }
    if (typeof QuantityControls === 'function') {
        QuantityControls();
    }
    if (typeof renderCategories === 'function') {
        renderCategories('#categories-container', categories);
    }

    const track = document.querySelector('#products-container');
    if (!track) return;

    const viewport = track.parentElement;
    requestAnimationFrame(() => {
        const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
        track.style.setProperty('--scroll-end', `-${distance}px`);
    });
});

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
            <span class="text-2xl font-bold">×</span>
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
