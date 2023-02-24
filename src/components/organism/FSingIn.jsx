import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LogoLogin from "../../assets/img/LogoColor.png";
import "../../assets/style/FSingln.css";
import Label from "../atoms/Label";
function FSingIn() {
  const formSingIn = useRef();

  const handlerClick = (e) => {
    e.preventDefault();
    console.log("handlerClick called");
    const formData = new FormData(formSingIn.current);
    const URI = "http://localhost:3000/users";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        admin: false,
        nombreDeUsuario: formData.get("nombreDeUsuario"),
        nombreCompleto: formData.get("nombreCompleto"),
        numTel: formData.get("numTel"),
        edad: formData.get("edad"),
        correo: formData.get("correo"),
        password: formData.get("password"),
      }),
    };

    fetch(URI, options)
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        // alert(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <>
      <form ref={formSingIn}>
        <div className="divPadre">
          <div className="imgRegister">
            <img src="src/assets/img/imagenRegister.png"></img>
          </div>
          <div className="formRegister">
            <div className="registrarteAhora">
              <Label label={"Regístrate ahora"}></Label>
            </div>
            <label htmlFor="nombreDeUsuario" className="labelNombreUsuario">
              Nombre de usuario
            </label>
          </div>
          <div>
            <input
              type="text"
              name="nombreDeUsuario"
              className="inputNombreUsario"
              required
            />
          </div>
          <div>
            <label htmlFor="nombreCompleto" className="labelNombreCompleto">
              Nombre completo
            </label>
          </div>
          <div>
            <input
              type="text"
              name="nombreCompleto"
              className="inputNombreCompleto"
            />
          </div>
          <div>
            <label htmlFor="numTel" className="labelNumeroTel">
              Número de teléfono
            </label>
          </div>
          <div>
            <input type="text" name="numTel" className="inputNumeroTel" />
          </div>
          <div>
            <label htmlFor="edad" className="labelEdad">
              Edad
            </label>
          </div>
          <div>
            <input type="text" name="edad" className="inputEdad" required />
          </div>
          <div>
            <label htmlFor="correo" className="labelCorreo">
              Correo electrónico
            </label>
          </div>
          <div>
            <input
              type="email"
              name="correo"
              className="inputCorreo"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="labelPassword">
              Contraseña
            </label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="inputPassword"
              required
            />
          </div>
          <div>
            <button onClick={handlerClick} className="botonRegister">
              Registrate
            </button>
            <div className="iniciarSesionLink">
              <Label label={"Iniciar sesión"}></Label>
            </div>
            <div className="regresarLink">
              <Label label={"Regresar"}></Label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FSingIn;
