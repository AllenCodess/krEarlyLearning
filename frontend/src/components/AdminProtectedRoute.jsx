import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

const AdminProtectedRoute = () => {
  const { role } = useSelector((state) => state.user);

  return role === "admin" ? <Outlet /> : <Navigate to="/parentportal" replace />;
};

export default AdminProtectedRoute;
