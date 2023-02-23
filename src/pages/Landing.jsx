
import RecuerdosParaSiempre from "../components/molecules/RecuerdosParaSiempre";
import CarruselImagenes from "../components/molecules/CarruselImagenes";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import Main from "../components/organism/Main";
import Slider from "../components/atoms/Slider";

function Landing() {
  const mockImagenes = [
		'https://picsum.photos/id/1020/400',
		'https://picsum.photos/id/1025/400',
		'https://picsum.photos/id/1010/400',
	];
  return (
    <>
    <Header></Header>
    <Main/>
    <Slider imagenes={mockImagenes}/>
    <RecuerdosParaSiempre></RecuerdosParaSiempre>
    <Footer></Footer>
</>
  );
}
export default Landing;
