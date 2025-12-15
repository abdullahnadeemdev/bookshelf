import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import Authors from "./components/home/popularAuthor/PopularAuthor";
import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home">
        <Route index element={<Home />} />
        {/* <Route path=":author" element= {<Authors />} /> */}
        {/*  <Route path=":bestSeller" element={<Authors />} />
        <Route path=":recommendation" element={<Authors />} /> */}
      </Route>
      <Route path="/books" element={<Products />} />
      {/* <Route path="" element={"a"} />
      <Route path="" element={"a"} />
      <Route path="" element={"a"} /> */}
    </Routes>
  );
};

export default Router;
