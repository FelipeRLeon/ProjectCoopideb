import './css/Contacto.css';
import { ImLocation } from "react-icons/im";
import { MdEmail, MdLocationCity, MdPhone } from "react-icons/md";
const Contacto = () => {
    return(
      <main className="contenedor contacto no-pading">
        <div  className="d-flex justify-content-center">
          <h1>Contacto</h1>
        </div>
        <div className="contacto1">
          <div className="contacto-texto1">
            <p>
            <ImLocation size={25} /> Dirección:Trasnversal 29# 37-21
            </p>
            <p>
            <MdEmail size={25} /> Correo: Coopideb@hotmail.com
            </p>
          </div>
          <div className="contacto-texto">
            <p>
            <MdLocationCity size={25} />Ciudad:Bogotá 
            </p>
            <p>
            <MdPhone size={25} />Telefono:(601) 3684391 
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