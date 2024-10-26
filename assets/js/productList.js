import { productRender } from './product.js';

const productListCard = document.querySelector('.productList-card-wrap');
const productListCardList = [
    {
        productName: '休閒寬鬆褲',
        img: 'product_001.png',
        status: '預購',
        price: 'NTD.800',
        discountPrice:'NTD.950'
      },
      {
        productName: '印度有機棉T恤',
        img: 'product_002.png',
        status: '預購',
        price: 'NTD.1,290',
        discountPrice:''
      },
      {
        productName: '優雅襯衫',
        img: 'product_003.png',
        status: '現貨',
        price: 'NTD.590',
        discountPrice:''
      },
      {
        productName: '柔軟針織衫',
        img: 'product_004.png',
        status: '現貨',
        price: 'NTD.1,290',
        discountPrice:''
      },
      {
        productName: '牛仔長裙',
        img: 'product_005.png',
        status: '現貨',
        price: 'NTD.2,290',
        discountPrice:''
      },
      {
        productName: '商務彈性長袖襯衫',
        img: 'product_006.png',
        status: '現貨',
        price: 'NTD.490',
        discountPrice:''
      },
      {
        productName: '條紋襯衫裙',
        img: 'product_007.png',
        status: '補貨中',
        price: 'NTD.890',
        discountPrice:''
      },
      {
        productName: '法式薄紗襯衫',
        img: 'product_008.png',
        status: '補貨中',
        price: 'NTD.1,290',
        discountPrice:''
      },
      {
        productName: '素雅亞麻長褲',
        img: 'product_009.png',
        status: '',
        price: 'NTD.690',
        discountPrice:''
      },
      {
        productName: '素雅亞麻長褲',
        img: 'product_009.png',
        status: '',
        price: 'NTD.690',
        discountPrice:''
      },
      {
        productName: '素雅亞麻長褲',
        img: 'product_009.png',
        status: '',
        price: 'NTD.690',
        discountPrice:''
      },
      {
        productName: '素雅亞麻長褲',
        img: 'product_009.png',
        status: '',
        price: 'NTD.690',
        discountPrice:''
      },
      {
        productName: '素雅亞麻長褲',
        img: 'product_009.png',
        status: '',
        price: 'NTD.690',
        discountPrice:''
      }
];

if (productListCard) {
    const productListRenderData = () => {
        productRender(productListCard, productListCardList);
    };
  
    productListRenderData();
  } else {
    console.error('roductList-card-wrap element not found');
  }