import { categoryMenuRender } from "./filterMenu.js";

// 獲取主頁面的 filterMenu-wrap
const categoryMenuItem = document.querySelector(".filterMenu-wrap");

// 獲取 offcanvas 內的 filterMenu-wrap
const offcanvasFilterMenuWrap = document.querySelector(
  "#offcanvasCategoryMenu .filterMenu-wrap"
);

// 定義類別資料
const categoriesData = [
  {
    title: "上衣",
    options: [
      { id: "categoryItem-1", label: "全部" },
      { id: "categoryItem-2", label: "上衣" },
      { id: "categoryItem-3", label: "T恤" },
      { id: "categoryItem-4", label: "無袖" },
      { id: "categoryItem-5", label: "襯衫" },
    ],
  },
  {
    title: "外套",
    options: [
      { id: "categoryItem-6", label: "全部" },
      { id: "categoryItem-7", label: "長外套" },
      { id: "categoryItem-8", label: "風衣" },
      { id: "categoryItem-9", label: "皮外套" },
    ],
  },
  {
    title: "褲子",
    options: [
      { id: "categoryItem-10", label: "全部" },
      { id: "categoryItem-11", label: "長褲" },
      { id: "categoryItem-12", label: "短褲" },
      { id: "categoryItem-13", label: "運動褲" },
    ],
  },
  {
    title: "洋裝",
    options: [
      { id: "categoryItem-14", label: "全部" },
      { id: "categoryItem-15", label: "連身裙" },
      { id: "categoryItem-16", label: "休閒裙" },
      { id: "categoryItem-17", label: "晚禮服" },
    ],
  },
  {
    title: "配件",
    options: [
      { id: "categoryItem-18", label: "全部" },
      { id: "categoryItem-19", label: "帽子" },
      { id: "categoryItem-20", label: "圍巾" },
      { id: "categoryItem-21", label: "手套" },
    ],
  },
  {
    title: "狀態",
    options: [
      { id: "categoryItem-22", label: "全部" },
      { id: "categoryItem-23", label: "預購中" },
      { id: "categoryItem-24", label: "補貨中" },
      { id: "categoryItem-25", label: "現貨" },
      { id: "categoryItem-26", label: "預購" },
    ],
  },
];

// 根據螢幕大小調整 id 並渲染類別選單
function adjustOptionIdsAndRender(categories, menuItem, offcanvasItem) {
  const isSmallScreen = window.matchMedia("(max-width: 576px)").matches;

  categories.forEach((category) => {
    category.options.forEach((option) => {
      // 根據螢幕大小調整 id
      if (isSmallScreen) {
        if (!option.id.endsWith('-sm')) {
          option.id = `${option.id}-sm`; // 為小型設備添加後綴
        }
      } else {
        option.id = option.id.replace(/-sm$/, ''); // 移除後綴
      }
    });
  });

  // 渲染類別選單
  if (menuItem) {
    categoryMenuRender(menuItem, categories);
  } else {
    console.error("menuItem element not found");
  }

  // 渲染類別選單到 offcanvas
  if (offcanvasItem) {
    categoryMenuRender(offcanvasItem, categories);
  } else {
    console.error("offcanvasItem element not found");
  }
}

// 初始渲染
adjustOptionIdsAndRender(categoriesData, categoryMenuItem, offcanvasFilterMenuWrap);

// 監聽螢幕大小變化
window.addEventListener('resize', () => {
  adjustOptionIdsAndRender(categoriesData, categoryMenuItem, offcanvasFilterMenuWrap);
});

// 監聽 offcanvas 開啟事件
const offcanvasElement = document.getElementById("offcanvasCategoryMenu");
offcanvasElement.addEventListener("show.bs.offcanvas", function () {
  document.getElementById("header-container").style.display = "none";
});

offcanvasElement.addEventListener("hidden.bs.offcanvas", function () {
  document.getElementById("header-container").style.display = "block";
});
