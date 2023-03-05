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
    setTimeout(() => {
      setTimeout(() => {
        alert("Tu X paquete a sido agregado al Tu carrito\n");
        navigate("/TypesRents");
        console.log("PRINTPACKAGE ORGANISM   setIsRentaUsuario", isRentaUsuario);
      console.log("isPaquete._id", isPaquete._id);
      console.log("isRentaUsuario", JSON.stringify(isRentaUsuario));
      }, 1000);
    }, 1000);
  };

  return (
    <>
      <div className="contenedorPadre">
        <div className="contenedorPaquete">
          <label className="nombrePaquete">
            Nombre De Paquete:{isPaquete.nombrePaquete}
          </label>
          <label className="contenedorPaquete">
            PRECIO:${isPaquete.precio}
          </label>
          <label className="infoPaquete">
            Descripción:{isPaquete.descripcion}
          </label>
        </div>
      </div>
      <div className="contenedorPadreImagenes">
        <img src="src/assets/img/enteladoYSeyDeFotos1.png"></img>
        <img src="src/assets/img/enteladoYSeyDeFotos2.png"></img>
        <img src="src/assets/img/enteladoYSeyDeFotos3.png"></img>
        <img src="src/assets/img/enteladoYSeyDeFotos4.png"></img>
        <img src="src/assets/img/enteladoYSeyDeFotos5.png"></img>
        <img src="src/assets/img/enteladoYSeyDeFotos6.png"></img>
      </div>
        <button
          className="botonFormularioPackage"
          onClick={handleClickTerminateRent}
        >
          Agregar al carrito X paquete
        </button>
        <button className="botonFormularioPackage">
          <Link className="" to="/">
            Regresar
          </Link>
        </button>
    </>
  );
}

export default PrintPackage;
