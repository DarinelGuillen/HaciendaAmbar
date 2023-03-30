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
  const HandlerClickLogOut=(e)=>{
    e.preventDefault()
    setIsLoggedIn(false)
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/">
            <a className="navbar-brand ">
              <img loading="lazy" className="logoNavbar" src="src/assets/img/LogoColor.png"></img>
            </a>
          </Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/Login">
                    <a className="nav-link active" aria-current="page">Iniciar sesión</a>
                  </Link>
                </li>
              </>
            ):(
              <>
                <li className="nav-item">
                  <Link to="/MyAccount">
                    <a className="nav-link active"><button className="btnIniciarsesion" onClick={()=>setIsTipoRenta(0)}>Mi cuenta</button></a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                  <a className="nav-link active" onClick={(e) => HandlerClickLogOut(e)}>Log out</a>
                  </Link>
                </li>
              </>
            )}
              <li className="nav-item">
                <Link  to="/AboutUs">
                  <a className="nav-link active">Sobre nosotros</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link  to="/TypesRents">
                  <a className="nav-link active">Tipos de reserva</a>
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
