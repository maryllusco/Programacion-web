import { useEffect, useState } from "react";
import "./App.css";
import Pepito from "./components/Usuario/usuario";
import { Provedor } from "./components/provedores/provedor";
function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((response) => setCharacters(response.results));
  }, []);
  return (
    <>
      {characters ? (
        characters.map((item, index) => <p>{item.name}</p>)
      ) : (
        <> cargando...</>
      )}
      hola mundo
      <button>HOLA SOY UN BOTON</button>
      <Pepito />
      <Provedor name={"maryyy"} />
    </>
  );
}

export default App;
