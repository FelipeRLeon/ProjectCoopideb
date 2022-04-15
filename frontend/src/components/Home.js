import './css/Home.css';
const Home = () => {
    return (
        <div>
            <section class="contenedor Nuestra-Coperativa">
            <div  className="d-flex justify-content-center">
            <h1>Nuestra cooperativa</h1>
            </div>
                
                <div class="contenedor-Nuestra-Coperativa">
                    <img src={require('../img/ilustracion2.svg')} alt="" class="imagen-about-us" />
                    <div class="contenido-textos">
                        <h3><span>1</span>Los Mejores Productos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat in ipsam saepe ut, quaerat
                            odit, alias dolore quos assumenda aliquam quidem ex repellendus. Voluptatem beatae repellendus
                            aspernatur tempora nisi?</p>
                        <h3><span>2</span>Los Mejores Productos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat in ipsam saepe ut, quaerat
                            odit, alias dolore quos assumenda aliquam quidem ex repellendus. Voluptatem beatae repellendus
                            aspernatur tempora nisi?</p>
                    </div>
                </div>
            </section>
            <section class="portafolio">
                <div class="contenedor">
                <div  className="d-flex justify-content-center">
                    <h2 className="subtitle">Creditos</h2>
                </div>
                    
                    <div class="galeria-port">
                        <div class="imagen-port">
                            <img src={require('../img/imagen1.jpeg')} alt="" />
                            <div class="hover-galeria">
                                <img src={require('../img/LOGO_COOPERATIVA.png')} alt="" />
                                <p>Nuestro trabajo</p>
                            </div>
                        </div>
                        <div class="imagen-port">
                            <img src={require('../img/imagen2.jpg')} alt="" />
                            <div class="hover-galeria">
                                <img src={require('../img/LOGO_COOPERATIVA.png')} alt="" />
                                <p>Nuestro trabajo</p>
                            </div>
                        </div>
                        <div class="imagen-port">
                            <img src={require('../img/imagen3.jpg')} alt="" />
                            <div class="hover-galeria">
                                <img src={require('../img/LOGO_COOPERATIVA.png')} alt="" />
                                <p>Nuestro trabajo</p>
                            </div>
                        </div>
                        <div class="imagen-port">
                            <img src={require('../img/imagen4.jpg')} alt="" />
                            <div class="hover-galeria">
                                <img src={require('../img/LOGO_COOPERATIVA.png')} alt="" />
                                <p>Nuestro trabajo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="clientes contenedor">
                <div  className="d-flex justify-content-center">
                     <h2 class="titulo">Que dice nuestros clientes</h2>  
                </div>
                
                <div class="cards">
                    <div class="card">
                        <img src={require('../img/imagen3.jpg')} alt="" />
                        <div class="contenido-texto-card">
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, adipisci!</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={require('../img/imagen3.jpg')} alt="" />
                        <div class="contenido-texto-card">
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, adipisci!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-servies">
                <div class="contenedor">
                <div  className="d-flex justify-content-center">
                    <h2>Nuestro servicios</h2>
                </div>
                    
                    <div class="servicio-cont">
                        <div class="servicio-ind">
                            <img src={require('../img/imagen2.jpg')} alt="" />
                            <h3>Name</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, error!</p>
                        </div>
                        <div class="servicio-ind">
                            <img src={require('../img/imagen2.jpg')} alt="" />
                            <h3>Name</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, error!</p>
                        </div>
                        <div class="servicio-ind">
                            <img src={require('../img/imagen2.jpg')} alt="" />
                            <h3>Name</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, error!</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Home;