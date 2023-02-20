import Imagen from "../atoms/Imagen";
import imgCarrusel from "../../assets/img/imgCarrusel1.png";
import "../../assets/style/Imagenes.css";

function CarruselImagenes() {
  return (
    <>
      <div className="slider-wrapper">
        <div className="slider">
          <div id="slide-1" className="slide"></div>

          <div id="slide-2" className="slide"></div>

          <div id="slide-3" className="slide"></div>
        </div>

        <div className="dots">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
        </div>
      </div>
    </>
  );
}

export default CarruselImagenes;
