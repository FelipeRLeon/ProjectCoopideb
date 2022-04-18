import { Outlet, Link } from "react-router-dom";
import Footer from './Footer'
import './css/Layout.css';
import './css/normalize.css';
import './css/styles.css';

const Layout = () => {
  return (
      <div> 
      <header>
        <div className="contenedor-header">
            <div className="barra">
                <Link className="logo" to="/">
                    <img className="header__logo no-margin centrar-texto" src={require('../img/LOGO_COOPERATIVA.png')} alt="Logotipo"/>
                </Link>

                <nav className="navegacion">
                    <Link className="navegacion__enlace " to="/cooperativa">Nuestra Cooperativa</Link>
                    <Link className="navegacion__enlace" to="/servicios">Servicios</Link>
                    <Link className="navegacion__enlace" to="/asociarse">¿Como asosiarse?</Link>
                    <Link className="navegacion__enlace" to="/contacto">Contacto</Link>
                    <Link className="navegacion__enlace" to="/pqrfs">PQRST</Link>
                </nav>
            </div>
        </div>
      </header>

      <div className="contenido">
        <Outlet/>
      </div>
      <Footer />
      </div>
    
  )
};

export default Layout;