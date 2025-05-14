//manipulacion del DOM
//Nos permite interactuar con un documento, modificar su estructura estilo y contenido

//Seleccionar elementos del DOM
//por ID
//obteniendo por id la etiqueta, nos permite acceder a todas sus propiedades 
let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.textContent, titulo.innerText);

titulo.textContent = "este es el nuevo titulo"; 

//Eventos(addEvenListnner, onClick, onChannge)
let boton = document.getElementById('boton')

boton.addEventListener('click', function(){
    alert('Este boton ha sido clikeado')
})