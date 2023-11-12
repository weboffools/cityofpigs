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
      image: './images/acorns.jpeg',
      content: 'Nutty goodness',
      dom: {},
    },
    {
      name: 'Onions',
      image: './images/onions.jpeg',
      content: 'Pungent',
      dom: {},
    },
    {
      name: 'Barley Cakes',
      image: './images/barley.jpeg',
      content: 'Noble',
      dom: {},
    },
    {
      name: 'Figs',
      image: './images/figs.jpeg',
      content: 'A fine dessert',
      dom: {},
    },
    {
      name: 'Boiled Roots',
      image: './images/roots.jpeg',
      content: 'Snout dug',
      dom: {},
    },
    {
      name: 'Wine',
      image: './images/wine.jpeg',
      content: 'Our house special',
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
