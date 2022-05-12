import React from 'react';
import emailjs from 'emailjs-com';
import './css/pqrst.css';

export const Mailer = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_yg6rci9','template_3m6rrwq',event.target,'i5_fMBJxfS3dZJYBD')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className='div-form'>
      <form className='formulario' onSubmit={sendEmail}>
      <fieldset>
                    <legend>Peticiones, Quejas y Reclamos</legend>
                    <div className="contenedor-campos">
                        <div className="campo">
                            <label className="campo__label" htmlFor="nombres">Nombres:</label>
                            <input className="campo__field" name='pqrst_name' type="text" placeholder="Tus Nombres" id="nombre"/>
                        </div>
                        <div className="campo">
                            <label className="campo__label" htmlFor="apellidos">Apellidos:</label>
                            <input className="campo__field" name='pqrst_lastname' type="text" placeholder="Tus Apellidos" id="apellidos"/>
                        </div>
                        <div className="campo">
                            <label className="campo__label" htmlFor="Tipo de documento">Tipo de documento:</label>
                            <select name='pqrst_typeid'>

                                <option>Pasaporte</option>

                                <option>Cedula</option>

                                <option defaultValue>T.I</option>

                            </select>
                        </div>
                        <div className="campo">
                            <label className="campo__label" htmlFor="numerodoc">Número documento:</label>
                            <input className="campo__field" name='pqrst_id' type="number" placeholder="Numero documento" id="numerodoc"/>
                        </div>
                        <div className="campo">
                            <label className="campo__label" htmlFor="correo">Correo electronico:</label>
                            <input className="campo__field" name='pqrst_email' type="email" placeholder="Tu correo" id="correo"/>
                        </div>
                        <div className="campo">
                            <label className="campo__label" htmlFor="dirección">Dirección:</label>
                            <input className="campo__field" name='pqrst_address' type="text" placeholder="Dirección" id="dirección"/>
                        </div>
                        <div className="campo">
                            <label className="campo__label" htmlFor="celular">Celular:</label>
                            <input className="campo__field" name='pqrst_phone' type="number" placeholder="(xxx)xxx xx-xx" id="celular"/>
                        </div>
                        <div className="campo">
                            <label className="campo__label" htmlFor="ciudad">Ciudad:</label>
                            <input className="campo__field" name='pqrst_city' type="text" placeholder="ciudad" id="ciudad"/>
                        </div>
                        <div className="campo">
                            <label className="campo__label" htmlFor="nombre">Hechos:</label>
                            <textarea name="pqrst_hechos" className="campo__field campo__field--textarea" id="hechos">
                            </textarea>
                        </div>
                        <div className="campo">
                            <label className="campo__label" htmlFor="nombre">Peticiones:</label>
                            <textarea name="pqrst_message" className="campo__field" id="peticiones">
                            </textarea>
                        </div>    
                    </div> 
                    <div className="alinear-derecha flex">
                        <input type="submit" value="Enviar" className="boton wsm-100"/>
                    </div>
                </fieldset>
      </form>
      
    </div>
  )
}
