import { useState } from "react";
import TdeRCortoPlazo from "../molecules/TdeRCortoPlazo";
import TdeRNormal from "../molecules/TdeRNormal";
import TdeRUltimoMinuto from "../molecules/TdeRUltimoMinuto";
import ejemploimg from "../../assets/img/imgCarrusel1.png";
import "../../assets/style/moleculescss/TipodeReservaView.css";
function TipodeReservaView() {
  const [viewNum, setViewNum] = useState(0);

  return (
    <>
      {viewNum === 1 ? (
        <>
        <TdeRCortoPlazo/>
        <button className="ejemplobutton" onClick={() => setViewNum(0)}>
          Cancelar Aqui ira la pagina de reserva Corto Plazo
        </button>
        </>
      ) : viewNum === 2 ? (
        <button className="ejemplobutton" onClick={() => setViewNum(0)}>
          regresar2!
        </button>
      ) : viewNum === 3 ? (
        <button className="ejemplobutton" onClick={() => setViewNum(0)}>
          Regresar 3!
        </button>
      ) : (
        <div className="FContaineMain">
          <div className="CContainerMain">
            <div className="left">
              <h1>Reserva Corto Plazo</h1>
              <p>
                Para el tipo de reserva a corto plazo se debe tomar en cuenta el
                reducclassNameo número de paquetes que están disponible, sin
                embargo se puede rentar el tiempo que usted mismo límite.
              </p>
              <button className="ejemplobutton" onClick={() => setViewNum(1)}>
                ¡Resevar!
              </button>
            </div>
            <div className="rightIMG">
              <img src={ejemploimg}></img>
            </div>
          </div>
          <div className="CContainerMain">
            <div className="left">
              <h1>Reserva Normal</h1>
              <p>
                El tipo de reserva normal es en la cual se lleva con anticipo y
                se puede ver con detallamiento y el alcance del evento a
                realizar.
              </p>
              <button className="ejemplobutton" onClick={() => setViewNum(2)}>
                ¡Resevar!
              </button>
            </div>
            <div className="rightIMG">
              <img src={ejemploimg}></img>
            </div>
          </div>
          <div className="CContainerMain">
            <div className="left">
              <h1>Reserva último Minuto</h1>
              <p>
                En este tipo de reserva están limitados los paquetes a incluir,
                ya que en unos casos es de suma vitalclassNamead tener más
                tiempo para hacer uso de dichos paquetes.
              </p>
              <button className="ejemplobutton" onClick={() => setViewNum(3)}>
                ¡Resevar!
              </button>
            </div>
            <div className="rightIMG">
              <img src={ejemploimg}></img>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TipodeReservaView;
