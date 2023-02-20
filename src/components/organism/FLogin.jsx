import { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import AdminContext from "../../contexts/AdminContext";
import LogoLogin from "../../assets/img/LogoColor.png";

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
    const url = `http://localhost:3000/users/${userName}/${contrasenia}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
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
        setLabel("Error en la conexión con el servidor");
      });
  };

  return (
    <form ref={formDataL}>
      <div>
        <img className="LogosGeneric" src={LogoLogin} alt="" />
      </div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="text" name="nombreDeUsuario" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
      </div>
      <div>
        <input type="password" name="contrasenia" />
      </div>

      <div>
        <button onClick={handlerClick}>Iniciar Sesion </button>
        <Link to="/">
          <button>Landing</button>
        </Link>
      </div>
      <label>{Label}</label>
    </form>
  );
}
export default FLogin;
