async function consultar(){
    const data = await fetch("http://127.0.0.1:3000/documentos")
    const tipos = await data.json()
    
    tipos.forEach(element => {
        let options = document.createElement('option')
        selec.appendChild(options)
        options.innerText = element.nombre
    });
}

async function envia(datos){
    fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })


        .then((response) => response.json())
        .then((json) => console.log(json));
}
 

const selec = document.querySelector('form > select')

let form = document.querySelector(".formulario")
let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let tipo = document.querySelector("#tipo")
let num_doc = document.querySelector("#num_doc")
let correo = document.querySelector("#correo")
let direccion = document.querySelector("#direccion")
let telefono = document.querySelector("#telefono")

// Validacion para que el formulario no este vacio

const validar = (event) =>{
    event.preventDefault();
    if(nombre.value === ""){
        nombre.focus()
        nombre.classList.add("mal")
    }
    if(apellido.value === ""){
        apellido.focus()
        apellido.classList.add("mal")
    }
    if(tipo.selectedIndex == null || tipo.selectedIndex == 0){
        tipo.focus()
        tipo.classList.add("mal")
    }
    if(num_doc === ""){
        num_doc.focus()
        num_doc.classList.add("mal")
    }
    if(correo === ""){
        correo.focus()
        correo.classList.add("mal")
    }
    if(direccion === ""){
        direccion.focus()
        direccion.classList.add("mal")
    }
    if(telefono === ""){
        telefono.focus()
        telefono.classList.add("mal")
    }
}



function letras(event, elemento) {
    let regex = /^[a-zA-Zá\s]+$/;
    if (regex.test(event.key)) {
        console.log("Bien");
    }
    else{
        event.preventDefault()
    }
}

nombre.addEventListener('keypress', function(event){
    letras(event, nombre)
})

apellido.addEventListener('keypress', function(event){
    letras(event, apellido)
})

function numeros(event, element) {
  let regex = /^\d{0,10}$/;
  let newValue = element.value + event.key;

  if (!regex.test(newValue)) {
    event.preventDefault();
  }
}

num_doc.addEventListener('keypress', function(event) {
  numeros(event, num_doc);
});

telefono.addEventListener('keypress', function(event) {
    numeros(event, telefono);
});

function correos(event, element) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(element.value)) {
        correo.classList.remove("mal")
        correo.classList.add("bien")
    } else {
        correo.classList.remove("bien")
        correo.classList.add("mal")
    }
}

correo.addEventListener('keypress', function(event){
    correos(event, correo)
})



    

const capturar = (event) => {
    event.preventDefault()
    const datos = {
        "nombre": nombre.value,
        "apellido": apellido.value,
        "tipo": tipo.value,
        "num_doc": num_doc.value,
        "correo": correo.value,
        "direccion": direccion.value,
        "telefono": telefono.value
    }
    envia(datos)

    location.reload();
}

form.addEventListener("submit", capturar)


document.addEventListener('DOMContentLoaded', function() {

    consultar();

    const btnListar = document.getElementById('btnlistar');
    const tablaContainer = document.querySelector('.tb');

    btnListar.addEventListener('click', function() {

        if (tablaContainer.style.display === 'none') {
            tablaContainer.style.display = 'block';
        } else {
            tablaContainer.style.display = 'none';
        }
    });


    tablaContainer.style.display = 'none';
});

const listar = async () => {
    const element = await fetch(`http://localhost:3000/users`)
    const elemento = await element.json();
    return elemento;
}



form.addEventListener("submit", validar)