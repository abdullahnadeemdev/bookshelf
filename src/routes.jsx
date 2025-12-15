import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import Authors from "./components/home/popularAuthor/PopularAuthor";
import { Route, Routes, useLocation } from "react-router";
import ContactInfo from "./components/checkout/checkout1/ContactInfo";
import Payment from "./components/checkout/checkout3/Payment";
import Shipping from "./components/checkout/checkout2/Shipping";
import Index from "./components/checkout/checkout1/Index";
import ProductsDesc from "./pages/productDesc/Index";

const Router = () => {
  //   const { state } = useLocation();

  //   console.log("state in routesss", state);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Products />} />

      <Route path="/books/:title" element={<ProductsDesc />} />
      <Route path="/checkout" element={<Index />} />

      {/* <Route path="" element={"a"} />
      <Route path="" element={"a"} />
      <Route path="" element={"a"} /> */}
    </Routes>
  );
};

export default Router;
