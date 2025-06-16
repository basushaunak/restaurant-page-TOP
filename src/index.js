import "./css/styles.css";
import "./assets/fonts/inter.woff";
import "./assets/fonts/inter.woff2";
import "./assets/fonts/style-script.woff";
import "./assets/fonts/style-script.woff2";
import {makeHomePage} from "./script/makehomepage.js";
import {makeContactUs} from "./script/makecontactus.js";
import {makeMenu} from "./script/makemenu.js";

document.querySelector("#primary-nav").innerHTML =  `<button id="btn-home">Home</button><button id="btn-menu">Menu</button><button id="btn-contact-us">Contact Us</button>`;
makeHomePage();

document.querySelector("#btn-home").addEventListener("click", ()=>{makeHomePage()});
document.querySelector("#btn-menu").addEventListener("click",()=>{makeMenu()});
document.querySelector("#btn-contact-us").addEventListener("click",()=>{makeContactUs()});