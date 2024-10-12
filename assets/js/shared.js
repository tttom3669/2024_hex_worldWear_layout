mainMenuHandler();
function mainMenuHandler() {
  const menuLinkGroup = document.querySelectorAll(`.dropdown > .l-menu__link `);
  menuLinkGroup.forEach((link) => {
    const href = link.attributes.href.value;
    const target = document.querySelector(`${href}`);

    link.addEventListener('click', () => {
      link.classList.toggle('active');
      target.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
      console.dir(e.target);
      if (
        e.target === link ||
        e.target === target ||
        e.target.offsetParent === target
      ) {
        return;
      }
      if (target.classList.contains('show')) {
        target.classList.remove('show');
        link.classList.remove('active');
      }
    });
  });
}
