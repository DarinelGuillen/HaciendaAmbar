import "../../assets/style/RecuerdosParaSiempre.css"
import Label from "../atoms/Label";
import RecuadroPaquete from "../atoms/RecuadroPaquete";


function RecuerdosParaSiempre() {
    return ( 
        <>
           <div className="RecuerdosParaSiempreMain">
      
                <img className="imagenRCPS" src="src/assets/img/imgRecuerdos.png"></img>
                <div className="tituloRecuerdosParaSiempre">
                <div className="titulio">
                    <Label label={"Los 5 mandamientos del invitado"}></Label>
                </div>
                <ul>
                    <li type="disc">Abrirás la invitación cuando te la entreguen.</li><br></br>
                    <li type="disc">Serás puntual y llegarás a la ceremonia.</li><br></br>
                    <li type="disc">No pedirás un +1.</li><br></br>
                    <li type="disc">No te molestarás si tus niños no estás invitados (es por tu bien).</li><br></br>
                    <li type="disc">Confirmarás asistencia lo antes posible y no cancelarás de último momento.</li>
                </ul>
                </div>
                </div>
           <div className="cards">
               <div className="textoTips">
                    <Label label={"Tips"}></Label>
               </div>
                <img src="src/assets/img/cards.png"></img>
                <RecuadroPaquete></RecuadroPaquete>
           </div>
           <div className="acercaDeNosotros">
           <div className="txt">
                <Label label={"Acerca de nosotros"}></Label>
           </div>
                <Label label={"Hacienda Ámbar, es un complejo turístico ubicado en la Rivera Nandayalú del municipio de Suchiapa, Chiapas, el cual ha decidido iniciar su camino en el área de la prestación de servicios a través de la celebración de eventos sociales, culturales, empresariales y de destino, y con ello, satisfacer las necesidades inmediatas en recreación y convivencia de los habitantes de Túxtla Gutiérrez y zona metropolitana, así como del sector turístico que ve en Chiapas, un estado lleno de oportunidades y riquezas.La primera etapa del proyecto, contempla un área de salón, piscina con bar y jardín, estacionamiento propio y espacios instagrameables que, al ser amplios y ventilados, se promocionan como espacios seguros y adecuados para evitar la propagación del virus COVID-19, y con ello, hacer frente a la pandemia mundial actual. Así también, la hacienda, se encuentra diseñada en un estilo arquitectónico rústico- natural, con lo cual se busca promover la cultura chiapaneca- mexicana y convertirla un referente a nivel nacional e internacional.La segunda etapa del proyecto, actualmente en construcción, contempla once bungalows para descanso y un restaurante, esbozándose como una excelente opción para disfrutar y celebrar con la familia y amigos, mediante un servicio integral de calidad, en relajación, bienestar y experiencias que generen en el cliente recuerdos para siempre. ¡Ven a disfrutar de una experiencia Ambar!"}></Label>
            </div> 
        <img className="iconoAboutUs" src="src/assets/img/LogoColor.png"></img>

        </>
     );
}

export default RecuerdosParaSiempre;