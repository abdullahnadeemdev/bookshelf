import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const GuestRoute = () => {
  let user = useSelector((state) => state?.auth?.user) || undefined;
  if (user === undefined) {
    user = { email: "guest" };
  }
  return !user.email ? <Outlet /> : <Navigate to="/" />;
};

export default GuestRoute;
