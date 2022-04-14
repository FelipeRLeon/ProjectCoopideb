import './css/Footer.css';
/*Importacion Logos*/
import { MdLocationCity, MdEmail } from "react-icons/md";
import { GrMapLocation, GrFacebook, GrLinkedin } from "react-icons/gr";
import { ImInstagram, ImYoutube } from "react-icons/im";
const Footer = () => {
  return (

    <div className="footerx">
    <p className="footer-menu">
      <a href="/">Inicio</a> |
      <a href="cooperativa">Cooperativa</a> |
      <a href="servicios"> Servicios</a> |
      <a href="asociarse"> Asociarse</a> |
      <a href="contacto"> Contacto</a> |
      <a href="pqrfs"> PQRFS</a>
    </p>
      
      <div className="row row-elemenos-widget">
        <div className="elementos-widget-1 col-sm-4 col-6">
        <img src={require('../img/LOGO_COOPERATIVA.png')} alt="" class="img-footer" />

        </div>
        <div className="elementos-widget-2 col-sm-4 col-6">
        <p>Contacto</p>
          <div className="footer-contactoo flex">
            <p> <MdLocationCity size={25}/>               Bogota, Colombia</p>
          </div>
          <div className="footer-contactoo flex">
            <p> <GrMapLocation size={25}/>   (601) 3684391</p>
          </div>
          <div className="footer-contactoo flex">
            <p><a href="#"> <MdEmail size={25}/> coopideb@hotmail.com </a></p>
          </div>
        </div>
        <div className="elementos-widget-3 col-sm-4 col-6">
          <div className="row w-100">
            <div className="w-20 redicon-footer col-3">
              <a href="https://www.facebook.com/"><GrFacebook size={25}/></a>
            </div>
            <div className="w-20 redicon-footer col-3">
              <a href="https://www.instagram.com/"><ImInstagram size={25}/></a>
            </div>
            <div className="w-20 redicon-footer col-3">
              <a href="https://www.youtube.com/"><ImYoutube size={25}/></a>
            </div>
            <div className="w-20 redicon-footer col-3">
              <a href="https://www.linkedin.com/"><GrLinkedin size={25}/></a>
            </div>
          </div>

        </div>
      </div>
      
  <p className="name derechos-footer"> SirCanabis & SirJulaco &copy; 2022</p>
  </div>
  )
};

export default Footer;