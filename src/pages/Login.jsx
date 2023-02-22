import { Link } from "react-router-dom";
import { useRef } from "react";
import FLogin from "../components/organism/FLogin";
import "../assets/style/Flogin.css";

function Home() {
  const formL = useRef();

  return (
    <>
      
          <FLogin />

    </>
  );
}
export default Home;
