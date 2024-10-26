export function productRender(productListCard, productList) {

  let str = '';

  productList.forEach(item => {
      
      const { statusCard, statusClassNames, shouldHide } = getStatusClass(item.status);
      const { discount } = getDiscountPrice(item.discountPrice);

      str += `
        <div class="col-6 col-md-4">
          <a href="#" class="productList-card card-column">
              <div class="card g-3 h-md-100">
                  <div class="w-100 h-75 w-md-100 h-md-100 overflow-hidden img-wrapper position-relative ${statusCard} productList-card-img">
                    <img src="/assets/images/product/${item.img}" 
                          class="card-img-top cover-img w-100 h-100 ${shouldHide ? 'mask' : ''}" 
                          alt="productList-image"
                          style="object-fit: cover;">
                    <div class="position-absolute bottom-0 end-0 p-2 favorite-div">
                      <span >
                        <button type="button" class="btn btn-outline-danger favorite-button rounded-circle align-middle" data-favorite="false">
                          <img src="/assets/images/icon/favorite.svg" alt="Heart Icon" class="heartIcon-button">
                        </button>
                      </span>
                    </div>
                  </div>
                  <div class="card-img-overlay text-white ${shouldHide ? '' : 'd-none'}">
                    <h5 class="card-title">Soldout</h5>
                    <p class="card-text">已售完</p>
                  </div>
                  <div class="${statusClassNames} position-absolute opacity-70 ">
                      <span class="me-1">${item.status}</span>
                  </div>  
                  <div class="card-body p-0 mt-3 mt-lg-4 d-flex justify-content-between flex-column">
                      <div class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title fs-7 fs-lg-6 ms-2 mb-2">${item.productName}</h5>
                        <p class="d-flex justify-content-center align-items-center me-2">
                          <span class="text-center">
                            <button type="button" class="btn btn-outline-danger favorite rounded-circle align-middle" data-favorite="false">
                              <img src="/assets/images/icon/favorite.svg" alt="Heart Icon" class="heartIcon">
                            </button>
                          </span>
                        </p>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-7">
                        <div class="d-flex align-items-center mt-1 mt-lg-2">
                          <div class="d-flex justify-content-center align-items-center ms-2">
                            <span class="${discount ? 'd-none' : ''} discountText fs-7 fs-lg-6">
                              ${item.discountPrice}
                            </span>
                            <p class="fs-7 fs-lg-6 ${discount ? '' : 'cost'}">
                              ${item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </a>                            
        </div>
      </div>
      `
    });
    productListCard.innerHTML = str;

    function getDiscountPrice(discount) {
      return discount > 0;
    }
      
    function getStatusClass(status) {

      let statusCard       = '';
      let statusClassNames = '';
      let shouldHide       = false;

      switch (status) {
          case '補貨中':
              statusClassNames = 'productList-category-tag status-new';           
              break;
          case '預購':
              statusClassNames = 'productList-category-tag status-hot';        
              break;
          case '現貨':
              statusClassNames = 'productList-category-tag status-default';           
              break;
          default:
              statusClassNames = 'productList-category-soldOut-tag';
              statusCard  = 'bg-dark';
              shouldHide = true;
              break;
      } 
      return { statusCard, statusClassNames, shouldHide};
    }
  }
 