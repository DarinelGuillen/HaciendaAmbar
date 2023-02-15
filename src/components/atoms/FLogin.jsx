import { useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoLogin from "../../assets/img/3dfingerprint.png";

function FLogin() {
  const formDataL = useRef();
  const navigate=useNavigate()
  const formL = useRef();
  const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataL.current);

    let URI = "http://34.225.239.102/api/iniciar"; //default post

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuario: formData.get("usuario"),
        contrasenia: formData.get("contrasenia"),
      }),
    };

    fetch(URI, options)
      .then((response) => response.json())
      .then((MSN) => {
        
        if (MSN.status) {
          alert("YOU EXIST")
          navigate("/Regist");
        }
      });
  };

  return (
    <form ref={formDataL}>
      <div className="LittleBoxy">
        <img className="LogosGeneric" src={LogoLogin} alt="" />
      </div>
      <div className="LittleBoxy">
        <h1>Login</h1>
      </div>
      <div className="LittleBoxy">
        <label htmlFor="username">Username</label>
      </div>
      <div className="LittleBoxy">
        <input type="text" name="usuario" />
      </div>
      <div className="LittleBoxy">
        <label htmlFor="password">Password</label>
      </div>
      <div className="LittleBoxy">
        <input type="password" name="contrasenia" />
      </div>

      <div className="LittleBoxy">
        <button onClick={handlerClick}>Iniciar Sesion </button>
        <Link to="/Regist">
          <button>Registrar Algo</button>
        </Link>
        <Link to="/Registration">No tienes cuenta?, registrate</Link>
        <Link to="/RickAndMorty">
          <button> RickAndMorty</button>
        </Link>
      </div>
    </form>
  );
}
export default FLogin;
