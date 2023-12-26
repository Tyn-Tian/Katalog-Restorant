const DrawerInitiator = {
  init({ navBtn, navbar }) {
    navBtn.addEventListener('click', () => {
      this._toggleDrawer(navBtn, navbar);
    });
  },

  _toggleDrawer(navBtn, navbar) {
    const visible = navbar.getAttribute('data-visible');
    if (visible === 'false') {
      navbar.setAttribute('data-visible', true);
      navBtn.setAttribute('aria-expanded', true);
    } else {
      navbar.setAttribute('data-visible', false);
      navBtn.setAttribute('aria-expanded', false);
    }
  },
};

export default DrawerInitiator;
