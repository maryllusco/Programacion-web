import { useState } from "react";
import "./App.css";
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
    </>);
}

export default App;
