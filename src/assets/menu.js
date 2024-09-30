import { menu } from "./config.js";

const title = document.createElement("h1");
title.textContent = menu.meta.title;

const initMenu = (container) => {
    container.appendChild(title);
    menu.structure.forEach(section => {
        container.appendChild(createSection(menu[section]));
    });
}

function createSection(sectionObject) {
    const section = document.createElement("section");
    section.classList.add("menu-section");
    const sectionHeader = document.createElement("h2");
    sectionHeader.classList.add("section-title");
    sectionObject.options.forEach(item => {
        section.appendChild(createOption(item));
    });
    return section;
}

function createOption(optionObject) {
    const price = document.createElement("span");
    price.classList.add("item-price");
    price.textContent = optionObject.price;
    const name = document.createElement("span");
    name.classList.add("item-name");
    name.textContent = optionObject.name
    const description = document.createElement("p");
    description.classList.add("item-description");
    description.textContent = optionObject.description;
    const card = document.createElement("div");
    card.classList.add("menu-option");
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(description);
    return card;
}

export default initMenu;