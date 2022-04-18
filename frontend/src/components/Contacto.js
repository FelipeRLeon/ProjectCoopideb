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
<<<<<<< HEAD
        <div  className="div-mapa d-flex justify-content-center">
=======
        <div  className="mapa d-flex justify-content-center">
>>>>>>> 37f8360350a49bb53860dd19074b44686f6d4cce
          <h1>Mapa</h1>
          <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=coopideb&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <hr>
        
        </hr>
      </main>
    ) 
  };
  
  export default Contacto;
