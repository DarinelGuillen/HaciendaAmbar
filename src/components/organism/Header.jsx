import { Link } from "react-router-dom";

import "../../assets/style/Header.css"
function Header() {  
    return (
      <>

      <h1 id="H1H">PRUEBA HEADER ORGANISM</h1>
        <Link to="/Login">
          Iniciar sesión
        </Link>
        <h1>D</h1>
        <Link to="/General">
          General
        </Link>
      </>
    );
  }
  export default Header;
  