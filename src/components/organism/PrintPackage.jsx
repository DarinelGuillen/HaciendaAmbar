import { useRef, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import PaqueteContext from "../../contexts/PaqueteContext";
import UserContext from "../../contexts/UserContext";
import RentaDelUsuarioContext from "../../contexts/RentaDelUsuarioContext";
import IdContex from "../../contexts/IdContex";
import "../../assets/style/PrintPackage.css";

function PrintPackage() {
  const formSignIn = useRef();
  const { isPaquete, setIsPaquete } = useContext(PaqueteContext);
  
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { isIduser, setIsiduser } = useContext(IdContex);
  const { isRentaUsuario, setIsRentaUsuario } = useContext(RentaDelUsuarioContext);

  const date = new Date();
  const navigate = useNavigate();
  const handleClickTerminateRent = (e) => {
    e.preventDefault();
    let data={
      isPaqueteID:isPaquete._id
    }
    setIsRentaUsuario(data);
    // {setTimeout(() => {
    //   setTimeout(() => 
        // alert("Tu X paquete a sido agregado al Tu carrito\n");
        navigate("/TypesRents");
        console.log("PRINTPACKAGE ORGANISM   setIsRentaUsuario", isRentaUsuario);
      console.log("isPaquete._id", isPaquete._id);
      console.log("isRentaUsuario", JSON.stringify(isRentaUsuario));
      // }, 1000);
    // }, 1000);
  };

  return (
    <>
      <div className="">
        {console.log(JSON.stringify(isPaquete))}
        <div className="">
          <p className="fs-0 p-2 text-center tituloPaqueteInfo">
            {isPaquete.nombrePaquete}
          </p>
          <p className="fs-1 p-2 precioPaqueteInfo">
            PRECIO:${isPaquete.precio}
          </p>
          <p className="fs-5 informacionPaquetesAmbar">
            <label className="fs-2 subTituloPaquetes">Nuestro paquete incluye:</label>
            {isPaquete.descripcion}
          </p>
          {/*Los nuevos datos aqui Dario */}
          {/* Cortecia */}
          {isPaquete.elemDeCortesia=="null"?(<> </>):(<>
            <label className="fs-2 subTituloPaquetes">Elementos de cortecía</label>
          <label className="fs-5 informacionPaquetesAmbar">{isPaquete.elemDeCortesia}</label>
          </>)}
          {/* Adicionales */}
          {isPaquete.adicionales=="null"?(<> </>):(<>
            <label className="fs-2 subTituloPaquetes">Adicionales</label>
          <label className="fs-5 informacionPaquetesAmbar">{isPaquete.adicionales}</label>
          </>)}

        </div>
      </div>
      <div className="contenedorPadreImagenes">
        <img src="src/assets/img/enteladoYSeyDeFotos1.png" className="img-thumbnail" alt="..."></img>
        <img src="src/assets/img/enteladoYSeyDeFotos2.png" className="img-thumbnail" alt="..."></img>
        <img src="src/assets/img/enteladoYSeyDeFotos3.png" className="img-thumbnail" alt="..."></img>
        <img src="src/assets/img/enteladoYSeyDeFotos4.png" className="img-thumbnail" alt="..."></img>
        <img src="src/assets/img/enteladoYSeyDeFotos5.png" className="img-thumbnail" alt="..."></img>
        <img src="src/assets/img/enteladoYSeyDeFotos6.png" className="img-thumbnail" alt="..."></img>
      </div>
      <div className="paddincito"></div>
      <center>
        <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3822.8880082936394!2d-93.10041072883605!3d16.632388853086912!3m2!1i1024!2i768!4f13.1!2m1!1sRivera%20Nandayal%C3%BA%20No.%207%20Suchiapa%20Chiapas!5e0!3m2!1ses!2smx!4v1678470746122!5m2!1ses!2smx" width="80%" height="100%" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>              
      <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-sm paddingBtn" onClick={handleClickTerminateRent} >Agregar al carrito</button>
        <button className="btn btn-sm paddingBtn" type="button"><Link to="/">Regresar</Link></button>
      </div>
      </center>
    </>
  );
}

export default PrintPackage;
