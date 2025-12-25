import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import Bookmarks from "./pages/bookmarks/Index";
import Cart from "./pages/cartPage/Index";
import Index from "./components/checkout/checkout1/Index";
import ProductsDesc from "./pages/productDesc/Index";
import Login from "./components/container/LoginContainer";
import SignUp from "./pages/signUp/SignUp";
import AuthorsPopular from "./pages/authorPage/Index";
import { Route, Routes, Navigate } from "react-router";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const Router = (props) => {
  const isAuth = props.data;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Products />} />
      <Route path="/books/:title" element={<ProductsDesc />} />

      <Route
        path="/login"
        element={!isAuth ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/sign-up"
        element={!isAuth ? <SignUp /> : <Navigate to="/" />}
      />

      <Route
        path="/bookmark"
        element={isAuth ? <Bookmarks /> : <Navigate to="/login" />}
      />

      <Route
        path="/authorsPopular"
        element={isAuth ? <AuthorsPopular /> : <Navigate to="/login" />}
      />
      <Route
        path="/checkout"
        element={isAuth ? <Index /> : <Navigate to="/login" />}
      />
      <Route
        path="/cart"
        element={isAuth ? <Cart /> : <Navigate to="/login" />}
      />

      <Route path="*" element={<Navigate to="/" />} />
      {/* <Route path="*" element={<PageNotFound auth={isAuth} />} /> */}
    </Routes>
  );
};

export default Router;
