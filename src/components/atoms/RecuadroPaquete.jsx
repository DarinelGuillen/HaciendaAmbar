import { useNavigate, Navigate } from "react-router-dom";
import TextoCard from "./textoCard";
function RecuadroPaquete({ _id, nombrePaquete, precio, img, descripcion }) {
  const navigate = useNavigate();
  const handlerClickPaquete = (e, id) => {
    e.preventDefault();
    console.log(id);
    alert("Tu renta Fue procesada correctamente!")
    //navigate("/RentPackage");
    /*  //Make API call using the id parameter
     const URI = `http://localhost:3000/paquetes/${id}`;
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
        <TextoCard span={nombrePaquete}></TextoCard>
        <TextoCard span={precio}></TextoCard>  
        <img width={100} src={img} alt="" />
        <TextoCard span={"descripcion"}></TextoCard>
        <button className="botonCard" onClick={(e) => handlerClickPaquete(e, _id)}>
              Rentarlo
         </button>
      </div>
  
  );
}

export default RecuadroPaquete;
