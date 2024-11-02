const favoriteIcons = document.querySelectorAll(".favorite");

favoriteIcons.forEach((item) => {
    let isFavorite = item.dataset.favorite === "true";

    // 初始狀態添加類別
    if (isFavorite) {
        item.classList.add("isLike");
    }

    item.addEventListener("click", (e) => {
        e.preventDefault(); // 防止觸發連結
        isFavorite = !isFavorite;
        item.setAttribute("data-favorite", isFavorite);

        if (isFavorite) {
            item.classList.add("isLike"); // 添加選取樣式
            item.classList.remove("btn-outline-danger"); // 移除原有邊框樣式
            item.classList.add("btn-danger"); // 使其為紅色按鈕
        } else {
            item.classList.remove("isLike"); // 移除選取樣式
            item.classList.add("btn-outline-danger"); // 恢復邊框樣式
            item.classList.remove("btn-danger"); // 移除填充樣式
        }
    });
});


const favoriteIcons_s = document.querySelectorAll(".favorite-button");

favoriteIcons_s.forEach((item) => {
    let isFavorite = item.dataset.favorite === "true";

    // 初始狀態添加類別
    if (isFavorite) {
        item.classList.add("isLike");
    }

    item.addEventListener("click", (e) => {
        e.preventDefault(); // 防止觸發連結
        isFavorite = !isFavorite;
        item.setAttribute("data-favorite", isFavorite);

        if (isFavorite) {
            item.classList.add("isLike"); // 添加選取樣式
            item.classList.remove("btn-outline-danger"); // 移除原有邊框樣式
            item.classList.add("btn-danger"); // 使其為紅色按鈕
        } else {
            item.classList.remove("isLike"); // 移除選取樣式
            item.classList.add("btn-outline-danger"); // 恢復邊框樣式
            item.classList.remove("btn-danger"); // 移除填充樣式
        }
    });
});
