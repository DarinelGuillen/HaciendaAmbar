import { useNavigate, Navigate } from "react-router-dom";
import TextoCard from "./textoCard";

function RecuadroPaquete({ _id, nombrePaquete, precio, img, descripcion }) {
  const navigate = useNavigate();
  const handlerClickPaquete = (e, _id) => {
    e.preventDefault();
    console.log(_id);
    alert("Tu renta Fue procesada correctamente!");
    
    // Make API call using the id parameter
    const URI = `http://localhost:3000/paquetes/${_id}`;
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(URI, options)
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Paquete data:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
     // navigate("/RentPackage");
  };

  return (
    
      <div className="cardCompleta">
          <TextoCard span={nombrePaquete}></TextoCard>
        
            <span>otracosa= </span>
            <span>NOMBRE= {_id}</span>
            <span>PRECIO={precio}</span>
            <span>DESCRIPTION= {descripcion}</span>
            <button onClick={(e) => handlerClickPaquete(e, _id)}>
              Rentarlo
            </button>
      </div>
  
  );
}

export default RecuadroPaquete;
