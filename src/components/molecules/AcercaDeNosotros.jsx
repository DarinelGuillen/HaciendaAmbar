import "../../assets/img/Contactanos.svg"
import "../../assets/style/AcercaDeNosotros.css"

function AcercaDeNosotros() {
    return ( 
        <div>
            <div className="acercaDeNosotrosTitulo">
                <h1>Acerca De Nosotros</h1>
            </div>
            <div className="gallery">
                <div className="gallery__img"></div>
                <div className="gallery__img"></div>
                <div className="gallery__img"></div>
            </div>
            <div>
                <img src="src/assets/img/Contactanos.svg"></img>
            </div>
        </div>
     );
}

export default AcercaDeNosotros;