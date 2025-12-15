import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import Authors from "./components/home/popularAuthor/PopularAuthor";
import { Route, Routes } from "react-router";
import ContactInfo from "./components/checkout/checkout1/ContactInfo";
import Payment from "./components/checkout/checkout3/Payment";
import Shipping from "./components/checkout/checkout2/Shipping";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactInfo />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<Payment />} />
      {/* <Route path="" element={"a"} />
      <Route path="" element={"a"} />
      <Route path="" element={"a"} /> */}
    </Routes>
  );
};

export default Router;
