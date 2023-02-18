import { Link } from "react-router-dom";
import Label from "../atoms/Label";
import "../../assets/img/logoColor.png"
import "../../assets/style/Header.css"
function Header() {  
    return (
      <>
      <div className="navBar">
         <div className="iconoAmbar">
            <img src="src/assets/img/LogoColor.png"></img>
         </div>
         <div className="pruebita">

            <Label label={"Iniciar sesión"}></Label>
            <Label label={"Tipos de reserva"}></Label>
            <Label label={"Contacto"}></Label>
            <Label label={"Acerca de nosotros"}></Label>
       
         </div>
 
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
  //<Icon icon={logoColor} ></Icon>