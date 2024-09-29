export const buttons = {
    home: document.querySelector("#home"),
    menu: document.querySelector("#menu"),
    contact: document.querySelector("#contact")
}

export const hook = (container, button, func) => {
    button.addEventListener("click", e => {
        func(container);
    })
}

export default hook;