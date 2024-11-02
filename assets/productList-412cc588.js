import"./shared-27bc3aa3.js";import{A as y}from"./aos-13730317.js";function L(e,t){let s="";t.forEach(a=>{const{statusCard:i,statusClassNames:n,shouldHide:l}=o(a.status),v=a.discount>0?Math.floor(a.price-a.discount):null;s+=`
      <div class="col-6 col-md-4 animate__animated animate__backInRight">
          <a href="product.html" class="productList-card card-column h-100">
              <div class="card g-3 h-100">
                  <div class="w-100 h-75 overflow-hidden img-wrapper position-relative rounded-top ${i} productList-card-img">
                      <img src="/assets/images/product/${a.img}" 
                           class="card-img-top cover-img w-100 h-md-100 ${l?"mask":""}" 
                           alt="productList-image" style="object-fit: cover;">
                      <div class="position-absolute bottom-0 end-0 p-2 favorite-div">
                          <span>
                              <button type="button" class="btn btn-outline-danger favorite-button rounded-circle align-middle" data-favorite="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart heartIcon-button" viewBox="0 0 16 16">
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" stroke="transparent"/>
                                  </svg>
                              </button>
                          </span>
                      </div>
                  </div>
                  <div class="card-img-overlay text-white ${l?"":"d-none"}">
                      <h3 class="card-title fst-italic font-dm-serif">Soldout</h5>
                      <p class="card-text"><h5>已售完</h5></p>
                  </div>
                  <div class="${n} position-absolute opacity-70">
                      <span class="me-1">${a.status}</span>
                  </div>  
                  <div class="card-body p-0 mt-2 d-flex justify-content-between flex-column bg-nature-99">
                      <div class="d-flex justify-content-between align-items-center">
                          <h5 class="card-title fs-sm fs-lg-6 ms-lg-2">${a.productName}</h5>
                          <p class="d-flex justify-content-center align-items-center me-2">
                              <span class="text-center">
                                  <button type="button" class="btn btn-outline-danger favorite rounded-circle align-middle" data-favorite="false">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart heartIcon" viewBox="0 0 16 16">
                                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" stroke="transparent"/>
                                      </svg>
                                  </button>
                              </span>
                          </p>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-7 ms-lg-2">
                          <div class="d-flex align-items-center mt-1">
                              <div class="d-flex justify-content-center align-items-center">
                                  ${a.discount>0?`
                                      <span class="fs-sm fs-lg-6 me-1 listPrice">$${c(a.price)}</span>
                                      <p class="fs-sm fs-lg-6 discountPrice">$${c(v)}</p>
                                  `:`
                                      <p class="fs-sm fs-lg-6">$${c(a.price)}</p>
                                  `}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </a>                            
      </div>
      `}),e.innerHTML=s;function o(a){let i="",n="",l=!1;switch(a){case"補貨中":n="productList-category-tag status-new";break;case"預購":n="productList-category-tag status-hot";break;case"現貨":n="productList-category-tag status-default";break;default:n="productList-category-soldOut-tag",i="bg-dark",l=!0;break}return{statusCard:i,statusClassNames:n,shouldHide:l}}function c(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}y.init({useClassNames:!0,initClassName:"false",animatedClassName:"animate__animated"});const r=document.querySelector(".productList-card-wrap"),I=[{productName:"休閒寬鬆褲",img:"product_001.png",status:"預購",price:900,discount:10},{productName:"休閒上衣",img:"product_002.png",status:"現貨",price:690,discount:100},{productName:"優雅襯衫",img:"product_003.png",status:"現貨",price:590,discount:0},{productName:"柔軟針織衫",img:"product_004.png",status:"現貨",price:1290,discount:0},{productName:"牛仔長裙",img:"product_005.png",status:"現貨",price:2290,discount:0},{productName:"商務彈性長袖襯衫",img:"product_006.png",status:"現貨",price:490,discount:0},{productName:"條紋襯衫裙",img:"product_007.png",status:"補貨中",price:890,discount:0},{productName:"法式薄紗襯衫",img:"product_008.png",status:"補貨中",price:1290,discount:0},{productName:"素雅亞麻長褲",img:"product_009.png",status:"",price:690,discount:0}];r?L(r,I):console.error("roductList-card-wrap element not found");const k=document.querySelectorAll(".favorite");k.forEach(e=>{let t=e.dataset.favorite==="true";t&&e.classList.add("isLike"),e.addEventListener("click",s=>{s.preventDefault(),t=!t,e.setAttribute("data-favorite",t),t?(e.classList.add("isLike"),e.classList.remove("btn-outline-danger"),e.classList.add("btn-danger")):(e.classList.remove("isLike"),e.classList.add("btn-outline-danger"),e.classList.remove("btn-danger"))})});const w=document.querySelectorAll(".favorite-button");w.forEach(e=>{let t=e.dataset.favorite==="true";t&&e.classList.add("isLike"),e.addEventListener("click",s=>{s.preventDefault(),t=!t,e.setAttribute("data-favorite",t),t?(e.classList.add("isLike"),e.classList.remove("btn-outline-danger"),e.classList.add("btn-danger")):(e.classList.remove("isLike"),e.classList.add("btn-outline-danger"),e.classList.remove("btn-danger"))})});function x(){document.querySelectorAll(".accordion-item").forEach(t=>{const s=t.querySelector('input[type="checkbox"]:first-child');s&&(s.removeEventListener("change",d),s.addEventListener("change",d),t.querySelectorAll('input[type="checkbox"]:not(:first-child)').forEach(c=>{c.removeEventListener("change",u),c.addEventListener("change",u)}))})}function d(e){const t=this.checked;this.closest(".accordion-item").querySelectorAll('input[type="checkbox"]').forEach(c=>{c.checked=t})}function u(e){const t=this.closest(".accordion-item"),s=t.querySelector('input[type="checkbox"]:first-child'),o=t.querySelectorAll('input[type="checkbox"]:not(:first-child)'),c=Array.from(o).every(a=>a.checked);s.checked=c}function p(e,t){let s=`
      <nav class="navCategory" id="navbarCategory">
          <div class="d-flex justify-content-between align-items-center w-100 mb-4 mt-6">
              <span class="navbar-brand btnClose"><h6 class="ps-4">類別</h6></span>
          </div>
          <div class="accordion" id="navCategory">`;t.forEach((o,c)=>{const a=`collapse-list-${c+1}`;s+=`
              <div class="accordion-item category-item">
                  <h2 class="accordion-header" id="heading-${c+1}">
                      <button class="ps-0 pe-0 accordion-button category-button ${c===0?"":"collapsed"}" type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#${a}"
                              aria-expanded="${c===0?"true":"false"}"
                              aria-controls="${a}">
                          ${o.title}
                      </button>
                  </h2>
                  <div id="${a}"
                       class="accordion-collapse collapse ${c===0?"show":""}"
                       aria-labelledby="heading-${c+1}">
                  <div class="accordion-body d-flex text-nowrap flex-wrap gap-2 category-subItem">`,o.options.forEach(i=>{s+=`
                  <input type="checkbox" class="btn-check" name="categoryItem" id="${i.id}" style="pointer-events: auto;">
                  <label class="btn btn-outline-primary fs-sm" for="${i.id}">${i.label}</label>`}),s+="</div></div></div>"}),s+="</div></nav>",e.innerHTML=s,C(),x()}function C(){document.querySelectorAll(".accordion-button").forEach(t=>{t.addEventListener("click",function(){const s=this.nextElementSibling;s.classList.contains("show")?(s.classList.remove("show"),s.classList.add("collapse"),this.classList.add("collapsed"),this.setAttribute("aria-expanded","false")):(s.classList.remove("collapse"),s.classList.add("show"),this.classList.remove("collapsed"),this.setAttribute("aria-expanded","true"))})})}const m=document.querySelector(".filterMenu-wrap"),g=document.querySelector("#offcanvasCategoryMenu .filterMenu-wrap"),b=[{title:"上衣",options:[{id:"categoryItem-1",label:"全部"},{id:"categoryItem-2",label:"上衣"},{id:"categoryItem-3",label:"T恤"},{id:"categoryItem-4",label:"無袖"},{id:"categoryItem-5",label:"襯衫"}]},{title:"外套",options:[{id:"categoryItem-6",label:"全部"},{id:"categoryItem-7",label:"長外套"},{id:"categoryItem-8",label:"風衣"},{id:"categoryItem-9",label:"皮外套"}]},{title:"褲子",options:[{id:"categoryItem-10",label:"全部"},{id:"categoryItem-11",label:"長褲"},{id:"categoryItem-12",label:"短褲"},{id:"categoryItem-13",label:"運動褲"}]},{title:"洋裝",options:[{id:"categoryItem-14",label:"全部"},{id:"categoryItem-15",label:"連身裙"},{id:"categoryItem-16",label:"休閒裙"},{id:"categoryItem-17",label:"晚禮服"}]},{title:"配件",options:[{id:"categoryItem-18",label:"全部"},{id:"categoryItem-19",label:"帽子"},{id:"categoryItem-20",label:"圍巾"},{id:"categoryItem-21",label:"手套"}]},{title:"狀態",options:[{id:"categoryItem-22",label:"全部"},{id:"categoryItem-23",label:"預購中"},{id:"categoryItem-24",label:"補貨中"},{id:"categoryItem-25",label:"現貨"},{id:"categoryItem-26",label:"預購"}]}];function f(e,t,s){const o=window.matchMedia("(max-width: 576px)").matches;e.forEach(c=>{c.options.forEach(a=>{o?a.id.endsWith("-sm")||(a.id=`${a.id}-sm`):a.id=a.id.replace(/-sm$/,"")})}),t?p(t,e):console.error("menuItem element not found"),s?p(s,e):console.error("offcanvasItem element not found")}f(b,m,g);window.addEventListener("resize",()=>{f(b,m,g)});const h=document.getElementById("offcanvasCategoryMenu");h.addEventListener("show.bs.offcanvas",function(){document.getElementById("header-container").style.display="none"});h.addEventListener("hidden.bs.offcanvas",function(){document.getElementById("header-container").style.display="block"});
