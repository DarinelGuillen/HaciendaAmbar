import { useState, useEffect, useContext } from "react";

import AdminContext from "../../contexts/AdminContext";
import ButtonStyled from "../../components/atoms/ButtonStyled";
import ViewContext from "../../contexts/ViewContext";
function Tuplas(props) {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const {IsViewContext, setIsViewContext } = useContext(ViewContext);

  const rent = props.rent;
  const VIEW = props.view;
  const handlerClickAprobarRenta = (e, id) => {
    e.preventDefault();
    console.log("APROVADA", id, " VIEW= ", VIEW);
    let url=`https://localhost/rentasUsuario/${id}`
    fetch(url, {
      method: 'PUT'
    })
    .then((response) => response.json())
    .then((data) => {
      setIsAdmin(true)
      console.log("🚀 ~ file: Tuplas.jsx:13 ~ .then ~ data:", data);

    });
  };
  const handlerClickFinalizarRenta = (e, id, estadoRenta) => {
    console.log("🚀 ~ file: Tuplas.jsx:25 ~ handlerClickFinalizarRenta ~ id:", id)
    console.log("🚀 ~ file: Tuplas.jsx:25 ~ handlerClickFinalizarRenta ~ estadoRenta:", estadoRenta)
    e.preventDefault();
    alert("FINALIZADO");

    let url=`https://localhost/rentasUsuario/${id}/${estadoRenta}`
    fetch(url,{
      method: 'PUT'
    })
        .then((response) => response.json())
        .then((data) => {
          setIsAdmin(true)
          console.log("🚀 ~ file: Tuplas.jsx:24 ~ .then ~ data:", data)
        });
  };
  return (
    <>
      <tr key={rent._id}>
        {/* <td>{rent._id}</td> */}
        <td>{rent.idPaquete}</td>
        <td>{rent.idUser}</td>
        <td>{rent.fechaInicio}</td>
        <td>{rent.horaDeInicio}</td>
        <td>{rent.horaDeFinalizacion}</td>
        <td>{rent.fechaDeReserva}</td>
        <td>
          {rent.Extras.map((extra) => (
            <div key={extra}>{extra}</div>
          ))}
        </td>
        <td>{rent.observaciones}</td>

        {IsViewContext === 1 ? (
          <>
            <td>
              <ButtonStyled
                onClick={(e) => handlerClickAprobarRenta(e, rent._id)}
                label={"Aprobar Renta"}
                Danger={false}
              />
            </td>
            <td>
              <ButtonStyled
                
                label={"Ver mas detalles "}
                Danger={true}
              />
            </td>
          </>
        ) : (
          <>
            <td>
              <ButtonStyled
                onClick={(e) => handlerClickFinalizarRenta(e, rent._id, rent.estadoRenta)}
                label={"Completar"}
                Danger={true}
              />
            </td>
          </>
        )}
      </tr>
    </>
  );
}

export default Tuplas;
