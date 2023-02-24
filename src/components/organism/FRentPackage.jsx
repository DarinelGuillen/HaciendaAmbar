import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/style/FRentPackage.css"

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
   
       
    <div class="login-box">

    <label className="labelPackage" htmlFor="fechaInicio">Fecha de inicio</label>   
  <form ref={formSignIn}>

  <div class="user-box">
    <input type="datetime-local" name="fechaInicio"  />
  </div>
    <label className="labelPackage" htmlFor="fechaFinalizacion">Fecha de finalización</label>
  <div class="user-box">
    <input type="datetime-local" name="fechaFinalizacion"  />
  </div>
    <label className="labelPackage" htmlFor="fechaDeReserva">Fecha de reserva</label>
  <div class="user-box">
    <input type="date" name="fechaDeReserva"  /> 
  </div>
    <label className="labelPackage" htmlFor="onservaciones">Fecha de reserva</label>
  <div class="user-box">
    <input type="text" name="onservaciones"  />
  </div> 
    <button className="botonFormularioPackage" onClick={handleClickTerminateRent}>Terminar</button>
  </form>
</div>

    </>
  );
}

export default FRentPackage;
/* 
<div className="login-box">
<form className="formularioPackage" ref={formSignIn}>

  
    <label htmlFor="">Termina Tu Renta</label> 
    <label htmlFor="fechaInicio">Fecha de inicio</label>   
    <input type="datetime-local" name="fechaInicio"  />

    <label htmlFor="fechaFinalizacion">Fecha de finalización</label>
    <input type="datetime-local" name="fechaFinalizacion"  />

    <label htmlFor="fechaDeReserva">Fecha de reserva</label>
    <input type="date" name="fechaDeReserva"  /> 
      
      <label htmlFor="onservaciones">Fecha de reserva</label>
    <input type="text" name="onservaciones"  />

</form>
</div> */
