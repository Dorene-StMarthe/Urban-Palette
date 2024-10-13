import "./styles.css";
import  home from "./home.js";
import  menu from "./menu.js"
import contact from "./contact.js"
//console.log(landing);

function addNavEventListeners() {
    document.querySelector("#home").addEventListener("click", home);
    document.querySelector("#menu").addEventListener("click", menu);
    document.querySelector("#contact").addEventListener("click", contact);
}

window.onload = () => {
    home();
    addNavEventListeners();
};