import React, { useState } from 'react'

export const MiFormulario = () => {

  const [formulario, setFormulario] = useState({})

  const enviado = (e) =>{
    e.preventDefault()
    // console.log(e.target)

    let curso = {
      titulo: e.target.title.value ,
      anio: e.target.anio.value,
      descripcion: e.target.descripcion.value,
      autor: e.target.autor.value,
      email: e.target.email.value
    };

    setFormulario(curso)
  }

  return (
    <div>
        <h1>Formulario</h1>
        <p>Formulario para guardar un curso</p>
        {JSON.stringify(formulario)}

        <form onSubmit={enviado} className='mi-formulario'>
            <input type="text" name='title' placeholder='Titulo:'/>
            <input type="number" name='anio' placeholder='Año Publicacion:'/>
            <textarea name="descripcion" placeholder='Decripcion'></textarea>
            <input type="text" name='autor' placeholder='Autor:'/>
            <input type="email" name='email' placeholder='Correo:'/>

            <input type="submit" value='Enviar'/>

        </form>
    </div>
  )
}
