
const Home = () => {
    return (
        <div>
            <section class="contenedor Nuestra-Coperativa">
                <h2 class="titulo">Nuestra Cooperativa</h2>
                <div class="contenedor-Nuestra-Coperativa">
                    <img src={require('../img/Ilustracion2.svg')} alt="" class="imagen-about-us" />
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
                    <h2 class="titulo">Creditos</h2>
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
                <h2 class="titulo">Que dice nuestros clientes</h2>
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
                    <h2 class="titulo">Nuestro servicios</h2>
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