import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import AOS from 'aos';

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

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
