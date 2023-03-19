import MyAccountView from "../components/organism/MyAccountView";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";

function MyAccount() {
    return (
        <>
        <Header></Header>
        <MyAccountView/>
        <Footer></Footer>
        </>
      );
}

export default MyAccount;