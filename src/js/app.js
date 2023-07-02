import { isWebp } from './modules/service.js';


isWebp();


const body = document.body;
const burgerMenuToggleButton = document.querySelector('.header__menu-toggle');
const documentTabElements = [...document.querySelectorAll('a, input, button')].filter(elem => !elem.closest('header'));

burgerMenuToggleButton.addEventListener('click', () => {
  body.classList.toggle('menu-opened');
  if (body.classList.contains('menu-opened')) {
    documentTabElements.forEach((elem) => elem.setAttribute('tabindex', '-1'));
  } else {
    documentTabElements.forEach((elem) => elem.setAttribute('tabindex', '0'));
  }
});