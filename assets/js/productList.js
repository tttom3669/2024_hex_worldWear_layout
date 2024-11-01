import { productRender } from "./product.js";

const productListCard = document.querySelector(".productList-card-wrap");
const productListCardList = [
  {
    productName: "休閒寬鬆褲",
    img: "product_001.png",
    status: "預購",
    price: 900,
    discount: 10,
  },
  {
    productName: "印度有機棉T恤",
    img: "product_002.png",
    status: "預購",
    price: 1290,
    discount: 40,
  },
  {
    productName: "優雅襯衫",
    img: "product_003.png",
    status: "現貨",
    price: 590,
    discount: 0,
  },
  {
    productName: "柔軟針織衫",
    img: "product_004.png",
    status: "現貨",
    price: 1290,
    discount: 0,
  },
  {
    productName: "牛仔長裙",
    img: "product_005.png",
    status: "現貨",
    price: 2290,
    discount: 0,
  },
  {
    productName: "商務彈性長袖襯衫",
    img: "product_006.png",
    status: "現貨",
    price: 490,
    discount: 0,
  },
  {
    productName: "條紋襯衫裙",
    img: "product_007.png",
    status: "補貨中",
    price: 890,
    discount: 0,
  },
  {
    productName: "法式薄紗襯衫",
    img: "product_008.png",
    status: "補貨中",
    price: 1290,
    discount: 0,
  },
  {
    productName: "素雅亞麻長褲",
    img: "product_009.png",
    status: "",
    price: 690,
    discount: 0,
  },
];

if (productListCard) {
  const productListRenderData = () => {
    productRender(productListCard, productListCardList);
  };

  productListRenderData();
} else {
  console.error("roductList-card-wrap element not found");
}
