import { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import AdminContext from "../../contexts/AdminContext";
import imgLogin from "../../assets/img/imagenLogin.png";
import "../../assets/style/FLogin.css"

function FLogin() {
  const formDataL = useRef();
  const navigate = useNavigate();
  const formL = useRef();
  const { isLoged, setIsLoged } = useContext(UserContext);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const [Label, setLabel] = useState("");
  const handlerClick = (e) => {
    e.preventDefault();

    const formData = new FormData(formDataL.current);
    const userName = formData.get("nombreDeUsuario");
    const contrasenia = formData.get("contrasenia");
    const url = `http://haciendaambar.iothings.com.mx:3000/users/${userName}/${contrasenia}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.datos && data.datos.length === 3) {
          const [id, admin, nombreDeUsuario] = data.datos;
          setIsAdmin(admin);
          setIsLoged(true);
          setLabel("");
          admin ? navigate("/Admin") : navigate("/CommonUser");
        } else {
          setLabel(data.message || "Error desconocido");
        }
      })
      .catch(() => {
        setLabel("Algo inesperado a pasado de nuestro lado");
      });
  };

  return (
<>

  <div>
    <img className="LogosGeneric" src={imgLogin} alt="" />
  </div>
  <div className="contenedorFormulario">
    <form ref={formDataL}>
          <div className="ordenamiento">
            <label className="labelTitulo">Inicio de sesión</label> 
            <label  htmlFor="username">Username</label>
            <input type="text" name="nombreDeUsuario" />
            <label htmlFor="password">Password</label>
            <input type="password" name="contrasenia" />
            <button onClick={handlerClick}>Iniciar Sesion </button>
          <Link to="/">
            <label>Landing</label>
          </Link>
          <Link to="/">
            <label>Olvide mi contraseña</label>
          </Link>
          <Link to="/">
            <label>Registrarte</label>
          </Link>
        <label>{Label}</label>
     </div>
  </form>
  </div>
</>
  );
}
export default FLogin;
