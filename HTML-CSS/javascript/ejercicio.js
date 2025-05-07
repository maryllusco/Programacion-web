//ejercicios de dificultad media

//Crear una variable con un número. Usar if, else para:
//IF
const numero= 7
if(numero<0){
    console.log('Negativo');

}

else if(numero === 0){
    console.log('Cero');
}

else{
    console.log('Positivo')
}

//FOR
//Usar un for para recorrer los números del 1 al 10.

const numeros =[1,2,3,4,5,6,7,8,9,10];
let suma = 0;
for (let i=0;i < numeros.length; i++){
   // console.log(numeros[i])
    if (numeros[i] % 2 === 0){
        suma += numeros[i];

    }
}
console.log("La suma de todos los numeros pares es", suma)

//FOR (versión intermedia)
//Usar un for para recorrer los números del 1 al 20.
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let sum= 0;
for (let i=0;i <numbers.length;i++){
    if (numbers[i] % 3 ===0){
        if(numbers[i]%5 !==0){
            sum += numbers[i];
        }
    }
}
console.log("La suma de todos los numeros multiplos de 3 son", sum)


//ejercicio tienda de productos 07/05
const inventario = []; 
const producto1 = {nombre: "Auriculares", precio: 1500, categoria: "Electrónica" 
};
const producto2 = {nombre: "Computadora", precio: 3000, categoria: "Electrónica"
};
const producto3 = {nombre: "Celular", precio: 5000, categoria: "Electrónica"
};
const producto4 = {nombre: "Termo", precio: 2000, categoria: "Cocina"
};
inventario.push(producto1, producto2, producto3, producto4 );
inventario.forEach((item) =>{
    console.log("producto:", item);
});
                                                        
const Electronica = inventario.filter((item) => item.categoria === "Electrónica");
console.log(Electronica);

const sacar = inventario.map((item) => {
    return(item.nombre);
});
console.log("nombres:", sacar)

//ejercicio listas de pelicula
const peliculas = [];
const pelicula1 = {titulo: "Cars", director: "John Lasseter", año: "2006", genero: "infantil"};
const pelicuala2 = {titulo: "Cartas a Julieta", director: " Gary Winick", año: "2019", genero: "romantica"};
const pelicuala3 = {titulo: "Spiderman", director: "maparipi", año: "2016", genero: "accion"};

