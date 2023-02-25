import { Outlet, Navigate } from "react-router-dom";

function ProtectedParentRoute({ isLoggedIn }) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/Login"></Navigate>;
}
export default ProtectedParentRoute;
