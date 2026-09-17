import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  // isAuthenticated gives you a boolen value
  const { isAuthenticated } = useSelector((state) => state.user);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
