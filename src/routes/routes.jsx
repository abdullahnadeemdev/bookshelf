import Home from "../pages/Home/Index";
import Products from "../pages/Products/index";
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
import { useDispatch, useSelector } from "react-redux";

const Router = (props) => {
  const user = useSelector((state) => state?.auth?.user) || null;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
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

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
