import { useState, useEffect, useContext } from "react";
import AdminContext from "../../contexts/AdminContext";
import RentaDelUsuarioContext from "../../contexts/RentaDelUsuarioContext";
import Tuplas from "../atoms/Tuplas";
import ButtonStyled from "../atoms/ButtonStyled";
import ViewContext from "../../contexts/ViewContext";
import "../../assets/style/moleculescss/AdminListRent.css";
import { json } from "react-router-dom";

function AdminListRent() {
  const {isRentaUsuario, setIsRentaUsuario} = useContext(RentaDelUsuarioContext);
  const [rentsEstadoF, setRentsEstadoF] = useState([]);
  const [SeEjecutoConExitoLarenta, setSeEjecutoConExitoLarenta] = useState([]);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const { IsViewContext, setIsViewContext } = useContext(ViewContext);

  // /aceptar por el administrador
  // https://localhost/rentasUsuario/estadoFalse
  //Requiere
  // https://localhost/rentasUsuario/ID

  // finalizar por el adminitrador
  // https://localhost/rentasUsuario/Finalizar
  //button finalizar requier
  // https://localhost/rentasUsuario/ID/true
  useEffect(() => {
    console.log("FFFFFFFFFFFF");
    if (isAdmin) {
      let url = "https://localhost/rentasUsuario/estadoFalse";
      let url2 = "https://localhost/rentasUsuario/Finalizar";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setRentsEstadoF(data);
        });

      fetch(url2)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSeEjecutoConExitoLarenta(data);
        });
    } else {
      console.log("you are not Admin");
    }
  }, [IsViewContext]);

  return (
    <>
      <div>
        <h1>Rentas pendientes a aceptar</h1>
        <div className="ContainerListRent">
          <ButtonStyled
            onClick={() => {
              setIsViewContext(1);
            }}
            label={"Rentas pendientes"}
            Danger={true}
          />
          <ButtonStyled
            onClick={() => {
              setIsViewContext(2);
            }}
            label={"Rentas a finalizar"}
            Danger={true}
          />
          <ButtonStyled
            onClick={() => {
              setIsViewContext(3);
            }}
            label={"Ganancias"}
            Danger={true}
          />
          {IsViewContext===1||IsViewContext===2?(
          <>
            <table className="table_container">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>ID Paquete</th>
                <th>ID Usuario</th>
                <th>Fecha de inicio</th>
                <th>Hora de inicio</th>
                <th>Hora de finalización</th>
                <th>Fecha de reserva</th>
                <th>Extras</th>
                <th>Observaciones</th>
              </tr>
            </thead>
            <tbody>
            
            {IsViewContext === 1 ? (
                rentsEstadoF.map((rent) => (
                  <Tuplas key={rent._id} rent={rent}  />
                  
                ))
              ) : (
                SeEjecutoConExitoLarenta.map((rent) => (
                  <Tuplas key={rent._id} rent={rent}  />
                ))
              )}
            </tbody>
          </table>
          </>): IsViewContext===3?(<>
          {isRentaUsuario == undefined ? (<>
          <p> error en el paquete</p>
          </>):(<>
          {console.log("nulo"+JSON.stringify(isRentaUsuario[0]))}
            <div className="cont-vermas">
                <h1>Información de Reservas</h1>
                
                <table className="table-vermas">
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
                    <td>{isRentaUsuario[0].returnRenta[0].horaDeFinalizacion}</td>
                  </tr>
                  <tr>
                    <th>Fecha de Reserva</th>
                    <td> {isRentaUsuario[0].returnRenta[0].fechaDeReserva}</td>
                  </tr>
                  <tr>
                    <th>Extras</th>
                    <td>{isRentaUsuario[0].returnRenta[0].Extras[0]}</td>
                  </tr>
                  <tr>
                    <th>Observaciones</th>
                    <td>{isRentaUsuario[0].returnRenta[0].observaciones}</td>
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
        	</div>
            </>) }
          
          </>):(<></>)}
          
             
            
        </div>
      </div>
    </>
  );
}

export default AdminListRent;
