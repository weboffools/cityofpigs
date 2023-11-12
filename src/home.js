import littlePig from './images/pig.svg';
import pigsImage from './images/pigs.jpeg';

function mainComponent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');

  const headingDiv = document.createElement('div');
  headingDiv.classList.add('heading-div');

  const mainHeading = document.createElement('h1');
  mainHeading.classList.add('name-heading');
  mainHeading.textContent = 'City of Pigs';

  const subHeading = document.createElement('h2');
  subHeading.classList.add('sub-heading');
  subHeading.textContent = 'For A Simpler Way of Life';

  const quoteDiv = document.createElement('div');
  quoteDiv.classList.add('quote');
  const quote = document.createElement('h2');
  const author = document.createElement('p');
  quote.classList.add('quote-text');
  quote.textContent =
    '...and they will roast myrtle-berries and acorns at the fire, drinking in moderation.';
  author.textContent = '- Socrates';
  quoteDiv.appendChild(quote);
  quoteDiv.appendChild(author);

  const pigIcon = document.createElement('img');
  pigIcon.classList.add('pig-icon');
  pigIcon.classList.add('pig-icon-right');
  pigIcon.setAttribute('src', littlePig);

  const pigIcon2 = document.createElement('img');
  pigIcon2.classList.add('pig-icon');
  pigIcon2.classList.add('pig-icon-left');
  pigIcon2.setAttribute('src', littlePig);

  headingDiv.appendChild(mainHeading);
  headingDiv.appendChild(subHeading);
  headingDiv.appendChild(pigIcon);
  headingDiv.appendChild(pigIcon2);

  const pigImage = document.createElement('img');
  pigImage.setAttribute('src', pigsImage);
  pigImage.classList.add('pig-img');

  mainContent.appendChild(headingDiv);
  mainContent.appendChild(pigImage);
  mainContent.appendChild(quoteDiv);

  return mainContent;
}

export default mainComponent;
