import { Outlet, Link } from "react-router-dom";
import Footer from './Footer'
import './css/Layout.css';
import './css/normalize.css';
import './css/styles.css';

const Layout = () => {
  return (
    <div className="flex-wra"> 
      <header className="header">
        <div className="contenedor-header">
            <div className="barra">
                <Link className="logo" to="/">
                    <img className="header__logo no-margin" src={require('../img/LOGO_COOPERATIVA.png')} alt="Logotipo"/>
                </Link>

                <nav className="navegacion">
                    <Link className="navegacion__enlace " to="/cooperativa">Nuestra Cooperativa</Link>
                    <Link className="navegacion__enlace" to="/servicios">Servicios</Link>
                    <Link className="navegacion__enlace" to="/asociarse">¿Como asosiarse?</Link>
                    <Link className="navegacion__enlace" to="/contacto">Contacto</Link>
                    <Link className="navegacion__enlace navegacion__enlace--activo" to="/pqrfs">PQRST</Link>
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