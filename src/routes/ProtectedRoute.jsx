import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const user = useSelector((state) => state?.auth?.user) || null;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
