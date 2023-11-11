import './style.css';

function component() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('container');

  const headingDiv = document.createElement('div');
  headingDiv.classList.add('heading-div');

  const mainHeading = document.createElement('h1');
  mainHeading.classList.add('name-heading');
  mainHeading.textContent = 'City of Pigs';

  const subHeading = document.createElement('h2');
  subHeading.classList.add('sub-heading');
  subHeading.textContent = 'We have couches!';
  
  const pigIcon = document.createElement('img');
  pigIcon.classList.add('pig-icon');
  pigIcon.classList.add('pig-icon-right');
  pigIcon.setAttribute('src', './images/pig.svg');

  const pigIcon2 = document.createElement('img');
  pigIcon2.classList.add('pig-icon');
  pigIcon2.classList.add('pig-icon-left');
  pigIcon2.setAttribute('src', './images/pig.svg');

  headingDiv.appendChild(mainHeading);
  headingDiv.appendChild(subHeading);
  headingDiv.appendChild(pigIcon);
  headingDiv.appendChild(pigIcon2);

  const pigImage = document.createElement('img');
  pigImage.setAttribute('src', './images/pigs.jpeg');
  pigImage.classList.add('pig-img');


  mainContainer.appendChild(headingDiv);
  mainContainer.appendChild(pigImage);

  return mainContainer;
}

document.body.appendChild(component());
