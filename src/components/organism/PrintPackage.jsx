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
    const URI = "http://localhost:3000/rentasUsuario";
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
    // const URI = "http://localhost:3000/rentasUsuario";
    // const options = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     idPaquete: isPaquete._id, //
    //     idUser: isIduser,
    //     fechaInicio: "",
    //     fechaFinalizacion: "",
    //     fechaDeReserva: date,
    //     precioTotal: isPaquete.precio,
    //     estadoRenta: false,
    //     observaciones: "",
    //     SeEjecutoConExitoLarenta: false,
    //   }),
    // };
    // fetch(URI, options)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     //console.log("RENTAL CREATED", data);
    //     console.log("data", data);
    //     alert("Renta creada con éxito");
    //     alert("Él Administrador se contactará con usted");
    //     navigate("/CommonUser");
    //   })
    //   .catch((error) => console.error(error));
    alert("Tu X paquete a sido agregado al Tu carrito\n")
    //navigate("/TypesRents");
  };

  return (
    <>
    <div className="contenedorPadre">
      <div className="contenedorPaquete">
        <label className="contenedorPaquete">PRECIO:${isPaquete.precio}</label>
        <label className="infoPaquete">Nombre De Paquete:{isPaquete.nombrePaquete}</label>
        <label className="infoPaquete">Descripción:{isPaquete.descripcion}</label>
      </div>
      <button className="botonFormularioPackage" onClick={handleClickTerminateRent}>
        Agregar al carrito X paquete
      </button>
    </div>
    </>
  );
}

export default PrintPackage;
