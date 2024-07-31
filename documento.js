import is_valid from "./is_valid.js";

const form = document.querySelector("form");
const nombre = document.querySelector("#nombre");

form.addEventListener("submit", (event) => {
    let response = is_valid(event, "form [required]");
    const data = {
        nombre: nombre.value
    }
    
    if (response) {
        fetch('http://127.0.0.1:3000/documentos',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
})