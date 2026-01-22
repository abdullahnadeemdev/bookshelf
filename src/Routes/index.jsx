import Home from "../pages/Home/Index";
import Products from "../pages/Products/Index";
import Bookmarks from "../pages/Bookmarks/Index";
import Cart from "../pages/CartPage/Index";
import Checkout from "../components/checkout/Index";
import ProductsDesc from "../pages/ProductDesc/Index";
import Login from "../pages/LoginPage/Login";
import SignUp from "../pages/SignUp/SignUp";
import UserPage from "../pages/UserPage/UserPage";
import AuthorsPopular from "../pages/AuthorPage/Index";
import { Route, Routes, Navigate } from "react-router";
import Thanks from "../pages/FinalPage/Index";
import ForgotP from "../pages/ForgotPassword/ForgotP";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

const index = () => {
  const user = useSelector((state) => state?.auth?.user) || null;
  console.log("user", user);
  // const user = "";

  const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/books", component: <Products /> },
    { path: "/books/:title", component: <ProductsDesc /> },
    { path: "/cart", component: <Cart /> },
    { path: "/bookmark", component: <Bookmarks /> },
    { path: "/authors-popular", component: <AuthorsPopular /> },
  ];

  const AuthRoutes = [
    { path: "/login", component: <Login /> },
    { path: "/sign-up", component: <SignUp /> },
    { path: "/forgot-password", component: <ForgotP /> },
  ];

  const protectedRoutes = [
    { path: "/checkout", component: <Checkout /> },
    { path: "/user-page", component: <UserPage /> },
    { path: "/thank-you", component: <Thanks /> },
  ];

  return (
    <Routes>
      <Route element={<GuestRoute />}>
        {AuthRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
      <Route>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>

      <Route element={<ProtectedRoute />}>
        {protectedRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default index;

{
  /* <Route path="/" element={<Home />} />
      <Route path="/books" element={<Products />} />
      <Route path="/books/:title" element={<ProductsDesc />} />
      <Route path="/forgot-password" element={<ForgotP />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/sign-up"
        element={!user ? <SignUp /> : <Navigate to="/" />}
      />

      <Route path="/bookmark" element={<Bookmarks />} />

      <Route path="/authors-popular" element={<AuthorsPopular />} />
      <Route
        path="/checkout"
        element={user ? <Checkout /> : <Navigate to="/login" />}
      />
      <Route
        path="/user-page"
        element={user ? <UserPage /> : <Navigate to="/login" />}
      />

      <Route
        path="/thank-you"
        element={user ? <Thanks /> : <Navigate to="/login" />}
      />

      <Route path="*" element={<Navigate to="/" />} /> */
}
