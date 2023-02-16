import { useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoLogin from "../../assets/img/LogoColor.png";

function FLogin() {
  const formDataL = useRef();
  const navigate = useNavigate();
  const formL = useRef();
  const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataL.current);

    let URI = "http://localhost:3000/users/"; //default post

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
        console.log(JSON.stringify(MSN));
        // if (MSN.status) {
        //   alert("YOU EXIST")
        //   navigate("/Regist");
        // }
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
        <input type="text" name="usuario" />
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
