import Imagen from "../atoms/Imagen";
import imgCarrusel from "../../assets/img/imgCarrusel1.png";
import "../../assets/style/Imagenes.css";
import "../../assets/style/ListPaquetes.css"


function CarruselImagenes() {
  return (
    <>
    <button >holaaa</button>
<div className="contenedor" >
      <div className="imagen actual">
        <img src="http://www.reciclay.com.ve/gio/lake-tahoe.jpg" />
        <div className="texto">Lago Tahoe</div>
      </div>
      
      <div className="imagen">
        <img src="http://www.reciclay.com.ve/gio/redwood-national.jpg" />
        <div className="texto">Parque Nacional Redwood</div>
      </div>
      
      <div className="imagen">
        <img src="http://www.reciclay.com.ve/gio/yellowstone.jpg" />
        <div className="texto">Yellowstone</div>
      </div>
      
      <div className="imagen">
        <img src="http://www.reciclay.com.ve/gio/yosemite.jpg" />
        <div className="texto">Parque Nacional Yosemite</div>
      </div>
      
      <a href="#" className="anterior" onclick="anterior()">&#10094;</a>
      <a href="#" className="siguiente" onclick="siguiente()">&#10095;</a>
      
      <div className="puntos">
        <span className="punto activo" onclick="mostrar(0)"></span>
        <span className="punto" onclick="mostrar(1)"></span>
        <span className="punto" onclick="mostrar(2)"></span>
        <span className="punto" onclick="mostrar(3)"></span>
      </div>
      
      <div className="boton">
        <a href="#">
          <img src="http://www.reciclay.com.ve/gio/pause.png" id="btn" onclick="playpause()" />
        </a>
      </div>
    </div>
    
    </>
  );
}

export default CarruselImagenes;
