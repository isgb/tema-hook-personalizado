import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const [miTexto, setMiTexto] = useState("Victor Robles");
    const {mayusculas,minusculas,concatenar} = useMayus(miTexto);

  return (
    <div>
        <h3>Probando componentes personalizados</h3>
        {miTexto}

        <button onClick={e => {
            setMiTexto(mayusculas())
        }}>Poner en Mayusculas</button>
    </div>
    
  )
}
