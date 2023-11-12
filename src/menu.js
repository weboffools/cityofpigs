import acornImg from './images/acorns.jpeg';
import onionImg from './images/onions.jpeg';
import barleyImg from './images/barley.jpeg';
import figImg from './images/figs.jpeg';
import rootImg from './images/roots.jpeg';
import wineImg from './images/wine.jpeg';
import cheeseImg from './images/cheese.jpeg';

function menuDiv() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('menu-container');

  const mainHeading = document.createElement('div');
  mainHeading.classList.add('menu-heading');
  const menuTitle = document.createElement('h1');
  menuTitle.classList.add('menu-title');
  menuTitle.textContent = 'Our Menu';
  mainHeading.appendChild(menuTitle);

  const menuItems = [
    {
      name: 'Acorns',
      image: acornImg,
      content: 'Nutty goodness',
      dom: {},
    },
    {
      name: 'Onions',
      image: onionImg,
      content: 'Pungent',
      dom: {},
    },
    {
      name: 'Barley Cakes',
      image: barleyImg,
      content: 'Noble',
      dom: {},
    },
    {
      name: 'Figs',
      image: figImg,
      content: 'A fine dessert',
      dom: {},
    },
    {
      name: 'Boiled Roots',
      image: rootImg,
      content: 'Snout dug',
      dom: {},
    },
    {
      name: 'Wine',
      image: wineImg,
      content: 'Our house special',
      dom: {},
    },
    {
      name: 'Cheese',
      image: cheeseImg,
      content: 'A relish',
      dom: {},
    }
  ];
  
  class MenuItem {

    constructor(name) {
      this.name = name;
    }

    addImg(source) {
      const image = document.createElement('img');
      image.classList.add('menu-img');
      image.src = source;

      return image;
    }
    
    addHeading(content) {
      const heading = document.createElement('h2');
      heading.classList.add('menu-item-head');
      heading.textContent = content;

      return heading;
    }

    addDescription(content) {
      const body = document.createElement('p');
      body.classList.add('menu-item-body');
      body.textContent = content;

      return body;
    }
  }

  mainContainer.appendChild(mainHeading);

  for (let i = 0; i < menuItems.length; i++) {
    let itemNode = document.createElement('div');
    let item = menuItems[i];
    item.dom = new MenuItem(item.name);
    itemNode.classList.add('menu-item');
    itemNode.appendChild(item.dom.addHeading(item.name));
    itemNode.appendChild(item.dom.addImg(item.image));
    itemNode.appendChild(item.dom.addDescription(item.content));
    mainContainer.appendChild(itemNode);
  }

  return mainContainer;
}

export default menuDiv;
