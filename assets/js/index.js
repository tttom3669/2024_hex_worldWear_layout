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
          slidesPerGroup: 2,
          slidesPerView: 2,
        },
        768: {
          slidesPerGroup: 3,
          slidesPerView: 3,
        },
        992: {
          slidesPerGroup: 4,
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

const swiperPopularProducts = new Swiper('.swiper__popularProducts', {
  modules: [Navigation, Pagination],
  // loop: true,
  slidesPerView: 1.375,
  breakpoints: {
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    768: {
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
  },
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: document.querySelector(
      '.swiper__popularProducts-container .swiper-button-next'
    ),
    prevEl: document.querySelector(
      '.swiper__popularProducts-container .swiper-button-prev'
    ),
  },
});
