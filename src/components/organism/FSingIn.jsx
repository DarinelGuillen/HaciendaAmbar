import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LogoLogin from "../../assets/img/LogoColor.png";

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
        admin:false,
        nombreDeUsuario: formData.get("nombreDeUsuario"),
        nombreCompleto: formData.get("nombreCompleto"),
        numTel: formData.get("numTel"),
        edad: formData.get("edad"),
        correo: formData.get("correo"),
        password: formData.get("password")
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
        <div>
          <img className="LogosGeneric" src={LogoLogin} alt="" />
        </div>
        <div>
          <h1>Registrate ahora</h1>
        </div>
        <div>
          <label htmlFor="nombreDeUsuario">Nombre de usuario</label>
        </div>
        <div>
          <input type="text" name="nombreDeUsuario" required />
        </div>
        <div>
          <label htmlFor="nombreCompleto">Nombre completo</label>
        </div>
        <div>
          <input type="text" name="nombreCompleto" />
        </div>
        <div>
          <label htmlFor="numTel">Número de teléfono</label>
        </div>
        <div>
          <input type="text" name="numTel" />
        </div>
        <div>
          <label htmlFor="edad">Edad</label>
        </div>
        <div>
          <input type="text" name="edad" required />
        </div>
        <div>
          <label htmlFor="correo">Correo electrónico</label>
        </div>
        <div>
          <input type="email" name="correo" required />
        </div>
        <div>
        <label htmlFor="password">Contraseña</label>
        </div>
        <div>
          <input type="password" name="password" required />
        </div>
        <div>
          <button onClick={handlerClick}>Registrate</button>
        </div>
      </form>
    </>
  );
}

export default FSingIn;
