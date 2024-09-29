import "./assets/styles.css";
import initHome from "./assets/home.js";

const content = document.querySelector("#content");


const dumpContent = () => {
    content.textContent = "";
}

initHome(content);