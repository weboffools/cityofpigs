function contactDiv() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('contact-container');

  const mainHeading = document.createElement('div');
  mainHeading.classList.add('contact-heading');
  const contactTitle = document.createElement('h1');
  contactTitle.classList.add('contact-title');
  contactTitle.textContent = 'Contact Us';
  mainHeading.appendChild(contactTitle);


  const contactBox = document.createElement('div');
  contactBox.classList.add('contact-box');
  const contactAddress = document.createElement('div');
  contactAddress.textContent = '222 N Swine Way, Philopolis, Hellas';
  contactAddress.classList.add('contact-item');
  const contactPhone = document.createElement('div');
  contactPhone.textContent = '406-222-2222';
  contactPhone.classList.add('contact-item');
  const contactEmail = document.createElement('div');
  contactEmail.textContent = 'thepig@cityofpigs.com';
  contactEmail.classList.add('contact-item');


  contactBox.appendChild(contactAddress); 
  contactBox.appendChild(contactPhone); 
  contactBox.appendChild(contactEmail);

  mainContainer.appendChild(mainHeading);
  mainContainer.appendChild(contactBox);

  return mainContainer;

}

export default contactDiv;

