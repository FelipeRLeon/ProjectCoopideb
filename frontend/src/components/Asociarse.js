import './css/Asociarse.css';

const Asociarse = () => {
    return(
      <main className="contenedorAsociarse">
        <div  className="d-flex justify-content-center">
          <h1>¿Como Asociarse?</h1>
        </div>
        
        <p>Si te quieres unir a COOPIDEB solo debes llamarnos, o acercarte a la oficina donde con gusto te atenderemos y te explicaremos los requisitos necesario para hacerlo.</p>
        <div className="as-1">
          <div  className="d-flex justify-content-center">
            <h1>¿Quien puede asociarse?</h1>
          </div>
          <p>Pueden asociarse servidores públicos del Distrito Capital. Bajo las siguientes modalidades de contratación:</p>
        </div>
        <div>
          <ul className="as-2">
            <li>Carrera Administrativa / Indefinido / En propiedad Provisionalidad</li>
            <li>Libre Nombramiento y Remoción</li>
            <li>Se pueden afiliar a COOPIDEB cónyuges y/o compañeros permanentes e hijos de Asociados, mayores de 18 años, así como pensionados o haber adquirido derecho por pensión sustitutiva.</li>
          </ul>
        </div>
      </main>
    )
  };
  
  export default Asociarse;