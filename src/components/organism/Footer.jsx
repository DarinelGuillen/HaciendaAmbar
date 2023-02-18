import { Link } from "react-router-dom";
import iconoFooter from "../../assets/img/iconoBlancoNegro.png"
import iconoRedes from "../../assets/img/iconoRedes.png"
import Icon from "../atoms/Icon"
import Label from "../atoms/Label"
import "../../assets/style/Footer.css"

function Footer() {
  return (
    <>
      <div className="formaFooter">
        <div className="iconFooter">
          <Icon icon={iconoFooter}/>
            <div className="labelFooterSlogan">
              <Label label={"Recuerdos para siempre"}/>
            </div>
        </div>
        <div className="iconRedes">
          <Icon icon={iconoRedes}/>
            <div className="labelFooter3">
              <Label label={"© 2022 Hacienda Ambar"}/>
            </div>
            <div className="labelFooterConjunto1">
              <Label label={"Empresa"}/>
              <Label label={"Acerca de"}/>
              <Label label={"Empleo"}/>
            </div>
            <div className="labelFooterConjunto2">
              <Label label={"Enlaces útiles "}/>
              <Label label={"Ayuda"}/>
              <Label label={"Redes sociales"}/>
            </div>
        </div>
      </div>
      
     
    </>
  );
}
export default Footer;
