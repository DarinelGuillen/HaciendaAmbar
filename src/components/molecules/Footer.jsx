import { Link } from "react-router-dom";
import iconoFooter from "../../assets/img/logoBlancoNegro.svg"
import iconoRedes from "../../assets/img/IconoRedes.svg"
import Icon from "../atoms/Icon"
import Label from "../atoms/Label"
import "../../assets/style/Footer.css"

function Footer() {
  return (
    <>
    <div className="Footer">
      <div className="iconoFooter">
          <Icon icon={iconoFooter}/>  
          <Label label={"Recuerdos para siempre"}/>
      </div>
      <div className="informacion">
        <Label label={"Empresa"}/>
        <Label label={"Acerca de"}/>
        <Label label={"Empleo"}/>
      </div>
      <div className="enlaces">
        <Label label={"Enlaces útiles "}/>
        <Label label={"Ayuda"}/>
        <Label label={"Redes sociales"}/>
      </div>
      <div className="redesFooter">
          <Icon icon={iconoRedes}/>
          <Label label={"© 2022 Hacienda Ambar"}/>
      </div>
    </div>
    </>
  );
}
export default Footer;
