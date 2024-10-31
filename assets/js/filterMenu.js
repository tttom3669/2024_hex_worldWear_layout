import { setupSelectAllForEachItem } from './filterMenu_selectAll.js';

export function categoryMenuRender(categoryMenuItem, categoriesData) {
    let str = `
      <nav class="navCategory" id="navbarCategory">
          <div class="d-flex justify-content-between align-items-center w-100 mb-4 mt-6">
              <span class="navbar-brand btnClose"><h6 class="ps-4">類別</h6></span>
          </div>
          <div class="accordion" id="navCategory">`;

    categoriesData.forEach((category, index) => {
        const collapseId = `collapse-list-${index + 1}`;
        str += `
              <div class="accordion-item category-item">
                  <h2 class="accordion-header" id="heading-${index + 1}">
                      <button class="accordion-button category-button ${index === 0 ? '' : 'collapsed'}" type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#${collapseId}"
                              aria-expanded="${index === 0 ? 'true' : 'false'}"
                              aria-controls="${collapseId}">
                          ${category.title}
                      </button>
                  </h2>
                  <div id="${collapseId}"
                       class="accordion-collapse collapse ${index === 0 ? 'show' : ''}"
                       aria-labelledby="heading-${index + 1}">
                  <div class="accordion-body mb-2 d-flex text-nowrap flex-wrap gap-2 category-subItem">`;

        category.options.forEach((option) => {
            str += `
                  <input type="checkbox" class="btn-check" name="categoryItem" id="${option.id}" style="pointer-events: auto;">
                  <label class="btn btn-outline-primary fs-sm" for="${option.id}">${option.label}</label>`;
        });

        str += `</div></div></div>`;
    });

    str += `</div></nav>`;

    categoryMenuItem.innerHTML = str;

    setupAccordionToggle();
    setupSelectAllForEachItem(); // 確保設置全選功能
}

function setupAccordionToggle() {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            const collapseElement = this.nextElementSibling;
            const isOpen = collapseElement.classList.contains('show');

            if (!isOpen) {
                collapseElement.classList.remove('collapse');
                collapseElement.classList.add('show');
                this.classList.remove('collapsed');
                this.setAttribute('aria-expanded', 'true');
            } else {
                collapseElement.classList.remove('show');
                collapseElement.classList.add('collapse');
                this.classList.add('collapsed');
                this.setAttribute('aria-expanded', 'false');
            }
        });
    });
}