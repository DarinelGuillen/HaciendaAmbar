import Header from "../components/molecules/Header"
import Banner from "../components/atoms/Banner";
import GroupCard from "../components/atoms/GroupCard";
import History from "../components/atoms/History";
import FormContactUs from "../components/atoms/FormContactUs";
import Carrusel from "../components/atoms/Carrusel";
import AcercaDeNosotros from "../components/molecules/AcercaDeNosotros";

// import TipodeReservaView from "../components/molecules/TipodeReservaView";

function CommonUser() {
    return (  
        <>
        <Header/>
        <Carrusel></Carrusel>
        <Banner></Banner>
        <GroupCard></GroupCard>
        <History></History>
        <AcercaDeNosotros/>
        <FormContactUs></FormContactUs>
        </>
    );
}

export default CommonUser;