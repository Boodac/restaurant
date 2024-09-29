import "./assets/styles.css";
import initHome from "./assets/home.js";
import initContact from "./assets/contact.js";
import initMenu from "./assets/menu.js";
import { default as hook, buttons } from "./assets/eventhandling.js";

const content = document.querySelector("#content");

initHome(content);

hook(content, buttons.home, initHome);
hook(content, buttons.contact, initContact);
hook(content, buttons.menu, initMenu);
