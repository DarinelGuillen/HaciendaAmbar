import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import PaqueteContext from "../../contexts/PaqueteContext";
import TextoCard from "./textoCard";
import "../../assets/style/RecuadroPaquete.css";
function RecuadroPaquete({
  _id,
  nombrePaquete,
  precio,
  img,
  descripcion,
  restric,
}) {
  const navigate = useNavigate();
  const { isPaquete, setIsPaquete } = useContext(PaqueteContext);

  const handlerClickPaquete = (e, id) => {
    e.preventDefault();
    //console.log("IDIDIDIDIDIDID", id);
    console.log("restric IM false, in RecuadroPaquete from");

    alert("Tu renta Fue procesada correctamente!");
    const paqueteID = id;
    //haciendaambar.iothings.com.mx:3000  haciendaambar.iothings.com.mx:3000
    fetch(`https://haciendaambar.iothings.com.mx/paquetes/${paqueteID}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        console.log("DATAAAAA========", data);
        setIsPaquete(data);
        setTimeout(() => {
          console.log(
            "const { isPaquete, setIsPaquete } = useContext(PaqueteContext);  =",
            isPaquete
          );
        }, 1000);
      })
      .catch((error) => console.error(error));

    navigate("/RentPackage");
  };
  const handlerClickFalse = (e) => {
    e.preventDefault();
    console.log("restric IM true, in RecuadroPaquete from LANDIG");
    navigate("/Login");
  };

  return (
    <>
      {restric ? (
        <div className="cardCompleta">
          <div className="CardInfo">
            <TextoCard span={nombrePaquete}></TextoCard>
            <TextoCard span={precio}></TextoCard>
            <img width={100} src={img} alt="" />
            <TextoCard span={"descripcion"}></TextoCard>
          </div>

          <button onClick={handlerClickFalse}>Rentarlo</button>
        </div>
      ) : (
        <div className="cardCompleta">
          <div className="CardInfo">
            <TextoCard span={nombrePaquete}></TextoCard>
            <TextoCard span={precio}></TextoCard>
            <img width={100} src={img} alt="" />
            <TextoCard span={"descripcion"}></TextoCard>
          </div>

          <button onClick={(e) => handlerClickPaquete(e, _id)}>Rentarlo</button>
        </div>
      )}
    </>
  );
}

export default RecuadroPaquete;
