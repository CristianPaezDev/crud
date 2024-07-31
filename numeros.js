export function numeros(event, element) {
    let regex = /^\d{0,10}$/;
  
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
    else if(element.value.length >= 10){
      event.preventDefault();
      element.classList.add("bien")
      element.classList.remove("mal")
      
    }
    else{
      element.classList.add("mal")
      element.classList.remove("bien")
    }
}
