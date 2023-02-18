import { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState, useContext} from 'react'

import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import AdminContext from "../../contexts/AdminContext"
import LogoLogin from "../../assets/img/LogoColor.png"


function FLogin() {
  const formDataL = useRef();
  const navigate = useNavigate();
  const formL = useRef();
  const {isLoged, setIsLoged} = useContext(UserContext)
  const {isAdmin, setIsAdmin} = useContext(AdminContext)
  const handlerClick = (e) => {
    let array= new Array
    e.preventDefault();
    console.log("TUE FLAS==",isAdmin,"=",isLoged);

    
    const formData = new FormData(formDataL.current);

    const userName = formData.get("nombreDeUsuario"); // replace with the desired user name
    const contrasenia = formData.get("contrasenia"); // replace with the desired user name
    const url = `http://52.70.194.247:3000/users/${userName}`;///${contrasenia}
    let password="123"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        array=data
        console.log("DATA?\n", data);
        data[0].nombreDeUsuario === formData.get("contrasenia") ? 
      setIsLoged(true)
          : alert("Contraseña incorrecta");
          
      })
      .catch(error => console.error("ERROR\n",error));
      setTimeout(() => {
        console.log("==", isAdmin, "=", isLoged);
      }, 2000);
      setIsAdmin(true)
      //(isAdmin)?Navigate("/Admin"):Navigate("/CommonUser")
      
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
