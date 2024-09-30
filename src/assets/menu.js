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
    const menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");
    const sectionHeader = document.createElement("h2");
    sectionHeader.classList.add("section-header");
    sectionHeader.textContent = sectionObject.title;
    menuSection.appendChild(sectionHeader);
    sectionObject.options.forEach(item => {
        menuSection.appendChild(createOption(item));
    });
    return menuSection;
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
    const menuOption = document.createElement("div");
    menuOption.classList.add("menu-option");
    menuOption.appendChild(name);
    menuOption.appendChild(price);
    menuOption.appendChild(description);
    return menuOption;
}

export default initMenu;