import { Link } from "react-router-dom";
import Label from "../atoms/Label";
import Icon from "../atoms/Icon"
import logoColor from "../../../assets/img/logoColor.png"
import "../../../assets/style/Header.css"
function Header() {  
    return (
      <>
       <div className="iconoAmbar">
          <Icon icon={logoColor}></Icon>
       </div>
       <div className="NavBarInicioSesion">
          <Label label={"Iniciar sesión"}></Label>
       </div>
       <div className="NavBarTipoReserva">
          <Label label={"Tipos de reserva"}></Label>
       </div>
       <div className="NavBarCorrexto">
          <Label label={"Contacto"}></Label>
       </div>
       <div className="NavBarAcercaNosotros">
          <Label label={"Acerca de nosotros"}></Label>
       </div>

      <div className="links">
        <Link to="/Login">
          Iniciar sesión
        </Link>
        <br />
        <Link to="/General">
          General
        </Link>
      </div>
      </>
    );
  }
  export default Header;
  