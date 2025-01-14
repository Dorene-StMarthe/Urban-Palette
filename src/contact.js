export default function contact(){

const content = document.querySelector('#content');
content.textContent = "";

const contactText = document.createElement('div');
contactText.classList.add('contactText');
contactText.textContent = "Contact Us!";
content.appendChild(contactText);

const contactContainer = document.createElement('div');
contactContainer.classList.add('contactContainer');
content.appendChild(contactContainer);

  // Add contact details
  addContactDetail(contactContainer, 'Phone', '(123) 456-7890');
  addContactDetail(contactContainer, 'Email', 'info@urbanpalette.com');
  addContactDetail(contactContainer, 'Address', '123 Flavor Street, Taste City');
  addContactDetail(contactContainer, 'Business Hours', 'Mon-Sat: 9am - 10pm');
}

// Helper function to create and append contact detail elements
function addContactDetail(container, label, info) {
  const detail = document.createElement('div');
  detail.classList.add('contactDetail');

  const labelElement = document.createElement('h3');
  labelElement.textContent = `${label}:`;
  detail.appendChild(labelElement);

  const infoElement = document.createElement('p');
  infoElement.textContent = info;
  detail.appendChild(infoElement);

  container.appendChild(detail);
}