import React from "react";
const nombrecontext = React.createContext();

export function NombreProvider({children}){
    const name = "Ada";
    return(
        <nombrecontext.Provider value = {name}></nombrecontext.Provider>
    )
}