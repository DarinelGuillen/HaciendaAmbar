import { useState, useEffect, useContext } from "react";

import RentaDelUsuarioContext from "../../contexts/RentaDelUsuarioContext";
import AdminContext from "../../contexts/AdminContext";
import TokenContext from "../../contexts/TokenContext";
import ButtonStyled from "../../components/atoms/ButtonStyled";
import ViewContext from "../../contexts/ViewContext";
import "../../assets/style/moleculescss/Tuplas.css";

function Tuplas(props) {
  const { isToken, setIsToken } = useContext(TokenContext);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const { IsViewContext, setIsViewContext } = useContext(ViewContext);
  const { isRentaUsuario, setIsRentaUsuario } = useContext(
    RentaDelUsuarioContext
  );

  const rent = props.rent;
  const VIEW = props.view;
  const handlerClickAprobarRenta = (e, id) => {
    e.preventDefault();
    console.log("APROVADA", id, " VIEW= ", VIEW);
    let url = `https://localhost/rentasUsuario/${id}`;
    let optio = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${isToken}`,
      },
    };
    fetch(url, optio)
      .then((response) => response.json())
      .then((data) => {
        setIsAdmin(true);
        console.log("🚀 ~ file: Tuplas.jsx:13 ~ .then ~ data:", data);
      });
  };
  const handlerClickVermas = (e, idPaquete, idUser) => {
    e.preventDefault();
    console.log(idPaquete + "//" + idUser);
    let url = `https://localhost/rentasUsuario/${idPaquete}`;
    let url2 = `https://localhost/users/${idUser}`;
    let concat = [];
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${isToken}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log("🚀 ~ file: Tuplas.jsx:53 ~ .then ~ data1:", JSON.stringify(data))
        concat.push(data);
        fetch(url2, options)
          .then((response) => response.json())
          .then((data1) => {
            console.log("🚀 ~ file: Tuplas.jsx:58 ~ .then ~ data1:", JSON.stringify(data1))
            concat.push(data1);
            setIsRentaUsuario(concat);
            setIsViewContext(3);
            
          });
      });
  };
  const handlerClickFinalizarRenta = (e, id, estadoRenta) => {
    console.log(
      "🚀 ~ file: Tuplas.jsx:25 ~ handlerClickFinalizarRenta ~ id:",
      id
    );
    console.log(
      "🚀 ~ file: Tuplas.jsx:25 ~ handlerClickFinalizarRenta ~ estadoRenta:",
      estadoRenta
    );
    e.preventDefault();
    alert("FINALIZADO");

    let url = `https://localhost/rentasUsuario/${id}/${estadoRenta}`;
    let opt = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${isToken}`,
      },
    };

    fetch(url, opt)
      .then((response) => response.json())
      .then((data) => {
        setIsAdmin(true);
        console.log("🚀 ~ file: Tuplas.jsx:24 ~ .then ~ data:", data);
      });
  };
  return (
    <>
      <tr key={rent._id}>
        <th scope="row">-</th>
        {/* <td>{rent._id}</td> */}
        <td>{rent.idPaquete}</td>

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
              <button className="aprobarRentaBTN" onClick={(e) => handlerClickAprobarRenta(e, rent._id)}>Aprobar Renta</button>
            </td>
            <td>
              <button className="verMasDetallesBTN" onClick={(e) => handlerClickVermas(e, rent._id, rent.idUser)}>Ver más detalles</button>
            </td>
          </>
        ) : (
          <>
            <td>
              <button className="aprobarRentaBTN" onClick={(e) => handlerClickFinalizarRenta(e, rent._id, rent.estadoRenta)}>Completar</button>
            </td>
          </>
        )}
      </tr>
    </>
  );
}

export default Tuplas;
