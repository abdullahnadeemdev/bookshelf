import Layout from "./layout/Layout";
import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import ProductDesc from "./pages/productDesc/Index";
import Checkout from "./pages/checkout/Index";
import Router from "./routes";

function App() {
  return (
    <Layout>
      <div className="">
        <Router />\
      </div>
    </Layout>
  );
}

export default App;
