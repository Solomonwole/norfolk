import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectRoutes = () => {
  const isLogged = localStorage.getItem("isLogged");
  const location = useLocation();

  return isLogged !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};

export default ProtectRoutes;
