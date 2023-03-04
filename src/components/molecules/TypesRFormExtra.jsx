import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { useChecked } from "../js/useChecked";
import { CheckBox } from "../atoms/Checkbox";

import WrapperInput from "./WrapperInput";
import ButtonStyled from "../atoms/ButtonStyled";
import InputStyled from "../atoms/InputStyled";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import RentaDelUsuarioContext from "../../contexts/RentaDelUsuarioContext";

function TypesRFormExtra() {
  const { isRentaUsuario, setIsRentaUsuario } = useContext(
    RentaDelUsuarioContext
  );
  const [RentaIndividuales, setRentaIndividuales] = useState([]);
  const { isTipoRenta, setIsTipoRenta } = useContext(TipoRentaContext);
  const DatosDeReserva = useRef();

  const handlerClickConfirmarCampos = (e) => {
    e.preventDefault();
  
    const nuevosDatos = {};
  
    console.log(checked);
    // for (const clave in DatosDeReserva.current) {
    //   if (DatosDeReserva.current[clave].checked) {
    //     nuevosDatos[clave] = DatosDeReserva.current[clave].value;
    //   }
    // }
  
    setIsRentaUsuario({
      ...isRentaUsuario,
      ...checked
    });
    setTimeout(() => {
      console.log("isRentaUsuario"+JSON.stringify(isRentaUsuario));
      console.log("CHECK"+checked);
    }, 1000);
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
  console.log(checked);
  useEffect(() => {
    fetch("http://localhost:3000/rentaIndividuales")
      .then((response) => response.json())
      .then((data) => {
        setRentaIndividuales(data);
        console.log(RentaIndividuales, "RentaIndividuales");
      });
  }, []);

  return (
    <>
      <form ref={DatosDeReserva}>
        <h1>Elige los campos a considerar en tu evento</h1>
        {/* <label>XXX</label>
        <label htmlFor="user">
          Ingresa algun comentario a destacar al Admin
        </label>
        <input type="text" id="user" name="user" /> */}
        <>
          {RentaIndividuales.map((RentaIndividuale) => {
            return isTipoRenta === 1 && RentaIndividuale.cortoPlazo === true ? (
              <>
                <CheckBox
                  key={RentaIndividuale._id}
                  name={RentaIndividuale._id}
                  checked={checked[RentaIndividuale._id]}
                  setChecked={(e) =>
                    handleClickCheckBox(e, RentaIndividuale._id)
                  }
                />
              </>
            ) : isTipoRenta === 2 && RentaIndividuale.normal === true ? (
              <CheckBox
                key={RentaIndividuale._id}
                name={RentaIndividuale._id}
                checked={checked[RentaIndividuale._id]}
                setChecked={handleClickCheckBox}
              />
            ) : isTipoRenta === 3 && RentaIndividuale.ultimoMinuto === true ? (
              <CheckBox
                key={RentaIndividuale._id}
                name={RentaIndividuale._id}
                checked={checked[RentaIndividuale._id]}
                setChecked={handleClickCheckBox}
              />
            ) : null;
          })}
        </>
        <ButtonStyled
          onClick={handlerClickConfirmarCampos}
          label={"Confirma extra extra paquete data algo "}
          Danger={false}
        />
        <Link className="loginNav" to="/TypesRents">
          Cancelar
        </Link>
      </form>
    </>
  );
}

export default TypesRFormExtra;
