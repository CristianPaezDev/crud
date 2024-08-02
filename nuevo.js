const peticion = async (url) =>{
    let respuesta = await fetch(`http://127.0.0.1:3000/${url}`);
    let datos = await respuesta.json();
    return datos;
    
}

export default peticion;