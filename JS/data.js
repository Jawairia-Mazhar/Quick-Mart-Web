const mangoImg = new URL('/dist/assets/mango.png', import.meta.url).href;
const appleImg = new URL('/dist/assets/apple.png', import.meta.url).href;
const potatoImg = new URL('/dist/assets/potato.png', import.meta.url).href;
const breadImg = new URL('/dist/assets/bread.png', import.meta.url).href;
const milkImg = new URL('/dist/assets/milk.png', import.meta.url).href;
const eggImg = new URL('/dist/assets/egg.png', import.meta.url).href;

const carrotImg = new URL('/dist/assets/vegetable.png', import.meta.url).href;
const fruitImg = new URL('/dist/assets/fruit.png', import.meta.url).href;
const bakeryImg = new URL('/dist/assets/bakery.png', import.meta.url).href;
const meatImg = new URL('/dist/assets/meat.png', import.meta.url).href;
const dairyImg = new URL('/dist/assets/dairy.png', import.meta.url).href;
const snacksImg = new URL('/dist/assets/snacks.png', import.meta.url).href;

window.mostBoughtProducts = [
    {id: 1, name: "Mango", price: 350, quantity: "500gm", image: mangoImg || 'https://via.placeholder.com/96x96?text=Mango'},
    {id: 2, name: "Apples", price: 280, quantity: "500gm", image: appleImg || 'https://via.placeholder.com/96x96?text=Apples'},
    {id: 3, name: "Potato", price: 150, quantity: "1 kg", image: potatoImg || 'https://via.placeholder.com/96x96?text=Potato'},
    {id: 4, name: "Bread", price: 200, quantity: "Medium", image: breadImg || 'https://via.placeholder.com/96x96?text=Bread'},
    {id: 5, name: "Milk", price: 120, quantity: "500 ML", image: milkImg || 'https://via.placeholder.com/96x96?text=Milk'},
    {id: 6, name: "Eggs", price: 180, quantity: "6", image: eggImg || 'https://via.placeholder.com/96x96?text=Eggs'},
];

window.featuredCategories = [
    {id: 1, name: "Vegetables", image: carrotImg || 'https://via.placeholder.com/96x96?text=Vegetables'},
    {id: 2, name: "Fruits", image: fruitImg || 'https://via.placeholder.com/96x96?text=Fruits'},
    {id: 3, name: "Bakery", image: bakeryImg || 'https://via.placeholder.com/96x96?text=Bakery'},
    {id: 4, name: "Meat", image: meatImg || 'https://via.placeholder.com/96x96?text=Meat'},
    {id: 5, name: "Milk & Dairy", image: dairyImg || 'https://via.placeholder.com/96x96?text=Milk+Dairy'},
    {id: 6, name: "Snacks", image: snacksImg || 'https://via.placeholder.com/96x96?text=Snacks'},
];