import { useState, useContext } from "react";
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
          <TdeRCortoPlazo />
          <button className="ejemplobutton" onClick={() => setViewNum(0)}>
            Cancelar o regresar
          </button>
        </>
      ) : viewNum === 2 ? (
        <>
          <TdeRNormal />
          <button className="ejemplobutton" onClick={() => setViewNum(0)}>
            regresar2!
          </button>
        </>
      ) : viewNum === 3 ? (
        <>
          <TdeRUltimoMinuto />
          <button className="ejemplobutton" onClick={() => setViewNum(0)}>
            Regresar 3!
          </button>
        </>
      ) : (
        <>
          <h1>Elije que tipo de reserva Que mas te covenza</h1>
          <div className="FContaineMain">
            <div className="CContainerMain">
              <div className="left">
                <h1 className="tituloTipoRenta">Reserva Corto Plazo</h1>
                <p>
                  Para el tipo de reserva a corto plazo se debe tomar en cuenta
                  el reducclassNameo número de paquetes que están disponible,
                  sin embargo se puede rentar el tiempo que usted mismo límite.
                </p>

                <button className="ejemplobutton" onClick={(e) => HandlerClickTipoDerenta(e, 1)}>
                  ¡Resevar!
                </button>
              </div>
              <div className="rightIMG">
                <img loading="lazy" src={ejemploimg1}></img>
              </div>
            </div>
            <div className="CContainerMain">
              <div className="left">
                <h1 className="tituloTipoRenta">Reserva Normal</h1>
                <p>
                  El tipo de reserva normal es en la cual se lleva con anticipo
                  y se puede ver con detallamiento y el alcance del evento a
                  realizar.
                </p>
                <button className="ejemplobutton" onClick={(e) => HandlerClickTipoDerenta(e, 2)}>
                  ¡Resevar!
                </button>
              </div>
              <div className="rightIMG">
                <img loading="lazy" src={ejemploimg2}></img>
              </div>
            </div>
            <div className="CContainerMain">
              <div className="left">
                <h1 className="tituloTipoRenta">Reserva último Minuto</h1>
                <p>
                  En este tipo de reserva están limitados los paquetes a
                  incluir, ya que en unos casos es de suma vitalclassNamead
                  tener más tiempo para hacer uso de dichos paquetes.
                </p>
                <button className="ejemplobutton" onClick={(e) => HandlerClickTipoDerenta(e, 3)}>
                  ¡Resevar!
                </button>
              </div>
              <div className="rightIMG">
                <img loading="lazy" src={ejemploimg3}></img>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TipodeReservaView;
