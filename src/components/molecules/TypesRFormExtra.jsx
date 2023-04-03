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
import typerent from "../../assets/img/imgTypeRentEnd.png"
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

  const handlerClickConfirmarCampos = async (e) => {
    e.preventDefault();
    const observacionesForm = new FormData(DatosDeReserva.current);
    const trueKeys = await Object.entries(checked)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key);
    let trueKey = trueKeys;
    setIsRentaUsuario({
      ...isRentaUsuario,
      newArray: trueKey,
    });
    console.log("trueKey:", trueKey);
    console.log("trueKeys:", trueKeys);
    const currentDate = new Date();
    const CurrentDate = currentDate.toISOString();
    console.log("isIduser", isIduser);
    let url = "https://apihaciendaambar.iothings.com.mx/rentasUsuario";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isToken}`,
      },
      body: JSON.stringify({
        idPaquete: String(isRentaUsuario.isPaqueteID || "No ID"),
        idUser: String(isIduser),
        fechaInicio: String(isRentaUsuario.fechaDeEvento),
        horaDeInicio: String(isRentaUsuario.horaDeInicio),
        horaDeFinalizacion: String(isRentaUsuario.horaDeFinalizacion),
        fechaDeReserva: String(CurrentDate),
        Extras: isRentaUsuario.newArray ||trueKey,
        estadoRenta: false,
        observaciones: String(observacionesForm.get("Observaciones")),
        SeEjecutoConExitoLarenta: false,
        LinkFotos: "LINK HERE",
      }),
    };
    console.log("🚀 ~ file: TypesRFormExtra.jsx:66 ~ handlerClickConfirmarCampos ~ options:", JSON.stringify(options))
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("data:", data);
      console.log("INSIDE FETCH");
      navigate("/MyAccount");
    } catch (error) {
      console.error(error);
    }
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
    fetch("https://apihaciendaambar.iothings.com.mx/rentaIndividuales", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isToken}`,
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
                src={typerent}
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
                      <div className="card shadow mb-4 ">
                        {RentaIndividuales.map((RentaIndividual) => {
                          // console.log("Acá andamos" + JSON.stringify(RentaIndividual));
                          // console.log("Tipo renta: " + isTipoRenta);
                          return isTipoRenta === 1 &&
                            RentaIndividual.cortoPlazo === true ? (
                            <div
                              key={RentaIndividual._id}
                              className="renta-individual-wrapper"
                            >
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                  <div className="row align-items-center no-gutters">
                                    <div className="form-check marginleftCheck">
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
                                    </div>
                                  </div>
                                  <div id="id_martin"></div>
                                </li>
                              </ul>
                            </div>
                          ) : isTipoRenta === 2 &&
                            RentaIndividual.normal === true ? (
                          <div
                            key={RentaIndividual._id}
                            className="renta-individual-wrapper"
                            >
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                <div className="row align-items-center no-gutters">
                                  <div className="form-check marginleftCheck">
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
                                </div>
                                <div id="id_martin"></div>
                              </li>
                            </ul>
                          </div>
                          ) : isTipoRenta === 3 &&
                            RentaIndividual.ultimoMinuto === true ? (
                            <div
                              key={RentaIndividual._id}
                              className="renta-individual-wrapper"
                            >
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                  <div className="row align-items-center no-gutters">
                                    <div className="form-check marginleftCheck">
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
                                  </div>
                                  <div id="id_martin"></div>
                                </li>
                              </ul>
                            </div>
                          ) : null;
                        })}
                        <center>
                          <button
                            className="p-1 botonPaquete"
                            onClick={handlerClickConfirmarCampos}
                          >
                            Reservar ahora
                          </button>
                        </center>
                        <Link className="loginNav" to="/TypesRents">
                          <a>Regresar</a>
                        </Link>
                      </div>
                    </>
                  )}
                </>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TypesRFormExtra;
