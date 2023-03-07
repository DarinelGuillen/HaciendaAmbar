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
      estadoRenta: true,
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
      <form ref={DatosDeReserva}>
        <h1>Elige los campos a considerar en tu evento</h1>
        <label>XXX</label>
        <label htmlFor="user">
          Ingresa algun comentario a destacar al Admin
        </label>
        <input type="text" id="user" name="Observaciones" />

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
        <ButtonStyled
           onClick={(event) => {
            event.preventDefault();
            setIsLoading(!isLoading);}}
          label={"setIsLoading "}
          Danger={true}
        />

        <Link className="loginNav" to="/TypesRents">
          <ButtonStyled Danger={true} label={"Cancelar "}></ButtonStyled>
        </Link>
      </form>
    </>
  );
}

export default TypesRFormExtra;
