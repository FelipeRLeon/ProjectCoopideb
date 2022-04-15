import './css/Contacto.css';
const Contacto = () => {
    return(
      <main class="contenedor contacto no-pading">
        <div  className="d-flex justify-content-center">
          <h1>Contacto</h1>
        </div>
        <div class="contacto1">
          <div class="contacto-texto1">
            <p>
              Dirección:Trasnversal 29# 37-21
            </p>
            <p>
              Correo: Coopideb@hotmail.com
            </p>
          </div>
          <div class="contacto-texto">
            <p>
              Ciudad:Bogotá 
            </p>
            <p>
              Telefono:(601) 3684391 
            </p>
          </div>
        </div>
        <div  className="d-flex justify-content-center">
          <h1>Mapa</h1>
        </div>
        <hr linea>
        
        </hr>
      </main>
    ) 
  };
  
  export default Contacto;