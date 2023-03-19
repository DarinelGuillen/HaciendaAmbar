import { useState,useContext } from "react";
import TdeRCortoPlazo from "./TdeRCortoPlazo";
import TdeRNormal from "./TdeRNormal";
import TdeRUltimoMinuto from "./TdeRUltimoMinuto";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import ejemploimg1 from "../../assets/img/imgCarrusel1p.png";
import ejemploimg2 from "../../assets/img/imgCarrusel2.png";
import ejemploimg3 from "../../assets/img/imgCarrusel3.png";
import "../../assets/style/moleculescss/TipodeReservaView.css";
function TipodeReservaView() {
  const [viewNum, setViewNum] = useState(0);
  const {isTipoRenta, setIsTipoRenta} = useContext(TipoRentaContext);

  const HandlerClickTipoDerenta = (e, num) => {
  e.preventDefault();
  alert("TIPO DE RENTA. num = "+ num)
  setIsTipoRenta(num)
  console.log(isTipoRenta);
  setViewNum(num)
  };

  return (
    <>
      {viewNum === 1 ? (
        <>
          <TdeRCortoPlazo/>
          <div className="centradoBtnRegresar">
            <button className="ejemplobutton" onClick={() => setViewNum(0)}>
              Regresar
            </button>
          </div>
        </>
      ) : viewNum === 2 ? (
        <>
          <TdeRNormal/>
          <div className="centradoBtnRegresar">
            <button className="ejemplobutton" onClick={() => setViewNum(0)}>
              Regresar
            </button>
          </div>
        </>
        
      ) : viewNum === 3 ? (
        <>
          <TdeRUltimoMinuto/>
          <div className="centradoBtnRegresar">
            <button className="ejemplobutton" onClick={() => setViewNum(0)}>
              Regresar
            </button>
          </div>
        </>
        
      ) : (
        <>
          <p class="fs-1 tituloTiposDeRenta">Elije que tipo de reserva Que más te covenza</p>
          <div class="card-group">
            <div class="card">
              <img src={ejemploimg1} class="card-img-top img-fluid" alt="..."/>
              <div class="card-body">
                <h5 class="card-title tituloTipoRenta">Reserva Corto Plazo</h5>
                <p class="card-text informacionTipoRenta"> Para el tipo de reserva a corto plazo 
                  se debe tomar en cuenta el reducido número de paquetes que
                  están disponible, sin embargo se puede rentar el tiempo que 
                  usted mismo límite.
                </p>
                <center>
                  <button className="botonTipoDeRentas" onClick={(e) => HandlerClickTipoDerenta(e, 1)}>¡Resevar!</button>
                </center>
              </div>
            </div>
            <div class="card">
              <img src={ejemploimg2} class="card-img-top img-fluid" alt="..."/>
              <div class="card-body">
                <h5 class="card-title tituloTipoRenta">Reserva Normal</h5>
                <p class="card-text informacionTipoRenta">El tipo de reserva normal 
                  es en la cual se lleva con anticipo y
                  se puede ver con detallamiento y el alcance del evento a
                  realizar.
                </p>
                <center>
                  <button className="botonTipoDeRentas" onClick={(e) => HandlerClickTipoDerenta(e, 2)}>¡Resevar!</button>
                </center>
              </div>
            </div>
            <div class="card">
              <img src={ejemploimg3} class="card-img-top img-fluid" alt="..."/>
              <div class="card-body">
                <h5 class="card-title tituloTipoRenta">Reserva último Minuto</h5>
                <p class="card-text informacionTipoRenta">En este tipo de reserva están
                  limitados los paquetes a incluir, ya que en unos casos es de suma vitalidad 
                  tener más tiempo para hacer uso de dichos paquetes.
                </p>
                <center>
                  <button className="botonTipoDeRentas" onClick={(e) => HandlerClickTipoDerenta(e, 3)}>¡Resevar!</button>
                </center>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TipodeReservaView;
