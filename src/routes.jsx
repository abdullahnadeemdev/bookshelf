import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/books" element={<Products />} />
      {/* <Route path="" element={"a"} />
      <Route path="" element={"a"} />
      <Route path="" element={"a"} /> */}
    </Routes>
  );
};

export default Router;
