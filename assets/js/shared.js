import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

(function init() {
  mainMenuHandler();
  headerGsap();
  topBtnGsap();
})();

/**
 * 主要選單管理
 */
function mainMenuHandler() {
  const menuLinkGroup = document.querySelectorAll(`.dropdown > .l-menu__link `);
  const collapseBtn = document.querySelector(`.l-menu__collapse-btn`);
  const collapseContent = document.querySelector(`.l-menu__collapse`);
  const searchTrigger = document.querySelector(`.header__searchIcon`);
  const searchBar = document.querySelector(`.header__searchBar-container`);

  // 手機版選單 icon 切換 (未登入)
  const toggleCollapseBtn = function (type) {
    // 登出時手機版選單，點擊會更換 icon
    if (!collapseBtn.classList.contains('l-menu__collapse-btn--login')) {
      const svgList = collapseBtn.querySelector('.header--logout__item')
        .children[0];
      const svgClose = collapseBtn.querySelector('.header--logout__item')
        .children[1];
      if (type === 'close') {
        svgList.classList.remove('d-none');
        svgClose.classList.add('d-none');
      } else if ('add') {
        svgList.classList.add('d-none');
        svgClose.classList.remove('d-none');
      } else {
        svgList.classList.toggle('d-none');
        svgClose.classList.toggle('d-none');
      }
    }
  };

  // 關閉下拉選單內容
  const closeContent = (target = 'all') => {
    menuLinkGroup.forEach((link) => {
      const href = link.attributes.href.value;
      const dropdown = document.querySelector(`${href}`);
      if (target === 'all' || target !== dropdown) {
        link.classList.remove('active');
        dropdown.classList.remove('show');
      }
    });

    if (target === 'all' || target !== searchBar) {
      searchBar.classList.remove('show');
      searchTrigger.classList.remove('active');
    }
    if (target === 'all' || target !== collapseContent) {
      collapseContent.classList.remove('show');
      toggleCollapseBtn('close');
    }
  };

  // 手機版選單按鈕點擊監控
  collapseBtn.addEventListener('click', (e) => {
    const content = document.querySelector(`.l-menu__collapse`);
    const isCollapse = !content.classList.contains('show');
    toggleCollapseBtn();

    if (isCollapse) {
      closeContent(content);
      content.classList.add('show');
    } else {
      closeContent();
    }
    // 防止點擊選單本身時關閉選單
    e.stopPropagation();
  });

  // 搜尋按鈕點擊監控
  searchTrigger.addEventListener('click', (e) => {
    const isCollapse = !searchBar.classList.contains('show');

    if (isCollapse) {
      closeContent(searchBar);
      searchBar.classList.add('show');
      searchTrigger.classList.add('active');
    } else {
      closeContent();
    }
    e.stopPropagation();
  });

  // 下拉選單點擊監控
  menuLinkGroup.forEach((link) => {
    const href = link.attributes.href.value;
    const target = document.querySelector(`${href}`);

    link.addEventListener('click', (e) => {
      const isCollapse = !target.classList.contains('show');
      if (isCollapse) {
        closeContent(target);
        link.classList.add('active');
        target.classList.add('show');
      } else {
        closeContent();
      }
      // 防止點擊選單本身時關閉選單
      e.stopPropagation();
      e.preventDefault();
    });
  });

  // 點擊其他地方關閉所有選單
  document.addEventListener('click', () => {
    closeContent();
    searchBar.classList.remove('show');
  });

  // 避免點擊選單內容時，關閉選單
  document.querySelectorAll('.l-menu__dropdown').forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
      // 防止點擊選單本身時關閉選單
      e.stopPropagation();
    });
  });
  collapseContent.addEventListener('click', (e) => {
    // 防止點擊選單本身時關閉選單
    e.stopPropagation();
  });

  searchBar.addEventListener('click', (e) => {
    // 防止點擊選單本身時關閉選單
    e.stopPropagation();
  });
}

/**
 * Header 滾動監控
 */
function headerGsap() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  let hederType = null;
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: main,
    start: 'top top', // 當 banner 頂部與 viewport 頂端對齊時觸發
    // markers: true,
    onEnter: () => {
      // 向下滾動到達時添加 class

      if (header.classList.contains('header--dark')) {
        hederType = 'dark';
        header.classList.remove('header--dark');
      } else {
        hederType = 'light';
        header.classList.remove('header--light');
      }
      header.classList.add('header--scroll');
    },
    onLeaveBack: () => {
      // 向上滾動回來時移除 class
      header.classList.remove('header--scroll');
      if (hederType === 'dark') {
        header.classList.add('header--dark');
      } else {
        header.classList.add('header--light');
      }
    },
  });
}

/**
 * top btn 滾動監控
 */
function topBtnGsap() {
  const main = document.querySelector('main');
  const topBtn = document.querySelector(`.topBtn`);
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: main,
    start: '80% 70%',
    markers: true,
    onEnter: () => {
      // 向下滾動到達時移除 class
      topBtn.classList.remove('opacity-0');
      topBtn.classList.remove('pe-none');
    },
    onLeaveBack: () => {
      // 向上滾動回來時添加 class
      topBtn.classList.add('opacity-0');
      topBtn.classList.add('pe-none');
    },
  });
}
