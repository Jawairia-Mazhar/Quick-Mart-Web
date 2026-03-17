(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();window.mostBoughtProducts=[{id:1,name:"Mango",price:350,quantity:"500gm",image:"assets/mango.png"},{id:2,name:"Apples",price:280,quantity:"500gm",image:"assets/apple.png"},{id:3,name:"Potato",price:150,quantity:"1 kg",image:"assets/potato.png"},{id:4,name:"Bread",price:200,quantity:"Medium",image:"assets/bread.png"},{id:5,name:"Milk",price:120,quantity:"500 ML",image:"assets/milk.png"},{id:6,name:"Eggs",price:180,quantity:"6",image:"assets/egg.png"}];window.featuredCategories=[{id:1,name:"Vegetables",image:"/assets/vegetable.png"},{id:2,name:"Fruits",image:"/assets/fruit.png"},{id:3,name:"Bakery",image:"/assets/bakery.png"},{id:4,name:"Meat",image:"/assets/meat.png"},{id:5,name:"Milk & Dairy",image:"/assets/dairy.png"},{id:6,name:"Snacks",image:"/assets/snacks.png"}];function y(e){const t=document.createElement("div");return t.className="trigger w-50 h-53 rounded-2xl flex flex-col bg-yellow-100 gap-1 items-left p-2 hover:shadow-md shadow-orange-400 transition duration-300 text-center rounded-bl-4xl rounded-br-4xl",t.innerHTML=`
        <div class="product-image w-full md:h-30 bg-white rounded-2xl grid items-center justify-center">
            <img src="${e.image}" alt="${e.name}" class= "h-24 object-contain">
            <button 
                class="add-to-cart w-26 cursor-pointer z-10 hidden bg-orange-400" data-id="${e.id}">
                <span class=" text-sm font-medium text-white" >Add to Cart</span>
            </button>
                <div class="quantity-controls justify-between rounded-xl w-20 overflow-hidden border border-gray-300 " id="quantity-ctrl">
                <button class="btn-plus"><img src="assets/plus.png" alt="Plus" class="w-5 h-5 cursor-pointer pt-0.5 bg-orange-400"/> </button>
                <input type="text" class="text-sm font-medium w-8 text-center items-center" data-id=${e.id} min="1" value="1">
                <button class="btn-minus"><img src="assets/minus.png" alt="Minus" class="w-5 h-5 cursor-pointer pt-0.5 bg-orange-400"/></button>
            </div>
        </div>
        <span class="text-md font-medium">${e.name}</span>
        <span class="text-xs">Fresh ${e.name} | ${e.quantity}</span>
        <span class="text-sm font-medium">Rs. ${e.price}</span>
    `,t}function b(e,t){const o=document.querySelector(e);if(!o){console.warn(`Container "${e}" not found.`);return}o.innerHTML="",t.forEach(r=>{const s=y(r),n=s.querySelector(".quantity-controls"),i=s.querySelector(".add-to-cart");if(cart[r.id]){const f=cart[r.id].qty;i.style.display="none",n.classList.remove("hidden"),n.style.display="flex",n.querySelector("input").value=f}else i.style.display="",n.classList.add("hidden");o.appendChild(s)})}window.renderProducts=b;window.QuantityControls=window.QuantityControls||function(){};function h(e){const t=document.createElement("div");return t.className="w-35 h-22 bg-yellow-100 place-items-center rounded-md",t.innerHTML=`
    <span class="p-2 text-md ml-1">${e.name}</span>
    <img src="${e.image}" alt="${e.name}" class="icon-amber w-16 h-16 p-0.5 object-contain rounded-tl-xl rounded-tr-xl">
    `,t}function w(e,t){const o=document.querySelector(e);o&&t.forEach(r=>{const s=h(r);o.appendChild(s)})}window.renderCategories=w;window.cart=window.cart||{};let a=window.cart,c=null;const v=document.getElementById("cart-btn");v.addEventListener("click",()=>{c=document.createElement("div"),c.className="fixed top-0 z-70 right-0 bg-white w-64 h-full overflow-y-auto",c.innerHTML=`
    <button id="close-cart" class="flex flex-col px-3 py-2 cursor-pointer" aria-label="Close cart" aria-expanded="true">
        <img src="assets/close.png" alt="Close cart" class=" w-5 h-5">
    </button>
    <h2 class="p-4 text-xl font-semibold">Cart</h2>
    <div id="cart-items" class="p-4">  </div>
    <div id="cart-total" class="p-4 text-xl font-medium absolute bottom-0">   </div>
    `,document.body.appendChild(c);const e=c.querySelector("#close-cart");e&&!e.dataset.bound&&(e.dataset.bound="1",e.addEventListener("click",()=>{c.remove(),c=null,document.body.style.overflow=""}),u())});function l(){renderProducts("#products-container",mostBoughtProducts),u(),m()}function p(e){const t=mostBoughtProducts.find(o=>o.id===Number(e));t&&(a[t.id]?a[t.id].qty+=1:a[t.id]={...t,qty:1},l())}function g(e){a[e]&&(delete a[e],console.log(`Product ${e} removed from cart.`),l())}document.addEventListener("click",function(e){const t=e.target.closest(".add-to-cart");if(!t)return;const o=parseInt(t.dataset.id,10);p(o)});document.addEventListener("click",function(e){if(e.target.classList.contains("remove-item")){const t=parseInt(e.target.dataset.id);g(t)}});function u(){const e=document.getElementById("cart-items"),t=document.getElementById("cart-total");if(!e||!t)return;e.innerHTML="";let o=0;Object.values(a).forEach(r=>{const s=Number(r.price)||0,n=Number(r.qty)||0,i=s*n;o+=i,e.innerHTML+=`
      <div class="grid grid-cols-[1fr_3fr] gap-1 mb-2 items-center  border-b border-gray-300 pb-2">
        <div class="place-items-center w-12 h-12">
            <img src="${r.image}" alt="${r.name}" class=" object-contain">
        </div>
        <div class="flex flex-col">
            <span>${r.name||"Unknown item"} | ${r.quantity||"Unknown brand"}</span>
            <span class="ml-auto text-right w-full">Rs ${i.toFixed(1)}</span>
            <div class='flex justify-between items-center gap-2'>
                <div class="quantity-controls justify-between w-20 overflow-hidden " id="quantity-ctrl">
                    <button class="btn-plus "><img src="assets/plus.png" alt="Plus" class="w-5 h-5 cursor-pointer bg-orange-400 rounded-md pt-0.5"/> </button>
                    <input type="text" class="text-sm font-medium w-8 text-center items-center border border-gray-300 rounded-md" data-id=${r.id} min="1" value="${n}">
                    <button class="btn-minus "><img src="assets/minus.png" alt="Minus" class="w-5 h-5 cursor-pointer bg-orange-400 rounded-md pt-0.5"/></button>
                </div>
                <img src="assets/trash.png" alt="Remove Item" 
                    class="w-4 h-4 cursor-pointer remove-item" 
                    data-id="${r.id}">
            </div>
        </div>
    </div>
            `}),m(),t.innerHTML=`<span class="text-sm">Total: Rs ${o.toFixed(2)}</span>`}function m(){document.querySelectorAll(".quantity-controls").forEach(e=>{if(e.dataset.bound==="1")return;e.dataset.bound="1";const t=e.querySelector(".btn-minus"),o=e.querySelector(".btn-plus"),r=e.querySelector("input");if(!t||!o||!r)return;const s=Number(r.dataset.id);t.addEventListener("click",()=>{let n=parseInt(r.value)||1;if(n=Math.max(0,n-1),r.value=n,n===0){delete a[s],e.classList.add("hidden"),e.style.display="";const i=e.parentElement.querySelector(".add-to-cart");i&&(i.style.display="")}else a[s]&&(a[s].qty=n);l()}),o.addEventListener("click",()=>{let n=parseInt(r.value)||1;n+=1,r.value=n,a[s]&&(a[s].qty=n),l()}),r.addEventListener("input",()=>{let n=parseInt(r.value);(isNaN(n)||n<1)&&(n=1,r.value=1),a[s]&&(a[s].qty=n),l()})})}window.addToCart=p;window.removeFromCart=g;window.renderCart=u;window.QuantityControls=m;window.refreshUI=l;document.addEventListener("DOMContentLoaded",()=>{const e=window.mostBoughtProducts||[],t=window.featuredCategories||[];console.log("toggledNav DOMContentLoaded",{hasRenderProducts:typeof renderProducts=="function",hasQuantityControls:typeof QuantityControls=="function",hasRenderCategories:typeof renderCategories=="function",productsLength:e.length,categoriesLength:t.length}),typeof renderProducts=="function"&&renderProducts("#products-container",e),typeof QuantityControls=="function"&&QuantityControls(),typeof renderCategories=="function"&&renderCategories("#categories-container",t);const o=document.querySelector("#products-container");if(!o)return;const r=o.parentElement;requestAnimationFrame(()=>{const s=Math.max(0,o.scrollWidth-r.clientWidth);o.style.setProperty("--scroll-end",`-${s}px`)})});const x=document.getElementById("nav-toggle");document.getElementById("nav-menu");let d=null;x.addEventListener("click",()=>{if(d)return;d=document.createElement("div"),d.className="fixed right-0 top-0 z-[60] mt-12 bg-white w-64 h-[calc(100vh-4rem)] overflow-y-auto shadow-lg transition-transform transform ease-in-out duration-300",d.innerHTML=`
        <button id="close-menu" class="toggle-btn flex flex-col md:hidden px-3 py-2 cursor-pointer" aria-label="Close menu" aria-expanded="true">
            <img src="assets/close.png" alt="Close Menu" class=" w-5 h-5">
        </button>
        <ul class="flex flex-col gap-4 p-4 ">
            <li><a href="#home-page" class="text-black hover:text-orange-500 hover:font-semibold">Home</a></li>
            <li><a href="#products" class="text-black hover:text-orange-500 hover:font-semibold">Products</a></li>
            <li><a href="#about-us" class="text-black hover:text-orange-500 hover:font-semibold">About Us</a></li>
        </ul>
    `,document.body.appendChild(d),document.body.style.overflow="hidden",d.querySelector("#close-menu").addEventListener("click",()=>{d.remove(),d=null,document.body.style.overflow=""})});
