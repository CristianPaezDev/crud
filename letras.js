export default function letras(event, elemento) {
    let regex = /^[a-zA-Zá\s]+$/;   

    if (elemento.value === ""){
        elemento.classList.add("mal")
    }else{
        if (!regex.test(event.key)) {
            event.preventDefault()
            elemento.classList.remove("bien")
            elemento.classList.add("mal")
        }
        else{
            elemento.classList.remove("mal")
            elemento.classList.add("bien")
        }
    }
}
