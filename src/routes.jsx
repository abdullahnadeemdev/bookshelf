import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import Bookmarks from "./pages/bookmarks/Index";
import Cart from "./pages/cartPage/Index";
import Index from "./components/checkout/checkout1/Index";
import ProductsDesc from "./pages/productDesc/Index";
import Login from "./pages/loginPage/Login";
import SignUp from "./pages/signUp/SignUp";
import UserPage from "./pages/userPage/userPage";
import AuthorsPopular from "./pages/authorPage/Index";
import { Route, Routes, Navigate } from "react-router";
import Thanks from "./pages/finalPage/Index";
import ForgotP from "./pages/forgotP/ForgotP";
import { useDispatch, useSelector } from "react-redux";

const Router = (props) => {
  const user = useSelector((state) => state?.auth?.user) || null;
  // console.log("user1", user);
  // console.log("isAuth", isAuth);

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
        element={user ? <Index /> : <Navigate to="/login" />}
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
