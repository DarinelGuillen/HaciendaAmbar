import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { useChecked } from "../js/useChecked";
import { CheckBox } from "../atoms/Checkbox";

import WrapperInput from "./WrapperInput";
import ButtonStyled from "../atoms/ButtonStyled";
import InputStyled from "../atoms/InputStyled";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import RentaDelUsuarioContext from "../../contexts/RentaDelUsuarioContext";
import UserContext from "../../contexts/UserContext";
import IdContex from "../../contexts/IdContex";
import "../../assets/img/imgTypeRentEnd.png"
import "../../assets/style/moleculescss/TypesRFormExtra.css";
function TypesRFormExtra() {
  const { isIduser, setIsiduser } = useContext(IdContex);
  const { isTipoRenta, setIsTipoRenta } = useContext(TipoRentaContext);
  const { isRentaUsuario, setIsRentaUsuario } = useContext(
    RentaDelUsuarioContext
  );
  const [checkObj, setCheckObj] = useState({});
  const [RentaIndividuales, setRentaIndividuales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const DatosDeReserva = useRef();
  const navigate = useNavigate();

  const handlerClickConfirmarCampos = (e) => {
    e.preventDefault();
    const observacionesForm = new FormData(DatosDeReserva.current);
    // console.log(checked);

    const trueKeys = Object.entries(checked)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key);
    // console.log("trueKeys", trueKeys);
    let trueKey = trueKeys;
    // console.log("39 let trueKey=(trueKeys)" + trueKey);
    setIsRentaUsuario({
      ...isRentaUsuario,
      newArray: trueKey,
    });
    setTimeout(() => {
      console.log("45 isRentaUsuario=" + JSON.stringify(isRentaUsuario));
      console.log("CHECK=" + JSON.stringify(checked));
    }, 2000);

    ////POST Fetch
    // Datos De JSON
    const currentDate = new Date();
    const CurrentDate = currentDate.toISOString();
    console.log("isIduser", isIduser);
    const nuevaRenta = {
      idPaquete: String(isRentaUsuario.isPaqueteID || "No ID"),
      idUser: String(isIduser),
      fechaInicio: String(isRentaUsuario.fechaDeEvento),
      horaDeInicio: String(isRentaUsuario.horaDeInicio),
      horaDeFinalizacion: String(isRentaUsuario.horaDeFinalizacion),
      fechaDeReserva: String(CurrentDate),
      Extras: isRentaUsuario.newArray,
      estadoRenta: false,
      observaciones: String(observacionesForm.get("Observaciones")),
      SeEjecutoConExitoLarenta: false,
      LinkFotos: "LINK HERE",
    };

    console.log("nuevaRenta\n" + JSON.stringify(nuevaRenta));
    // fetch
    setTimeout(() => {
      fetch("https://localhost/rentasUsuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaRenta),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("INSIDE FETCH");
          
          navigate("/MyAccount")
        })
        .catch((error) => console.error(error));
    }, 2000);
  };

  const checkedInitial = RentaIndividuales.reduce((obj, RentaIndividual) => {
    if (isTipoRenta === 1 && RentaIndividual.cortoPlazo === true) {
      obj[RentaIndividual._id] = false;
    } else if (isTipoRenta === 2 && RentaIndividual.normal === true) {
      obj[RentaIndividual._id] = false;
    } else if (isTipoRenta === 3 && RentaIndividual.ultimoMinuto === true) {
      obj[RentaIndividual._id] = false;
    }
    return obj;
  }, {});

  const [checked, handleClickCheckBox] = useChecked(checkedInitial);

  useEffect(() => {
    fetch("https://localhost/rentaIndividuales")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Data:" + data)
        setRentaIndividuales(data);
        setIsLoading(true);
        // console.log(RentaIndividuales, "RentaIndividuales");
      });
      // setTimeout(() => {
      //   console.log("isLoading changed");
      //   setIsLoading(true);
      // }, 3000);
  }, [isLoading]);

  
  return (
    <>
      <h1 className="fs-1 tituloTypesRFormExtra">Arma tu paquete de reserva a corto plazo</h1>
      <div class="container segundaSecAbout2">
        <div class="row">
          <div class="image col-xl-6 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <div className="contenedor1TypesRFormExtra">
              <label className="fs-2 textoTypesRFormExtra1">En reserva corto plazo te ofrecemos lo siguiente.</label>
              <label className="fs-5 text-center textoTypesRFormExtra2">Tú eliges como disfrutar tus recuerdos y a tu gusto.</label>
              <label className="fs-6 textoTypesRFormExtra3">Se aplica promoción en algunos paquetes.Reserva con 50% de anticipo, más depósito en garantía (Reembolsable)</label>
              <img className="img-fluid" src="src/assets/img/imgTypeRentEnd.png"></img>
            </div>
          </div>
          <div class="image col-xl-6 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <form ref={DatosDeReserva}>
            <label htmlFor="user" className="labelTypesRFormExtra">Ingresa algun comentario a destacar al Admin</label>
            <input className="inputTypesRFormExtra" type="text" id="user" name="Observaciones" />
            <div className="contenedorTypesRFormExtra">
              <>
                  {!isLoading ? (
                    <>
                      <div className="loader">
                        <div className="cell d-0"></div>
                        <div className="cell d-1"></div>
                        <div className="cell d-2"></div>

                        <div className="cell d-1"></div>
                        <div className="cell d-2"></div>

                        <div className="cell d-2"></div>
                        <div className="cell d-3"></div>

                        <div className="cell d-3"></div>
                        <div className="cell d-4"></div>
                      </div>
                    </>  
                  ) : ( 
                  RentaIndividuales.map((RentaIndividual) => {
                    // console.log("Acá andamos" + JSON.stringify(RentaIndividual));
                    // console.log("Tipo renta: " + isTipoRenta);
                    return isTipoRenta === 1 && RentaIndividual.cortoPlazo === true ? (
                      <div
                        key={RentaIndividual._id}
                        className="renta-individual-wrapper"
                      >
                        <CheckBox
                          key={RentaIndividual._id}
                          name={RentaIndividual._id}
                          checked={checked[RentaIndividual._id]}
                          setChecked={(e) =>
                            handleClickCheckBox(e, RentaIndividual._id)
                          }
                          label={RentaIndividual.value}
                          className="renta-individual-checkbox"
                        />
                      </div>
                    ) : isTipoRenta === 2 && RentaIndividual.normal === true ? (
                      <div
                        key={RentaIndividual._id}
                        className="renta-individual-wrapper"
                      >
                        <CheckBox
                          key={RentaIndividual._id}
                          name={RentaIndividual._id}
                          checked={checked[RentaIndividual._id]}
                          setChecked={(e) =>
                            handleClickCheckBox(e, RentaIndividual._id)
                          }
                          label={RentaIndividual.value}
                          className="renta-individual-checkbox"
                        />
                      </div>
                    ) : isTipoRenta === 3 && RentaIndividual.ultimoMinuto === true ? (
                      <div
                        key={RentaIndividual._id}
                        className="renta-individual-wrapper"
                      >
                        <CheckBox
                          key={RentaIndividual._id}
                          name={RentaIndividual._id}
                          checked={checked[RentaIndividual._id]}
                          setChecked={(e) =>
                            handleClickCheckBox(e, RentaIndividual._id)
                          }
                          label={RentaIndividual.value}
                          className="renta-individual-checkbox"
                        />
                      </div>
                    ) : null;
                  })
                )}
                </>
                <ButtonStyled
                  onClick={handlerClickConfirmarCampos}
                  label={"Confirma extra extra paquete data algo "}
                  Danger={false}
                />
                {/* <ButtonStyled
                  onClick={(event) => {
                    event.preventDefault();
                    setIsLoading(!isLoading);}}
                  label={"setIsLoading "}
                  Danger={true}
                /> */}
              <Link className="loginNav" to="/TypesRents">
                <ButtonStyled Danger={true} label={"Cancelar "}></ButtonStyled>
              </Link>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </>
  );
}

export default TypesRFormExtra;
