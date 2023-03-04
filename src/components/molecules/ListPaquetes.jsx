import { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import RecuadroPaquete from "../atoms/RecuadroPaquete";
import "../../assets/style/ListPaquetes.css";

function ListPaquetes() {
  const [paquetes, setPaquete] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const print = () => {
    console.log("IM IN LISTA PAQUETES EN LANDINGCONST SET TIME OUT");
    setTimeout(() => {
      setIsLoggedIn(false);
      console.log("SETTIMEOUT");
    }, 1000);
  };

  useEffect(() => {
    fetch("https://localhost/paquetes")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        //   //console.log("data id on useEffect", data[0]._id);
        setPaquete(data);
        console.log("REAL?");
      });
  }, []);

  return (
    <>
      <div className="">
        <h2 className="listaPaquetes">Lista de Paquetes </h2>

        <div className="prueba">
          {isLoggedIn
            ? paquetes.map((paquete) => {
                //console.log("///data id", paquete._id);
                //console.log("/data Price", paquete.precio);
                return (
                  <RecuadroPaquete
                    key={paquete._id}
                    _id={paquete._id}
                    nombrePaquete={paquete.nombrePaquete}
                    precio={paquete.precio}
                    img={paquete.img}
                    descripcion={paquete.descripcion}
                    restric={false}
                  />
                );
              })
            : paquetes.map((paquete) => {
                //console.log("///data id", paquete._id);
                //console.log("/data Price", paquete.precio);
                return (
                  <RecuadroPaquete
                    key={paquete._id}
                    _id={paquete._id}
                    nombrePaquete={paquete.nombrePaquete}
                    precio={paquete.precio}
                    img={paquete.img}
                    descripcion={paquete.descripcion}
                    restric={true}
                  />
                );
              })}
          {/* {
            paquetes.map((paquete) => {
              //console.log("///data id", paquete._id);
              //console.log("/data Price", paquete.precio);
              return (
                
                <RecuadroPaquete
                  key={paquete._id}
                  _id={paquete._id}
                  nombrePaquete={paquete.nombrePaquete}
                  precio={paquete.precio}
                  img={paquete.img}
                  descripcion={paquete.descripcion}
                />
              );
            })} */}
        </div>
      </div>
    </>
  );
}

export default ListPaquetes;

/*import { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import RecuadroPaquete from "../atoms/RecuadroPaquete";
import "../../assets/style/ListPaquetes.css";

function ListPaquetes() {
  const [paquetes, setPaquete] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const print = () => {
    console.log("IM IN LISTA PAQUETES EN LANDINGCONST SET TIME OUT");
    setTimeout(() => {
      setIsLoggedIn(false);
      console.log("SETTIMEOUT");
    }, 1000);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch("https://localhost/paquetes")
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          //   //console.log("data id on useEffect", data[0]._id);
          setPaquete(data);
        });
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="">
        <h2>Lista de Paquetes </h2>

        <div className="prueba">
          {isLoggedIn &&
            paquetes.map((paquete) => {
              //console.log("///data id", paquete._id);
              //console.log("/data Price", paquete.precio);
              return (
                
                <RecuadroPaquete
                  key={paquete._id}
                  _id={paquete._id}
                  nombrePaquete={paquete.nombrePaquete}
                  precio={paquete.precio}
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
 */
