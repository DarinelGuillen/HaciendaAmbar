
import RecuerdosParaSiempre from "../components/molecules/RecuerdosParaSiempre";
import CarruselImagenes from "../components/molecules/CarruselImagenes";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import Main from "../components/organism/Main";
function Landing() {
  return (
    <>
    <Header></Header>
    <Main/>
    <CarruselImagenes></CarruselImagenes>
    <RecuerdosParaSiempre></RecuerdosParaSiempre>
    <Footer></Footer>
</>
  );
}
export default Landing;
