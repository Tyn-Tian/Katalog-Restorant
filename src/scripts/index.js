/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/reset.scss';
import '../styles/main.scss';
import App from './views/app.js';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  navBtn: document.querySelector('.mobile-btn'),
  navbar: document.querySelector('.navigation'),
  content: document.querySelector('.restoran'),
  accordionBtns: document.querySelectorAll('.accordion-item button'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
