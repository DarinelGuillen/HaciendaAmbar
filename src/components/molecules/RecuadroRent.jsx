function RecuadroRent({_id, precioTotal,fechaInicio,estadoRenta,observaciones,fechaFinalizacion, id}) {
    return ( 
      <div>
        <label>KEY : {_id} </label> <br />
        <label>{precioTotal}</label>
        <label>{fechaInicio}</label>
        <label>{estadoRenta}</label>
        <label>{observaciones}</label>
        <button >Aceptar </button>
        <button >Rechazar </button>
      </div>
    );
  }
  
  export default RecuadroRent;
  