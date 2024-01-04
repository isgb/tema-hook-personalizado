import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

  const {formulario, enviado, cambiado} = useForm({});

  return (
    <div>
        <h1>Formulario</h1>
        <p>Formulario para guardar un curso</p>
        <p>Curso Guardado: {formulario.title}</p>
        <pre className='codigo'>{JSON.stringify(formulario)}</pre>

        <form onSubmit={enviado} className='mi-formulario'>
            <input type="text" name='title' onChange={cambiado} placeholder='Titulo:'/>
            <input type="number" name='anio' onChange={cambiado} placeholder='Año Publicacion:'/>
            <textarea name="descripcion" onChange={cambiado} placeholder='Decripcion'></textarea>
            <input type="text" name='autor' onChange={cambiado} placeholder='Autor:'/>
            <input type="email" name='email' onChange={cambiado} placeholder='Correo:'/>

            <input type="submit" value='Enviar'/>

        </form>
    </div>
  )
}
