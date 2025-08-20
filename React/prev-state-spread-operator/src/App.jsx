
import { useState } from 'react'
import './App.css'

function App() {
const [num,setNum] = useState([1,2,3,4])
const [persona, setPersona] = useState ({nombre:"mary", edad: 17})
//Spread Operator//
function myFuction (){
  const ultimo = num[num.length - 1]
  setNum([...num, ultimo + 1]);

}
function persona(){
   const nPersona = ({
      ...persona,           // copiamos las propiedades que ya tenía
      nacionalidad: "Argentina"   // le agregamos una nueva propiedad
    })
}
//tarea, hacer que el setNum agregue numeros consecutivos. -> 3 puntos
//agregar una propiedad al objeto persona usando spread operator -> 4 puntos 

  return (
    <>
    <div>
      {num.map((item, index) => (
        <p>{item}</p>
      ))}
      <button onClick={myFuction}>Agregar numero</button>
      <button onClick={persona}> Agregue propiedad</button>
    </div>
    </>
  )
}
    
export default App
