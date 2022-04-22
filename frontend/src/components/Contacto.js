import './css/Contacto.css';
import { ImLocation } from "react-icons/im";
import { MdEmail, MdLocationCity, MdPhone } from "react-icons/md";
const Contacto = () => {
    return(
      <main className="contenedor contacto no-pading">
        <div className="row">
          <div  className="col-sm-12 col-lg-12 col-12 h-auto">
            <div  className="d-flex justify-content-center">
              <h1>Contacto</h1>
            </div>
            <div>
              <p>
                <ImLocation size={25} /> Dirección: Trasnversal 29# 37-21
              </p>
              <p>
                <MdEmail size={25} /> Correo: Coopideb@hotmail.com
              </p>
              <p>
                <MdLocationCity size={25} />Ciudad: Bogotá D.C.
              </p>
              <p>
                <MdPhone size={25} />Telefono: (601) 3684391 
              </p>
            </div>
          </div>
          <div  className="mapa col-sm-12 col-lg-12 col-12 mt-5">
            <div  className="d-flex justify-content-center">
              <h1>Mapa</h1>
            </div>
            <iframe title="mapa" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=coopideb&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </div>
        </div>
      </main>
    ) 
  };
  
  export default Contacto;
