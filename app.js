async function consultar(){
    const data = await fetch("http://127.0.0.1:3000/documentos")
    const tipos = await data.json()
    
    tipos.forEach(element => {
        let options = document.createElement('option')
        selec.appendChild(options)
        options.innerText = element.nombre
    });
}

consultar()
const selec = document.querySelector('form > select')

let id = document.querySelector("#id")
let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let correo = document.querySelector("#correo")
let num_doc = document.querySelector("#num_doc")


function validar(){
    id.setAttribute("onkeypress","return ((event.charCode >= 48 && event.charCode <= 57 && this.value.length < 10))")
    nombre.setAttribute("onkeypress","return ((event.charCode >= 65 && event.charCode <=90) || (event.charCode >= 97 && event.charCode <= 122))")
    apellido.setAttribute("onkeypress","return ((event.charCode >= 65 && event.charCode <=90) || (event.charCode >= 97 && event.charCode <= 122))")
    correo.setAttribute("onkeypress","return ((event.charCode >= 65 && event.charCode <=90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 64 || event.charCode == 46 ) || (event.charCode >= 48 && event.charCode <= 57))")
    num_doc.setAttribute("onkeypress","return ((event.charCode >= 48 && event.charCode <= 57 && this.value.length < 10))")
}

id.addEventListener('keydown', validar)
nombre.addEventListener('keydown', validar)
apellido.addEventListener('keydown', validar)
correo.addEventListener('keydown', validar)
num_doc.addEventListener('keydown', validar)