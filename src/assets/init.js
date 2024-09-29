import GrilledCheese from "./grilled-cheese.jpeg";

const content = document.querySelector("#content");

const title = document.createElement("h1");
title.textContent = "Take It Cheesy";

const img = document.createElement("img");
img.src = GrilledCheese;
const copy = document.createElement("p");
copy.textContent = "The restaurant is wonderful.";

export default function init() {
    content.appendChild(title);
    content.appendChild(img);
    content.appendChild(copy);
}

export { content, title as tagline, img as grilledCheese, copy };