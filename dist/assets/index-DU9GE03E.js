(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const h=new URL("../assets/mango.png",import.meta.url).href,y=new URL("../assets/apple.png",import.meta.url).href,b=new URL("../assets/potato.png",import.meta.url).href,w=new URL("../assets/bread.png",import.meta.url).href,x=new URL("../assets/milk.png",import.meta.url).href,v=new URL("../assets/egg.png",import.meta.url).href,L=new URL("../assets/vegetable.png",import.meta.url).href,C=new URL("../assets/fruit.png",import.meta.url).href,q=new URL("../assets/bakery.png",import.meta.url).href,I=new URL("../assets/meat.png",import.meta.url).href,E=new URL("../assets/dairy.png",import.meta.url).href,$=new URL("../assets/snacks.png",import.meta.url).href;window.mostBoughtProducts=[{id:1,name:"Mango",price:350,quantity:"500gm",image:h||"https://via.placeholder.com/96x96?text=Mango"},{id:2,name:"Apples",price:280,quantity:"500gm",image:y||"https://via.placeholder.com/96x96?text=Apples"},{id:3,name:"Potato",price:150,quantity:"1 kg",image:b||"https://via.placeholder.com/96x96?text=Potato"},{id:4,name:"Bread",price:200,quantity:"Medium",image:w||"https://via.placeholder.com/96x96?text=Bread"},{id:5,name:"Milk",price:120,quantity:"500 ML",image:x||"https://via.placeholder.com/96x96?text=Milk"},{id:6,name:"Eggs",price:180,quantity:"6",image:v||"https://via.placeholder.com/96x96?text=Eggs"}];window.featuredCategories=[{id:1,name:"Vegetables",image:L||"https://via.placeholder.com/96x96?text=Vegetables"},{id:2,name:"Fruits",image:C||"https://via.placeholder.com/96x96?text=Fruits"},{id:3,name:"Bakery",image:q||"https://via.placeholder.com/96x96?text=Bakery"},{id:4,name:"Meat",image:I||"https://via.placeholder.com/96x96?text=Meat"},{id:5,name:"Milk & Dairy",image:E||"https://via.placeholder.com/96x96?text=Milk+Dairy"},{id:6,name:"Snacks",image:$||"https://via.placeholder.com/96x96?text=Snacks"}];new URL("../assets/plus.png",import.meta.url).href;new URL("../assets/minus.png",import.meta.url).href;function R(e){const t=document.createElement("div");return t.className="trigger w-50 h-53 rounded-2xl flex flex-col bg-yellow-100 gap-1 items-left p-2 hover:shadow-md shadow-orange-400 transition duration-300 text-center rounded-bl-4xl rounded-br-4xl",t.innerHTML=`
        <div class="product-image w-full md:h-30 bg-white rounded-2xl grid items-center justify-center">
            <img src="${e.image}" alt="${e.name}" class= "h-24 object-contain">
            <button 
                class="add-to-cart w-26 cursor-pointer z-10 hidden bg-orange-400" data-id="${e.id}">
                <span class=" text-sm font-medium text-white" >Add to Cart</span>
            </button>
                <div class="quantity-controls justify-between rounded-xl w-20 overflow-hidden border border-gray-300 " id="quantity-ctrl">
                <button class="btn-plus w-7 h-7 bg-orange-400 text-white font-bold">+</button>
                <input type="text" class="text-sm font-medium w-8 text-center border-l border-r border-gray-200" data-id=${e.id} min="1" value="1">
                <button class="btn-minus w-7 h-7 bg-orange-400 text-white font-bold">-</button>
            </div>
        </div>
        <span class="text-md font-medium">${e.name}</span>
        <span class="text-xs">Fresh ${e.name} | ${e.quantity}</span>
        <span class="text-sm font-medium">Rs. ${e.price}</span>
    `,t}function k(e,t){const a=document.querySelector(e);if(!a){console.warn(`Container "${e}" not found.`);return}a.innerHTML="",t.forEach(o=>{const r=R(o),n=r.querySelector(".quantity-controls"),i=r.querySelector(".add-to-cart");if(cart[o.id]){const g=cart[o.id].qty;i.style.display="none",n.classList.remove("hidden"),n.style.display="flex",n.querySelector("input").value=g}else i.style.display="",n.classList.add("hidden");a.appendChild(r)})}window.renderProducts=k;window.QuantityControls=window.QuantityControls||function(){};function M(e){const t=document.createElement("div");return t.className="w-35 h-22 bg-yellow-100 place-items-center rounded-md",t.innerHTML=`
    <span class="p-2 text-md ml-1">${e.name}</span>
    <img src="${e.image}" alt="${e.name}" class="icon-amber w-16 h-16 p-0.5 object-contain rounded-tl-xl rounded-tr-xl">
    `,t}function U(e,t){const a=document.querySelector(e);a&&t.forEach(o=>{const r=M(o);a.appendChild(r)})}window.renderCategories=U;window.cart=window.cart||{};let s=window.cart,c=null;new URL("../assets/plus.png",import.meta.url).href;new URL("../assets/minus.png",import.meta.url).href;const B=new URL("../assets/trash.png",import.meta.url).href;new URL("../assets/close.png",import.meta.url).href;const P=document.getElementById("cart-btn");P.addEventListener("click",()=>{c=document.createElement("div"),c.className="fixed top-0 z-70 right-0 bg-white w-64 h-full overflow-y-auto",c.innerHTML=`
    <button id="close-cart" class="flex flex-col px-3 py-2 cursor-pointer" aria-label="Close cart" aria-expanded="true">
        <span class="text-2xl font-bold">×</span>
    </button>
    <h2 class="p-4 text-xl font-semibold">Cart</h2>
    <div id="cart-items" class="p-4">  </div>
    <div id="cart-total" class="p-4 text-xl font-medium absolute bottom-0">   </div>
    `,document.body.appendChild(c);const e=c.querySelector("#close-cart");e&&!e.dataset.bound&&(e.dataset.bound="1",e.addEventListener("click",()=>{c.remove(),c=null,document.body.style.overflow=""}),u())});function l(){renderProducts("#products-container",mostBoughtProducts),u(),m()}function p(e){const t=mostBoughtProducts.find(a=>a.id===Number(e));t&&(s[t.id]?s[t.id].qty+=1:s[t.id]={...t,qty:1},l())}function f(e){s[e]&&(delete s[e],console.log(`Product ${e} removed from cart.`),l())}document.addEventListener("click",function(e){const t=e.target.closest(".add-to-cart");if(!t)return;const a=parseInt(t.dataset.id,10);p(a)});document.addEventListener("click",function(e){if(e.target.classList.contains("remove-item")){const t=parseInt(e.target.dataset.id);f(t)}});function u(){const e=document.getElementById("cart-items"),t=document.getElementById("cart-total");if(!e||!t)return;e.innerHTML="";let a=0;Object.values(s).forEach(o=>{const r=Number(o.price)||0,n=Number(o.qty)||0,i=r*n;a+=i,e.innerHTML+=`
      <div class="grid grid-cols-[1fr_3fr] gap-1 mb-2 items-center  border-b border-gray-300 pb-2">
        <div class="place-items-center w-12 h-12">
            <img src="${o.image}" alt="${o.name}" class=" object-contain">
        </div>
        <div class="flex flex-col">
            <span>${o.name||"Unknown item"} | ${o.quantity||"Unknown brand"}</span>
            <span class="ml-auto text-right w-full">Rs ${i.toFixed(1)}</span>
            <div class='flex justify-between items-center gap-2'>
                <div class="quantity-controls justify-between w-20 overflow-hidden " id="quantity-ctrl">
                    <button class="btn-plus w-7 h-7 bg-orange-400 text-white font-bold">+</button>
                    <input type="text" class="text-sm font-medium w-8 text-center border border-gray-300 rounded-md" data-id=${o.id} min="1" value="${n}">
                    <button class="btn-minus w-7 h-7 bg-orange-400 text-white font-bold">-</button>
                </div>
                <img src="${B}" alt="Remove Item" 
                    class="w-4 h-4 cursor-pointer remove-item" 
                    data-id="${o.id}">
            </div>
        </div>
    </div>
            `}),m(),t.innerHTML=`<span class="text-sm">Total: Rs ${a.toFixed(2)}</span>`}function m(){document.querySelectorAll(".quantity-controls").forEach(e=>{if(e.dataset.bound==="1")return;e.dataset.bound="1";const t=e.querySelector(".btn-minus"),a=e.querySelector(".btn-plus"),o=e.querySelector("input");if(!t||!a||!o)return;const r=Number(o.dataset.id);t.addEventListener("click",()=>{let n=parseInt(o.value)||1;if(n=Math.max(0,n-1),o.value=n,n===0){delete s[r],e.classList.add("hidden"),e.style.display="";const i=e.parentElement.querySelector(".add-to-cart");i&&(i.style.display="")}else s[r]&&(s[r].qty=n);l()}),a.addEventListener("click",()=>{let n=parseInt(o.value)||1;n+=1,o.value=n,s[r]&&(s[r].qty=n),l()}),o.addEventListener("input",()=>{let n=parseInt(o.value);(isNaN(n)||n<1)&&(n=1,o.value=1),s[r]&&(s[r].qty=n),l()})})}window.addToCart=p;window.removeFromCart=f;window.renderCart=u;window.QuantityControls=m;window.refreshUI=l;new URL("../assets/close.png",import.meta.url).href;document.addEventListener("DOMContentLoaded",()=>{const e=window.mostBoughtProducts||[],t=window.featuredCategories||[];console.log("toggledNav DOMContentLoaded",{hasRenderProducts:typeof renderProducts=="function",hasQuantityControls:typeof QuantityControls=="function",hasRenderCategories:typeof renderCategories=="function",productsLength:e.length,categoriesLength:t.length}),typeof renderProducts=="function"&&renderProducts("#products-container",e),typeof QuantityControls=="function"&&QuantityControls(),typeof renderCategories=="function"&&renderCategories("#categories-container",t);const a=document.querySelector("#products-container");if(!a)return;const o=a.parentElement;requestAnimationFrame(()=>{const r=Math.max(0,a.scrollWidth-o.clientWidth);a.style.setProperty("--scroll-end",`-${r}px`)})});const S=document.getElementById("nav-toggle");document.getElementById("nav-menu");let d=null;S.addEventListener("click",()=>{if(d)return;d=document.createElement("div"),d.className="fixed right-0 top-0 z-[60] mt-12 bg-white w-64 h-[calc(100vh-4rem)] overflow-y-auto shadow-lg transition-transform transform ease-in-out duration-300",d.innerHTML=`
        <button id="close-menu" class="toggle-btn flex flex-col md:hidden px-3 py-2 cursor-pointer" aria-label="Close menu" aria-expanded="true">
            <span class="text-2xl font-bold">×</span>
        </button>
        <ul class="flex flex-col gap-4 p-4 ">
            <li><a href="#home-page" class="text-black hover:text-orange-500 hover:font-semibold">Home</a></li>
            <li><a href="#products" class="text-black hover:text-orange-500 hover:font-semibold">Products</a></li>
            <li><a href="#about-us" class="text-black hover:text-orange-500 hover:font-semibold">About Us</a></li>
        </ul>
    `,document.body.appendChild(d),document.body.style.overflow="hidden",d.querySelector("#close-menu").addEventListener("click",()=>{d.remove(),d=null,document.body.style.overflow=""})});
