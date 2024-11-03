import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

/* 顏色、尺寸按鈕 */
const colorBtns = document.querySelectorAll('.color-btn button');
const sizeBtns = document.querySelectorAll('.btn-size button');
const selectedColorSpan = document.getElementById('selected-color');
const selectedSizeSpan = document.getElementById('selected-size');

colorBtns.forEach(button => {
  button.addEventListener('click', function () {
    console.log('click')
    // 移除所有按鈕的 active 類
    colorBtns.forEach(btn => btn.classList.remove('active'));

    // 為被點擊的按鈕添加 active 類
    this.classList.add('active');

    // 更新顯示的顏色
    selectedColorSpan.textContent = this.getAttribute('data-color');
  });
});

sizeBtns.forEach(button => {
  button.addEventListener('click', function () {
    console.log('click')
    // 移除所有按鈕的 active 類
    sizeBtns.forEach(btn => btn.classList.remove('active'));

    // 為被點擊的按鈕添加 active 類
    this.classList.add('active');

    // 更新顯示的顏色
    selectedSizeSpan.textContent = this.getAttribute('data-size');
  });
});

/* 數量按鈕 */
const quantityInput = document.getElementById('quantity');
const quantityDisplay = document.getElementById('quantity-display');
const btnCountLeft = document.querySelector('.btn-count-left');
const btnCountRight = document.querySelector('.btn-count-right');

btnCountLeft.addEventListener('click', function () {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
    quantityDisplay.textContent = quantityInput.value;
  }
});

btnCountRight.addEventListener('click', function () {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
  quantityDisplay.textContent = quantityInput.value;
});

// swiper

new Swiper('.swiper__popularProducts', {
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

/* 收藏按鈕 */
const favoriteButton = document.getElementById('favorite-button');
const favoriteIcon = document.getElementById('favorite-icon');

favoriteButton.addEventListener('click', function () {
  if (favoriteIcon.getAttribute('src') === '../assets/images/icon-heart-outline.png') {
    favoriteIcon.setAttribute('src', '../assets/images/icon-heart-fill.png');
  } else {
    favoriteIcon.setAttribute('src', '../assets/images/icon-heart-outline.png');
  }
});
