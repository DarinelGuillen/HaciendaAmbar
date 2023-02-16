import { Outlet, Navigate } from "react-router-dom";

function ProtectedParentRoute({isLoged}){
    return(
        isLoged?(<Outlet/>):(<Navigate to="/"></Navigate>)
        );
}
export default ProtectedParentRoute;