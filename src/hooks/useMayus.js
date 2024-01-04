import { useState } from "react";

export const useMayus = (texto) => {

    const [miTexto, setMiTexto] = useState(texto);

    const mayusculas = () => {
        // return texto.toUpperCase();
        setMiTexto(texto.toUpperCase())
    }

    const minusculas = () => {
        // return texto.toLowerCase();
        setMiTexto(texto.toLowerCase())
    }

    const concatenar = (added) => {
        // return texto + added;
        setMiTexto(texto + added)
        
    }

    return { 
        estado: miTexto,
        mayusculas,
        minusculas,
        concatenar
    };
}