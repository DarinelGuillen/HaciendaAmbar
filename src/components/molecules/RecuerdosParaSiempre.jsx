import "../../assets/style/RecuerdosParaSiempre.css"
import Label from "../atoms/Label";

function RecuerdosParaSiempre() {
    return ( 
        <>
            <div className="cardFondo">
                <div className="tituloRecuerdosParaSiempre">
                    <Label label={"Los 5 mandamientos del invitado"}></Label>
                </div>
                <ul className="tablaNoOrdenada">
                    <li type="disc">Abrirás la invitación cuando te la entreguen.</li><br></br>
                    <li type="disc">Serás puntual y llegarás a la ceremonia.</li><br></br>
                    <li type="disc">No pedirás un +1.</li><br></br>
                    <li type="disc">No te molestarás si tus niños no estás invitados (es por tu bien).</li><br></br>
                    <li type="disc">Confirmarás asistencia lo antes posible y no cancelarás de último momento.</li>
                </ul>
            </div>
        </>
     );
}

export default RecuerdosParaSiempre;