function makeHeader() {
  const headerDiv = document.createElement('header');
  const headerList = document.createElement('ul');

  const home = document.createElement('li');
  home.classList.add('tab');
  home.textContent = 'Home';
  const menu = document.createElement('li');
  menu.classList.add('tab');
  menu.textContent = 'Menu';
  const contact = document.createElement('li');
  contact.classList.add('tab');
  contact.textContent = 'Contact';

  for (let item of [home, menu, contact]) {
    headerList.appendChild(item);
  }

  headerDiv.appendChild(headerList);

  return headerDiv;
}

export default makeHeader;
