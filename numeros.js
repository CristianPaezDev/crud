export default function numeros(event, element) {
    let regex = /^\d{0,10}$/;
  
    if (!regex.test(event.key)) {
      event.preventDefault();
      element.classList.remove("bien")
      element.classList.add("mal")
    }
    else{
        element.classList.remove("mal")
        element.classList.add("bien")
    }
}
