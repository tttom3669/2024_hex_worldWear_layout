import AOS from 'aos';

export function productRender(productListCard, productList) {

  let str = "";

  productList.forEach((item) => {

    const { statusCard, statusClassNames, shouldHide } = getStatusClass(
      item.status
    );

    const discountPrice =
      item.discount > 0 ? Math.floor(item.price - item.discount) : null;

      const imgUrl = new URL(`/assets/images/product/${item.img}`, import.meta.url).href;
    str += `
      <div class="col-6 col-md-4 animate__animated animate__backInRight">
          <a href="product.html" class="productList-card card-column h-100">
              <div class="card g-3 h-100">
                  <div class="w-100 h-75 overflow-hidden img-wrapper position-relative rounded-top ${statusCard} productList-card-img">
                      <img src="${imgUrl}" 
                           class="card-img-top cover-img w-100 h-md-100 ${
                             shouldHide ? "mask" : ""
                           }" 
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
                  <div class="card-img-overlay text-white ${
                    shouldHide ? "" : "d-none"
                  }">
                      <h3 class="card-title fst-italic font-dm-serif">Soldout</h5>
                      <p class="card-text"><h5>已售完</h5></p>
                  </div>
                  <div class="${statusClassNames} position-absolute opacity-70">
                      <span class="me-1">${item.status}</span>
                  </div>  
                  <div class="card-body p-0 mt-2 d-flex justify-content-between flex-column bg-nature-99">
                      <div class="d-flex justify-content-between align-items-center">
                          <h5 class="card-title fs-sm fs-lg-6 ms-lg-2">${
                            item.productName
                          }</h5>
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
                                  ${
                                    item.discount > 0
                                      ? `
                                      <span class="fs-sm fs-lg-6 me-1 listPrice">$${formatNumber(
                                        item.price
                                      )}</span>
                                      <p class="fs-sm fs-lg-6 discountPrice">$${formatNumber(
                                        discountPrice
                                      )}</p>
                                  `
                                      : `
                                      <p class="fs-sm fs-lg-6">$${formatNumber(
                                        item.price
                                      )}</p>
                                  `
                                  }
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </a>                            
      </div>
      `;
  });

  productListCard.innerHTML = str;

  function getStatusClass(status) {

    let statusCard = "";
    let statusClassNames = "";
    let shouldHide = false;

    switch (status) {
      case "補貨中":
        statusClassNames = "productList-category-tag status-new";
        break;

      case "預購":
        statusClassNames = "productList-category-tag status-hot";
        break;

      case "現貨":
        statusClassNames = "productList-category-tag status-default";
        break;

      default:
        statusClassNames = "productList-category-soldOut-tag";
        statusCard = "bg-dark";
        shouldHide = true;
        break;
    }

    return { statusCard, statusClassNames, shouldHide };
  }

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
AOS.init({
  useClassNames: true,
  initClassName: 'false',
  animatedClassName: "animate__animated",
});
