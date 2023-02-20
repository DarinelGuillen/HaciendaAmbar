import TestCuserView from "../components/molecules/TestCuserView";
import Header from "../components/molecules/Header"
import Footer from "../components/molecules/Footer"
import Main from "../components/organism/Main";
function CommonUser() {
    return (  
        <>
        <Header/>
        <Main/>
        <TestCuserView></TestCuserView>
        <Footer/>
        </>
    );
}

export default CommonUser;