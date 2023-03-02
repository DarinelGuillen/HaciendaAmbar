import { useState, useRef } from "react";
import ButtonStyled from "../atoms/ButtonStyled";
import imgExampleBorrameOCambiameElNombrePuto from "../../assets/img/imgRecuerdos.png"
function DatesStartEndTime(){
    const formDateReserva=useRef();
    const handlerClickConfirmarReserva=(e)=>{
        e.preventDefault();
        const formDataR = new FormData(formDateReserva.current);
        const FechaDeEvento = formDataR.get("FechaDeEvento");
        const HoraDeInicio = formDataR.get("HoraDeInicio");
        const HoraDeFinalizacion = formDataR.get("HoraDeFinalizacion");
        alert("IM handlerClickConfirmarReserva")
    }
    return ( 
        <>
        <div className="FContaineMain">
        <div className="CContainerMain">
          <div className="left">
            <img src={imgExampleBorrameOCambiameElNombrePuto}></img>
          </div>
          <div className="rightIMG">
            <form ref={formDateReserva}>
              <label>Selecione la fecha de su evento</label>
              <input type="date" name="FechaDeEvento" />
              <label>Selecione la hora de inicio de su evento</label>
              <input type="time" name="HoraDeInicio" />
              <label>Hora de finalizacion del evento</label>
              <input type="time" name="HoraDeFinalizacion" />
              <ButtonStyled
                onClick={handlerClickConfirmarReserva}
                label={"Aceptar Confima Reserva"}
                Danger={true}
              />
            </form>
          </div>
        </div>
      </div>
        </>
     );
}

export default DatesStartEndTime;