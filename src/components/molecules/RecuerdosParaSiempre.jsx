import Label from "../atoms/Label";
import Icon from "../atoms/Icon";
import RecuadroPaquete from "../atoms/RecuadroPaquete";
import "../../assets/img/card1.svg"
import "../../assets/img/card2.svg"
import "../../assets/img/card3.svg"
import "../../assets/img/card4.svg"
import "../../assets/img/card5.svg"
import "../../assets/img/imagenCardDerecha.png"

import "../../assets/style/RecuerdosParaSiempre.css"


function RecuerdosParaSiempre() {
    return ( 
        <>

            <div className="contenedorPadreRecuerdosParaSiempre">
                <div className="titulo">
                    <h1>Los 5 mandamientos del invitado</h1>
                </div>
            </div>
            
            <div className="cardDisplay">
            <div className="cardsPadre">     
                <div className="titulio">
                    <img src="src/assets/img/card1.svg"></img>
                    <label>Abrirás la invitación cuando te la entreguen.</label>
                </div>

                <div className="titulio">
                    <img src="src/assets/img/card2.svg"></img>
                    <label>Serás puntual y llegarás a la ceremonia.</label>
                </div>
                <div className="titulio">
                    <img src="src/assets/img/card3.svg"></img>
                    <label>No pedirás un +1.</label>
                </div>
                <div className="titulio">
                    <img src="src/assets/img/card4.svg"></img>
                    <label>No te molestarás si tus niños no estás invitados (es por tu bien).</label>
                </div>  
                <div className="titulio">
                    <img src="src/assets/img/card5.svg"></img>
                    <label>Confirmarás asistencia lo antes posible y no cancelarás de último momento.</label>
                </div>
                </div>
            <div className="imagenCardDerecha">
                <img src="src/assets/img/imagenCardDerecha.png"></img>
            </div>
        </div>
        </>
     );
}

export default RecuerdosParaSiempre;