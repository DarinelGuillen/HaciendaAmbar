import Header from "../components/molecules/Header"
import Footer from "../components/molecules/Footer"
// import TipodeReservaView from "../components/molecules/TipodeReservaView";

import RecuerdosParaSiempre from "../components/molecules/RecuerdosParaSiempre";
import ListPaquetes from "../components/molecules/ListPaquetes";
import Slider from "../components/atoms/Slider";
function CommonUser() {
    return (  
        <>
        <Header/>
        <Slider/>
        <ListPaquetes/>
        <RecuerdosParaSiempre/>
        <Footer/>
        </>
    );
}

export default CommonUser;