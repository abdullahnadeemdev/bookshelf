import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import Bookmarks from "./pages/bookmarks/Index";
import Cart from "./pages/cartPage/Index";
import { Route, Routes } from "react-router";

import Index from "./components/checkout/checkout1/Index";
import ProductsDesc from "./pages/productDesc/Index";
import Login from "./components/container/LoginContainer";
import SignUp from "./pages/signUp/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Products />} />
      <Route path="/bookmark" element={<Bookmarks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/books/:title" element={<ProductsDesc />} />
      <Route path="/checkout" element={<Index />}></Route>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
