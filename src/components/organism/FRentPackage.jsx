import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function FRentPackage() {
  const formSignIn = useRef();

  const handleClickTerminateRent = (e) => {
    e.preventDefault();
    console.log("handleClickTerminateRent called");
    const formData = new FormData(formSignIn.current);
    
    const URI = "http://haciendaambar.iothings.com.mx:3000/rentasUsuario";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       
        idPaquete: "",
        idUser: "",
        fechaInicio: formData.get("fechaInicio"),
        fechaFinalizacion: formData.get("fechaFinalizacion"),
        fechaDeReserva: "Current date",
        precioTotal: "",
        estadoRenta: false,
        observaciones: formData.get("observaciones"),
        SeEjecutoConExitoLarenta: false,
      }),
    };

    // fetch(URI, options)
    //   .then((response) => {
    //     console.log("Response:", response);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Data:", data);
    //   })
    //   .catch((error) => {
    //     console.log("Error:", error);
    //   });
  };

  return (
    <>
      <form ref={formSignIn}>
        <div>
          <label htmlFor="">Termina Tu Renta</label>
        </div>

        <div>
          <label htmlFor="fechaInicio">Fecha de inicio</label>
        </div>
        <div>
          <input type="datetime-local" name="fechaInicio"  />
        </div>

        <div>
          <label htmlFor="fechaFinalizacion">Fecha de finalización</label>
        </div>
        <div>
          <input type="datetime-local" name="fechaFinalizacion"  />
        </div>

        <div>
          <label htmlFor="fechaDeReserva">Fecha de reserva</label>
        </div>
        <div>
          <input type="date" name="fechaDeReserva"  />
        </div> 
        <div>
          <label htmlFor="onservaciones">Fecha de reserva</label>
        </div>
        <div>
          <input type="text" name="onservaciones"  />
        </div>

        <button onClick={handleClickTerminateRent}>Terminar</button>
      </form>
    </>
  );
}

export default FRentPackage;