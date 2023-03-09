import { useState, useEffect, useContext } from "react";
import AdminContext from "../../contexts/AdminContext";
import Tuplas from "../atoms/Tuplas";
import ButtonStyled from "../atoms/ButtonStyled";
import ViewContext from "../../contexts/ViewContext";
import "../../assets/style/moleculescss/AdminListRent.css";

function AdminListRent() {
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
          {IsViewContext===1||IsViewContext===2?(<>
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
          </>):(<></>)}
          
             
            
        </div>
      </div>
    </>
  );
}

export default AdminListRent;
