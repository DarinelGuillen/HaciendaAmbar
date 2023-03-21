import {useNavigate} from 'react-router-dom'
import { useState, useRef, useContext } from "react";
import RentaDelUsuarioContext from '../../contexts/RentaDelUsuarioContext';
import ButtonStyled from "../atoms/ButtonStyled";

function DatesStartEndTime() {
  const { isRentaUsuario, setIsRentaUsuario } = useContext(RentaDelUsuarioContext);
  const navigate = useNavigate();
  const formDateReserva = useRef();
  const handlerClickConfirmarReserva = (e) => {
    e.preventDefault();
    const formDataR = new FormData(formDateReserva.current);
    let DatosDeR = {
      fechaDeEvento: formDataR.get("FechaDeEvento"),
      horaDeInicio: formDataR.get("HoraDeInicio"),
      horaDeFinalizacion: formDataR.get("HoraDeFinalizacion")
    };
    
    // 
    let add = {};

    if (isRentaUsuario) {
      console.log("Tiene Algo");
      add = {...isRentaUsuario, ...DatosDeR};
    } else {
      console.log("Vacio");
      add = DatosDeR;
    }
    ///
      setIsRentaUsuario(add);
      console.log("Que soy isRentaUsuario=", isRentaUsuario);
      navigate("/EndRent")
    //console.log("Que soy isRentaUsuario=", isRentaUsuario);
    // navigate("/EndRent")
  };

  return (
    <>
      <div className="FContaineMain">
        <div className="CContainerMain">
          <div className="left">
            <h1 className="fs-1 subTituloImg">¿Cuando quieres reservar?</h1>
            <h2 className="fs-4 subTituloImg2">Elige la mejor fecha para tu evento.</h2>
            <img src="src/assets/img/reservacionImg.png" className='img-fluid'></img>
          </div>
          <form ref={formDateReserva}>
            <div className="mb-3">
              <label className="form-label labelTypeReserva">Fecha del evento</label>
              <input type="date" name="FechaDeEvento" className="form-control"/>
            </div>
            <div className="mb-3">
              <label className="form-label labelTypeReserva">Hora de inicio</label>
              <input type="time" name="HoraDeInicio" className="form-control"/>
            </div>
            <div className="mb-3">
              <label className="form-label labelTypeReserva">Hora de fin</label>
              <input type="time" name="HoraDeFinalizacion" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handlerClickConfirmarReserva}>Confirmar reserva</button>
          </form> 
        </div>
      </div>
    </>
  );
}

export default DatesStartEndTime;
