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
      {/*  <div className="navBar">
        <div className="iconoAmbar">
          <Link className="loginNav" to="/">
            <img loading="lazy" src="src/assets/img/LogoColor.png"></img>
          </Link>
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
              <Link className="loginNav" to="/">
                Mi Cuenta
              </Link>
              <Link to="/">log out</Link>
            </>
          )}
          <Link className="loginNav" to="/TypesRents">
            Tipos de reserva{" "}
          </Link>
          <Link className="loginNav" to="/Contact">
            Contacto
          </Link>
          <Link className="loginNav" to="/AboutUs">
            Acerca de nosotros
          </Link>
        </div>
      </div>

      <br />  */}
      {/*  <Link to="/General">General</Link> */}

     

      <div className="divHeader">
        <a href="" className="logo">
          <Link  to="/">
            <img loading="lazy" className="iconoAmbar" src="src/assets/img/LogoColor.png"></img>
          </Link>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
        {!isLoggedIn ? (
            <>
              <li>
                <a>
                  <Link className="loginNav" to="/Login">
                    Iniciar sesión
                  </Link>
                </a>
              </li>
            </>
          ) : (
            <>
            <li>
              <a>
                <Link className="loginNav" to="/">
                  Mi Cuenta
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/">log out</Link>
              </a>
            </li>
            </>
          )}
             <li>
              <a>
                <Link className="loginNav" to="/TypesRents">
                  Tipos de reserva{" "}
                </Link>
              </a>
             </li>
             <li>
              <a>
                <Link className="loginNav" to="/Contact">
                  Contacto
                </Link>
              </a>
             </li>
             <li>
              <a>
                <Link className="loginNav" to="/AboutUs">
                  Acerca de nosotros
                </Link>
              </a>
             </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
