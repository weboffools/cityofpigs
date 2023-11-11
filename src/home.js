import makeHeader from './header.js';

function mainComponent() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('container');

  const headingDiv = document.createElement('div');
  headingDiv.classList.add('heading-div');

  const mainHeading = document.createElement('h1');
  mainHeading.classList.add('name-heading');
  mainHeading.textContent = 'City of Pigs';

  const quoteDiv = document.createElement('div');
  quoteDiv.classList.add('quote');
  const subHeading = document.createElement('h2');
  const author = document.createElement('p');
  subHeading.classList.add('sub-heading');
  subHeading.textContent =
    '...and they will roast myrtle-berries and acorns at the fire, drinking in moderation.';
  author.textContent = '- Socrates';
  quoteDiv.appendChild(subHeading);
  quoteDiv.appendChild(author);

  const pigIcon = document.createElement('img');
  pigIcon.classList.add('pig-icon');
  pigIcon.classList.add('pig-icon-right');
  pigIcon.setAttribute('src', './images/pig.svg');

  const pigIcon2 = document.createElement('img');
  pigIcon2.classList.add('pig-icon');
  pigIcon2.classList.add('pig-icon-left');
  pigIcon2.setAttribute('src', './images/pig.svg');

  headingDiv.appendChild(mainHeading);
  headingDiv.appendChild(pigIcon);
  headingDiv.appendChild(pigIcon2);

  const pigImage = document.createElement('img');
  pigImage.setAttribute('src', './images/pigs.jpeg');
  pigImage.classList.add('pig-img');

  mainContainer.appendChild(makeHeader());
  mainContainer.appendChild(headingDiv);
  mainContainer.appendChild(pigImage);
  mainContainer.appendChild(quoteDiv);

  return mainContainer;
}

export default mainComponent;
