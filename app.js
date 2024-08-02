import {letras} from "./letras.js"
import {numeros} from "./numeros.js"
import {correos} from "./correos.js"
import peticion from "./nuevo.js"
import is_valid from "./is_valid.js"

const selec = document.querySelector('form > select')

let form = document.querySelector(".formulario")
let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let tipo = document.querySelector("#tipo")
let num_doc = document.querySelector("#num_doc")
let correo = document.querySelector("#correo")
let direccion = document.querySelector("#direccion")
let telefono = document.querySelector("#telefono")
let chec = document.querySelector("#checkbox")

const documentos = () =>{
    const fragemento = document.createDocumentFragment();
    let options = document.createElement('option');
        options.innerText = "selector del tipo de documento"  
        fragemento.appendChild(options);  
    peticion("documentos")
    .then(data => {
        data.forEach(element => {
            // let options = document.createElement('option')
            // selec.appendChild(options)
            // options.innerText = element.nombre
            let nombre = element.nombre;
            let id = element.id;
            let option = document.createElement('option');

            option.setAttribute("value", id) 
            option.innerText = nombre
            fragemento.appendChild(option);         
        });
        tipo.appendChild(fragemento)
    })
}

const listar = async () => {
    peticion("users")
    .then(data => {
        data.forEach(element => {
            console.log(element)
        })
    })
}

form.addEventListener('submit', (event) => {
    let response = is_valid(event, "form [required]");

    const data = {
        nombre: nombre.value,
        apellido: apellido.value,
        tipo: tipo.value,
        num_doc: num_doc.value,
        correo: correo.value,
        direccion: direccion.value,
        telefono: telefono.value
    }
    console.log(data);

    if(response){
        fetch('http://localhost:3000/users',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => {
            nombre.value = "";
            apellido.value = "";
            tipo.value = "";
            num_doc.value = "";
            correo.value = "";
            direccion.value = "";
            telefono.value = "";
            chec.checked = false;
        });
    }
})

nombre.addEventListener('keypress', function(event){
    letras(event, nombre)
})

nombre.addEventListener('blur', function(event){
    letras(event, nombre)
})

apellido.addEventListener('keypress', function(event){
    letras(event, apellido)
})

apellido.addEventListener('blur', function(event){
    letras(event, apellido)
})

num_doc.addEventListener('keypress', function(event) {
  numeros(event, num_doc);
});

num_doc.addEventListener('blur', function(event) {
    numeros(event, num_doc);
  });

telefono.addEventListener('keypress', function(event) {
    numeros(event, telefono);
});

telefono.addEventListener('blur', function(event) {
    numeros(event, telefono);
});

correo.addEventListener('keypress', function(event){
    correos(event, correo)
})

correo.addEventListener('blur', function(event){
    correos(event, correo)
})



document.addEventListener('DOMContentLoaded', function() {

    documentos();
    listar();

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




