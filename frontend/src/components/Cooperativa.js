import { Link } from "react-router-dom";
import './css/Cooperativa.css';


import pdf_Acta_de_Asamblea from '../data/Acta_de_la_asamblea.pdf';
import pdf_Estatuto from '../data/Estatuto.pdf';
import pdf_EstadosFinancieros21 from '../data/EstadosFinancieros21.pdf';
import pdf_EstadosFinancieros22 from '../data/EstadosFinancieros22.pdf';
import pdf_EstadosFinancieros24 from '../data/EstadosFinancieros24.pdf';
import pdf_Informe_de_Gestion from '../data/Informe_de_gestion_2022.pdf';


import React, { useState, useEffect, useRef } from "react";
const Cooperativa = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Cierre automático al hacer clic fuera
useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  
    return (
      <main >
      <div className="home-container">
        <div  className="d-flex justify-content-center">
          <h1>Historia</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12 d-flex flex-wrap align-items-center">
            <img alt='imagen-prima' src={require('../img/historia 1.png')}></img>
          </div>
          <div className="mt-5 col-lg-6 col-12">
            <p className="coop-historia">Por iniciativa de 22 exfuncionarios indemnizados del Distrito Especial de Bogotá DC., mediante ACTA DE CONSTITUCION del dia 23 Noviembre de 2002 debidamente registrada ante la CAMARA DE COMERCIO DE BOGOTA y reunidos los requisitos de ley se declaró constituida la COOPERATIVA
              MULTIACTIVA DE SERVICIOS Y SUMINISTROS Y SE IDENTIFICARA con la sigla COOPIDEB, con domicilio principal en la ciudad de Bogotá en la TV. 29 No.37-21, con el objeto principal de promover el desarrollo integral del ser humano, económico y cultural de sus asociados y el desarrollo de la comunidad mediante la aplicación y la práctica de los principios y valores cooperativos sobre la base de una eficiente administración. 
              Se aprobaron los Estatutos por unanimidad de los Socios Fundadores
              Se integró el Consejo de Administración.
              Se nombraron Gerente y Revisor Fiscal
              SERVICIOS que se prestan: APORTE y CREDITO</p>
          </div>
        </div>
        <div>
          <div  className="d-flex justify-content-center">
            <h1>Direccionamiento estratégico</h1>
          </div>
          <div className="row">
            <div className="coop-mision col-6">
              <div  className="d-flex justify-content-center">
                <h2>Misión</h2>
              </div>
              <p className="mt-3 p-2">
              Somos una cooperativa de servicios y suministros que busca mediante  el desarrollo económico, mejorar la vida de sus asociados, familias y colaboradores, fomentando los principios y valores cooperativos, generando confianza, seguridad y responsabilidad solidaria.
              </p>
            </div>
            <div className="coop-vision col-6">
            <div  className="d-flex justify-content-center">
              <h2>Visión</h2>
              </div>
              
              <p className="mt-3 p-2">COOPIDEB será reconocida como la mejor Cooperativa crédito y bienestar social del sector solidario, empleando prácticas de crecimiento sostenibles y rentables.</p>
            </div>
          </div>

          <div className="row row-estatuto">
            <div className="coop-estatuto col-sm-6 col-lg-6 col-12">
              <div className="dropdown-wrapper" ref={dropdownRef}>
               <button className="btn-coop w-auto h-100 btn btn-primary-outline"onClick={() => setShowDropdown(!showDropdown)}>Estados Financieros</button>
                  {showDropdown && (
                    <div className="dropdown-content-custom">
                      <a href={pdf_EstadosFinancieros21} target="_blank" rel="noopener noreferrer">2021</a>
                      <a href={pdf_EstadosFinancieros22} target="_blank" rel="noopener noreferrer">2022</a>
                      <a href={pdf_EstadosFinancieros24} target="_blank" rel="noopener noreferrer">2024</a>
                    </div>
                  )}
              </div>
            </div>            
            <div className="coop-estructura col-sm-6 col-lg-6 col-12">
              <Link download className="coop-enlace" to="/estructura"><button type="button" className="btn-coop w-auto h-100 btn btn-outline-primary">Estructura Organizacional</button></Link>  
            </div>
            <div className="coop-estatuto col-sm-6 col-lg-6 col-12">
              <Link target="_blank" className="coop-enlace" to={pdf_Acta_de_Asamblea}><button type="button" className="btn-coop w-auto h-100 btn btn-primary-outline">Acta de la asamblea</button></Link>
            </div>
            <div className="coop-estatuto col-sm-6 col-lg-6 col-12">
              <Link target="_blank" className="coop-enlace" to={pdf_Estatuto}><button type="button" className="btn-coop w-auto h-100 btn btn-primary-outline">Estatuto</button></Link>
            </div>
            <div className="coop-estatuto col-sm-6 col-lg-6 col-12">
              <Link target="_blank" className="coop-enlace" to={pdf_Informe_de_Gestion}><button type="button" className="btn-coop w-auto h-100 btn btn-primary-outline">Informe de gestion</button></Link>
            </div>

          </div>
        </div>
        </div>
      </main>
    )
  };
  
  export default Cooperativa;