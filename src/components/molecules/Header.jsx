import { Link } from "react-router-dom";
import { useContext } from "react";

import Label from "../atoms/Label";
import UserContext from "../../contexts/UserContext";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import "../../assets/img/LogoColor.png";
import "../../assets/style/Header.css";
import "../../assets/img/LogoColor.png"

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { isTipoRenta, setIsTipoRenta } = useContext(TipoRentaContext);

  return (
    <>

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link to="/">
            <a class="navbar-brand">
              <img loading="lazy" class="logoNavbar" src="src/assets/img/LogoColor.png"></img>
            </a>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
            {!isLoggedIn ? (
              <>
                <li class="nav-item">
                  <Link to="/Login">
                    <a class="nav-link active" aria-current="page">Iniciar sesión</a>
                  </Link>
                </li>
              </>
            ):(
              <>
                <li class="nav-item">
                  <Link to="/MyAccount">
                    <a class="nav-link active"><button className="btnIniciarsesion" onClick={()=>setIsTipoRenta(0)}>Mi cuenta</button></a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/">
                    <a class="nav-link active">log out</a>
                  </Link>
                </li>
              </>
            )}
              <li class="nav-item">
                <Link to="/Contact">
                  <a class="nav-link active">Contacto</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link  to="/AboutUs">
                  <a class="nav-link active">Sobre nosotros</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link  to="/TypesRents">
                  <a class="nav-link active">Tipos de reserva</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
