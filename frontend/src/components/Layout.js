import { Outlet, Link } from "react-router-dom";
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="flex-wra"> 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link  className="navbar-brand" to="/">Home</Link>
          <div className="" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/asociarse">Asociarse</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pqrs">Pqrs</Link>
              </li>
            </ul>
          </div>
        </div>  
      </nav>
      <div className="contenido">
        <Outlet/>
      </div>
    
      <Footer />
    </div>
  )
};

export default Layout;