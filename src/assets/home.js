import GrilledCheese from "./grilled-cheese.jpeg";
import { hours, address, phone } from "./config.js";

const initHome = (container) => {
    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(copy);
    container.appendChild(addressCard);
    container.appendChild(operationHours);
}

const title = (function() {
    const element = document.createElement("h1");
    element.textContent = address.name;
    element.classList.add("restaurant-title");
    return element;
})();

const img = (function() {
    const element = document.createElement("img");
    element.src = GrilledCheese;
    element.classList.add("splash");
    return element;
})();

const copy = (function() {
    const div = document.createElement("div");
    div.classList.add("copy");
    const generic = document.createElement("p");
    generic.textContent = `Thank you for your interest!`;
    const holidays = document.createElement("p");
    holidays.textContent = `In observation of the following holidays, we will be closed: ${hours.holidays}`;

    div.appendChild(generic);
    div.appendChild(holidays);
    return div;
})();

const addressCard = (function() {
    const card = document.createElement("div");
    card.classList.add("address-card");
    const header = document.createElement("h2");
    header.textContent = "Come See Us";
    card.appendChild(header);
    address.full.forEach(line => {
        const p = document.createElement("p");
        p.classList.add("address-line");
        p.textContent = line;
        card.appendChild(p);
    });
    return card;
})();

const operationHours = (function() {
    const card = document.createElement("div");
    card.classList.add("hours-card");
    const header = document.createElement("h2");
    header.textContent = "Hours of Operation";
    card.appendChild(header);
    for(const [descriptor, obj] of Object.entries(hours)) {
        if(descriptor.length === 3) {
            const p = document.createElement("p");
            p.textContent = `${obj.day}: ${obj.open}-${obj.close}`;
            card.appendChild(p);
        }
    }
    return card;
})();

export default initHome;