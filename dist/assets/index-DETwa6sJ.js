(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const h="https://via.placeholder.com/100?text=Mango",y="https://via.placeholder.com/100?text=Apples",b="https://via.placeholder.com/100?text=Potato",v="https://via.placeholder.com/100?text=Bread",w="https://via.placeholder.com/100?text=Milk",x="https://via.placeholder.com/100?text=Eggs",C="https://via.placeholder.com/100?text=Vegetables",q="https://via.placeholder.com/100?text=Fruits",L="https://via.placeholder.com/100?text=Bakery",I="https://via.placeholder.com/100?text=Meat",E="https://via.placeholder.com/100?text=Dairy",$="https://via.placeholder.com/100?text=Snacks";window.mostBoughtProducts=[{id:1,name:"Mango",price:350,quantity:"500gm",image:h},{id:2,name:"Apples",price:280,quantity:"500gm",image:y},{id:3,name:"Potato",price:150,quantity:"1 kg",image:b},{id:4,name:"Bread",price:200,quantity:"Medium",image:v},{id:5,name:"Milk",price:120,quantity:"500 ML",image:w},{id:6,name:"Eggs",price:180,quantity:"6",image:x}];window.featuredCategories=[{id:1,name:"Vegetables",image:C},{id:2,name:"Fruits",image:q},{id:3,name:"Bakery",image:L},{id:4,name:"Meat",image:I},{id:5,name:"Milk & Dairy",image:E},{id:6,name:"Snacks",image:$}];new URL("../assets/plus.png",import.meta.url).href;new URL("../assets/minus.png",import.meta.url).href;function M(t){const e=document.createElement("div");return e.className="trigger w-50 h-53 rounded-2xl flex flex-col bg-yellow-100 gap-1 items-left p-2 hover:shadow-md shadow-orange-400 transition duration-300 text-center rounded-bl-4xl rounded-br-4xl",e.innerHTML=`
        <div class="product-image w-full md:h-30 bg-white rounded-2xl grid items-center justify-center">
            <img src="${t.image}" alt="${t.name}" class= "h-24 object-contain">
            <button 
                class="add-to-cart w-26 cursor-pointer z-10 hidden bg-orange-400" data-id="${t.id}">
                <span class=" text-sm font-medium text-white" >Add to Cart</span>
            </button>
                <div class="quantity-controls justify-between rounded-xl w-20 overflow-hidden border border-gray-300 " id="quantity-ctrl">
                <button class="btn-plus w-7 h-7 bg-orange-400 text-white font-bold">+</button>
                <input type="text" class="text-sm font-medium w-8 text-center border-l border-r border-gray-200" data-id=${t.id} min="1" value="1">
                <button class="btn-minus w-7 h-7 bg-orange-400 text-white font-bold">-</button>
            </div>
        </div>
        <span class="text-md font-medium">${t.name}</span>
        <span class="text-xs">Fresh ${t.name} | ${t.quantity}</span>
        <span class="text-sm font-medium">Rs. ${t.price}</span>
    `,e}function B(t,e){const a=document.querySelector(t);if(!a){console.warn(`Container "${t}" not found.`);return}a.innerHTML="",e.forEach(r=>{const o=M(r),n=o.querySelector(".quantity-controls"),i=o.querySelector(".add-to-cart");if(cart[r.id]){const g=cart[r.id].qty;i.style.display="none",n.classList.remove("hidden"),n.style.display="flex",n.querySelector("input").value=g}else i.style.display="",n.classList.add("hidden");a.appendChild(o)})}window.renderProducts=B;window.QuantityControls=window.QuantityControls||function(){};function P(t){const e=document.createElement("div");return e.className="w-35 h-22 bg-yellow-100 place-items-center rounded-md",e.innerHTML=`
    <span class="p-2 text-md ml-1">${t.name}</span>
    <img src="${t.image}" alt="${t.name}" class="icon-amber w-16 h-16 p-0.5 object-contain rounded-tl-xl rounded-tr-xl">
    `,e}function k(t,e){const a=document.querySelector(t);a&&e.forEach(r=>{const o=P(r);a.appendChild(o)})}window.renderCategories=k;window.cart=window.cart||{};let s=window.cart,c=null;new URL("../assets/plus.png",import.meta.url).href;new URL("../assets/minus.png",import.meta.url).href;const S=new URL("../assets/trash.png",import.meta.url).href;new URL("../assets/close.png",import.meta.url).href;const N=document.getElementById("cart-btn");N.addEventListener("click",()=>{c=document.createElement("div"),c.className="fixed top-0 z-70 right-0 bg-white w-64 h-full overflow-y-auto",c.innerHTML=`
    <button id="close-cart" class="flex flex-col px-3 py-2 cursor-pointer" aria-label="Close cart" aria-expanded="true">
        <span class="text-2xl font-bold">×</span>
    </button>
    <h2 class="p-4 text-xl font-semibold">Cart</h2>
    <div id="cart-items" class="p-4">  </div>
    <div id="cart-total" class="p-4 text-xl font-medium absolute bottom-0">   </div>
    `,document.body.appendChild(c);const t=c.querySelector("#close-cart");t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("click",()=>{c.remove(),c=null,document.body.style.overflow=""}),u())});function l(){renderProducts("#products-container",mostBoughtProducts),u(),m()}function p(t){const e=mostBoughtProducts.find(a=>a.id===Number(t));e&&(s[e.id]?s[e.id].qty+=1:s[e.id]={...e,qty:1},l())}function f(t){s[t]&&(delete s[t],console.log(`Product ${t} removed from cart.`),l())}document.addEventListener("click",function(t){const e=t.target.closest(".add-to-cart");if(!e)return;const a=parseInt(e.dataset.id,10);p(a)});document.addEventListener("click",function(t){if(t.target.classList.contains("remove-item")){const e=parseInt(t.target.dataset.id);f(e)}});function u(){const t=document.getElementById("cart-items"),e=document.getElementById("cart-total");if(!t||!e)return;t.innerHTML="";let a=0;Object.values(s).forEach(r=>{const o=Number(r.price)||0,n=Number(r.qty)||0,i=o*n;a+=i,t.innerHTML+=`
      <div class="grid grid-cols-[1fr_3fr] gap-1 mb-2 items-center  border-b border-gray-300 pb-2">
        <div class="place-items-center w-12 h-12">
            <img src="${r.image}" alt="${r.name}" class=" object-contain">
        </div>
        <div class="flex flex-col">
            <span>${r.name||"Unknown item"} | ${r.quantity||"Unknown brand"}</span>
            <span class="ml-auto text-right w-full">Rs ${i.toFixed(1)}</span>
            <div class='flex justify-between items-center gap-2'>
                <div class="quantity-controls justify-between w-20 overflow-hidden " id="quantity-ctrl">
                    <button class="btn-plus w-7 h-7 bg-orange-400 text-white font-bold">+</button>
                    <input type="text" class="text-sm font-medium w-8 text-center border border-gray-300 rounded-md" data-id=${r.id} min="1" value="${n}">
                    <button class="btn-minus w-7 h-7 bg-orange-400 text-white font-bold">-</button>
                </div>
                <img src="${S}" alt="Remove Item" 
                    class="w-4 h-4 cursor-pointer remove-item" 
                    data-id="${r.id}">
            </div>
        </div>
    </div>
            `}),m(),e.innerHTML=`<span class="text-sm">Total: Rs ${a.toFixed(2)}</span>`}function m(){document.querySelectorAll(".quantity-controls").forEach(t=>{if(t.dataset.bound==="1")return;t.dataset.bound="1";const e=t.querySelector(".btn-minus"),a=t.querySelector(".btn-plus"),r=t.querySelector("input");if(!e||!a||!r)return;const o=Number(r.dataset.id);e.addEventListener("click",()=>{let n=parseInt(r.value)||1;if(n=Math.max(0,n-1),r.value=n,n===0){delete s[o],t.classList.add("hidden"),t.style.display="";const i=t.parentElement.querySelector(".add-to-cart");i&&(i.style.display="")}else s[o]&&(s[o].qty=n);l()}),a.addEventListener("click",()=>{let n=parseInt(r.value)||1;n+=1,r.value=n,s[o]&&(s[o].qty=n),l()}),r.addEventListener("input",()=>{let n=parseInt(r.value);(isNaN(n)||n<1)&&(n=1,r.value=1),s[o]&&(s[o].qty=n),l()})})}window.addToCart=p;window.removeFromCart=f;window.renderCart=u;window.QuantityControls=m;window.refreshUI=l;new URL("../assets/close.png",import.meta.url).href;document.addEventListener("DOMContentLoaded",()=>{const t=window.mostBoughtProducts||[],e=window.featuredCategories||[];console.log("toggledNav DOMContentLoaded",{hasRenderProducts:typeof renderProducts=="function",hasQuantityControls:typeof QuantityControls=="function",hasRenderCategories:typeof renderCategories=="function",productsLength:t.length,categoriesLength:e.length}),typeof renderProducts=="function"&&renderProducts("#products-container",t),typeof QuantityControls=="function"&&QuantityControls(),typeof renderCategories=="function"&&renderCategories("#categories-container",e);const a=document.querySelector("#products-container");if(!a)return;const r=a.parentElement;requestAnimationFrame(()=>{const o=Math.max(0,a.scrollWidth-r.clientWidth);a.style.setProperty("--scroll-end",`-${o}px`)})});const R=document.getElementById("nav-toggle");document.getElementById("nav-menu");let d=null;R.addEventListener("click",()=>{if(d)return;d=document.createElement("div"),d.className="fixed right-0 top-0 z-[60] mt-12 bg-white w-64 h-[calc(100vh-4rem)] overflow-y-auto shadow-lg transition-transform transform ease-in-out duration-300",d.innerHTML=`
        <button id="close-menu" class="toggle-btn flex flex-col md:hidden px-3 py-2 cursor-pointer" aria-label="Close menu" aria-expanded="true">
            <span class="text-2xl font-bold">×</span>
        </button>
        <ul class="flex flex-col gap-4 p-4 ">
            <li><a href="#home-page" class="text-black hover:text-orange-500 hover:font-semibold">Home</a></li>
            <li><a href="#products" class="text-black hover:text-orange-500 hover:font-semibold">Products</a></li>
            <li><a href="#about-us" class="text-black hover:text-orange-500 hover:font-semibold">About Us</a></li>
        </ul>
    `,document.body.appendChild(d),document.body.style.overflow="hidden",d.querySelector("#close-menu").addEventListener("click",()=>{d.remove(),d=null,document.body.style.overflow=""})});
