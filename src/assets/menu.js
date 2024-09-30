import { menu } from "./config.js";

const initMenu = (container) => {
    container.appendChild(title);
    menu.structure.forEach(section => {
        container.appendChild(createSection(menu[section]));
    });
    container.appendChild(fineprint);
    container.appendChild(warnings);
}

const title = document.createElement("h1");
title.textContent = menu.meta.title;

const warnings = (function(){
    let statement = document.createElement("p");
    for(const [descriptor, warning] of Object.entries(menu.meta.warnings)) {
        statement.textContent += warning + " ";
    }
    statement.classList.add("fine-print");
    return statement;
})();

const fineprint = (function() {
    let statement = document.createElement("p");
    statement.classList.add("fine-print");
    statement.textContent += menu.meta.finePrint;
    return statement;
})();

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