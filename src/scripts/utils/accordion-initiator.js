const AccordionInitiator = {
  init({ accordionBtns }) {
    for (const accordionBtn of accordionBtns) {
      accordionBtn.addEventListener('click', () => {
        this._accordionFunc(accordionBtn);
      });
    }
  },

  _accordionFunc(accordionBtn) {
    const dropdown = accordionBtn.querySelector('i');

    if (dropdown.classList.contains('down')) {
      dropdown.classList.replace('down', 'up');
    } else {
      dropdown.classList.replace('up', 'down');
    }

    accordionBtn.classList.toggle('active');

    accordionBtn.nextElementSibling.classList.toggle('active');
  },
};

export default AccordionInitiator;
