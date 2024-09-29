const title = document.createElement("h1");
title.textContent = "Contact Us";
const copy = document.createElement("p");
copy.textContent = "Do Stuff";

const initMenu = (container) => {
    container.appendChild(title);
    container.appendChild(copy);
}

export default initMenu;

export { title as tagline, copy };