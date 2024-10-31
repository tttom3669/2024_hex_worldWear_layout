export function setupSelectAllForEachItem() {
    const allItems = document.querySelectorAll('.accordion-item');

    allItems.forEach(item => {
        // 尋找每個類別的「全部」選項
        const allCheckbox = item.querySelector('input[type="checkbox"]:first-child');

        if (allCheckbox) {
            allCheckbox.removeEventListener('change', handleAllCheckboxChange);
            allCheckbox.addEventListener('change', handleAllCheckboxChange);

            const checkboxes = item.querySelectorAll('input[type="checkbox"]:not(:first-child)');
            checkboxes.forEach(cb => {
                cb.removeEventListener('change', handleCheckboxChange);
                cb.addEventListener('change', handleCheckboxChange);
            });
        }
    });
}

// 處理「全部」checkbox 的變更
function handleAllCheckboxChange(event) {
    const isChecked = this.checked;
    const item = this.closest('.accordion-item');
    const checkboxes = item.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((cb) => {
        cb.checked = isChecked; // 根據「全部」的狀態選取或取消選取
    });
}

// 處理子項目checkbox的變更
function handleCheckboxChange(event) {
    const item = this.closest('.accordion-item');
    const allCheckbox = item.querySelector('input[type="checkbox"]:first-child');

    const checkboxes = item.querySelectorAll('input[type="checkbox"]:not(:first-child)');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    allCheckbox.checked = allChecked; // 更新「全部」checkbox 的狀態
}
