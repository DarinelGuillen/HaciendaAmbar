import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoLogin from "../../assets/img/LogoColor.png";
import "../../assets/style/FSingln.css";
import Label from "../atoms/Label";
function FSingIn() {
  const formSingIn = useRef();

  const handlerClick = (e) => {
    e.preventDefault();
    //console.log("handlerClick called");
    const formData = new FormData(formSingIn.current);
    const URI = "https://localhost/users";
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
        //console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        //console.log("Data:", data);
        // alert(JSON.stringify(data));
      })
      .catch((error) => {
        //console.log("Error:", error);
      });
  };

  return (
    <>
      <form ref={formSingIn}>
        <div className="imgRegister">
          <img
            loading="lazy"
            className="LogosGeneric"
            src="src/assets/img/imgRegister.png"
          ></img>
        </div>
        <div className="ordenamiento">
          <div className="labelTitulo">
            <Label label={"Regístrate ahora"}></Label>
          </div>

          <label htmlFor="nombreDeUsuario" className="labelNombreUsuario">
            Nombre de usuario
          </label>
          <input
            type="text"
            name="nombreDeUsuario"
            className="inputNombreUsario"
            required
          />
          <label htmlFor="nombreCompleto" className="labelNombreCompleto">
            Nombre completo
          </label>
          <input
            type="text"
            name="nombreCompleto"
            className="inputNombreCompleto"
          />
          <label htmlFor="numTel" className="labelNumeroTel">
            Número de teléfono
          </label>
          <input type="text" name="numTel" className="inputNumeroTel" />
          <label htmlFor="edad" className="labelEdad">
            Edad
          </label>
          <input type="text" name="edad" className="inputEdad" required />
          <label htmlFor="correo" className="labelCorreo">
            Correo electrónico
          </label>
          <input type="email" name="correo" className="inputCorreo" required />
          <label htmlFor="password" className="labelPassword">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="inputPassword"
            required
          />
          <button className="botonRegister" onClick={handlerClick}>
            Registrate
          </button>
          
            <Link to="/Login">
              <label className="linksForms">Iniciar sesión</label>
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
    </>
  );
}

export default FSingIn;
