import { Link } from "react-router-dom";
import Icon from "./atoms/Icon";
import Label from "./atoms/Label";
import logo from "../../assets/img/LogoColor.png"
import "../../assets/style/Header.css"
function Header() {  
    return (
      <>
       <div>
          <Icon icon={logo}></Icon>
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
        <Link to="/General">
          General
        </Link>
      </div>
      </>
    );
  }
  export default Header;
  