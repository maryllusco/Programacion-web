import {useState,  useEffect} from "react";  
export function RickMorty (){
     const [characters, setCharacters] = useState([]);
     useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((response) => setCharacters(response.results));
  }, []);
    return(

        <>
         {characters ? (
        characters.map((item, index) => <p>{item.name}</p>)
      ) : (
        <> cargando...</>
      )}
        </>
    )
}