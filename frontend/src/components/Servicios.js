import './css/Servicios.css';
const Servicios = () => {
    return(
      <main className='contenedorServicios'>
        <div  className="d-flex justify-content-center">
          <h1>Créditos</h1>
        </div>
        <div className='row'>
          <div className='col-sm-6 col-lg-6 col-12 d-flex flex-wrap align-items-center'>
            <img alt='imagen-prima' src={require('../img/prima-01 1 (1).png')}></img>
          </div>
          <div className='col-sm-6 col-lg-6 col-12 mt-5'>
            <div  className="d-flex justify-content-center">
              <h2>Crediprima</h2> 
            </div>    
            <p className="mt-3 p-2">
            Crédito destinado a cubrir necesidades del asociado facilitando el pago a través de una cuota única para junio y diciembre. Descuento por nómina con entidades con las cuales COOPIDEB tenga convenio de descuento con libranza o por caja de acuerdo con las condiciones y garantías establecidas por Coopideb. 
            </p>
          </div>
          
          <div className='col-sm-6 col-lg-6 col-12 mt-5'>
            <div  className="d-flex justify-content-center">
              <h2>Vivienda</h2> 
            </div>
            <p className="mt-3 p-2">
            Destinado a financiar la compra de vivienda familiar nueva o usada (incluye leasing)
            Adquisición de Lote, construcción de vivienda en lote de propiedad del asociado y/o compra de cartera con hipoteca de un bien propiedad del asociado. Igualmente estará destinada a realizar mejoras, reparaciones o modificaciones de la vivienda de propiedad del asociado. 
            </p>
          </div>
          <div className='col-sm-6 col-lg-6 col-12 d-flex flex-wrap align-items-center'>
            <img alt='imagen-casa'src={require('../img/casa-01 1 (1).png')} ></img>
          </div>
          <div className='col-sm-6 col-lg-6 col-12 mt-5'>
            <div  className="d-flex justify-content-center">
              <h2>Ordinario</h2> 
            </div>
            <p className="mt-3 p-2">
            Será de libre inversión para cubrir cualquier tipo de necesidad. Podrá tener varios créditos simultáneamente por esta línea siempre y cuando la capacidad de pago del asociado le permita atender las obligaciones de los mismos.
            No se cobra estudio de crédito. 
            </p>
          </div>
          <div className='col-sm-6 col-lg-6 col-12 d-flex flex-wrap align-items-center'>
            <img alt='imagen-casa'src={require('../img/ordinario-01 1 (1).png')} ></img>
          </div>
          <div className='col-sm-6 col-lg-6 col-12 mt-5'>
            <div  className="d-flex justify-content-center">
              <h2>Educativo</h2> 
            </div>
            <p className="mt-3 p-2">
            Para promover el desarrollo personal y profesional de los asociados y su grupo familiar (cónyuge o compañero(a) permanente, hijos, nietos y sobrinos) siempre y cuando se demuestre el parentesco. Se financia educación formal, especializaciones, Maestrías y MBA educación para el trabajo y el desarrollo humano, aprobados por el Ministerio de Educación Nacional o Secretaria de Educación, estudios en el exterior y útiles escolares e implementos tecnológicos y computadores. 
            </p>
          </div>
          <div className='col-sm-6 col-lg-6 col-12 d-flex flex-wrap align-items-center'>
            <img alt='imagen-casa'src={require('../img/estudiante-01 1 (1).png')} ></img>
          </div>
        </div>
      </main>
    ) 
  };
  
  export default Servicios;

