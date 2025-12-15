import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import Authors from "./components/home/popularAuthor/PopularAuthor";
import { Outlet, Route, Routes, useLocation } from "react-router";
// import ContactInfo from "./components/checkout/checkout1/ContactInfo";
// import Payment from "./components/checkout/checkout3/Payment";
import {
  ContactInfo,
  Shipping,
  Payment,
} from "./components/checkout/checkout1/Index";
// import {  } from "./components/checkout/checkout1/Index";
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
      <Route path="checkout">
        <Route index element={<Index />} />
        <Route path="contact" element={<ContactInfo />} />
        <Route path="shipping" element={<Shipping />} />
        <Route
          path="payment"
          element={
            <Index>
              <Payment />{" "}
            </Index>
          }
        />
      </Route>

      {/* <Route path="" element={"a"} />
      <Route path="" element={"a"} />
      <Route path="" element={"a"} /> */}
    </Routes>
  );
};

export default Router;
