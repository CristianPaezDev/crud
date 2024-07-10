async function consultar(){
    const data = await fetch("http://localhost:3000/documentos")
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
 
consultar()
const selec = document.querySelector('form > select')

let form = document.querySelector(".formulario")
// let id = document.querySelector("#id")
let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let tipo = document.querySelector("#tipo")
let num_doc = document.querySelector("#num_doc")
let correo = document.querySelector("#correo")
let direccion = document.querySelector("#direccion")


function validar(){
    // id.setAttribute("onkeypress","return ((event.charCode >= 48 && event.charCode <= 57 && this.value.length < 10))")
    nombre.setAttribute("onkeypress","return ((event.charCode >= 65 && event.charCode <=90) || (event.charCode >= 97 && event.charCode <= 122))")
    apellido.setAttribute("onkeypress","return ((event.charCode >= 65 && event.charCode <=90) || (event.charCode >= 97 && event.charCode <= 122))")
    correo.setAttribute("onkeypress","return ((event.charCode >= 65 && event.charCode <=90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 64 || event.charCode == 46 ) || (event.charCode >= 48 && event.charCode <= 57))")
    num_doc.setAttribute("onkeypress","return ((event.charCode >= 48 && event.charCode <= 57 && this.value.length < 10))")
}

// id.addEventListener('keydown', validar)
nombre.addEventListener('keydown', validar)
apellido.addEventListener('keydown', validar)
correo.addEventListener('keydown', validar)
num_doc.addEventListener('keydown', validar)


    

const capturar = (event) => {
    event.preventDefault()
    const datos = {
        "nombre": nombre.value,
        "apellido": apellido.value,
        "tipo": tipo.value,
        "num_doc": num_doc.value,
        "correo": correo.value,
        "direccion": direccion.value
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









