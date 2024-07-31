export function correos(event, element) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(event.value)) {
        element.classList.remove("mal")
        element.classList.add("bien")
    } else {
        element.classList.remove("bien")
        element.classList.add("mal")
    }
}
