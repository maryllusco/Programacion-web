import { useContext } from "react";
import { NombreProvider } from "../globals/nombrecontext";

export function Hijo3 ({nombre}){
    const nombrecontext = useContext(NombreProvider)
    return(
        <>
        <h2> Hijo 3</h2>
        <p>{nombre}</p>
        <p>{nombrecontext}</p>
        </>
    );
}