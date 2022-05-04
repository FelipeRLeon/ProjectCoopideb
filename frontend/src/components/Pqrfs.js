import './css/pqrst.css';
import { Mailer }  from './ContactUs';
const Pqrs = () => {
    return (
      <main className="contenedorx">
        <div  className="d-flex justify-content-center">
            <h1>PQRST</h1>
        </div>
        <div className="contacto-bg">
            <Mailer/>
        </div>
           
    </main>
    )
  };
  
  export default Pqrs;