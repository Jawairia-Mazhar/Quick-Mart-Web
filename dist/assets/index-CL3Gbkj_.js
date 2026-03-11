(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(n){if(n.ep)return;n.ep=!0;const t=s(n);fetch(n.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{renderProducts("#products-container",mostBoughtProducts),QuantityControls(),renderCategories("#categories-container",featuredCategories);const e=document.querySelector("#products-container");if(!e)return;const o=e.parentElement;requestAnimationFrame(()=>{const s=Math.max(0,e.scrollWidth-o.clientWidth);e.style.setProperty("--scroll-end",`-${s}px`)})});const m=document.getElementById("nav-toggle");document.getElementById("nav-menu");let l=null;m.addEventListener("click",()=>{if(l)return;l=document.createElement("div"),l.className="fixed right-0 top-0 z-[60] mt-12 bg-white w-64 h-[calc(100vh-4rem)] overflow-y-auto shadow-lg transition-transform transform ease-in-out duration-300",l.innerHTML=`
        <button id="close-menu" class="toggle-btn flex flex-col md:hidden px-3 py-2 cursor-pointer" aria-label="Close menu" aria-expanded="true">
            <img src="assets/close.png" alt="Close Menu" class=" w-5 h-5">
        </button>
        <ul class="flex flex-col gap-4 p-4 ">
            <li><a href="#home-page" class="text-black hover:text-orange-500 hover:font-semibold">Home</a></li>
            <li><a href="#products" class="text-black hover:text-orange-500 hover:font-semibold">Products</a></li>
            <li><a href="#about-us" class="text-black hover:text-orange-500 hover:font-semibold">About Us</a></li>
        </ul>
    `,document.body.appendChild(l),document.body.style.overflow="hidden",l.querySelector("#close-menu").addEventListener("click",()=>{l.remove(),l=null,document.body.style.overflow=""})});let a={},i=null;const f=document.getElementById("cart-btn");f.addEventListener("click",()=>{i=document.createElement("div"),i.className="fixed top-0 z-70 right-0 bg-white w-64 h-full overflow-y-auto",i.innerHTML=`
    <button id="close-cart" class="flex flex-col px-3 py-2 cursor-pointer" aria-label="Close cart" aria-expanded="true">
        <img src="assets/close.png" alt="Close cart" class=" w-5 h-5">
    </button>
    <h2 class="p-4 text-xl font-semibold">Cart</h2>
    <div id="cart-items" class="p-4">  </div>
    <div id="cart-total" class="p-4 text-xl font-medium absolute bottom-0">   </div>
    `,document.body.appendChild(i);const e=i.querySelector("#close-cart");e&&!e.dataset.bound&&(e.dataset.bound="1",e.addEventListener("click",()=>{i.remove(),i=null,document.body.style.overflow=""}),d())});function p(e){const o=mostBoughtProducts.find(s=>s.id===Number(e));o&&(a[o.id]?a[o.id].qty+=1:a[o.id]={...o,qty:1},renderProducts("#products-container",mostBoughtProducts),u(),d())}function y(e){a[e]&&(delete a[e],console.log(`Product ${e} removed from cart.`),renderProducts("#products-container",mostBoughtProducts),u(),d())}document.addEventListener("click",function(e){const o=e.target.closest(".add-to-cart");if(!o)return;const s=parseInt(o.dataset.id,10);p(s)});document.addEventListener("click",function(e){if(e.target.classList.contains("remove-item")){const o=parseInt(e.target.dataset.id);y(o)}});function d(){const e=document.getElementById("cart-items"),o=document.getElementById("cart-total");if(!e||!o)return;e.innerHTML="";let s=0;Object.values(a).forEach(r=>{const n=Number(r.price)||0,t=Number(r.qty)||0,c=n*t;s+=c,e.innerHTML+=`
      <div class="flex justify-between mb-2 items-center">
        <img src="${r.image}" alt="${r.name}" class="w-10 h-10 object-contain">
        <span>${r.name||"Unknown item"} x ${t}</span>
        <span>Rs ${c}</span>
        <img src="assets/trash.png" alt="Remove Item" 
            class="w-4 h-4 cursor-pointer remove-item" 
            data-id="${r.id}">
      </div>

      `}),o.innerHTML=`<span class="text-sm">Total: Rs ${s.toFixed(2)}</span>`}function u(){document.querySelectorAll(".quantity-controls").forEach(e=>{const o=e.querySelector(".btn-minus"),s=e.querySelector(".btn-plus"),r=e.querySelector("input");if(!o||!s||!r)return;const n=Number(r.dataset.id);o.addEventListener("click",()=>{let t=parseInt(r.value)||1;if(t=Math.max(0,t-1),r.value=t,t===0){delete a[n],e.classList.add("hidden"),e.style.display="";const c=e.parentElement.querySelector(".add-to-cart");c&&(c.style.display="")}else a[n]&&(a[n].qty=t);d()}),s.addEventListener("click",()=>{let t=parseInt(r.value)||1;t+=1,r.value=t,a[n]&&(a[n].qty=t),d()}),r.addEventListener("input",()=>{let t=parseInt(r.value);(isNaN(t)||t<1)&&(r.value=1),a[n]&&(a[n].qty=t),d()})})}
