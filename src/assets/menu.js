const title = document.createElement("h1");
title.textContent = "Menu";
const copy = document.createElement("p");
copy.textContent = "Grilled Cheese $5";

const initMenu = (container) => {
    container.appendChild(title);
    container.appendChild(copy);
}

export default initMenu;

export { title as tagline, copy };