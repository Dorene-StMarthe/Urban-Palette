export default function menu(){

const content = document.querySelector('#content');
content.textContent = "";

const menuText = document.createElement('div');
menuText.classList.add("menuText");
menuText.textContent = "Check Out Our Menu";

content.appendChild(menuText);
}
