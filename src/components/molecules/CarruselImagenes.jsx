import Imagen from "../atoms/Imagen"
import imgCarrusel from "../../assets/img/imgCarrusel1.png"
import "../../assets/style/Imagenes.css"

function CarruselImagenes() {
    return ( 
       <>
    <div class="slider-wrapper">
	<div class="slider">
		<div id="slide-1" class="slide" ></div>

		<div id="slide-2" class="slide" ></div>

		<div id="slide-3" class="slide" ></div>
	</div>

	<div class="dots">
		<a href="#slide-1"></a>
		<a href="#slide-2"></a>
		<a href="#slide-3"></a>
	</div>
</div>

       </>
     );
}

export default CarruselImagenes;