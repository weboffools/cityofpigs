function component() {
  const element = document.createElement('div');

  element.textContent = "My Restaurant";

  return element;

}

document.body.appendChild(component());
