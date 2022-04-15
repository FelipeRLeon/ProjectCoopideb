import { Link } from "react-router-dom";
import './css/Cooperativa.css';

const Cooperativa = () => {
    return (
      <div>
      <div  className="d-flex justify-content-center">
        <h1 className="titulo-coop w-auto">Historia</h1>
      </div>
        <div className="coop-historia">
          <p> Irure labore qui elit minim cupidatat elit anim excepteur amet. Nulla mollit id et exercitation esse consectetur excepteur mollit velit. Fugiat do est laborum Lorem nostrud Lorem officia fugiat consectetur ut. Aliqua quis tempor consectetur ipsum nulla fugiat consectetur magna. Aute nulla tempor duis eu nostrud sunt deserunt qui cupidatat nulla id duis proident Lorem.</p>
          <p> Irure labore qui elit minim cupidatat elit anim excepteur amet. Nulla mollit id et exercitation esse consectetur excepteur mollit velit. Fugiat do est laborum Lorem nostrud Lorem officia fugiat consectetur ut. Aliqua quis tempor consectetur ipsum nulla fugiat consectetur magna. Aute nulla tempor duis eu nostrud sunt deserunt qui cupidatat nulla id duis proident Lorem.</p>
        </div>

        <div>
        <div  className="d-flex justify-content-center">
        <h1 className="titulo-coop w-auto">Direccionamiento estrategico</h1>
      </div>
          <div className="row">
            <div className="coop-mision col-6">
              <h2>Mision</h2>
              <p>
              Somos una cooperativa de servicios y suministros que busca mediante  el desarrollo económico, mejorar la vida de sus asociados, familias y colaboradores, fomentando los principios y valores cooperativos, generando confianza, seguridad y responsabilidad solidaria.
              </p>
            </div>
            <div className="coop-vision col-6">
              <h2>Vision</h2>
              <p>COOPIDEB será reconocida como la mejor Cooperativa crédito y bienestar social del sector solidario, empleando prácticas de crecimiento sostenibles y rentables.</p>
            </div>
          </div>

          <div className="row row-estatuto">
          <div className="coop-estatuto col-6">
          <Link className="coop-enlace" to="/estatuto"><button type="button" className="btn-coop w-100 h-100 btn btn-primary-outline">Estatuto</button></Link>
          
          
          
            </div>
            <div className="coop-estructura col-6">
            <Link className="coop-enlace" to="/estructura"><button type="button" class="btn-coop w-100 btn btn-outline-primary">Estructura Organizacional</button></Link>
            
            </div>
            
          </div>
        </div>
      </div>
    )
  };
  
  export default Cooperativa;