import {useNavigate} from 'react-router-dom'
import { useState, useRef, useContext } from "react";
import RentaDelUsuarioContext from '../../contexts/RentaDelUsuarioContext';
import ButtonStyled from "../atoms/ButtonStyled";
import imgExampleBorrameOCambiameElNombrePuto from "../../assets/img/imgRecuerdos.png";
function DatesStartEndTime() {
  const { isRentaUsuario, setIsRentaUsuario } = useContext(RentaDelUsuarioContext);
  const navigate = useNavigate();
  const formDateReserva = useRef();
  const handlerClickConfirmarReserva = (e) => {
    e.preventDefault();
    const formDataR = new FormData(formDateReserva.current);
    let DatosDeR = {
      rentaUsuario: isRentaUsuario,
      fechaDeEvento: formDataR.get("FechaDeEvento"),
      horaDeInicio: formDataR.get("HoraDeInicio"),
      horaDeFinalizacion: formDataR.get("HoraDeFinalizacion")
    };
    setTimeout(() => {
      setIsRentaUsuario(DatosDeR);
      console.log("Que soy isRentaUsuario=", isRentaUsuario);
      navigate("/EndRent")
    }, 2000);
    //console.log("Que soy isRentaUsuario=", isRentaUsuario);
  
    // navigate("/EndRent")
  };

  return (
    <>
      <div className="FContaineMain">
        <div className="CContainerMain">
          <div className="left">
            <img
              loading="lazy"
              src={imgExampleBorrameOCambiameElNombrePuto}
            ></img>
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
