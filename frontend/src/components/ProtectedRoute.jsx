import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
