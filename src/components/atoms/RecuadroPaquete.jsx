import { useNavigate, Navigate } from "react-router-dom";
function RecuadroPaquete({ _id, nombrePaquete, precio, img, descripcion }) {
  const navigate = useNavigate();
  const handlerClickPaquete = (e, id) => {
    e.preventDefault();
    console.log(id);
    alert("Tu renta Fue procesada correctamente!")
    navigate("/RentPackage");
    // Make API call using the id parameter
    // const URI = `http://localhost:3000/paquetes/${id}`;
    // const options = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     // Add your request body here
    //   }),
    // };

    // fetch(URI, options)
    //   .then((response) => {
    //     console.log("Response:", response);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Data:", data);
    //     alert(JSON.stringify(data));
    //   })
    //   .catch((error) => {
    //     console.log("Error:", error);
    //   });

    // // Redirect to a different page after making the API call
  };

  return (
    <>
      <div className="cardCompleta">
      <img src="src/assets/img/iconoPaquetes.png"></img>
        <img src={img} alt={_id} />
        <div>
          <span>NOMBRE= {nombrePaquete}</span>
          <br></br>
          <span>NOMBRE= {_id}</span>
          <br></br>
          <span>PRECIO={precio}</span>
          <br></br>
          <span>DESCRIPTION= {descripcion}</span>
          <br></br>
          <button onClick={(e) => handlerClickPaquete(e, _id)}>
            Rentarlo
          </button>
        </div>
      </div>
    </>
  );
}

export default RecuadroPaquete;
