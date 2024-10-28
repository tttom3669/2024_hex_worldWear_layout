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
              <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-${index + 1}">
                      <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" 
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
                  <div class="accordion-body mb-2 d-flex text-nowrap flex-wrap gap-2">
              `;

        category.options.forEach((option) => {
            str += `
                  <input type="checkbox" class="btn-check" name="categoryItem" id="${option.id}">
                  <label class="input-btn btn btn-outline-primary fs-sm" for="${option.id}">${option.label}</label>`;
        });

        str += `
                      </div>
                  </div>
              </div>`;
    });

    str += `</div></nav>`;

    categoryMenuItem.innerHTML = str;

    setupAccordionToggle();
};

function setupAccordionToggle() {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            const collapseElement = this.nextElementSibling; // Get the next sibling which is the collapse div

            // Check if the collapse element is currently shown
            const isOpen = collapseElement.classList.contains('show');

            // Toggle the collapse state based on current state
            if (!isOpen) {
                // If currently closed, open it
                collapseElement.classList.remove('collapse');
                collapseElement.classList.add('show');
                this.classList.remove('collapsed'); // Remove the collapsed class from button
                this.setAttribute('aria-expanded', 'true'); // Update aria attribute
            } else {
                // If currently open, close it
                collapseElement.classList.remove('show');
                collapseElement.classList.add('collapse');
                this.classList.add('collapsed'); // Add the collapsed class back to button
                this.setAttribute('aria-expanded', 'false'); // Update aria attribute
            }
        });
    });
}

  
  
  
/*
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
              <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-${index + 1}">
                      <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" 
                              data-bs-toggle="collapse"
                              data-bs-target="#${collapseId}" 
                              aria-expanded="${index === 0 ? 'true' : 'false'}" 
                              aria-controls="${collapseId}">
                          ${category.title}
                      </button>
                  </h2>
                  <div id="${collapseId}" 
                       class="accordion-collapse collapse ${index === 0 ? 'show' : ''}"
                       aria-labelledby="heading-${index + 1}" 
                       data-bs-parent="#navCategory">
                  <div class="accordion-body mb-2 d-flex text-nowrap flex-wrap gap-2">
              `;

      category.options.forEach((option) => {
        str += `
                  <input type="checkbox" class="btn-check" name="categoryItem" id="${option.id}">
                  <label class="input-btn btn btn-outline-primary fs-sm" for="${option.id}">${option.label}</label>`;
      });

      str += `
                      </div>
                  </div>
              </div>`;
    });

    str += `</div></nav>`;

    categoryMenuItem.innerHTML = str;

    setupAccordionToggle();
};

function setupAccordionToggle() {
    const buttons = document.querySelectorAll('#navCategory .accordion-button');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            buttons.forEach((btn, idx) => {
                const collapseElement = document.querySelector(`#collapse-list-${idx + 1}`);
                if (index === idx) {
                    collapseElement.classList.remove('collapse');
                    collapseElement.classList.add('show');
                    btn.classList.remove('collapsed'); // Remove 'collapsed' from the active button
                } else {
                    collapseElement.classList.remove('show');
                    collapseElement.classList.add('collapse');
                    btn.classList.add('collapsed'); // Add 'collapsed' to non-active buttons
                }
            });
        });
    });
}
*/

/*
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
              <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-${index + 1}">
                      <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" 
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
                  <div class="accordion-body mb-2 d-flex text-nowrap flex-wrap gap-2">
              `;
  
      category.options.forEach((option) => {
        str += `
                  <input type="checkbox" class="btn-check" name="categoryItem" id="${option.id}">
                  <label class="input-btn btn btn-outline-primary fs-sm" for="${option.id}">${option.label}</label>`;
      });
  
      str += `
                      </div>
                  </div>
              </div>`;
    });
  
    str += `</div></nav>`;
  
    categoryMenuItem.innerHTML = str;
  
    setupAccordionToggle();
  };
  
  function setupAccordionToggle() {
      const buttons = document.querySelectorAll('.accordion-button');
      
      buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
          buttons.forEach((btn, idx) => {
            const collapseElement = document.querySelector(`#collapse-list-${idx + 1}`);
            if (index === idx) {
              collapseElement.classList.remove('collapse');
              collapseElement.classList.add('show');
              btn.classList.remove('collapsed'); // Remove 'collapsed' from the active button
            } else {
              collapseElement.classList.remove('show');
              collapseElement.classList.add('collapse');
              btn.classList.add('collapsed'); // Add 'collapsed' to non-active buttons
            }
          });
        });
      });
  }
  */