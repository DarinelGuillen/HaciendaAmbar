import iconoFooter from "../../assets/img/logoBlancoNegro.svg"
import iconoRedes from "../../assets/img/IconoRedes.svg"
import Icon from "../atoms/Icon"
import Label from "../atoms/Label"
import "../../assets/style/Footer.css"

function Footer() {
  return (
    <>
     

     <footer class="row row-cols-5 py-5 my-5 border-top">

          <div class="col">
          </div>
      
      <center>
        <div class="col">
          <h5>Información</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Empresa</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Acerca de</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Empleo</a></li>
          </ul>
        </div>
      </center>
      <div class="col">
      </div>
      <center>
        <div class="col">
          <h5>Enlaces</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Enlaces útiles</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Ayuda</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Redes sociales</a></li>
          </ul>
        </div>
      </center>
    </footer>
    </>
  );
}
export default Footer;
