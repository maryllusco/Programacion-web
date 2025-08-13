import { Hijo3 } from "./hijo2";

export function Hijo2 ({nombre}){
    return(
        <>
        <h2> Hijo 2</h2>
        <Hijo3 nombre = {nombre}/>
        </>
    );
}