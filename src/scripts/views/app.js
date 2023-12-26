import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import AccordionInitiator from '../utils/accordion-initiator';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    navBtn, navbar, content, accordionBtns,
  }) {
    this._navBtn = navBtn;
    this._navbar = navbar;
    this._content = content;
    this._accordionBtns = accordionBtns;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      navBtn: this._navBtn,
      navbar: this._navbar,
      visible: this._visible,
    });

    AccordionInitiator.init({
      accordionBtns: this._accordionBtns,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
