import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "../pages/AboutUs";
import EndRent from "../pages/EndRent";
import TypesRents from "../pages/TypesRents";
import Admin from "../pages/Admin";
import CommonUser from "../pages/CommonUser";
import Contact from "../pages/Contact";
import General from "../pages/General";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import RentPackage from "../pages/RentPackage";
import SingIn from "../pages/SingIn";

import AdminContext from "../contexts/AdminContext";
import IdContex from "../contexts/IdContex";
import PaqueteContext from "../contexts/PaqueteContext";
import UserContext from "../contexts/UserContext";
import RentaDelUsuarioContext from "../contexts/RentaDelUsuarioContext"
import TipoRentaContext from "../contexts/TipoRentaContext";
import TokenContext from "../contexts/TokenContext";
import ViewContext from "../contexts/ViewContext";
/* import "bootstrap/dist/css/bootstrap.min.css"; */

import ProtectedParentRoute from "./ProtectedParentRoute";
import ProtectedParentRouteAdmin from "./ProtectedParentRouteAdmin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPaquete, setIsPaquete] = useState(false);
  const [isIduser, setIsiduser] = useState("");
  const [isRentaUsuario, setIsRentaUsuario] = useState("");
  const [isTipoRenta, setIsTipoRenta] = useState("");
  const [isToken, setIsToken] = useState("");
  const [IsViewContext, setIsViewContext] = useState(0);


  return (
    // Set up context providers
    <BrowserRouter>
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
          <PaqueteContext.Provider value={{ isPaquete, setIsPaquete }}>
            <IdContex.Provider value={{ isIduser, setIsiduser }}>
              <RentaDelUsuarioContext.Provider value={{ isRentaUsuario, setIsRentaUsuario}}>
              <TipoRentaContext.Provider value={{ isTipoRenta, setIsTipoRenta}}>
              <TokenContext.Provider value={{ isToken, setIsToken}}>
                <ViewContext.Provider value={{ IsViewContext, setIsViewContext}}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SingIn" element={<SingIn />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route element={<ProtectedParentRoute isLoggedIn={isLoggedIn} />}>
                  <Route path="/General" element={<General />} />
                  <Route path="/CommonUser" element={<CommonUser />} />
                  <Route path="/RentPackage" element={<RentPackage />} />
                  <Route path="/TypesRents" element={<TypesRents />} />
                  <Route path="/EndRent" element={<EndRent />} />
                  <Route path="/MyAccount" element={<MyAccount />} />
                </Route>
                <Route element={<ProtectedParentRouteAdmin isLoggedIn={isAdmin} />}>
                  <Route path="/Admin" element={<Admin />} />
                </Route>
              </Routes>
              </ViewContext.Provider>
                </TokenContext.Provider>
                </TipoRentaContext.Provider>
              </RentaDelUsuarioContext.Provider>
            </IdContex.Provider>
          </PaqueteContext.Provider>
        </AdminContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
