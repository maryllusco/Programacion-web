import { useState } from "react";
import "./App.css";
import { Hijo1 } from "./components/hijo1";
import { Hijo2 } from "./components/hijo2";
function App() {
  const [nombre, setNombre] = useState("");
  const handleClick =() =>{
    console.log('hola')
  };
  const handleInputChange = (event) => {
    setNombre(event.target.value);
  }
  return (<>
  <input type="text" placeholder="Escribi tu nombre"
  onChange={handleInputChange}
  value={nombre} 
  />

  <button onClick={handleClick}>Mostrar</button>
  {nombre && <h2>{nombre}</h2>}
  {nombre === "" ? <>hola </> : <>chau</>}
  <Hijo1 nombre = "Ada"/>
    </>);
}

export default App;
