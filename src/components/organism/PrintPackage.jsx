import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PaqueteContext from "../../contexts/PaqueteContext";
import UserContext from "../../contexts/UserContext";
import IdContex from "../../contexts/IdContex";
import "../../assets/style/PrintPackage.css";

function PrintPackage() {
  const formSignIn = useRef();
  const { isPaquete, setIsPaquete } = useContext(PaqueteContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { isIduser, setIsiduser } = useContext(IdContex);

  const date = new Date();
  const navigate = useNavigate();
  const handleClickTerminateRent = (e) => {
    e.preventDefault();
    //console.log("handleClickTerminateRent called");
    //console.log("ISPAQUETE CONTEXT\n", isPaquete, "\n");
    //console.log("ISPAQUETE CONTEXT IDDDDD\n", isPaquete._id, "\n");
    //console.log("IDD USER CONTEXT isLoggedIn\n", isIduser, "\n");
    const URI = "https://haciendaambar.iothings.com.mx/rentasUsuario";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idPaquete: isPaquete._id, //
        idUser: isIduser,
        fechaInicio: "",
        fechaFinalizacion: "",
        fechaDeReserva: date,
        precioTotal: isPaquete.precio,
        estadoRenta: false,
        observaciones: "",
        SeEjecutoConExitoLarenta: false,
      }),
    };
    fetch(URI, options)
      .then((response) => response.json())
      .then((data) => {
        //console.log("RENTAL CREATED", data);
        console.log("data", data);
        alert("Renta creada con éxito");
        alert("Él Administrador se contactará con usted");
        navigate("/CommonUser");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div>
        <label>PRECIO:{isPaquete.precio}</label>
        <label>nombrePaquete:{isPaquete.nombrePaquete}</label>
        <label>descripcion:{isPaquete.descripcion}</label>
      </div>
      <button
        className="botonFormularioPackage"
        onClick={handleClickTerminateRent}
      >
        Terminar
      </button>
    </>
  );
}

export default PrintPackage;
