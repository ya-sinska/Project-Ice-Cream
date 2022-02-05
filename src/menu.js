
(() => {
  const refst = {
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    mobileMenu: document.querySelector('.js-menu-container'),
    mobileMenuLinks: document.querySelectorAll('.mobile-menu__link'),
  };

  refst.openMenuBtn.addEventListener('click', toggleMenu);
  refst.closeMenuBtn.addEventListener('click', toggleMenu);
  refst.mobileMenuLinks.forEach(link => link.addEventListener('click', toggleMenu));

  function toggleMenu() {
    refst.mobileMenu.classList.toggle('is-open');
  }
})();

