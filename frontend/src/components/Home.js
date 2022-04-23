import './css/Home.css';
const Home = () => {
    return (
        <main>
        <div className="home-container">
        <div className='row pt-5'>
            <div className='col-sm-6 col-lg-6 col-12 d-flex justify-content-center'>
              <img alt='imagen-prima' src={require('../img/inicio.png')}></img>
            </div>
            <div className='col-sm-6 col-lg-6 col-12'>
              <div  className="d-flex justify-content-center">
                  <h2 className="titulo-coop">COOPIDEB</h2>
              </div>
              <p className="mt-5 px-5">
              Somos una Cooperativa líder en el desarrollo economico y en la aplicación de principios y valores de la sociedad, prestamos servicios financieros y de bienestar social para el mejoramiento de la vida de nuestros asociados y sus familiares. 
              </p>
            </div>    
            <div className='col-12 fachada__imagen'>
              <img alt='imagen-fachada' src={require('../img/fachada.png')}></img>
            </div>
          </div>
        </div>     
               
        </main>
    );
};

export default Home;