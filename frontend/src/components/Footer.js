import './css/Footer.css';
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
      <div className="row">
        <div className="col footerx-left">
          <img src={require('../img/LOGO_COOPERATIVA.png')} alt="" class="img-footer" />
        </div>
        <div class="col footerx-center">
        <p>Contacto</p>
          <div>
            <i class="fa fa-phone"></i>
            <p> Bogota, Colombia</p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p> (601) 3684391</p>
          </div>
          <div>
            <p><a href="#"> coopideb@hotmail.com </a></p>
          </div>

        </div>
        <div className="col footerx-right">
        <p className="about">
      
      </p>
      <div className="icons">
        <a href="/cooperativa"><i className="fa fa-facebook"></i></a>
        <a href="servicios"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-google-plus"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
      </div>
        </div>
      </div>
      
  <p className="name derechos-footer"> Company Name &copy; 2016</p>
  </div>
    
    
    
    
    /*<footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
  <h2> COOPIDEB </h2>
    
    
    
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>

      <p> Contactenos</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
  <p className="about">
      
    </p>
    <div className="icons">
      <a href="/cooperativa"><i className="fa fa-facebook"></i></a>
      <a href="servicios"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
      <a href="#"><i className="fa fa-google-plus"></i></a>
      <a href="#"><i className="fa fa-instagram"></i></a>
    </div>
    
  </div>
  <p class="menu">
      <a href="/">Inicio</a> |
      <a href="cooperativa">Cooperativa</a> |
      <a href="servicios"> Servicios</a> |
      <a href="asociarse"> Asociarse</a> |
      <a href="contacto"> Contacto</a> |
      <a href="pqrfs"> PQRFS</a>
    </p>
  <p class="name"> Company Name &copy; 2016</p>
</footer>*/

  )
};

export default Footer;