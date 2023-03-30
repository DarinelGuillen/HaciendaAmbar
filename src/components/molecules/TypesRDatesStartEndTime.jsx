import {useNavigate} from 'react-router-dom'
import { useState, useRef, useContext } from "react";
import RentaDelUsuarioContext from '../../contexts/RentaDelUsuarioContext';
import ButtonStyled from "../atoms/ButtonStyled";
import "../../assets/style/TypesRDatesStartEndTime.css"; 

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
      console.log("🚀 ~ file: TypesRDatesStartEndTime.jsx:23 ~ handlerClickConfirmarReserva ~ isRentaUsuario:", isRentaUsuario)
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
            <h1 className="fs-1 subTituloImg">¿Cuándo quieres reservar?</h1>
            <h2 className="fs-4 subTituloImg2">Elige la mejor fecha para tu evento.</h2>
            <img src="src/assets/img/reservacionImg.png" className='img-fluid'></img>
          </div>
            <div className="card ">
              <div className="card-body ">
                <blockquote className="blockquote mb-0 pruebaBG">
                  <form ref={formDateReserva}>
                    <div className="card contenedorAgendarFecha">
                      <ul className="list-group list-group-flush">
                        <li className="list-group">
                          <p>
                            <button className="botonTypesRDatesStartEndTime" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                              Fecha de evento
                            </button>
                          </p>
                          <div className="collapse" id="collapseExample">
                            <div className="card card-body pruebaBG1">
                              <input type="date" name="FechaDeEvento" className="form-control"/>
                            </div>
                          </div>
                        </li>
                        <li className="list-group">
                          <p>
                            <button className="botonTypesRDatesStartEndTime" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                              Hora de inicio
                            </button>
                          </p>
                          <div className="collapse" id="collapseExample">
                            <div className="card card-body pruebaBG">
                              <input type="time" name="HoraDeInicio" className="form-control"/>      
                            </div>
                          </div>
                        </li>
                        <li className="list-group">
                          <p>
                            <button className="botonTypesRDatesStartEndTime" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                              Hora de fin
                            </button>
                          </p>
                          <div className="collapse" id="collapseExample">
                            <div className="card card-body pruebaBG">
                              <input type="time" name="HoraDeFinalizacion" className="form-control"/> 
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button type="submit" className="botonEnvioFormTypesRDates" onClick={handlerClickConfirmarReserva}>Confirmar reserva</button>
                    </div>
                  </form>
                </blockquote>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default DatesStartEndTime;
