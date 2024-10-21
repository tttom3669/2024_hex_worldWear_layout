import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const productCategoriesContainer = document.querySelectorAll(
  `.swiper__productCategories-container`
);

productCategoriesContainer.forEach((item) => {
  const swiperProductCategories = new Swiper(
    item.querySelector('.swiper__productCategories'),
    {
      modules: [Navigation, Pagination],
      slidesPerView: 1.375,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },

      spaceBetween: 24,
      pagination: {
        el: item.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: item.querySelector('.swiper-button-next'),
        prevEl: item.querySelector('.swiper-button-prev'),
      },
    }
  );
});
