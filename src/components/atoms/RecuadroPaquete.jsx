import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import PaqueteContext from "../../contexts/PaqueteContext";
import TextoCard from "./textoCard";
import "../../assets/style/RecuadroPaquete.css"
function RecuadroPaquete({ _id, nombrePaquete, precio, img, descripcion }) {
  const navigate = useNavigate();
  const { isPaquete, setIsPaquete } = useContext(PaqueteContext);

  const handlerClickPaquete = (e, id) => {
    e.preventDefault();
    console.log("IDIDIDIDIDIDID", id);
    alert("Tu renta Fue procesada correctamente!");
    const paqueteID = id;
    //haciendaambar.iothings.com.mx:3000  haciendaambar.iothings.com.mx:3000
    fetch(`http://haciendaambar.iothings.com.mx:3000/paquetes/${paqueteID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsPaquete(data);
      })
      .catch((error) => console.error(error));

    navigate("/RentPackage");
    /*  //Make API call using the id parameter
     const URI = `http://haciendaambar.iothings.com.mx:3000/paquetes/${id}`;
     const options = {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         // Add your request body here
       }),
     };

     fetch(URI, options)
      .then((response) => {
         console.log("Response:", response);
        return response.json();
       })
       .then((data) => {
         console.log("Data:", data);
         alert(JSON.stringify(data));
       })
       .catch((error) => {
         console.log("Error:", error);
       }); */

    // // Redirect to a different page after making the API call
  };

  return (
    <div className="cardCompleta">
      <div className="CardInfo">
          <TextoCard span={nombrePaquete}></TextoCard>
          <TextoCard span={precio}></TextoCard>
          <img width={100} src={img} alt="" />
          <TextoCard span={"descripcion"}></TextoCard>
      </div>
          <button onClick={(e) => handlerClickPaquete(e, _id)}>Rentarlo</button>
    </div>
  );
}

export default RecuadroPaquete;

// fetch(URI, options)
//   .then((response) => {
//     console.log("Response:", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });
