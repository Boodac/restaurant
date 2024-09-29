const buttons = {
    home: document.querySelector("#home"),
    menu: document.querySelector("#menu"),
    contact: document.querySelector("#contact")
}

const dump = (container) => {
    container.textContent = "";
}

const hook = (container, button, func) => {
    button.addEventListener("click", e => {
        dump(container);
        func(container);
    })
}

export default hook;
export { buttons, dump };