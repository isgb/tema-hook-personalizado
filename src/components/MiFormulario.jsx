import React from 'react'

export const MiFormulario = () => {
  return (
    <div>
        <h1>Formulario</h1>
        <p>Formulario para guardar un curso</p>

        <form>
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
