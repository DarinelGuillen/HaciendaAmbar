import {Link} from "react-router-dom" 
import { useRef } from "react";
import FLogin from "../components/atoms/FLogin";
import "../assets/style/style.css"
function Home(){
    const formL=useRef();

    return(
        <>
        <div className="Father">
            <div className="Child"> 
            <FLogin/>
            </div>
        </div>
        </>
    )
}
export default Home;