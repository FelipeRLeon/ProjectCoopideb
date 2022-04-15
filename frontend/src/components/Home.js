import './css/Home.css';
const Home = () => {
    return (
        <main className='contenedorServicios1'>            
            <div className='credito-ser1'>
              <div className='crediprima__imagen'>
                <img alt='imagen-prima' src={require('../img/inicio.png')}></img>
              </div>
              <div className='crediprima1'>
                <div  className="d-flex justify-content-center">
                   <h2 className="titulo-coop w-auto">COOPIDEB</h2>
                </div>
                <p>
                Somos una Cooperativa líder en el desarrollo economico y en la aplicación de principios y valores de la sociedad, prestamos servicios financieros y de bienestar social para el mejoramiento de la vida de nuestros asociados y sus familiares. 
                </p>
            </div>    
            </div>
            <div className='img'>
                <div className='fachada__imagen'>
                    <img alt='imagen-fachada' src={require('../img/fachada.png')}></img>
                </div>
            </div>      
      </main>
    );
};

export default Home;