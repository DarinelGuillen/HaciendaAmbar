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
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Tu tipo de renta ha sido la número'+ ' ' +num,
    showConfirmButton: false,
    timer: 3500
  })
  //alert("TIPO DE RENTA. num = "+ num)
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
          <div class="container clasePadreContainerTDRV">
            <div class="row tipReervaView sombra">
              <div class="col-md-6">
                <h2 class="fs-1 text-center mb-4 tipReervaView2" >Reserva Corto Plazo</h2>
                <div className="lineaTypeRents"></div>
                <form method="post tipReervaView3">
                  <div class="mb-3">
                    <center><p class="fs-2 tipReervaView4">Para el tipo de reserva a corto plazo 
                      se debe tomar en cuenta el reducido número de paquetes que
                      están disponible, sin embargo se puede rentar el tiempo que 
                      usted mismo límite.
                    </p></center>
                  </div>
                  <div>
                    <button class="btn btn-primary d-block w-100" onClick={(e) => HandlerClickTipoDerenta(e, 1)}>¡Reservar! </button>
                  </div>
                </form>
              </div>
              <div class="col-md-6"><img class="img-fluid" src={ejemploimg1}/></div>
            </div>
            <div class="row tipReervaView5 sombra" >
              <div class="col-md-6"><img class="w-100 h-100 fit-cover" src={ejemploimg2}/></div>
                <div class="col-md-6">
                  <h2 class="fs-1 text-center mb-4 tipReervaView6" >Reserva Normal</h2>
                  <div className="lineaTypeRents"></div>
                  <form method="post tipReervaView7">
                    <div class="mb-3">
                      <center><p class="fs-2 tipReervaView8" >El tipo de reserva normal 
                        es en la cual se lleva con anticipo y
                        se puede ver con detallamiento y el alcance del evento a
                        realizar.
                      </p></center>
                    </div>
                    <div>
                      <button class="btn btn-primary d-block w-100" onClick={(e) => HandlerClickTipoDerenta(e, 2)}>¡Reservar! </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row tipReervaView sombra">
                <div class="col-md-6">
                  <h2 class="fs-1 text-center mb-4 tipReervaView2" >Reserva Último Minuto</h2>
                  <div className="lineaTypeRents"></div>
                  <form method="post tipReervaView3">
                    <div class="mb-3">
                      <center><p class="fs-2 tipReervaView4">En este tipo de reserva están
                        limitados los paquetes a incluir, ya que en unos casos es de suma vitalidad 
                        tener más tiempo para hacer uso de dichos paquetes.
                      </p></center>
                    </div>
                    <div>
                      <button class="btn btn-primary d-block w-100" onClick={(e) => HandlerClickTipoDerenta(e, 3)}>¡Reservar!</button>
                    </div>
                  </form>
                </div>
                <div class="col-md-6">
                  <img class="w-100 h-100 fit-cover" src={ejemploimg3}/>
                </div>
              </div>
            </div>
        </>
      )}
    </>
  );
}

export default TipodeReservaView;
