import { Link } from "react-router-dom";
import './css/Cooperativa.css';

import pdf from '../data/Estatuto.pdf';

const Cooperativa = () => {
    return (
      <div>
      <div  className="d-flex justify-content-center">
        <h1 className="w-auto">Historia</h1>
      </div>
        <div className="credito-ser1">
          <div className="imagen-prima">
          <img alt='imagen-prima' src={require('../img/historia 1.png')}></img>
          </div>
          <div className="coop-historia">
            <p>Por iniciativa de 22 exfuncionarios indemnizados del Distrito Especial de Bogotá DC., mediante ACTA DE CONSTITUCION del dia 23 Noviembre de 2002 debidamente registrada ante la CAMARA DE COMERCIO DE BOGOTA y reunidos los requisitos de ley se declaró constituida la COOPERATIVA
              MULTIACTIVA DE SERVICIOS Y SUMINISTROS Y SE IDENTIFICARA con la sigla COOPIDEB, con domicilio principal en la ciudad de Bogotá en la TV. 29 No.37-21, con el objeto principal de promover el desarrollo integral del ser humano, económico y cultural de sus asociados y el desarrollo de la comunidad mediante la aplicación y la práctica de los principios y valores cooperativos sobre la base de una eficiente administración. 
              Se aprobaron los Estatutos por unanimidad de los Socios Fundadores
              Se integró el Consejo de Administración.
              Se nombraron Gerente y Revisor Fiscal
              SERVICIOS que se prestan: APORTE y CREDITO</p>
            
          </div>
        </div>


        <div>
        <div  className="d-flex e-flex justify-content-center">
        <h1 className="titulo-coop w-auto">Direccionamiento estratégico</h1>
      </div>
          <div className="row">
            <div className="coop-mision col-6">
              <h2>Misión</h2>
              <p>
              Somos una cooperativa de servicios y suministros que busca mediante  el desarrollo económico, mejorar la vida de sus asociados, familias y colaboradores, fomentando los principios y valores cooperativos, generando confianza, seguridad y responsabilidad solidaria.
              </p>
            </div>
            <div className="coop-vision col-6">
              <h2>Visión</h2>
              <p>COOPIDEB será reconocida como la mejor Cooperativa crédito y bienestar social del sector solidario, empleando prácticas de crecimiento sostenibles y rentables.</p>
            </div>
          </div>

          <div className="row row-estatuto">
          <div className="coop-estatuto col-6">
          <Link target="_blank" className="coop-enlace" to={pdf}><button type="button" className="btn-coop w-100 h-100 btn btn-primary-outline">Estatuto</button></Link>
          
          
            </div>
            <div className="coop-estructura col-6">
            <Link download className="coop-enlace" to="/estructura"><button type="button" class="btn-coop w-100 btn btn-outline-primary">Estructura Organizacional</button></Link>
            
            </div>
            
          </div>
        </div>
      </div>
    )
  };
  
  export default Cooperativa;