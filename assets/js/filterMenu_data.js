import { categoryMenuRender } from "./filterMenu.js";

const categoryMenuItem = document.querySelector('.filterMenu-wrap');

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
          { id: "categoryItem-18", label: "全部" },
          { id: "categoryItem-19", label: "預購中" },
          { id: "categoryItem-20", label: "補貨中" },
          { id: "categoryItem-21", label: "現貨" },
          { id: "categoryItem-22", label: "預購" }
        ],
      }
];

// 渲染類別選單
if (categoryMenuItem) {
    const categoryMenuRenderData = () => {
        categoryMenuRender(categoryMenuItem, categoriesData);
    };
  
    categoryMenuRenderData();
  } else {
    console.error('roductList-card-wrap element not found');
  }
