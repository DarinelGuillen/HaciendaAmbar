import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoLogin from "../../assets/img/LogoColor.png";
import "../../assets/style/FSingln.css";
import Label from "../atoms/Label";
function FSingIn() {
  const formSingIn = useRef();

  const handlerClick = (e) => {
    e.preventDefault();
    console.log("handlerClick called");
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
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data:", data);
    alert(JSON.stringify(data));
  })
  .catch((error) => {
    console.log("Error:", error);
  });
  };

  return (
    <>
      <center>
        <div className="contenedorLogincito ">
          <section className="contact-box">
            <div className="row no-gutters">
              <div className="col-xl-7 col-lg-12 d-flex">
                <div className="container align-self-center p-6 sombrita">
                  <h1 className="font-weight-bold mb-3 ">Inicio de sesión</h1>
                  <p className="text-muted mb-5">Ingresa la siguiente información para inicio de sesión</p>        
                    <form ref={formSingIn}>
                      <div className="form-group mb-3">
                          <label className="font-weight-bold labelLogin" htmlFor="nombreDeUsuario">Nombre de usuario</label>
                          <input type="text" className="form-control" name="nombreDeUsuario" placeholder="Ingresa tu nombre de usuario" required/>
                      </div>
                      <div className="form-group mb-3">
                          <label className="font-weight-bold labelLogin" htmlFor="nombreCompleto">Nombre completo </label>
                          <input type="text" className="form-control" name="nombreCompleto" placeholder="Ingresa tu nombre completo"/>
                      </div>
                      <div className="form-group mb-3">
                          <label className="font-weight-bold labelLogin" htmlFor="numTel">Número de teléfono</label>
                          <input type="number" className="form-control" name="numTel" placeholder="Ingresa tu número de teléfono"/>
                      </div>
                      <div className="form-group mb-3">
                          <label className="font-weight-bold labelLogin" htmlFor="edad">Edad</label>
                          <input type="number" className="form-control" name="edad" placeholder="Ingresa tu edad" required/>
                      </div>
                      <div className="form-group mb-3">
                          <label className="font-weight-bold labelLogin" htmlFor="correo">Correo eléctronico</label>
                          <input type="email" className="form-control" name="correo" placeholder="Ingresa tu norreo eléctronico" required/>
                      </div>
                      <div className="form-group mb-3">
                          <label className="font-weight-bold labelLogin" htmlFor="password">Contraseña </label>
                          <input type="password" className="form-control" name="password" placeholder="Ingresa tu contraseña" required/>
                      </div>
                      <button className="btn btn-primary width-100" onClick={handlerClick}>Regístrate</button>
                      <div className="padreLinks">
                        <div>
                          <Link to="/Login">
                            <label className="linksForms">Iniciar sesión</label>
                          </Link>
                        </div>
                        <div>
                          <Link to="/">
                            <label className="linksForms">Regresar</label>
                          </Link>
                        </div>
                        <div className="container clasesRedes">
                          <div className="row">
                            <div className="col">
                              <a href="tel:529613668435"><img src="src/assets/img/WhatsAppicono.png"  alt="..."/></a>
                            </div>
                            <div className="col">
                              <a href="https://www.instagram.com/ambar.haciendamx/"><img src="src/assets/img/Instagramicono.png" /></a>
                            </div>
                            <div className="col">
                              <a href="https://www.facebook.com/ambar.haciendamx"><img src="src/assets/img/Facebookicono.png" alt="..."/></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    </div>
                  </div>
                <div className="col-xl-5 col-lg-12 register-bg">    
              </div>
            </div>
          </section>
        </div>
      </center>
    </>
  );
}

export default FSingIn;
