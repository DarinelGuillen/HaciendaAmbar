import { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
/* import InputStyled from "../atoms/InputStyled"; */

import LabelStyled from "../atoms/LabelStyled";
import UserContext from "../../contexts/UserContext";
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
  const [Label, setLabel] = useState("");
  const handlerClick = (e) => {
    e.preventDefault();

    const formData = new FormData(formDataL.current);
    const userName = formData.get("nombreDeUsuario");
    const contrasenia = formData.get("contrasenia");
    const url = `https://localhost/users/${userName}/${contrasenia}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log("DATA.....", data);
        if (data.datos && data.datos.length === 3) {
          const [id, admin, nombreDeUsuario] = data.datos;
          setIsAdmin(admin);
          setIsLoggedIn(true);
          setIsiduser(id);
          setLabel("");
          admin ? navigate("/Admin") : navigate("/CommonUser");
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
      <div className="formLoginG">
        <div className="padreImgLogin">
          <img
            loading="lazy"
            className="LogosGeneric"
            src="src/assets/img/imgLogin.png"
            alt=""
          />
        </div>
        <div className="contenedorFormulario">
          <form ref={formDataL}>
            <div className="ordenamiento">
              <label className="labelTitulo">Inicio de sesión</label>
              <label htmlFor="username">Username</label>
              {/* <InputStyled type={"text"} placeholder={"User Name"} inputBorder={3}/> */}
              <input type="text" name="nombreDeUsuario" />
              <label htmlFor="password">Password</label>
              <input type="password" name="contrasenia" />
              <LabelStyled danger={true} label={Label}></LabelStyled>
              <button className="botonFlogin" onClick={handlerClick}>
                Iniciar Sesion{" "}
              </button>
              <Link to="/SingIn">
                <label className="linksForms">Registrarme</label>
              </Link>
              <Link to="/">
                <label className="linksForms">Regresar</label>
              </Link>
            </div>
              <div className="icnoRedesLogin">
                <Link to="https://www.facebook.com/ambar.haciendamx">
                  <Link to="https://www.instagram.com/ambar.haciendamx/">
                    <Link to="https://api.whatsapp.com/send?phone=%2B529613668435&data=AWAsSSfCKixiYnRUKHZTjvVM72qZl_bSyDTccLOxU433b-X9E2-t3KYWZEru2K_o91M4rccWJ0NNohh7mO5dg5chWGuR8ZS5LfU8lEOy8T8b6PA_n07helSnlZEfUVkQg3Y3sIPyl6Lhp5K0tB-Ty2yCC_h1OaghhVMVLIIERG0b8ta9-99hkZhiN7BaWB-hFe96V7jveQ-JnF0hWYDzAyE-lf5YLfe4dGOBkEO5wbvEfF14nqOXAxZBoyOAGe92SsiLpoKDh5vFUXW4lmuBIw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2Oha7VF2UTVjToBVMFJ6x6vG3l15zo0SUVbfcSdO8ojawfvSK9y769_hg">
                      <img src="src/assets/img/IconoRedes.svg"></img>
                    </Link>
                  </Link>
                </Link>
              </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default FLogin;
