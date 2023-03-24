import { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
/* import InputStyled from "../atoms/InputStyled"; */

import LabelStyled from "../atoms/LabelStyled";
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";
import AdminContext from "../../contexts/AdminContext";
import IdContex from "../../contexts/IdContex";
import imgLogin from "../../assets/img/img_login.jpg";
import "../../assets/img/imgLogin.png";
import "../../assets/style/FLogin.css";

function FLogin() {
  const formDataL = useRef();
  const navigate = useNavigate();
  const formL = useRef();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const { isIduser, setIsiduser } = useContext(IdContex);
  const { isToken, setIsToken } = useContext(TokenContext);
  const [Label, setLabel] = useState("");
  const handlerClick = (e) => {
    e.preventDefault();
    console.log(
      "INTENTANDO LOGEARME"
    );
    const formData = new FormData(formDataL.current);
    const userName = formData.get("nombreDeUsuario");
    const contrasenia = formData.get("contrasenia");
    const url = `https://localhost/users/${userName}/${contrasenia}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log("DATA.....", data);
        if (data.datos && data.datos.length >= 3) {
          const [id, admin, nombreDeUsuario, token] = data.datos;
          setIsAdmin(admin);
          setIsLoggedIn(true);
          setIsiduser(id);
          setIsToken(token)
          setLabel("");
          admin ? navigate("/Admin") : navigate("/CommonUser");
          console.log("TOKEN",isToken);
        } else {
          setLabel(data.message || "Error desconocido");
        }
      })
      .catch((err) => {
        setLabel(err, "Algo inesperado a pasado de nuestro lado");
      });
  };

  return (
    <>
      <center>
      
        <div className="contenedorLogincito ">
          <section className="contact-box">
            <div className="row no-gutters">
              <div className="col-xl-7 col-lg-12 d-flex">

                <div className="container align-self-center p-6 sombra">
                  <h1 className="font-weight-bold mb-3 ">Inicio de sesión</h1>
                  <p className="text-muted mb-5">Ingresa la siguiente información para inicio de sesión</p>        
                    <form ref={formDataL}>
                      <div className="form-group mb-3">
                          <label className="font-weight-bold labelLogin" htmlFor="username">Nombre de usuario</label>
                          <input type="text" className="form-control" name="nombreDeUsuario" placeholder="Ingresa tu nombre de usuario"/>
                      </div>
                      <div className="form-group mb-3">
                          <label className="font-weight-bold labelLogin" htmlFor="password">Contraseña </label>
                          <input type="password" className="form-control" name="contrasenia" placeholder="Ingresa tu contraseña"/>
                      </div>
                      <button className="btn btn-primary width-100" onClick={handlerClick}>Iniciar Sesion{" "}</button>
                      <div className="padreLinks">
                        <div>
                          <Link to="/SingIn">
                            <label className="linksForms">Registrarme</label>
                          </Link>
                        </div>
                        <div>
                          <Link to="/">
                            <label className="linksForms">Regresar</label>
                          </Link>
                        </div>
                      </div>
                      <div class="container clasesRedes">
                        <div class="row">
                          <div class="col">
                            <a href="tel:529613668435"><img src="src/assets/img/WhatsAppicono.png"  alt="..."/></a>
                          </div>
                          <div class="col">
                            <a href="https://www.instagram.com/ambar.haciendamx/"><img src="src/assets/img/Instagramicono.png" /></a>
                          </div>
                          <div class="col">
                            <a href="https://www.facebook.com/ambar.haciendamx"><img src="src/assets/img/Facebookicono.png" alt="..."/></a>
                          </div>
                        </div>
                      </div>
                    </form>
                    </div>
                  </div>
                <div className="col-xl-5 col-lg-12 login-bg">    
              </div>
            </div>
          </section>
        </div>
      </center>
    </>
  );
}
export default FLogin;