import { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/UserContext";

import RecuadroPaquete from "../atoms/RecuadroPaquete";
import "../../assets/style/ListPaquetes.css";

function ListPaquetes() {
  const [paquetes, setPaquete] = useState([]);
  const { isLoged, setIsLoged } = useContext(UserContext);

  useEffect(() => {
    if (isLoged) {
      fetch("http://52.70.194.247:3000/paquetes")
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
        //   console.log("data id on useEffect", data[0]._id);
          setPaquete(data);
        });
    }
  }, [isLoged]);

  return (
    <>
      <div>
        <h2>Lista de Paquetes </h2>
        <button>Mostrar Paquetes</button>
        <div className="">
          {isLoged &&
            paquetes.map((paquete) => {
              console.log("///data id", paquete._id);
              console.log("/data Price", paquete.precio);
              return (
                <RecuadroPaquete
                  key={paquete._id}
                  nombrePaquete={paquete.nombrePaquete}
                  Precio={paquete.Precio}
                  img={paquete.img}
                  descripcion={paquete.descripcion}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ListPaquetes;
