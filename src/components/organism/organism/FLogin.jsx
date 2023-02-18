import { useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoLogin from "../../../assets/img/LogoColor.png"


function FLogin() {
  const formDataL = useRef();
  const navigate = useNavigate();
  const formL = useRef();
  const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataL.current);

    const userName = formData.get("nombreDeUsuario"); // replace with the desired user name
    const url = `http://52.70.194.247:3000/users/${userName}`;
    let password="123"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("DATA?\n", data);
        console.log("admin?",data.correo);
        password === formData.get("contrasenia") ? 
          (data.admin ? console.log("Bienvenido, admin") : console.log("Bienvenido, usuario regular")) 
          : alert("Contraseña incorrecta");
      })
      .catch(error => console.error("ERROR\n",error));
    /* let URI = "http://52.70.194.247:3000/users/"; //default post

    let options = {
      method: "GET",
      body: JSON.stringify({
        nombreDeUsuario: formData.get("nombreDeUsuario"),
      }),
    };

    fetch(URI)
      .then((response) => response.json())
      .then((MSN) => {
        console.log("MESSAGE",JSON.stringify(MSN));
          for (let i = 0; i < MSN.length; i++) {
            console.log("VUELTA", i);
            if (MSN.nombreDenombre[i]==formData.get("nombreDeUsuario")) {
              alert("YOU EXIST")
              //navigate("/Regist");
            }
          }
        
      }); */
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
    </form>
  );
}
export default FLogin;
