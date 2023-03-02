import { Link } from "react-router-dom";
import { useContext } from "react";

import Label from "../atoms/Label";
import UserContext from "../../contexts/UserContext";

import "../../assets/img/LogoColor.png";
import "../../assets/style/Header.css";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return (
    <>
      <div className="navBar">
        <div className="iconoAmbar">
          <Link className="loginNav" to="/"><img src="src/assets/img/LogoColor.png"></img></Link>
          
        </div>
        <div className="contenedorNavBar">
          {!isLoggedIn ? (
            <>
              <Link className="loginNav" to="/Login">
                Iniciar sesión
              </Link>
            </>
          ) : (
            <>
              <Link className="loginNav" to="/">Mi Cuenta</Link>
              <Link to="/">log out</Link>
            </>
          )}
          <Link className="loginNav" to="/TypesRents">Tipos de reserva </Link>
          <Link className="loginNav" to="/Contact">Contacto</Link>
          <Link className="loginNav" to="/AboutUs">Acerca de nosotros</Link>
        </div>
      </div>

      <br />
      {/*  <Link to="/General">General</Link> */}
    </>
  );
}

export default Header;
