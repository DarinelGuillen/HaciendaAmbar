import { Link } from "react-router-dom";
import { useContext } from "react";

import Label from "../atoms/Label";
import UserContext from "../../contexts/UserContext";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import "../../assets/img/LogoColor.png";
import "../../assets/style/Header.css";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { isTipoRenta, setIsTipoRenta } = useContext(TipoRentaContext);

  return (
    <>
      <div className="divHeader">
        <Link to="/">
          <img
            loading="lazy"
            className="iconoAmbar"
            src="src/assets/img/LogoColor.png"
          ></img>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {!isLoggedIn ? (
            <>
              <li>
                <Link className="loginNav" to="/Login">
                  <a>
                    Iniciar sesión
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="loginNav" to="/MyAccount">
                  <a>
                    <button onClick={()=>setIsTipoRenta(0)}>Mi Cuenta</button>
                  </a>
                </Link>
              </li>
              <li>
                <a>
                  <Link to="/">log out</Link>
                </a>
              </li>
            </>
          )}
          <li>
            <Link className="loginNav" to="/TypesRents">
              <a>
                Tipos de reserva
              </a>
            </Link>
          </li>
          <li>
            <Link className="loginNav" to="/Contact">
              <a>
                Contacto
              </a>
            </Link>
          </li>
          <li>
            <Link className="loginNav" to="/AboutUs">
              <a>
                Acerca de nosotros
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
