import './css/Footer.css';
/*Importacion Logos*/
import { MdLocationCity, MdEmail, MdPhone } from "react-icons/md";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { ImInstagram, ImYoutube, ImLocation } from "react-icons/im";
const Footer = () => {
  return (
    <footer>
      <p className="footer-menu">
        <a className='color-menu' href="/">Inicio</a> |
        <a className='color-menu' href="cooperativa">Cooperativa</a> |
        <a className='color-menu' href="servicios"> Servicios</a> |
        <a className='color-menu' href="asociarse"> Asociarse</a> |
        <a className='color-menu' href="contacto"> Contacto</a> |
        <a className='color-menu' href="pqrfs"> PQRFS</a>
      </p>
      
      <div className="row row-elemenos-widget">
        <div className="elementos-widget-1 col-sm-6 col-lg-4 col-12">
        <img src={require('../img/LOGO_COOPERATIVA.png')} alt="" class="img-footer" />

        </div>
        <div className="elementos-widget-2 col-sm-6 col-lg-4 col-12">
        <p className="footer-info">Contacto</p>
          <p className="footer-info"><MdLocationCity className="footer-icon" size={25}/> Bogota, Colombia</p>
          <p className="footer-info"><MdPhone className="footer-icon" size={25}/> (601) 3684391</p>
          <p className="footer-info"><ImLocation className="footer-icon" size={25} />   Trasnversal 29# 37-21</p>
          <p className="footer-info"><MdEmail className="footer-icon" size={25}/> coopideb@hotmail.com</p>
          
        </div>
        <div className="elementos-widget-3 col-sm-6 col-lg-4 col-12">
          <div className="row w-100 h-100">
            <div className="footer-divrsocial w-20 col-3">
              <a className="footer-redsocial" href="https://www.facebook.com/"><GrFacebook size={50}/></a>
            </div>
            <div className="footer-divrsocial w-20 col-3">
              <a className="footer-redsocial" href="https://www.instagram.com/"><ImInstagram size={50}/></a>
            </div>
            <div className="footer-divrsocial w-20 col-3">
              <a className="footer-redsocial" href="https://www.youtube.com/"><ImYoutube size={50}/></a>
            </div>
            <div className="footer-divrsocial w-20 col-3">
              <a className="footer-redsocial" href="https://www.linkedin.com/"><GrLinkedin size={50}/></a>
            </div>
          </div>

        </div>
      </div>
      
      <p className="name derechos-footer"> Todos los derechos reservados &copy; 2022</p>
    </footer>
  )
};

export default Footer;