# 2024 網頁切版直播班專題 X 六角學院

## #F-14 WorldWear
### 作品緣由
  - 在多次出國的經驗中，發現許多國外的服飾不僅款式新穎、品質優良，更重要的是價格遠比台灣市場上的同類商品來得實惠。隨著社群媒體的興起，也在 IG 上看到越來越多的人開始組織代購團，將海外的優質商品引進台灣，滿足大家對時尚與品質的追求。
  - 因此，我們創立了 WorldWear，這是一個專注於服飾代購的專業平台。我們致力於從世界各地精選優質品牌，提供上衣、外套、褲/裙、洋裝等多樣化的服飾選擇，讓台灣的消費者能夠輕鬆購買到心儀的國際時尚好物。
  - 我們深知購物流程的繁瑣，因此 WorldWear 提供全程無憂的服務，從下單到送貨都由我們專業的團隊把關，確保每一位顧客都能享受到愉快的購物體驗。

## 組員及分工
  - @Ryan Chou (主揪)
    - 產品內頁
    - 首頁 - 網站特點  
  - @Johnson
    - 環境建置
    - 首頁 (含 RWD)
    - 共通元件 - 頁首
  - @howard
    - 購物車
    - 共通元件 - 頁尾
  - @鬧鬧
    - 產品列表（含 RWD）
    - PPT 製作

## 專案技術
  - HTML
  - JavaScript
  - Bootstrap 5
  - Swiper
  - AOS
  - GSAP

## Node.js 版本
  - 專案的 Node.js 版本需為 v16 以上
  - 查看自己版本指令：`node -v`


## 指令列表
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - scss # SCSS 的樣式放置處

  - layout # ejs 模板放置處
  - pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項
- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽
vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能


## 部署 gh-pages 流程說明
### Windows 版本
1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令
```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署
