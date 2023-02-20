function RecuadroPaquete({ _id, nombrePaquete, precio, img, descipcion }) {
  return (
    <>
      <div classNameName="">
        <img src={img} alt={_id} />
        <div>
          <span>NOMBRE= {nombrePaquete}</span>
          <br></br>
          <span>NOMBRE= {_id}</span>
          <br></br>
          <span>PRECIO={precio}</span>
          <br></br>
          <span>DESCRIPTION= {descipcion}</span>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default RecuadroPaquete;
