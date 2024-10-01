import { email, phone, address, menu } from "./config.js";

const initContact = (container) => {
    container.appendChild(title);
    container.appendChild(phoneCard);
    container.appendChild(emailCard);
    container.appendChild(addressCard);
    container.appendChild(contactForm);
};

const title = (function() {
    const element = document.createElement("h1");
    element.textContent = "Contact Us";
    return element;
})();

const phoneCard = (function() {
    const div = document.createElement("div");
    div.classList.add("copy");
    const head = document.createElement("h2");
    head.textContent = "By Phone:";
    const tollFree = document.createElement("p");
    tollFree.textContent = `Toll Free: ${phone.tollfree}`;
    const localNum = document.createElement("p");
    localNum.textContent = `Local: ${phone.local}`;
    div.appendChild(head);
    div.appendChild(tollFree);
    div.appendChild(localNum);
    return div;
})();

const emailCard = (function() {
    const div = document.createElement("div");
    div.classList.add("copy");
    const head = document.createElement("h2");
    head.textContent = "By Email:";
    const restaurant = document.createElement("p");
    const catering = document.createElement("p");
    const owner = document.createElement("p");
    restaurant.textContent = `General Inquiries: ${email.restaurant}`;
    catering.textContent = `Catering: ${email.catering}`;
    owner.textContent = `Finally, our owner is happy to receive contact at ${email.owner}`;
    div.appendChild(head);
    div.appendChild(restaurant);
    div.appendChild(catering);
    div.appendChild(owner);
    return div;
})();

const addressCard = (function() {
    const card = document.createElement("div");
    card.classList.add("copy");
    const header = document.createElement("h2");
    header.textContent = "By Mail:";
    card.appendChild(header);
    address.full.forEach(line => {
        const p = document.createElement("p");
        p.classList.add("address-line");
        p.textContent = line;
        card.appendChild(p);
    });
    return card;
})();

const contactForm = (function() {
    const section = document.createElement("section");
    section.classList.add("form-container");
    
    const header = document.createElement("h2");
    header.textContent = "Comments About Your Recent Visit";
    
    const nameLabel = document.createElement("label");
    nameLabel.textContent = 'Name:';
    nameLabel.setAttribute("for", "name");
    const nameInput = document.createElement("input");
    nameInput.value = "Name";
    nameInput.id = "name";
    
    const phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone";
    phoneLabel.setAttribute("for", "phone");
    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.id = "phone";
    phoneInput.value = "+1";
    
    const itemLabel = document.createElement("label");
    itemLabel.textContent = "If this is related to a specific item you ordered, enter that here:";
    itemLabel.setAttribute("for", "item");
    const itemInput = document.createElement("input");
    itemInput.id = "item";
    itemInput.setAttribute("list", "items");
    const items = document.createElement("datalist");
    items.id = "items";

    menu.meta.itemList.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        items.appendChild(option);
    });
    
    const commentLabel = document.createElement("label");
    commentLabel.textContent = "Comment:";
    commentLabel.setAttribute("for", "comment");
    const textArea = document.createElement("textarea");
    textArea.id = "comment";

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date of Service:";
    dateLabel.setAttribute("for", "date");
    const date = document.createElement("input");
    date.type = "date";
    date.id = "date";

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Submit Your Comment";
    button.addEventListener("click", e=> {
        e.preventDefault();
    });

    ;[header, nameLabel, nameInput, phoneLabel, phoneInput, itemLabel, itemInput, items, commentLabel, textArea, dateLabel, date, button].forEach(element => {
        section.appendChild(element);
    });

    return section;
})();

export default initContact;