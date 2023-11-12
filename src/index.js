import './style.css';
import mainComponent from './home.js';
import makeHeader from './header.js';
import menuDiv from './menu.js';
import contactDiv from './contact.js';

document.body.appendChild(makeHeader());
document.body.appendChild(mainComponent());

const changeContent = (newTab) => {
  const mainContent = document.querySelector('.main-content');
  mainContent.replaceChildren();
  mainContent.appendChild(newTab);
};

const homeTab = document.querySelector('.home-tab');
const menuTab = document.querySelector('.menu-tab');
const contactTab = document.querySelector('.contact-tab');

homeTab.addEventListener('click', () => {
  changeContent(mainComponent());
});

menuTab.addEventListener('click', () => {
  changeContent(menuDiv());
});

contactTab.addEventListener('click', () => {
  changeContent(contactDiv());
});

