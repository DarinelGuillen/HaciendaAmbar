import { Link } from "react-router-dom";
import Label from "../atoms/Label";
import "../../assets/img/LogoColor.png";
import "../../assets/style/Header.css";
function Header() {
  return (
    <>
      <div className="navBar">
        <div className="iconoAmbar">
          <img src="src/assets/img/LogoColor.png"></img>
        </div>
        <div className="pruebita">
          <Link to="/Login">Iniciar sesión</Link>
          <Link to="/SingIn">Registrate</Link>
          <Label label={"Tipos de reserva"}></Label>
          <Label label={"Contacto"}></Label>
          <Label label={"Acerca de nosotros"}></Label>
        </div>
      </div>

      <br />
      <Link to="/General">General</Link>
    </>
  );
}
export default Header;
//<Icon icon={logoColor} ></Icon>
