import './css/pqrst.css';
const Pqrs = () => {
    return (
      <main class="contenedor">
        <div  className="d-flex justify-content-center">
            <h1>PQRST</h1>
        </div>
        

        <div class="contacto-bg"></div>

        <form class="formulario">
            <fieldset>
                <legend>Peticiones, Quejas y Reclamos</legend>
                <div class="contenedor-campos">
                    <div class="campo">
                        <label class="campo__label" for="nombres">Nombres:</label>
                        <input class="campo__field" type="text" placeholder="Tus Nombres" id="nombre"/>
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="apellidos">Apellidos:</label>
                        <input class="campo__field" type="text" placeholder="Tus Apellidos" id="apellidos"/>
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="Tipo de documento">Tipo de documento:</label>
                        <select name="tipo documento">

                            <option>Pasaporte</option>

                            <option>Cedula</option>

                            <option selected>T.I</option>

                        </select>
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="numerodoc">Número documento:</label>
                        <input class="campo__field" type="number" placeholder="Numero documento" id="numerodoc"/>
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="correo">Correo electronico:</label>
                        <input class="campo__field" type="email" placeholder="Tu correo" id="correo"/>
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="dirección">Dirección:</label>
                        <input class="campo__field" type="text" placeholder="Dirección" id="dirección"/>
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="celular">Celular:</label>
                        <input class="campo__field" type="number" placeholder="(xxx)xxx xx-xx" id="celular"/>
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="ciudad">Ciudad:</label>
                        <input class="campo__field" type="text" placeholder="ciudad" id="ciudad"/>
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="nombre">Hechos:</label>
                        <textarea class="campo__field campo__field--textarea" id="hechos">
                        </textarea>
                    </div>
                    <div class="campo">
                        <label class="campo__label" for="nombre">Peticiones:</label>
                        <textarea class="campo__field" id="peticiones">
                        </textarea>
                    </div>    
                </div> 
                <div class="alinear-derecha flex">
                    <input type="submit" value="Enviar" class="boton wsm-100"/>
                </div>
            </fieldset>
        </form>

    </main>
    )
  };
  
  export default Pqrs;