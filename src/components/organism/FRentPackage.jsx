import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PaqueteContext from "../../contexts/PaqueteContext";
import UserContext from "../../contexts/UserContext";
import IdContex from "../../contexts/IdContex";
function FRentPackage() {
  const formTerminateRent = useRef();
  const { isPaquete, setIsPaquete } = useContext(PaqueteContext);
  const { isLoged, setIsLoged } = useContext(UserContext);
  const { isIduser, setIsiduser } = useContext(IdContex);

  const date = new Date();
  const navigate = useNavigate();
  const handleClickTerminateRent = (e) => {
    e.preventDefault();
    console.log("handleClickTerminateRent called");
    console.log("ISPAQUETE CONTEXT\n", isPaquete, "\n");
    console.log("ISPAQUETE CONTEXT IDDDDD\n", isPaquete._id, "\n");
    console.log("IDD USER CONTEXT ISLOGED\n", isIduser, "\n");
    const formData = new FormData(formTerminateRent.current);
    //haciendaambar.iothings.com.mx
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
        console.log("RENTAL CREATED", data);
        alert("Renta creada con éxito");
        navigate("/CommonUser");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form ref={formTerminateRent}>
        <div>
          <label htmlFor="">Termina Tu Renta</label>
        </div>

        <div>
          <label htmlFor="fechaInicio">Fecha de inicio</label>
        </div>
        <div>
          <input type="datetime-local" name="fechaInicio" />
        </div>

        <div>
          <label htmlFor="fechaFinalizacion">Fecha de finalización</label>
        </div>
        <div>
          <input type="datetime-local" name="fechaFinalizacion" />
        </div>
        <div>
          <label htmlFor="observaciones">observaciones</label>
        </div>
        <div>
          <input type="text" name="observaciones" />
        </div>

        <button onClick={handleClickTerminateRent}>Terminar</button>
      </form>
    </>
  );
}

export default FRentPackage;
