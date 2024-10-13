export default function contact(){

const content = document.querySelector('#content');
content.textContent = "";

const contactText = document.createElement('div');
contactText.classList.add('contactText');
contactText.textContent = "Contact Us!";

content.appendChild(contactText);
}