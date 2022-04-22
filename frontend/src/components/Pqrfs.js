import './css/pqrst.css';
const Pqrs = () => {
    return (
      <main className="contenedor">
        <div  className="d-flex justify-content-center">
            <h1>PQRST</h1>
        </div>
        

        <div className="contacto-bg"></div>

        <form className="formulario" action="MAILTO:feliiperestrepoleon@gmail.com" method="post" encType="text/plain">
            <fieldset>
                <legend>Peticiones, Quejas y Reclamos</legend>
                <div className="contenedor-campos">
                    <div className="campo">
                        <label className="campo__label" htmlFor="nombres">Nombres:</label>
                        <input className="campo__field" type="text" placeholder="Tus Nombres" id="nombre"/>
                    </div>
                    <div className="campo">
                        <label className="campo__label" htmlFor="apellidos">Apellidos:</label>
                        <input className="campo__field" type="text" placeholder="Tus Apellidos" id="apellidos"/>
                    </div>
                    <div className="campo">
                        <label className="campo__label" htmlFor="Tipo de documento">Tipo de documento:</label>
                        <select name="tipo documento">

                            <option>Pasaporte</option>

                            <option>Cedula</option>

                            <option defaultValue>T.I</option>

                        </select>
                    </div>
                    <div className="campo">
                        <label className="campo__label" htmlFor="numerodoc">Número documento:</label>
                        <input className="campo__field" type="number" placeholder="Numero documento" id="numerodoc"/>
                    </div>
                    <div className="campo">
                        <label className="campo__label" htmlFor="correo">Correo electronico:</label>
                        <input className="campo__field" type="email" placeholder="Tu correo" id="correo"/>
                    </div>
                    <div className="campo">
                        <label className="campo__label" htmlFor="dirección">Dirección:</label>
                        <input className="campo__field" type="text" placeholder="Dirección" id="dirección"/>
                    </div>
                    <div className="campo">
                        <label className="campo__label" htmlFor="celular">Celular:</label>
                        <input className="campo__field" type="number" placeholder="(xxx)xxx xx-xx" id="celular"/>
                    </div>
                    <div className="campo">
                        <label className="campo__label" htmlFor="ciudad">Ciudad:</label>
                        <input className="campo__field" type="text" placeholder="ciudad" id="ciudad"/>
                    </div>
                    <div className="campo">
                        <label className="campo__label" htmlFor="nombre">Hechos:</label>
                        <textarea className="campo__field campo__field--textarea" id="hechos">
                        </textarea>
                    </div>
                    <div className="campo">
                        <label className="campo__label" htmlFor="nombre">Peticiones:</label>
                        <textarea className="campo__field" id="peticiones">
                        </textarea>
                    </div>    
                </div> 
                <div className="alinear-derecha flex">
                    <input type="submit" value="Enviar" className="boton wsm-100"/>
                </div>
            </fieldset>
        </form>

    </main>
    )
  };
  
  export default Pqrs;