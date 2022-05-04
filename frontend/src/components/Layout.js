import { Outlet } from "react-router-dom";
import Footer from './Footer'
import './css/Layout.css';
import './css/normalize.css';
import './css/styles.css';

import Navbar from './NavBar/Navbar'

const Layout = () => {
  return (
      <div> 
        <header>
          <Navbar/>
        </header>
        <div className="contenido">
          <Outlet/>
        </div>
        <Footer />
      </div>
  )
};

export default Layout;