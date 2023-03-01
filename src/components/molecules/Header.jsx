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
          <img src="src/assets/img/LogoColor.png"></img>
        </div>
        <div className="pruebita">
          {!isLoggedIn ? (
            <>
              <Link className="loginNav" to="/Login">
                Iniciar sesión
              </Link>
              <Link className="loginNav" to="/">
                Contacto
              </Link>
              <Link className="loginNav" to="/">
                Sobre nosotros
              </Link>
              <Link className="loginNav" to="/">
                Tipos de reservas
              </Link>
              <Link className="loginNav" to="/">
                Mi Cuenta
              </Link>
            </>
          ) : (
            <Link to="/">log out</Link>
          )}
        </div>
      </div>

      <br />
      {/*  <Link to="/General">General</Link> */}
    </>
  );
}

export default Header;