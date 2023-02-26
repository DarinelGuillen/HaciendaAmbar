import { useState, useEffect, useContext } from "react";
import AdminContex from "../../contexts/AdminContext";
import RecuadroRent from "../molecules/RecuadroRent";
function ListRent() {
  const [Rents, setRents] = useState([]);
  const { isAdmin, setIsAdmin } = useContext(AdminContex);

  useEffect(() => {
    isAdmin
      ? fetch("http://haciendaambar.iothings.com.mx:3000/rentasUsuario")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setRents(data);
          })
      : console.log("you are not Admin");
  }, [isAdmin]);

  return (
    <>
      <div>
        <h1>Restas pendientes a aceptar</h1>

        {isAdmin &&
          Rents.map((rent) => (
            <RecuadroRent
            key={rent._id} 
            _id={rent._id}
              precioTotal={rent.precioTotal}
              fechaInicio={rent.fechaInicio}
              estadoRenta={rent.estadoRenta}
              observaciones={rent.observaciones}
              fechaFinalizacion={rent.fechaFinalizacion}
            />
          ))}
      </div>
    </>
  );
}

export default ListRent;
