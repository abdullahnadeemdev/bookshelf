import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const GuestRoute = () => {
  const user = useSelector((state) => state?.auth?.user) || null;
  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default GuestRoute;
