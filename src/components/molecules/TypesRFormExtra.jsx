import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { useChecked } from "../js/useChecked";
import { CheckBox } from "../atoms/Checkbox";

import WrapperInput from "./WrapperInput";
import ButtonStyled from "../atoms/ButtonStyled";
import InputStyled from "../atoms/InputStyled";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import RentaDelUsuarioContext from "../../contexts/RentaDelUsuarioContext";

import "../../assets/style/moleculescss/TypesRFormExtra.css";
function TypesRFormExtra() {
  const { isRentaUsuario, setIsRentaUsuario } = useContext(
    RentaDelUsuarioContext
  );
  const [checkObj, setCheckObj] = useState({});
  const [RentaIndividuales, setRentaIndividuales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isTipoRenta, setIsTipoRenta } = useContext(TipoRentaContext);
  const DatosDeReserva = useRef();

  const handlerClickConfirmarCampos = (e) => {
    e.preventDefault();
    console.log(checked);
    // setCheckObj(checked)
    //Obtengo Los
    const trueKeys = Object.entries(checked)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key);

    console.log("trueKeys", trueKeys);
    // RentaIndividuales.map((rentas) => {
    //   console.log("NUM1");
    //   checkObj.map((check)=>{
    //     console.log("check", check);
    //   });
    // });
    let trueKey = trueKeys;
    console.log("39 let trueKey=(trueKeys)" + trueKey);
    setIsRentaUsuario({
      ...isRentaUsuario,
      newArray: trueKey,
    });
    setTimeout(() => {
      console.log("45 isRentaUsuario=" + JSON.stringify(isRentaUsuario));
      // console.log("CHECK=" + JSON.stringify(checked));
    }, 2000);
  };

  const checkedInitial = RentaIndividuales.reduce((obj, rentaIndividuale) => {
    if (isTipoRenta === 1 && rentaIndividuale.cortoPlazo === true) {
      obj[rentaIndividuale._id] = false;
    } else if (isTipoRenta === 2 && rentaIndividuale.normal === true) {
      obj[rentaIndividuale._id] = false;
    } else if (isTipoRenta === 3 && rentaIndividuale.ultimoMinuto === true) {
      obj[rentaIndividuale._id] = false;
    }
    return obj;
  }, {});
  
  const [checked, handleClickCheckBox] = useChecked(checkedInitial);
  
  useEffect(() => {
    fetch("https://localhost/rentaIndividuales")
      .then((response) => response.json())
      .then((data) => {
        setRentaIndividuales(data);
        console.log(RentaIndividuales, "RentaIndividuales");
      });
    setTimeout(() => {
      console.log("isLoading chab¿nge");
      setIsLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      <form ref={DatosDeReserva}>
        <h1>Elige los campos a considerar en tu evento</h1>
        <label>XXX</label>
        <label htmlFor="user">
          Ingresa algun comentario a destacar al Admin
        </label>
        <input type="text" id="user" name="user" />

        <>
          {!isLoading ? (
            <>
              <div class="loader">
                <div class="cell d-0"></div>
                <div class="cell d-1"></div>
                <div class="cell d-2"></div>

                <div class="cell d-1"></div>
                <div class="cell d-2"></div>

                <div class="cell d-2"></div>
                <div class="cell d-3"></div>

                <div class="cell d-3"></div>
                <div class="cell d-4"></div>
              </div>
            </>
          ) : (
            RentaIndividuales.map((RentaIndividual) => {
              return isTipoRenta === 1 &&
                RentaIndividual.cortoPlazo === true ? (
                <>
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
                </>
              ) : isTipoRenta === 2 && RentaIndividual.normal === true ? (
                <>
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
                </>
              ) : isTipoRenta === 3 && RentaIndividual.ultimoMinuto === true ? (
                <>
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
                </>
              ) : null;
            })
          )}
        </>
        <ButtonStyled
          onClick={handlerClickConfirmarCampos}
          label={"Confirma extra extra paquete data algo "}
          Danger={false}
        />

        <Link className="loginNav" to="/TypesRents">
          <ButtonStyled Danger={true} label={"Cancelar "}></ButtonStyled>
        </Link>
      </form>
    </>
  );
}

export default TypesRFormExtra;
