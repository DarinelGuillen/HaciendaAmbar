<<<<<<< HEAD
import RecuerdosParaSiempre from "../components/molecules/RecuerdosParaSiempre";
import CarruselImagenes from "../components/molecules/CarruselImagenes";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
function Landing() {
  return (
    <>
    <Header></Header>
    <CarruselImagenes></CarruselImagenes>
    <RecuerdosParaSiempre></RecuerdosParaSiempre>
    <Footer></Footer>
=======

import Footer from "../components/organism/Footer";
import Main from "../components/organism/Main";
import Header from "../components/organism/Header";
function Landing() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
>>>>>>> refs/remotes/origin/main
    </>
  );
}
export default Landing;
