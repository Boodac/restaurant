import "./assets/styles.css";
import initHome from "./assets/home.js";
import initContact from "./assets/contact.js";
import { default as hook, buttons } from "./assets/eventhandling.js";

const content = document.querySelector("#content");

const dumpContent = () => {
    content.textContent = "";
}

hook(content, buttons.home, initHome);
hook(content, buttons.contact, initContact);

initHome(content);