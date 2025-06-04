const button = document.getElementById("boton").value;
let contador = 0;
//setTimeout
//funcion que recibe por parametros dos valores, recibe una funcion y recibe el tiempo que va a tardar en..
//ejecutarse

button.addEventListener("click", () => {
  setTimeout(function () {
    alert("hola fui clikeado por dos segundos");
  }, 2000); //milisegundos
});

//setInterval()
//ejecutar el codigo cada "a" cantidad de tiempo
setInterval(() => {
  contador++;
  console.log(contador);
}, 1000);

//asincronia
//peticion a una api
//metodos : get, post, put, delete

//fetch
fetch("https://rickandmortyapi.com/api/character")
  .then((data) => data.json())
  .then((response) => console.log("response", response.results));

//async await
//funcion flecha asincronica
const asyncFuntion = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/2");
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};
asyncFuntion(); //para ejecutar una funcion debemos llamarla
//y poner parentesis y ; al final

//funcion regular asincronica
async function asyncFun() {}
