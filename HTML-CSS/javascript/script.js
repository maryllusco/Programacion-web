var miVariable = 'contenido de la variable'//esta no se usa

//let -> solamente vive en el scope declarado o en sus hijos
let miVariable2 = '2'//pueden ser re-escritos sus valores
miVariable = 2; //reasignacion del valor 

//const-> variable constante no son reasignables los valores
const miVariable3 = 5;

/* Tipos de datos*/
const text = 'string'
const numeros = 2 //number
const booleanos = true //Boolean, puede ser true o false
//undefined -> valor no definido, no trae ningun dato. Es mas usual este que null
//null -> vacio, no es lo mismo que undefined, este si tiene que estar definido

/*Operadores logicos*/

//aritmetricos: son todos los de matematica + - / % * 
//comparacion: 
// == doble igual compara el valor del dato 
// === tripe igual compara el valor y el tipo de dato (usamos este)
// != distinto el valor 
// !== distinto valor y tipo 
// >< >= <= (mayor menor, mayor o igual, menor o igual)

/*Condicionales*/
//if
const edad = 20
if(edad > 18){
    console.log('sos mayor de edad');// mostrar por consola
    //es el print del python
}

else{
    console.log('sos menor de edad');
}
 /*switch*/
 const dia = 1
 switch(dia){
    case 1: console.log ('dia lunes'); break //breaek:ejecuta el caso seleccionado
    //un caso, se escribe lo que va a pasar
    case 2:console.log ('dia martes'); break 
    default:console.log('Dia no registrado'); //default por defecto 
 }

 /*Funciones*/
 //declaracion funcion clasica, siempre van a retornar algo 
 function saludar(nombre){
    return `Hola${nombre}`
 }
 console.log (saludar("Mary"));

 /*arrow function*/

 //return explicito
 const saludarExplicito = (nombre) => {
    return `hola${nombre}`;
 }

 //return implicito

const saludo = (nombre) => `hola${nombre}`;

//Arreglos o arrays (listas en python)
const miArreglo =[1,2,"pepito", true]; //son posiciones, si tiene corchete es una lista o arreglo
console.log(miArreglo[2]); 

const miObjeto =  { // si tiene una llave es un objeto
    clave: "valor",
    nombre:"ariana",
    edad: 17
}; 
console.log(miObjeto.nombre); //trae el valor del objeto

//iteramos una lista con for 
for (let i=0;i < miArreglo.length; i++){
    console.log(miArreglo[i])//imprimi en pantall el arreglo con su posicion
//
}

//metodos de arreglos
//lenght -> longitud del arreglo

const longitud = miArreglo.length;
console.log(longitud);

//push(valor)-> Agrega un elemento al final
//equivalente al apend de python
miArreglo.push("Nicolas");
console.log("cadena",miArreglo); 

//pop() elimina el ultimo elemento de un arreglo 
//si queremos lo podemos guardar en una variable 
const ultimo = miArreglo.pop();
console.log("ultimo", ultimo); 

//shift() elimina el primer valor de un arreglo, tambien lo guarda
const primero = miArreglo.shift();
console.log(primero);

//unshift(valor) Agrega un elemento al principio del arreglo
miArreglo.unshift("lilo");
console.log(miArreglo);

//forEach, SOLO RECORRE, no guarda los valores en ningun lado
miArreglo.forEach((item, index, arregloEntero) =>{
    console.log("elemento", item, "index", index, "arreglo Completo", arregloEntero);

});

//map, recorre el arreglo, lo modifica con una funcion, y nos devuelve uno nuevo
const nuevoArreglo = miArreglo.map((item, index) => {
    const num = 2 
    return(item += num);

});
console.log("nuevo arreglo", nuevoArreglo);

//filter, Crea un nuevo array a partir de los elementos que cumplan la condicion

const miArregloNum = [2,4,5,6];
const pares = miArregloNum.filter((item) => item % 2 === 0);
console.log(pares);
 
