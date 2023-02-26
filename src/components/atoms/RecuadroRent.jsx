import ButtonStyled from "./ButtonStyled";
import "../../assets/style/moleculescss/RecuadroRent.css"
function RecuadroRent({_id, precioTotal,fechaInicio,estadoRenta,observaciones,fechaFinalizacion, id}) {
  const handlerClickAceptRent=(e, id)=>{
    e.preventDefault();
    console.log("Call handlerClickAceptRent =ID=: ",id);
    
  }
  const handlerClickRejectRent=(e, id)=>{
    e.preventDefault();
    console.log("Call handlerClickRejectRent =ID=: ",id);

  }
  
  return ( 
    
      <div className="RecuadroRent">
        <label>KEY : </label>
        <label>{_id} </label>
        <label>{precioTotal}</label>
        <label>{fechaInicio}</label>
        <label>{estadoRenta}</label>
        <label>{observaciones}</label>
        <ButtonStyled  onClick={(e) =>  handlerClickRejectRent(e, _id)} label={"Rechazar Renta"} Danger={true}/>
        <ButtonStyled  onClick={(e) => handlerClickAceptRent(e, _id)} label={"Aceptar renta"} Danger={false}/>
      </div>
    );
  }
  
  export default RecuadroRent;
  