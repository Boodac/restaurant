import GrilledCheese from "./grilled-cheese.jpeg";
import { hours, address, phone } from "./config.js";

const title = document.createElement("h1");
title.textContent = "Take It Cheesy";
const img = document.createElement("img");
img.src = GrilledCheese;
const copy = document.createElement("p");
copy.textContent = "The restaurant is wonderful.";

const initHome = (container) => {
    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(copy);
}

export default initHome;

export { title as tagline, img as grilledCheese, copy };