import mIcon from './images/silverware.svg';
import hIcon from './images/home.svg';
import cIcon from './images/text-box.svg';

function makeHeader() {
  const headerDiv = document.createElement('header');
  const headerList = document.createElement('ul');

  const home = document.createElement('li');
  home.classList.add('tab');
  home.classList.add('home-tab');
  home.textContent = 'Home';
  const homeIcon = new Image();
  homeIcon.src = hIcon;
  homeIcon.setAttribute('width', '32px');
  home.prepend(homeIcon);
  

  const menu = document.createElement('li');
  menu.classList.add('tab');
  menu.classList.add('menu-tab');
  menu.textContent = 'Menu';
  const menuIcon = new Image();
  menuIcon.src = mIcon;
  menuIcon.setAttribute('width', '32px');
  menu.prepend(menuIcon);

  const contact = document.createElement('li');
  contact.classList.add('tab');
  contact.classList.add('contact-tab');
  contact.textContent = 'Contact';
  const contactIcon = new Image();
  contactIcon.src = cIcon;
  contactIcon.setAttribute('width', '32px');
  contact.prepend(contactIcon);

  for (let item of [home, menu, contact]) {
    headerList.appendChild(item);
  }


  headerDiv.appendChild(headerList);

  return headerDiv;
}

export default makeHeader;
