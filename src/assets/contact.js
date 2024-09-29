const title = document.createElement("h1");
title.textContent = "Contact Us";
const copy = document.createElement("p");
copy.textContent = "Do Stuff";

const initContact = (container) => {
    container.appendChild(title);
    container.appendChild(copy);
}

export default initContact;

export { title as tagline, copy };