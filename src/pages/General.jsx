import { Link } from "react-router-dom";
import { useRef } from "react";
import FLogin from "../components/organism/FLogin";
import "../assets/style/style.css";
function TESTPAGE() {
    const formL = useRef();

  return (
    <>
          <FLogin />
    </>
  );
}
export default TESTPAGE;
