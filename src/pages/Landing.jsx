
import RecuerdosParaSiempre from "../components/molecules/RecuerdosParaSiempre";
import CarruselPaquetes from "../components/molecules/CarruselPaquetes";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import Slider from "../components/atoms/Slider";
import ListPaquetes from "../components/molecules/ListPaquetes";
import AcercaDeNosotros from "../components/molecules/AcercaDeNosotros";
function Landing() {
  const mockImagenes = [
		'../../../src/assets/img/slider1.jpeg','../../../src/assets/img/slider2.jpeg',
    '../../../src/assets/img/slider3.jpeg','../../../src/assets/img/slider4.jpeg'
	];
  return (
    <>
    <Header/>
    <Slider imagenes={mockImagenes}/>
    <RecuerdosParaSiempre/>
    <ListPaquetes/>
    <AcercaDeNosotros/>
    
    <Footer></Footer>
</>
  );
}
export default Landing;
