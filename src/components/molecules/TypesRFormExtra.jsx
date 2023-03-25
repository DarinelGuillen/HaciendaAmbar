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
import TokenContext from "../../contexts/TokenContext";
import "../../assets/img/imgTypeRentEnd.png";
import "../../assets/style/moleculescss/TypesRFormExtra.css";
function TypesRFormExtra() {
  const { isToken, setIsToken } = useContext(TokenContext);
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
      let url = "https://localhost/rentasUsuario";
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${isToken}`,
        },
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("INSIDE FETCH");

          navigate("/MyAccount");
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
    fetch("https://localhost/rentaIndividuales", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${isToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRentaIndividuales(data);
        setIsLoading(true);
      });

    // setTimeout(() => {
    //   console.log("isLoading changed");
    //   setIsLoading(true);
    // }, 3000);
  }, [isLoading]);

  return (
    <>
      <h1 className="fs-1 tituloTypesRFormExtra">
        Arma tu paquete de reserva a corto plazo
      </h1>
      <div className="container segundaSecAbout2">
        <div className="row">
          <div
            className="image col-xl-6 d-flex align-items-stretch justify-content-center justify-content-xl-start"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className="contenedor1TypesRFormExtra">
              <label className="fs-2 textoTypesRFormExtra1">
                En reserva corto plazo te ofrecemos lo siguiente.
              </label>
              <label className="fs-5 text-center textoTypesRFormExtra2">
                Tú eliges como disfrutar tus recuerdos y a tu gusto.
              </label>
              <label className="fs-6 textoTypesRFormExtra3">
                Se aplica promoción en algunos paquetes. Reserva con 50% de
                anticipo, más depósito en garantía (Reembolsable)
              </label>
              <img
                className="img-fluid"
                src="src/assets/img/imgTypeRentEnd.png"
              ></img>
            </div>
          </div>
          <div
            className="image col-xl-6 d-flex align-items-stretch justify-content-center justify-content-xl-start"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <form ref={DatosDeReserva}>
              <label htmlFor="user" className="labelTypesRFormExtra">
                Ingresa algún comentario a destacar al Admin
              </label>
              <input
                className="inputTypesRFormExtra"
                type="text"
                id="user"
                name="Observaciones"
              />
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
                    <>
                      <div class="card shadow mb-4">
                        <div class="card-header py-3">
                          <h6 class="fw-bold m-0 text-center">
                            Elige los campos a considerar en tu evento
                          </h6>
                        </div>

                        {RentaIndividuales.map((RentaIndividual) => {
                          // console.log("Acá andamos" + JSON.stringify(RentaIndividual));
                          // console.log("Tipo renta: " + isTipoRenta);
                          return isTipoRenta === 1 &&
                            RentaIndividual.cortoPlazo === true ? (
                            <div
                              key={RentaIndividual._id}
                              className="renta-individual-wrapper"
                            >
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                  <div class="row align-items-center no-gutters">
                                    <div class="form-check">
                                      {/*   Tu Input-Dario*/}
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="disabledFieldsetCheck"
                                        disabled
                                      />
                                      <label
                                        class="form-check-label"
                                        for="disabledFieldsetCheck"
                                      >
                                        Can't check this
                                      </label>
                                      {/* END tu input */}
                                      {/* mi input cehckbox -DARINEL */}
                                      <CheckBox
                                        key={RentaIndividual._id}
                                        name={RentaIndividual._id}
                                        checked={checked[RentaIndividual._id]}
                                        setChecked={(e) =>
                                          handleClickCheckBox(
                                            e,
                                            RentaIndividual._id
                                          )
                                        }
                                        label={RentaIndividual.value}
                                        className="renta-individual-checkbox"
                                      />
                                      {/* fin mi input checkBOX */}
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          ) : isTipoRenta === 2 &&
                            RentaIndividual.normal === true ? (
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
                          ) : isTipoRenta === 3 &&
                            RentaIndividual.ultimoMinuto === true ? (
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
                        })}
                      </div>
                    </>
                  )}
                </>

                <ButtonStyled
                  onClick={handlerClickConfirmarCampos}
                  label={"Confirmación extra"}
                  Danger={false}
                />
                {/* <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
                  <label class="form-check-label" for="disabledFieldsetCheck">
                    Can't check this
                  </label>
                </div> */}

                {/* <ButtonStyled
                  onClick={(event) => {
                    event.preventDefault();
                    setIsLoading(!isLoading);}}
                  label={"setIsLoading "}
                  Danger={true}
                /> */}

                <Link className="loginNav" to="/TypesRents">
                  <ButtonStyled
                    Danger={true}
                    label={"Cancelar "}
                  ></ButtonStyled>
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
