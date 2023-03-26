import { useState, useEffect, useContext } from "react";
import AdminContext from "../../contexts/AdminContext";
import RentaDelUsuarioContext from "../../contexts/RentaDelUsuarioContext";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import TokenContext from "../../contexts/TokenContext";

import Tuplas from "../atoms/Tuplas";
import ButtonStyled from "../atoms/ButtonStyled";
import ViewContext from "../../contexts/ViewContext";
import "../../assets/style/moleculescss/AdminListRent.css";

function AdminListRent() {
  const { isRentaUsuario, setIsRentaUsuario } = useContext(
    RentaDelUsuarioContext
  );
  const [rentsEstadoF, setRentsEstadoF] = useState([]);
  const [SeEjecutoConExitoLarenta, setSeEjecutoConExitoLarenta] = useState([]);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const { IsViewContext, setIsViewContext } = useContext(ViewContext);
  const { isAllRentas, setIsAllRentas } = useContext(TipoRentaContext);
  const { isToken, setIsToken }=useContext(TokenContext)
  useEffect(() => {
    console.log("FFFFFFFFFFFF");
  console.log("🚀 ~ file: AdminListRent.jsx:51 ~ useEffect ~ useEffect:", isToken)
    
      let option = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${isToken}`,
        },
      };

      let url = "https://localhost/rentasUsuario/estadoFalse";
      fetch(url, option)
        .then((response) => response.json())
        .then((data) => {
          console.log("🚀 ~ file: AdminListRent.jsx:45 ~ .then ~ data:", data)
          setRentsEstadoF(data);
        });

      let url2 = "https://localhost/rentasUsuario/Finalizar";
      fetch(url2, option)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("🚀 ~ file: AdminListRent.jsx:54 ~ .then ~ data:", data)
          setSeEjecutoConExitoLarenta(data);
        });
    
  }, [IsViewContext]);

  return (
    <>
      <div>
        <h1 className="fs-1 titulo5Mandamientos text-center p-5">
          Rentas pendientes a aceptar ETC.
        </h1>
        <div className="ContainerListRent">
          <div className="fs-6 marginButtom">
            <button
              className="botonFlogin"
              onClick={() => {
                setIsViewContext(1);
              }}
            >
              Rentas pendientes
            </button>
            <button
              className="botonFlogin"
              onClick={() => {
                setIsViewContext(2);
              }}
            >
              Rentas a finalizar
            </button>
            <button
              className="botonFlogin"
              onClick={() => {
                setIsViewContext(4);
              }}
            >
              Dashboard||Ganacias
            </button>

            <button
              className="botonFlogin"
              onClick={() => {
                setIsViewContext(5);
              }}
            >
              Vista Num 5 So nesesario{" "}
            </button>
          </div>
          {IsViewContext === 1 || IsViewContext === 2 ? (
            // las vistas de Rentas pendientes Y rentas Afinalizar se encuentran en este parentheses
            <>
              <table className="table-responsive table-hover">
                <thead>
                  <tr>
                    <th scope="row">-</th>
                    <th scope="col">ID Paquete</th>
                    <th scope="col">Fecha de inicio</th>
                    <th scope="col">Hora de inicio</th>
                    <th scope="col">Hora de finalización</th>
                    <th scope="col">Fecha de reserva</th>
                    <th scope="col">Extras</th>
                    <th scope="col">Observaciones</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {IsViewContext === 1
                    ? rentsEstadoF.map((rent) => (
                        <Tuplas key={rent._id} rent={rent} />
                      ))
                    : SeEjecutoConExitoLarenta.map((rent) => (
                        <Tuplas key={rent._id} rent={rent} />
                      ))}
                </tbody>
              </table>
            </>
          ) : IsViewContext === 3 ? (
            // En este ? se encuentra la vista ver mas detalles de X renta
            <>
              {isRentaUsuario == undefined&&isRentaUsuario==null&&isRentaUsuario.lenght<=0? (
                <>
                  <p> error en el paquete</p>
                </>
              ) : (
                <>
                  {console.log("nulo" + JSON.stringify(isRentaUsuario))}
                  <div className="cont-vermas">
                    <h1>Información de Reservas</h1>
                    <table className="table-responsive">
                      <tr>
                        <th>Fecha de Inicio</th>
                        <td>{isRentaUsuario[0].returnRenta[0].fechaInicio}</td>
                      </tr>
                      <tr>
                        <th>Hora de Inicio</th>
                        <td>{isRentaUsuario[0].returnRenta[0].horaDeInicio}</td>
                      </tr>
                      <tr>
                        <th>Hora de Finalización</th>
                        <td>
                          {isRentaUsuario[0].returnRenta[0].horaDeFinalizacion}
                        </td>
                      </tr>
                      <tr>
                        <th>Fecha de Reserva</th>
                        <td>
                          {" "}
                          {isRentaUsuario[0].returnRenta[0].fechaDeReserva}
                        </td>
                      </tr>
                      <tr>
                        <th>Extras</th>
                        <td>{isRentaUsuario[0].returnRenta[0].Extras[0]}</td>
                      </tr>
                      <tr>
                        <th>Observaciones</th>
                        <td>
                          {isRentaUsuario[0].returnRenta[0].observaciones}
                        </td>
                      </tr>
                      <tr>
                        <th>Nombre de Usuario</th>
                        <td>{isRentaUsuario[1].nombreCompleto}</td>
                      </tr>
                      <tr>
                        <th>Correo Electrónico</th>
                        <td>{isRentaUsuario[1].correo}</td>
                      </tr>
                    </table>
                    <button className="regresarBTNAdmin" onClick={() => {setIsViewContext(1);}}>Regresar</button>
                  </div>
                </>
              )}
            </>
          ) : IsViewContext === 4 ? (
            // en este paretesis se encuentra la viata 4 de Ganacias o dashboars
            <>
              <h1>VIEW NUM 4 estilo Ñañinel</h1>
            </>
          ) : (
            <>
              <h1>Posible vista 5 si necesario </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminListRent;
