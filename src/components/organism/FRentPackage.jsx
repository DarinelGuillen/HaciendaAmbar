import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PaqueteContext from "../../contexts/PaqueteContext";
import UserContext from "../../contexts/UserContext";
import IdContex from "../../contexts/IdContex";
import "../../assets/style/FRentPackage.css";

function FRentPackage() {
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
    const formData = new FormData(formSignIn.current);
    const URI = "http://haciendaambar.iothings.com.mx:3000/rentasUsuario";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idPaquete: isPaquete._id, //
        idUser: isIduser,
        fechaInicio: formData.get("fechaInicio"),
        fechaFinalizacion: formData.get("fechaFinalizacion"),
        fechaDeReserva: date,
        precioTotal: isPaquete.precio,
        estadoRenta: false,
        observaciones: formData.get("observaciones"),
        SeEjecutoConExitoLarenta: false,
      }),
    };
    fetch(URI, options)
      .then((response) => response.json())
      .then((data) => {
        //console.log("RENTAL CREATED", data);
        alert("Renta creada con éxito");
        alert("Él Administrador se contactará con usted");
        navigate("/CommonUser");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="login-box">
        <label className="labelPackage" htmlFor="fechaInicio">
          Fecha de inicio
        </label>
        <form ref={formSignIn}>
          <div className="user-box">
            <input type="datetime-local" name="fechaInicio" />
          </div>
          <label className="labelPackage" htmlFor="fechaFinalizacion">
            Fecha de finalización
          </label>
          <div className="user-box">
            <input type="datetime-local" name="fechaFinalizacion" />
          </div>

          <label className="labelPackage" htmlFor="observaciones">
            observaciones
          </label>
          <div className="user-box">
            <input type="text" name="observaciones" />
          </div>
          <button
            className="botonFormularioPackage"
            onClick={handleClickTerminateRent}
          >
            Terminar
          </button>
        </form>
      </div>
    </>
  );
}

export default FRentPackage;
