import Header from "../components/molecules/Header";
import Carrusel from "../components/atoms/Carrusel";
import Banner from "../components/atoms/Banner";
import GroupCard from "../components/atoms/GroupCard";
import History from "../components/atoms/History";
import FormContactUs from "../components/atoms/FormContactUs";
import Footer from "../components/molecules/Footer";

function Landing() {
 
	
  return (
    <>
      <Header/>
      <Carrusel></Carrusel>
      <Banner></Banner>
      <GroupCard></GroupCard>
      <History></History>
      <FormContactUs></FormContactUs>
      <Footer></Footer>
    </>
  );
}
export default Landing;
